create or replace function f_delete_proj_bookmark_by_proj_repo_id(projRepoId bigint)
  returns VOID
  as $$
begin
  delete from proj_bookmark where proj_repo_id = projRepoId;
end;
$$
language plpgsql;