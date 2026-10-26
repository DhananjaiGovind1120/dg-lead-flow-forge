-- Run once in the Supabase SQL editor on projects created before this change.
-- Stores which AI workflow the visitor chose when booking a demo.
alter table public.demos add column if not exists workflow text;
