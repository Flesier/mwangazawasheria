/*
# Create membership applications and book orders tables

## Overview
Two tables for the Mwangaza wa Sheria website:
1. membership_applications — membership form submissions
2. book_orders — orders for The Defendant's Guide (physical, digital, sponsor)

Single-tenant public site, no auth. All policies allow anon + authenticated.

## New Tables

### membership_applications
- id (uuid PK)
- full_name (text, not null)
- email (text, not null)
- phone (text)
- id_number (text)
- county (text, not null)
- occupation (text)
- reason (text)
- commitment_oath (boolean, default false)
- status (text, default 'pending')
- created_at (timestamptz, default now())

### book_orders
- id (uuid PK)
- order_type (text: physical|digital|sponsor)
- full_name (text, not null)
- email (text, not null)
- phone (text)
- county (text)
- address (text)
- quantity (integer, default 1)
- sponsor_name (text)
- message (text)
- status (text, default 'pending')
- created_at (timestamptz, default now())

## Security
- RLS enabled on both tables.
- anon + authenticated CRUD (public no-auth site).
*/

CREATE TABLE IF NOT EXISTS membership_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  id_number text,
  county text NOT NULL,
  occupation text,
  reason text,
  commitment_oath boolean NOT NULL DEFAULT false,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE membership_applications ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_membership" ON membership_applications;
CREATE POLICY "anon_select_membership" ON membership_applications FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_membership" ON membership_applications;
CREATE POLICY "anon_insert_membership" ON membership_applications FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_membership" ON membership_applications;
CREATE POLICY "anon_update_membership" ON membership_applications FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_membership" ON membership_applications;
CREATE POLICY "anon_delete_membership" ON membership_applications FOR DELETE
  TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS book_orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_type text NOT NULL CHECK (order_type IN ('physical', 'digital', 'sponsor')),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  county text,
  address text,
  quantity integer NOT NULL DEFAULT 1,
  sponsor_name text,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE book_orders ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_book_orders" ON book_orders;
CREATE POLICY "anon_select_book_orders" ON book_orders FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_book_orders" ON book_orders;
CREATE POLICY "anon_insert_book_orders" ON book_orders FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_book_orders" ON book_orders;
CREATE POLICY "anon_update_book_orders" ON book_orders FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_book_orders" ON book_orders;
CREATE POLICY "anon_delete_book_orders" ON book_orders FOR DELETE
  TO anon, authenticated USING (true);

CREATE INDEX IF NOT EXISTS idx_membership_status ON membership_applications(status);
CREATE INDEX IF NOT EXISTS idx_orders_status ON book_orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_type ON book_orders(order_type);