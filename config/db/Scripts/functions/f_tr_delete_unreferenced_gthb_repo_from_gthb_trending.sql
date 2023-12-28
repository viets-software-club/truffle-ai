create or replace function f_tr_delete_unreferenced_gthb_repo_from_gthb_trending() returns trigger as $$
begin
  delete from gthb_repo
  where not exists (
    select 1 from gthb_trending
    where gthb_trending.gthb_repo_id = old.gthb_repo_id
  )
  and
   not exists (
    select 1 from proj_bookmark inner join proj_repo on proj_bookmark.proj_repo_id = proj_repo.proj_repo_id
    where proj_repo.gthb_repo_id = old.gthb_repo_id
  );
  return null;
end;
$$ language plpgsql security definer;