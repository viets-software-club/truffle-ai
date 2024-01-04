create or replace function f_select_data_science()
  returns table(fork_count bigint, issues_total_count bigint, pull_requests_total_count bigint, stargazer_count bigint)
  as $$
begin
  return query select gthb_repo.fork_count, gthb_repo.issues_total_count, gthb_repo.pull_requests_total_count, gthb_repo.stargazer_count from proj_repo
  full outer join proj_bookmark on proj_repo.proj_repo_id = proj_bookmark.proj_repo_id
  full outer join proj_cat_and_proj_bookmark on proj_cat_and_proj_bookmark.proj_bookmark_id = proj_bookmark.proj_bookmark_id
  full outer join proj_cat on proj_cat.proj_cat_id = proj_cat_and_proj_bookmark.proj_cat_id
  full outer join gthb_repo on gthb_repo.gthb_repo_id = proj_repo.gthb_repo_id
  full outer join gthb_star_hist on gthb_star_hist.gthb_repo_id = gthb_repo.gthb_repo_id
  full outer join gthb_fork_hist on gthb_fork_hist.gthb_repo_id = gthb_repo.gthb_repo_id
  full outer join gthb_issue_hist on gthb_issue_hist.gthb_repo_id = gthb_repo.gthb_repo_id
  full outer join proj_repo_and_algo_hn_query on proj_repo_and_algo_hn_query.proj_repo_id = proj_repo.proj_repo_id
  full outer join algo_hn_query on algo_hn_query.algo_hn_query_id = proj_repo_and_algo_hn_query.algo_hn_query_id
  full outer join algo_hn_comment on algo_hn_comment.algo_hn_query_id = algo_hn_query.algo_hn_query_id
  full outer join algo_hn_story on algo_hn_story.algo_hn_query_id = algo_hn_query.algo_hn_query_id
  full outer join proj_repo_and_sbot_lin_company on proj_repo_and_sbot_lin_company.proj_repo_id = proj_repo.proj_repo_id
  full outer join proj_repo_and_sbot_lin_profile on proj_repo_and_sbot_lin_profile.proj_repo_id = proj_repo.proj_repo_id
  full outer join sbot_lin_company on sbot_lin_company.sbot_lin_company_id = proj_repo_and_sbot_lin_company.sbot_lin_company_id
  full outer join sbot_lin_profile on sbot_lin_profile.sbot_lin_profile_id = proj_repo_and_sbot_lin_profile.sbot_lin_profile_id
  full outer join proj_repo_metadata on proj_repo_metadata.proj_repo_id = proj_repo.proj_repo_id;
end;
$$
language plpgsql;

