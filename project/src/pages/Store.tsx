import { useState } from 'react';
import { BookOpen, Download, Heart, Truck, CheckCircle2, ShieldCheck, ArrowRight, X, Mail, Phone, MapPin, User, Sparkles } from 'lucide-react';
import { Link } from '@/lib/router';
import { IMAGES } from '@/lib/images';
import { getSupabase } from '@/lib/supabase';

type OrderType = 'physical' | 'digital' | 'sponsor';

const topics = ['Constitutional Framework', 'Bail & Bond', 'Criminal Trial Processes', 'Capital & Non-Capital Offences', 'Sexual Offences', 'ADR, Plea Bargaining & Diversion', 'Civil Litigation Procedures', 'Appeals & Revision Proceedings', 'Sample Legal Drafts'];

const options: { type: OrderType; icon: typeof BookOpen; title: string; description: string; price: string; cta: string }[] = [
  { type: 'physical', icon: Truck, title: 'Physical Copy', description: 'A durable, full-colour printed manual delivered to your door anywhere in Kenya.', price: 'KES XXX', cta: 'Buy Physical Copy' },
  { type: 'digital', icon: Download, title: 'Digital PDF Edition', description: 'Instant access to the complete guide, readable on your phone, tablet, or computer.', price: 'KES XXX', cta: 'Download Digital Edition' },
  { type: 'sponsor', icon: Heart, title: 'Sponsor a Copy', description: 'Put a copy in the hands of an incarcerated defendant or community paralegal.', price: 'KES XXX', cta: 'Sponsor a Copy' },
];

