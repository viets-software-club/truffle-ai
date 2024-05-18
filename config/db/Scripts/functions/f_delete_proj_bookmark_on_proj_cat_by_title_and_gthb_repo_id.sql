drop function if exists f_delete_proj_bookmark_on_proj_cat_by_title_and_gthb_repo_id(catTitle text, id bigint);
create or replace function f_delete_proj_bookmark_on_proj_cat_by_title_and_gthb_repo_id(catTitle text, id bigint)
  returns boolean
  as $$
declare
  resultId bigint;
  rowCount int;
begin
  delete from proj_cat_and_proj_bookmark
  where proj_bookmark_id in (
    select proj_cat_and_proj_bookmark.proj_bookmark_id from proj_cat_and_proj_bookmark
    inner join proj_cat on proj_cat.proj_cat_id = proj_cat_and_proj_bookmark.proj_cat_id
    inner join proj_bookmark on proj_bookmark.proj_bookmark_id = proj_cat_and_proj_bookmark.proj_bookmark_id
    inner join proj_repo on proj_repo.proj_repo_id = proj_bookmark.proj_repo_id
    inner join gthb_repo on gthb_repo.gthb_repo_id = proj_repo.gthb_repo_id
    inner join gthb_owner on gthb_owner.gthb_owner_id = gthb_owner.gthb_owner_id
    where proj_cat.title = catTitle and gthb_repo.gthb_repo_id = id and auth.uid() = proj_cat.auth_users_id
  );
 

  GET DIAGNOSTICS rowCount = ROW_COUNT;

  if rowCount = 0 then
    raise exception 'No bookmark on category deleted';
  end if;
  return true;
end;
$$
language plpgsql;