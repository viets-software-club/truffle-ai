drop function f_delete_proj_bookmark(bigint);
create or replace function f_delete_proj_bookmark(projBookmarkId bigint)
  returns VOID
  as $$
begin
  delete from proj_bookmark where proj_bookmark_id = projBookmarkId;
end;
$$
language plpgsql;