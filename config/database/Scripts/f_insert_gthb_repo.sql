create or replace function f_insert_gthb_repo(githubRepo t_f_insert_gthb_repo)
  returns integer
  as $$
declare
  ownerId bigint;
  repoId bigint;
  stars t_ivals_gthb_star_hist[] := githubRepo.gthb_star_histories;
  forks t_ivals_gthb_fork_hist[] := githubRepo.gthb_fork_histories;
  issues t_ivals_gthb_issue_hist[] := githubRepo.gthb_issue_histories;
begin


  ownerId := f_insert_gthb_owner(githubRepo.gthb_owner);

  insert into gthb_repo(created_at, gthb_repo_description, fork_count, homepage_url, is_in_organization, issues_total_count,
    gthb_repo_name, gthb_owner_id, pull_requests_total_count, gthb_repo_url, stargazer_count)
    values (githubRepo.created_at, githubRepo.gthb_repo_description, githubRepo.fork_count, githubRepo.homepage_url,
      githubRepo.is_in_organization, githubRepo.issues_total_count, githubRepo.gthb_repo_name, ownerId,
      githubRepo.pull_requests_total_count, githubRepo.gthb_repo_url, githubRepo.stargazer_count)
  on conflict (gthb_repo_name)
    do update set
      created_at = excluded.created_at, gthb_repo_description = excluded.gthb_repo_description, fork_count = excluded.fork_count,
	homepage_url = excluded.homepage_url, is_in_organization = excluded.is_in_organization, issues_total_count =
	excluded.issues_total_count, gthb_repo_name = excluded.gthb_repo_name, gthb_owner_id = excluded.gthb_owner_id,
	pull_requests_total_count = excluded.pull_requests_total_count, gthb_repo_url = excluded.gthb_repo_url, stargazer_count =
	excluded.stargazer_count
    returning
      gthb_repo_id into repoId;
  insert into gthb_star_hist(gthb_repo_id, star_date, amount)
  select
    repoId,
    star_date,
    amount
  from
    unnest(stars)
  on conflict (gthb_repo_id,
    star_date)
    do update set
      amount = excluded.amount;
  insert into gthb_fork_hist(gthb_repo_id, star_date, amount)
  select
    repoId,
    fork_date,
    amount
  from
    unnest(forks)
  on conflict (gthb_repo_id,
    fork_date)
    do update set
      amount = excluded.amount;
  insert into gthb_issue_hist(gthb_repo_id, star_date, amount)
  select
    repoId,
    issue_date,
    amount
  from
    unnest(issues)
  on conflict (gthb_repo_id,
    issue_date)
    do update set
      amount = excluded.amount;
  return repoId;
end;
$$
language plpgsql;
