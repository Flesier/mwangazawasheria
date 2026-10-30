/*
# Update book_orders table for payment changes

## Changes
1. Remove 'digital' from order_type check constraint
2. Add payer_name column for payment tracking
*/

-- Remove the old check constraint and add new one without 'digital'
ALTER TABLE book_orders DROP CONSTRAINT IF EXISTS book_orders_order_type_check;
ALTER TABLE book_orders ADD CONSTRAINT book_orders_order_type_check CHECK (order_type IN ('physical', 'sponsor'));

-- Add payer_name column
ALTER TABLE book_orders ADD COLUMN IF NOT EXISTS payer_name text;
