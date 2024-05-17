drop function if exists f_get_gthb_user_by_gthb_repo_id(gthb_repo_id_arg bigint);
create or replace function f_get_gthb_user_by_gthb_repo_id(gthb_repo_id_arg bigint)
  returns setof "gthb_user"
  as $$
begin
  return query select gthb_user.* from gthb_repo
  inner join gthb_owner on gthb_owner.gthb_owner_id = gthb_repo.gthb_owner_id
  inner join gthb_user on gthb_user.gthb_user_id = gthb_owner.gthb_owner_id
  where gthb_repo.gthb_repo_id = gthb_repo_id_arg;
end;
$$
language plpgsql stable;