create or replace function f_tr_delete_unreferenced_gthb_repo() returns trigger as $$
begin
  delete from gthb_repo
  where not exists (
    select 1 from proj_repo
    where proj_repo.gthb_repo_id = gthb_repo.gthb_repo_id
  );
  return null;
end;
$$ language plpgsql;