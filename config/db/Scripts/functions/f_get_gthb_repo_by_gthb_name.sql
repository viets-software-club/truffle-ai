drop function if exists f_get_gthb_repo_by_gthb_name(text, text);
create or replace function f_get_gthb_repo_by_gthb_name(ownerLogin text, repoName text)
  returns setof "gthb_repo"
  as $$
begin
  return query select gthb_repo.* from gthb_repo
  inner join gthb_owner on gthb_owner.gthb_owner_id = gthb_repo.gthb_owner_id
  where gthb_owner.gthb_owner_login = ownerLogin and gthb_repo.gthb_repo_name = repoName;
end;
$$
language plpgsql stable;