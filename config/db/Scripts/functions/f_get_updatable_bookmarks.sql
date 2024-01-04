create or replace function f_get_updatable_bookmarks_wo_gthb_trending()
  returns table(gthb_repo_name bigint, gthb_owner_login bigint)
  as $$
begin
  return query select gthb_repo.gthb_repo_name, gthb_owner.gthb_owner_login from gthb_repo inner join proj_repo on proj_repo.gthb_repo_id = gthb_repo.gthb_repo_id inner join proj_bookmark on proj_bookmark.proj_repo_id = proj_repo.proj_repo_id inner join gthb_owner on gthb_owner.gthb_owner_id = gthb_repo.gthb_owner_id where not exists (
    select 1 from gthb_trending where gthb_trending.gthb_repo_id = gthb_repo.gthb_repo_id
  );
end;
$$
language plpgsql;

