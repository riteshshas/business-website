create table public.enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text,
  service text not null,
  message text not null,
  status text not null default 'new' check (status in ('new', 'in_progress', 'responded', 'closed')),
  created_at timestamptz not null default now()
);

comment on table public.enquiries is 'Contact enquiries submitted through the website.';

create index enquiries_status_created_at_idx
  on public.enquiries (status, created_at desc);

alter table public.enquiries enable row level security;

revoke all on table public.enquiries from anon, authenticated;
grant insert on table public.enquiries to anon, authenticated;

create policy "Anyone can submit an enquiry"
  on public.enquiries
  for insert
  to anon, authenticated
  with check (status = 'new');
