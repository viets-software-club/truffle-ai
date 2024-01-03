drop function if exists f_is_gthb_repo_bookmarked(githubRepoName text);
create or replace function f_is_gthb_repo_bookmarked(githubRepoName text)
  returns boolean
  as $$
declare
  isBookmarked boolean;
begin
  select exists (
    select 1 from gthb_repo
    inner join proj_repo on proj_repo.gthb_repo_id = gthb_repo.gthb_repo_id
    inner join proj_bookmark on proj_bookmark.proj_repo_id = proj_repo.proj_repo_id
    where gthb_repo.gthb_repo_name = githubRepoName
  ) into isBookmarked;
  return isBookmarked;
end;
$$
language plpgsql immutable;