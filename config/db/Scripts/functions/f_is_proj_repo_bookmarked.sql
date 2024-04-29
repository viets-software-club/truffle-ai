create or replace function f_is_proj_repo_bookmarked(projRepoId bigint)
  returns boolean
  as $$
begin
  return exists(select 1 from proj_bookmark where proj_bookmark.proj_repo_id = projRepoId);
end;
$$
language plpgsql;

