create or replace function f_tr_delete_unreferenced_sbot_lin_profile() returns trigger 
as $$
begin
  delete from public.sbot_lin_profile
  where not exists (
    select 1 from public.proj_repo_and_sbot_lin_profile
    where sbot_lin_profile.sbot_lin_profile_id = proj_repo_and_sbot_lin_profile.sbot_lin_profile_id
  );
  return null;
end;
$$ language plpgsql security definer;