drop function if exists f_tr_delete_unreferenced_gthb_owner() cascade;
create or replace function f_tr_delete_unreferenced_gthb_owner() returns trigger as $$
begin
  delete from gthb_owner
  where not exists (
    select 1 from gthb_repo
    where gthb_owner.gthb_owner_id = gthb_repo.gthb_owner_id
  ) and not exists (
    select 1 from gthb_repo_contr
    where gthb_owner.gthb_owner_id = gthb_repo_contr.gthb_owner_id
  );
  return null;
end;
$$ language plpgsql security definer;