export default function Store() {
  const [selectedType, setSelectedType] = useState<OrderType | null>(null);
  const [selectedBookImage, setSelectedBookImage] = useState(IMAGES.bookCovers[0]);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <section className="relative bg-forest-gradient pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-15"><img src={IMAGES.bookLawScales} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-300/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="container-page relative z-10"><div className="max-w-3xl"><div className="section-eyebrow text-gold-300 mb-5"><BookOpen className="w-4 h-4" /> Mwangaza Publications</div><h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-white mb-6">The Defendant's Guide</h1><p className="text-lg sm:text-xl text-sand-100/80 leading-relaxed max-w-2xl">A Practical Legal Manual for Paralegals and Defendants — demystifying Kenyan law, one right at a time.</p></div></div>
      </section>

      <section className="py-24 bg-sand-50">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">
            <div className="lg:col-span-2 lg:sticky lg:top-28">
              <div className="relative max-w-sm mx-auto">
                <div className="aspect-[3/4] rounded-2xl bg-white shadow-2xl overflow-hidden relative">
                  <img src={selectedBookImage} alt="The Defendant's Guide book cover" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -inset-5 bg-gold-300/10 rounded-3xl -z-10 blur-2xl" />
              </div>
              <div className="grid grid-cols-5 gap-2 max-w-sm mx-auto mt-5">
                {IMAGES.bookCovers.map((image, index) => (
                  <button key={image} type="button" onClick={() => setSelectedBookImage(image)} className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${selectedBookImage === image ? 'border-gold-400 shadow-gold' : 'border-transparent opacity-70 hover:opacity-100'}`} aria-label={`View book image ${index + 1}`}>
                    <img src={image} alt={`Defendant's Guide preview ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
              <p className="text-center text-xs text-forest-800/50 mt-5">First edition · Kenya · 2026</p>
            </div>

            <div className="lg:col-span-3">
              <div className="section-eyebrow mb-4"><Sparkles className="w-4 h-4" /> The Essential Guide</div>
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-forest-950 mb-5">Knowledge is the first step toward a fair trial.</h2>
              <p className="text-lg text-forest-800/70 leading-relaxed mb-5">The Defendant's Guide is a comprehensive, practical resource designed to assist unrepresented defendants, paralegals, and vulnerable groups in understanding Kenyan criminal and civil law — and in securing the fair treatment every person deserves.</p>
              <p className="text-forest-800/70 leading-relaxed mb-8">Written by two former inmate-paralegals who know the justice system from the inside, this guide speaks in clear language about rights, procedures, and the steps anyone can take to make their voice heard.</p>

              <div className="bg-white rounded-2xl p-7 shadow-soft mb-10"><h3 className="text-xl font-serif font-semibold text-forest-900 mb-5">Inside the guide</h3><div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{topics.map((topic) => <div key={topic} className="flex items-start gap-2.5 text-sm text-forest-800/75"><CheckCircle2 className="w-4 h-4 text-forest-500 mt-0.5 shrink-0" />{topic}</div>)}</div></div>

              <h3 className="text-2xl font-serif font-semibold text-forest-950 mb-5">Choose how you would like to support legal empowerment</h3>
              <div className="space-y-4">{options.map((option) => <button key={option.type} onClick={() => { setSelectedType(option.type); setSubmitted(false); }} className="w-full text-left bg-white rounded-2xl p-5 sm:p-6 shadow-soft border-2 border-transparent hover:border-gold-300 hover:shadow-gold transition-all duration-300 group"><div className="flex items-center gap-4"><div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center shrink-0 group-hover:bg-gold-300 transition-colors"><option.icon className="w-6 h-6 text-gold-600 group-hover:text-forest-950" /></div><div className="flex-1"><div className="flex flex-wrap items-center gap-3"><h4 className="font-serif text-lg font-semibold text-forest-900">{option.title}</h4><span className="text-sm font-semibold text-gold-600">{option.price}</span></div><p className="text-sm text-forest-800/60 mt-1">{option.description}</p></div><ArrowRight className="w-5 h-5 text-forest-400 group-hover:text-gold-500 group-hover:translate-x-1 transition-all" /></div></button>)}</div>

              <div className="mt-8 flex items-start gap-3 p-5 rounded-2xl bg-gold-50 border border-gold-200"><ShieldCheck className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" /><p className="text-xs text-forest-800/70 leading-relaxed"><strong className="text-forest-900">Important:</strong> This book provides legal awareness and education. It is not a substitute for formal legal representation by a qualified advocate. For advice about your specific situation, please consult a licensed legal professional.</p></div>
            </div>
          </div>
        </div>
      </section>

      {selectedType && <OrderModal type={selectedType} submitted={submitted} onClose={() => setSelectedType(null)} onSubmitted={() => setSubmitted(true)} />}
    </div>
  );
}

function OrderModal({ type, submitted, onClose, onSubmitted }: { type: OrderType; submitted: boolean; onClose: () => void; onSubmitted: () => void }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const option = options.find((item) => item.type === type)!;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setLoading(true); setError('');
    const form = new FormData(event.currentTarget);
    try {
      const request = {
        order_type: type,
        full_name: String(form.get('full_name') || ''),
        email: String(form.get('email') || ''),
        phone: String(form.get('phone') || ''),
        county: String(form.get('county') || ''),
        address: String(form.get('address') || ''),
        quantity: Number(form.get('quantity') || 1),
        sponsor_name: String(form.get('sponsor_name') || ''),
        message: String(form.get('message') || ''),
      };
      const { error: submitError } = await getSupabase().functions.invoke('submit-book-order', { body: request });
      if (submitError) throw submitError;
      onSubmitted();
    } catch {
      setError('We could not submit your request right now. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  }

  return <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-forest-950/70 backdrop-blur-sm animate-fade-in" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}><div className="bg-sand-50 rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"><div className="sticky top-0 bg-sand-50/95 backdrop-blur-sm p-6 sm:p-8 pb-4 flex items-start justify-between border-b border-sand-200"><div><div className="section-eyebrow mb-2">{type === 'sponsor' ? 'Make an impact' : 'Reserve your copy'}</div><h2 className="text-2xl font-serif font-semibold text-forest-950">{option.title}</h2></div><button onClick={onClose} className="w-9 h-9 rounded-full bg-sand-200/60 flex items-center justify-center hover:bg-sand-300 transition-colors"><X className="w-5 h-5 text-forest-800" /></button></div>{submitted ? <div className="p-8 sm:p-12 text-center"><div className="w-16 h-16 rounded-full bg-forest-100 flex items-center justify-center mx-auto mb-5"><CheckCircle2 className="w-8 h-8 text-forest-600" /></div><h3 className="text-2xl font-serif font-semibold text-forest-950 mb-3">Thank you for your support</h3><p className="text-forest-800/70 leading-relaxed mb-7">We've received your request. Our team will contact you shortly with payment and delivery details.</p><button onClick={onClose} className="btn-primary">Close</button></div> : <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5"><div className="grid grid-cols-1 sm:grid-cols-2 gap-5"><Field name="full_name" label="Full name" icon={User} required /><Field name="email" type="email" label="Email address" icon={Mail} required /></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-5"><Field name="phone" label="Phone number" icon={Phone} required /><Field name="county" label="County" icon={MapPin} required /></div>{type === 'physical' && <><Field name="address" label="Delivery address" icon={MapPin} required /><Field name="quantity" type="number" label="Number of copies" icon={BookOpen} required /></>}{type === 'sponsor' && <><Field name="sponsor_name" label="Name for the sponsored copy (optional)" icon={Heart} /><Field name="quantity" type="number" label="Number of copies to sponsor" icon={BookOpen} required /></>}{type === 'digital' && <Field name="quantity" type="number" label="Number of copies" icon={BookOpen} required />}<div><label className="block text-xs font-semibold uppercase tracking-wider text-forest-800/70 mb-2">Message (optional)</label><textarea name="message" rows={3} className="w-full px-4 py-3 rounded-xl border border-sand-300 bg-white text-sm text-forest-950 outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-200 resize-none" placeholder="Anything you'd like us to know..." /></div>{error && <p className="text-sm text-red-700 bg-red-50 rounded-xl px-4 py-3">{error}</p>}<button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-60">{loading ? 'Submitting...' : option.cta} <ArrowRight className="w-4 h-4" /></button><p className="text-[11px] text-center text-forest-800/45">Your information is kept confidential and used only to process your request.</p></form>}</div></div>;
}

function Field({ name, label, type = 'text', icon: Icon, required = false }: { name: string; label: string; type?: string; icon: typeof User; required?: boolean }) {
  return <div><label htmlFor={name} className="block text-xs font-semibold uppercase tracking-wider text-forest-800/70 mb-2">{label}{required && <span className="text-gold-600"> *</span>}</label><div className="relative"><Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-forest-500" /><input id={name} name={name} type={type} required={required} min={type === 'number' ? 1 : undefined} className="w-full pl-10 pr-4 py-3 rounded-xl border border-sand-300 bg-white text-sm text-forest-950 outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-200" /></div></div>;
}
