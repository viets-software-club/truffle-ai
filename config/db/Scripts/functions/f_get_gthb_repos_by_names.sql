drop type if exists t_f_get_gthb_repos_by_names_arg cascade;
create type t_f_get_gthb_repos_by_names_arg as (
  identifiers t_f_gthb_repo_identifier[]
);

drop function if exists f_get_gthb_repos_by_names(t_f_get_gthb_repos_by_names_arg);
create or replace function f_get_gthb_repos_by_names(repoIdentifiersArg t_f_get_gthb_repos_by_names_arg)
  returns setof "gthb_repo"
  as $$
begin
  return query select gthb_repo.* from gthb_repo
  inner join gthb_owner on gthb_owner.gthb_owner_id = gthb_repo.gthb_owner_id
  inner join proj_repo on proj_repo.gthb_repo_id = gthb_repo.gthb_repo_id
  inner join unnest(repoIdentifiersArg) repoIdentifier on gthb_owner.gthb_owner_login = repoIdentifier.gthb_owner_login and gthb_repo.gthb_repo_name = repoIdentifier.gthb_repo_name;
end;
$$
language plpgsql stable;