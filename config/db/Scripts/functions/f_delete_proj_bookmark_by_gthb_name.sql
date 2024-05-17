drop function if exists f_delete_proj_bookmark_by_gthb_name(ownerLogin text, repoName text);
create or replace function f_delete_proj_bookmark_by_gthb_name(ownerLogin text, repoName text)
  returns boolean
  as $$
declare
  projRepoId bigint;
begin
  delete from proj_bookmark
  where proj_repo_id in (
    select proj_repo.proj_repo_id from proj_repo
    inner join proj_bookmark on proj_bookmark.proj_repo_id = proj_bookmark.proj_repo_id
    inner join gthb_repo on gthb_repo.gthb_repo_id = proj_repo.gthb_repo_id
    inner join gthb_owner on gthb_owner.gthb_owner_id = gthb_owner.gthb_owner_id
    where gthb_repo.gthb_repo_name = repoName and gthb_owner.gthb_owner_login = ownerLogin
  )
  returning proj_repo_id
  into projRepoId;

  if projRepoId is null then
    raise exception 'No bookmark deleted';
  end if;
  return true;
end;
$$
language plpgsql;