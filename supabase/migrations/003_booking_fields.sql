-- Run once in the Supabase SQL editor on projects created before this change.
-- The booking form now asks for business name, business type and the main time drain.
alter table public.demos add column if not exists business_name text;
alter table public.demos add column if not exists business_type text;
alter table public.demos add column if not exists time_drain text;

-- Email and company are no longer collected on the booking form
alter table public.demos alter column email drop not null;
alter table public.demos alter column company drop not null;
