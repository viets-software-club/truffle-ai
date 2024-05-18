create or replace function f_insert_user_admin_by_email(email_arg text)
returns boolean as $$
declare
  _auth_users_id uuid;
  _exists boolean;
begin 
  select auth_users_id into _auth_users_id from public.members_view where public.members_view.email = email_arg;

  if _auth_users_id is null then
    return false;
  end if;

  select exists(select 1 from user_admin where auth_users_id = _auth_users_id) into _exists;
  
  if _exists then
    --  user already admin
    return false;
  else
    insert into user_admin(auth_users_id) values (_auth_users_id);
    return true;
  end if;
end;
$$ language plpgsql volatile;