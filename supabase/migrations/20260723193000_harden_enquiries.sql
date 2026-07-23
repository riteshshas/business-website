alter table public.enquiries
  add constraint enquiries_name_length_check
    check (char_length(btrim(name)) between 1 and 255) not valid,
  add constraint enquiries_phone_digits_check
    check (char_length(regexp_replace(phone, '[^0-9]', '', 'g')) between 7 and 15) not valid,
  add constraint enquiries_email_format_check
    check (email is null or (char_length(email) <= 320 and email ~* '^[^[:space:]@]+@[^[:space:]@]+[.][^[:space:]@]+$')) not valid,
  add constraint enquiries_service_length_check
    check (char_length(btrim(service)) between 1 and 100) not valid,
  add constraint enquiries_message_length_check
    check (char_length(btrim(message)) between 10 and 2000) not valid;

drop policy if exists "Anyone can submit an enquiry" on public.enquiries;
revoke all on table public.enquiries from anon, authenticated;
