create or replace function f_tr_insert_auto_generated_user_api_key()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.user_api_key (user_api_key, auth_users_id)
  values ((SELECT extensions.uuid_generate_v4()), new.id);
  return new;
end;
$$;