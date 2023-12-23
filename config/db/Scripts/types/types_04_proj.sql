create type t_f_insert_proj_repo_metadata as (
  algo_hn_eli5 text,
  repo_eli5 text
);
create type t_f_insert_proj_repo as (
  algo_hn_queries t_f_insert_algo_hn_query_with_stories_and_comments [],
  gthb_repo t_f_insert_gthb_repo,
  note text,
  proj_repo_metadata t_f_insert_proj_repo_metadata,
  sbot_lin_keyword t_f_insert_sbot_lin_keyword
);
create type t_f_insert_proj_bookmark_w_cats as (
  auth_users_id uuid,
  proj_cats text [],
  proj_repo t_f_insert_proj_repo
);