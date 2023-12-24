drop table if exists github_owner cascade;
drop table if exists github_user cascade;
drop table if exists github_org cascade;
drop table if exists gthb_owner cascade;
drop table if exists gthb_user cascade;
drop table if exists gthb_org cascade;
drop table if exists gthb_lang cascade;
drop table if exists gthb_repo cascade;
drop table if exists gthb_repo_and_gthb_lang cascade;
drop table if exists gthb_repo_issue cascade;
drop table if exists gthb_repo_fork cascade;
drop table if exists gthb_star cascade;
drop table if exists gthb_star_hist cascade;
drop table if exists gthb_fork_hist cascade;
drop table if exists gthb_issue_hist cascade;
drop table if exists gthb_trending cascade;
drop table if exists proj_cat cascade;
drop table if exists user_whitelist cascade;
drop table if exists algo_hn_tag cascade;
drop table if exists algo_hn_query cascade;
drop table if exists algo_hn_story cascade;
drop table if exists algo_hn_comment cascade;
drop table if exists proj_repo_metadata cascade;
drop table if exists user_api_key cascade;
drop table if exists twitter_user cascade;
drop table if exists twitter_search cascade;
drop table if exists twitter_search_and_twitter_user cascade;
drop table if exists sbot_lin_keyword cascade;
drop table if exists sbot_lin_ps cascade;
drop table if exists sbot_lin_ps_upd cascade;
drop table if exists proj_repo cascade;
drop table if exists proj_bookmark cascade;
drop table if exists algo_hn_story_and_algo_hn_tag cascade;
drop table if exists algo_hn_comment_and_algo_hn_tag cascade;
drop table if exists proj_repo_and_algo_hn_query cascade;
drop table if exists proj_repo_and_sbot_lin_ps cascade;
drop table if exists proj_repo_and_twitter_search cascade;
drop table if exists user_admin cascade;
drop table if exists gthb_repo_contr cascade;
drop table if exists proj_cat_and_proj_bookmark cascade;
drop table if exists sbot_lin_profile cascade;
drop table if exists sbot_lin_company cascade;
drop table if exists sbot_lin_keyword cascade;
drop table if exists proj_repo_and_sbot_lin_keyword cascade;
drop table if exists pinned_proj_bookmark cascade;

drop domain if exists d_gthb_owner_type cascade;
drop domain if exists d_gthb_trending_date_range cascade;
drop type if exists t_ivals_gthb_owner cascade;
drop type if exists t_ivals_gthb_user cascade;
drop type if exists t_ivals_gthb_org cascade;
drop type if exists t_ivals_gthb_lang cascade;
drop type if exists t_ivals_gthb_repo cascade;
drop type if exists t_ivals_gthb_star_hist cascade;
drop type if exists t_ivals_gthb_fork_hist cascade;
drop type if exists t_ivals_gthb_issue_hist cascade;
drop type if exists t_f_insert_gthb_owner cascade;
drop type if exists t_f_insert_gthb_repo cascade;
drop type if exists t_ivals_gthb_repo_contr cascade;
drop type if exists t_f_insert_gthb_contr cascade;
drop type if exists t_f_insert_gthb_contr_owner cascade;
drop type if exists t_ivals_sbot_lin_company cascade;

drop type if exists t_ivals_sbot_lin_profile cascade;

drop type if exists t_f_insert_sbot_lin_keyword cascade;

drop type if exists t_ivals_algo_hn_tag cascade;

drop type if exists t_ivals_algo_hn_query cascade;

drop type if exists t_ivals_algo_hn_comment cascade;

drop type if exists t_ivals_algo_hn_story cascade;

drop type if exists t_f_insert_algo_hn_story cascade;

drop type if exists t_f_insert_algo_hn_comment cascade;

drop type if exists t_f_insert_algo_hn_query_with_stories_and_comments cascade;
drop type if exists t_f_insert_proj_repo_metadata cascade;
drop type if exists t_f_insert_proj_repo cascade;
drop type if exists t_f_insert_proj_bookmark_w_cats cascade;
drop type if exists t_f_insert_gthb_trending cascade;
