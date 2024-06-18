create or replace function f_list_gthb_repos_by_cat_title(cat_title_arg text)
  returns setof "gthb_repo"
  as $$
begin
  return query select gthb_repo.* from gthb_repo
  inner join proj_repo on proj_repo.gthb_repo_id = gthb_repo.gthb_repo_id
  inner join proj_bookmark on proj_bookmark.proj_repo_id = proj_repo.proj_repo_id
  inner join proj_cat_and_proj_bookmark on proj_cat_and_proj_bookmark.proj_bookmark_id = proj_bookmark.proj_bookmark_id
  inner join proj_cat on proj_cat.proj_cat_id = proj_cat_and_proj_bookmark.proj_cat_id
  where proj_cat.title = cat_title_arg and auth.uid() = proj_cat.auth_users_id;
end;
$$
language plpgsql stable;
