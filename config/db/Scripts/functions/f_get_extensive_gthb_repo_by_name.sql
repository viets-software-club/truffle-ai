drop type if exists t_result_f_get_gthb_repo_by_name cascade;

create type t_result_f_get_gthb_repo_by_name as (
  gthb_repo_id bigint,
  created_at timestamp with time zone,
  gthb_repo_description text,
  fork_count bigint,
  homepage_url text,
  is_in_organization boolean,
  issues_total_count bigint,
  gthb_repo_name text,
  gthb_owner_id bigint,
  pull_requests_total_count bigint,
  gthb_repo_url text,
  stargazer_count bigint,
  contributor_count bigint,
  forks_per_contributor bigint,
  issues_per_contributor bigint,
  stargazers_per_contributor bigint,
  pull_requests_per_contributor bigint,
  gthb_owner_type d_gthb_owner_type,
  avatar_url text,
  gthb_owner_login text,
  gthb_owner_url text,
  proj_repo_id bigint
);


drop function if exists f_get_extensive_gthb_repo_by_name(text, text);
create or replace function f_get_extensive_gthb_repo_by_name(ownerLogin text, repoName text)
  returns setof "t_result_f_get_gthb_repo_by_name"
  as $$
begin
  return query select gthb_repo.gthb_repo_id, gthb_repo.created_at, gthb_repo.gthb_repo_description, gthb_repo.fork_count, gthb_repo.homepage_url, gthb_repo.is_in_organization, gthb_repo.issues_total_count, gthb_repo.gthb_repo_name, gthb_repo.gthb_owner_id, gthb_repo.pull_requests_total_count, gthb_repo.gthb_repo_url, gthb_repo.stargazer_count, gthb_repo.contributor_count, gthb_repo.forks_per_contributor, gthb_repo.issues_per_contributor, gthb_repo.stargazers_per_contributor, gthb_repo.pull_requests_per_contributor, gthb_owner.gthb_owner_type, gthb_owner.avatar_url, gthb_owner.gthb_owner_login, gthb_owner.gthb_owner_url, proj_repo.proj_repo_id from gthb_repo
  inner join gthb_owner on gthb_owner.gthb_owner_id = gthb_repo.gthb_owner_id
  inner join proj_repo on proj_repo.gthb_repo_id = gthb_repo.gthb_repo_id
  where gthb_owner.gthb_owner_login = ownerLogin and gthb_repo.gthb_repo_name = repoName;
end;
$$
language plpgsql stable;