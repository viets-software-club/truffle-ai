create type t_f_insert_proj_repo_metadata(
  proj_repo_id bigint,
  algo_hn_eli5 text,
  repo_eli5 text
)

create type t_f_insert_proj_repo(
  gthb_repo_id bigint,
  note text,
  proj_repo_metadata t_insert_project_repo_metadata,
  gthb_repo: t_insert_gthb_repo,
  algo_hn_queries: t_f_insert_algo_hn_queries,
  
)