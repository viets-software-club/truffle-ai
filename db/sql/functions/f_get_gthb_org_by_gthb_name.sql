create or replace function f_get_gthb_org_by_gthb_name(ownerLogin text, repoName text)
  returns setof "gthb_org"
  as $$
begin
  return query select gthb_org.* from gthb_repo
  inner join gthb_owner on gthb_owner.gthb_owner_id = gthb_repo.gthb_owner_id
  inner join gthb_org on gthb_org.gthb_org_id = gthb_owner.gthb_owner_id
  where gthb_owner.gthb_owner_login = ownerLogin and gthb_repo.gthb_repo_name = repoName;
end;
$$
language plpgsql stable;