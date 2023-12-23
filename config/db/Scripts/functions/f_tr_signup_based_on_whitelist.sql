-- disables sign up for emails without @lafamiglia.vc ending
-- additionally if email is in 'allowed_users' table will also be allowed
create or replace function f_tr_signup_based_on_whitelist()
returns trigger
language plpgsql
as $$
declare has_email boolean := 0;
begin
  select count(*) > 0 from user_whitelist where email = new.email or right(new.email, length(new.email) - position('@' in new.email)) into has_email;
 
  if has_email then
    return new;
  else
    return null;
  end if;
end;
$$;