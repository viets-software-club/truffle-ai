drop function if exists f_delete_proj_bookmark_on_proj_cat_by_title_and_gthb_repo_id(catTitle text, id bigint);
create or replace function f_delete_proj_bookmark_on_proj_cat_by_title_and_gthb_repo_id(catTitle text, id bigint)
  returns boolean
  as $$
declare
  resultId bigint;
begin
  delete from proj_cat_and_proj_bookmark
  where proj_cat_id in (
    select proj_cat.proj_cat_id from proj_cat
    inner join proj_cat_and_proj_bookmark on proj_cat_and_proj_bookmark.proj_cat_id = proj_cat.proj_cat_id
    inner join proj_bookmark on proj_bookmark.proj_bookmark_id = proj_cat_and_proj_bookmark.proj_bookmark_id
    inner join proj_repo on proj_repo.proj_repo_id = proj_bookmark.proj_repo_id
    inner join gthb_repo on gthb_repo.gthb_repo_id = proj_repo.gthb_repo_id
    inner join gthb_owner on gthb_owner.gthb_owner_id = gthb_owner.gthb_owner_id
    where proj_cat.title = catTitle and gthb_repo.gthb_repo_id = id 
  )
  returning proj_cat_id
  into resultId;

  if resultId is null then
    raise exception 'No bookmark on category deleted';
  end if;
  return true;
end;
$$
language plpgsql;