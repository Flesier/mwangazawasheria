import { createClient } from 'npm:@supabase/supabase-js@2.57.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
);

const jsonHeaders = { ...corsHeaders, 'Content-Type': 'application/json' };

type BookOrder = {
  order_type: 'physical' | 'digital' | 'sponsor';
  full_name: string;
  email: string;
  phone: string;
  county: string;
  address: string;
  quantity: number;
  sponsor_name: string;
  message: string;
};

function isBookOrder(value: unknown): value is BookOrder {
  if (!value || typeof value !== 'object') return false;
  const order = value as Partial<BookOrder>;
  return (
    (order.order_type === 'physical' || order.order_type === 'digital' || order.order_type === 'sponsor') &&
    typeof order.full_name === 'string' &&
    typeof order.email === 'string' &&
    typeof order.phone === 'string' &&
    typeof order.county === 'string' &&
    typeof order.address === 'string' &&
    typeof order.quantity === 'number' &&
    Number.isInteger(order.quantity) &&
    order.quantity > 0 &&
    typeof order.sponsor_name === 'string' &&
    typeof order.message === 'string'
  );
}

function orderLabel(type: BookOrder['order_type']): string {
  return type === 'physical' ? 'Physical copy' : type === 'digital' ? 'Digital PDF edition' : 'Sponsored copy';
}

Deno.serve(async (request: Request) => {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: jsonHeaders });
  }

  try {
    const body: unknown = await request.json();
    if (!isBookOrder(body) || !body.full_name.trim() || !body.email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Please provide valid request details.' }), { status: 400, headers: jsonHeaders });
    }

    const { error: insertError } = await supabase.from('book_orders').insert(body);
    if (insertError) throw insertError;

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Mwangaza wa Sheria <info@mwangazawasheria.org>',
        to: ['info@mwangazawasheria.org'],
        reply_to: body.email,
        subject: `${orderLabel(body.order_type)} request from ${body.full_name}`,
        text: [
          `A new Defendant's Guide request was submitted.`,
          '',
          `Request type: ${orderLabel(body.order_type)}`,
          `Name: ${body.full_name}`,
          `Email: ${body.email}`,
          `Phone: ${body.phone}`,
          `County: ${body.county}`,
          `Quantity: ${body.quantity}`,
          body.address && `Delivery address: ${body.address}`,
          body.sponsor_name && `Sponsored copy name: ${body.sponsor_name}`,
          body.message && `Message: ${body.message}`,
        ].filter(Boolean).join('\n'),
      }),
    });

    if (!emailResponse.ok) {
      const resendError = await emailResponse.text();
      console.error('Resend rejected the notification:', resendError);
      return new Response(JSON.stringify({ error: 'The request was saved, but the email notification could not be delivered. Please verify the sending domain in Resend.' }), { status: 502, headers: jsonHeaders });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200, headers: jsonHeaders });
  } catch {
    return new Response(JSON.stringify({ error: 'We could not submit your request right now.' }), { status: 500, headers: jsonHeaders });
  }
});
