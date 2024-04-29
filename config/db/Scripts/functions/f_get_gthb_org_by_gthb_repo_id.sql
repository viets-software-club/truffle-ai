drop function if exists f_get_gthb_org_by_gthb_repo_id(gthb_repo_id_arg bigint);
create or replace function f_get_gthb_org_by_gthb_repo_id(gthb_repo_id_arg bigint)
  returns setof "gthb_org"
  as $$
begin
  return query select gthb_org.* from gthb_repo
  inner join gthb_owner on gthb_owner.gthb_owner_id = gthb_repo.gthb_owner_id
  inner join gthb_org on gthb_org.gthb_org_id = gthb_owner.gthb_owner_id
  where gthb_repo.gthb_repo_id = gthb_repo_id_arg;
end;
$$
language plpgsql immutable;