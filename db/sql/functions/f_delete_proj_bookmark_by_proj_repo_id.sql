drop function if exists f_delete_proj_bookmark_by_proj_repo_id(bigint);
create or replace function f_delete_proj_bookmark_by_proj_repo_id(projRepoId bigint)
  returns INTEGER
  as $$
declare
  deletedId bigint := 0;
begin
  delete from proj_bookmark where proj_repo_id = projRepoId returning proj_repo_id into deletedId;
  if deletedId = 0 then
    raise exception 'No bookmark found for projRepoId %', projRepoId;
  end if;
  return deletedId;
end;
$$
language plpgsql;