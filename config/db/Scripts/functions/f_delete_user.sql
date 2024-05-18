create or replace function f_delete_user()
returns boolean
language plpgsql
security definer
as $$
begin
  delete from auth.mfa_amr_claims where session_id in (select id from auth.sessions where user_id = auth.uid());
	delete from auth.users where id = auth.uid();
  delete from auth.sessions where user_id = auth.uid();
  delete from auth.refresh_tokens where user_id = auth.uid()::varchar;
  delete from auth.mfa_factors where user_id = auth.uid();
  delete from auth.identities where user_id = auth.uid();
  delete from auth.flow_state where auth.flow_state.user_id = auth.uid();
  delete from auth.audit_log_entries where 1 = 1;
  delete from public.proj_cat_and_proj_bookmark where proj_bookmark_id in (select proj_bookmark_id from public.proj_bookmark where auth_users_id = auth.uid());
  delete from public.proj_cat where auth_users_id = auth.uid();
  delete from public.proj_bookmark where auth_users_id = auth.uid();
  delete from public.user_api_key where auth_users_id = auth.uid();
  delete from public.user_admin where auth_users_id = auth.uid();

  return true;
end;
$$;