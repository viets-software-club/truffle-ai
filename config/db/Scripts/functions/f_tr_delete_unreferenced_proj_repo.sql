create or replace function f_tr_delete_unreferenced_proj_repo() returns trigger as $$
begin
  delete from proj_repo
  where not exists (
    select 1 from gthb_trending
    where gthb_trending.gthb_repo_id = proj_repo.gthb_repo_id
  )
  and
   not exists (
    select 1 from proj_bookmark
    where proj_bookmark.proj_repo_id = proj_repo.proj_repo_id
  );
  return null;
end;
$$ language plpgsql security definer;