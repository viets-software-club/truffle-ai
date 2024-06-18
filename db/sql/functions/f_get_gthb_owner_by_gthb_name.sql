create or replace function f_get_gthb_owner_by_gthb_name(ownerLogin text, repoName text)
  returns setof "gthb_owner"
  as $$
begin
  return query select gthb_owner.* from gthb_repo
  inner join gthb_owner on gthb_owner.gthb_owner_id = gthb_repo.gthb_owner_id
  where gthb_owner.gthb_owner_login = ownerLogin and gthb_repo.gthb_repo_name = repoName;
end;
$$
language plpgsql stable;