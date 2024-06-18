create or replace function f_tr_delete_unreferenced_discord_invite() returns trigger 
as $$
begin
  delete from public.discord_invite
  where not exists (
    select 1 from public.proj_repo_and_discord_invite
    where discord_invite.discord_invite_id = proj_repo_and_discord_invite.discord_invite_id
  );
  return null;
end;
$$ language plpgsql security definer;