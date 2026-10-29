-- Run this in the Supabase SQL editor for a new project.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  source text not null default 'get_started',
  created_at timestamptz not null default now()
);

create table if not exists public.demos (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  business_name text not null,
  phone text not null,
  business_type text not null,
  time_drain text,
  meeting_at timestamptz not null,
  status text not null default 'pending'
    check (status in ('pending', 'confirmed', 'cancelled')),
  created_at timestamptz not null default now()
);

-- The server uses the service role key, which bypasses RLS.
-- Enabling RLS with no policies keeps the anon key out of these tables.
alter table public.leads enable row level security;
alter table public.demos enable row level security;
