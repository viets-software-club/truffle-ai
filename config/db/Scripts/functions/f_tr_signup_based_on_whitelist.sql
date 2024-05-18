create or replace function f_tr_signup_based_on_whitelist()
returns trigger
language plpgsql
security definer
as $$
declare has_email boolean := FALSE;
begin
  select count(*) > 0 from public.user_whitelist where (kind = 'email' and user_whitelist_value = new.email) or (kind = 'domain' and user_whitelist_value = substring(new.email from position('@' in new.email) + 1)) into has_email;
 
  if has_email then
    return new;
  else
    raise exception 'Email not in whitelist';
  end if;
end;
$$;