create or replace function f_delete_user()
returns boolean
language plpgsql
as $$
begin
  delete from auth.mfa_amr_claims where session_id in (select id from auth.sessions where user_id = auth_uid());
	delete from auth.users where id = auth_uid();
  delete from auth.sessions where user_id = auth_uid();
  delete from auth.refresh_tokens where user_id = auth_uid()::varchar;
  delete from auth.mfa_factors where user_id = auth_uid();
  delete from auth.identities where user_id = auth_uid();
  delete from auth.flow_state where auth.flow_state.user_id = auth_uid();
  delete from auth.audit_log_entries;
  delete from proj_bookmark where auth_users_id = auth_uid();
  return true;
end;
$$;