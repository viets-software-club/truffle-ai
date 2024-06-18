create or replace function f_get_proj_repo_by_gthb_name(ownerLogin text, repoName text)
  returns setof "proj_repo"
  as $$
begin
  return query select proj_repo.* from gthb_repo
  inner join gthb_owner on gthb_owner.gthb_owner_id = gthb_repo.gthb_owner_id
  inner join proj_repo on proj_repo.gthb_repo_id = gthb_repo.gthb_repo_id
  where gthb_owner.gthb_owner_login = ownerLogin and gthb_repo.gthb_repo_name = repoName;
end;
$$
language plpgsql stable;
