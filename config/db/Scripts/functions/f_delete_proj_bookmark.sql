drop function if exists f_delete_proj_bookmark(bigint);
create or replace function f_delete_proj_bookmark(projBookmarkId bigint)
  returns INTEGER
  as $$
declare
  deletedId bigint := 0;
begin
  delete from proj_bookmark where proj_bookmark_id = projBookmarkId returning proj_bookmark_id into deletedId;
  if deletedId = 0 then
    raise exception 'No bookmark found for proj_bookmark_id %', projBookmarkId;
  end if;
  return deletedId;
end;
$$
language plpgsql;