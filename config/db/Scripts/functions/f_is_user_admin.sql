create or replace function f_is_user_admin() returns boolean as $$
declare
  _is_admin boolean;
begin
  select exists(select 1 from user_admin where auth_users_id = auth.uid()) into _is_admin;
  return _is_admin;
end
$$ language plpgsql stable;