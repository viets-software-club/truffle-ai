drop function if exists f_list_bookmarked_gthb_repo();
create or replace function f_list_bookmarked_gthb_repo()
  returns setof "gthb_repo"
  as $$
begin
  return query select gthb_repo.gthb_repo_name, * from gthb_repo
  inner join gthb_owner on gthb_owner.gthb_owner_id = gthb_repo.gthb_owner_id
  inner join proj_repo on proj_repo.gthb_repo_id = gthb_repo.gthb_repo_id
  inner join proj_bookmark on proj_bookmark.proj_repo_id = proj_repo.proj_repo_id
  where auth.uid() = proj_bookmark.auth_users_id;
end;
$$
language plpgsql;

