drop function if exists f_delete_proj_bookmark_by_gthb_repo_name(text);
create or replace function f_delete_proj_bookmark_by_gthb_repo_name(githubRepoName text)
  returns boolean
  as $$
declare
  projRepoId bigint;
begin
  delete from proj_bookmark
  where proj_repo_id in (
    select proj_repo.proj_repo_id from proj_repo
    inner join gthb_repo on gthb_repo.gthb_repo_id = proj_repo.gthb_repo_id
    where gthb_repo.gthb_repo_name = githubRepoName and proj_repo.proj_repo_id = proj_bookmark.proj_repo_id
  )
  returning proj_repo_id
  into projRepoId;

  if projRepoId is null then
    raise exception 'No bookmark found for githubRepoName %', githubRepoName;
  end if;
  return projRepoId > 0;
end;
$$
language plpgsql;