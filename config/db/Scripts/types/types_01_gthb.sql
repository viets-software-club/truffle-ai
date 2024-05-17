
create type t_ivals_gthb_owner as (
  gthb_owner_type d_gthb_owner_type,
  avatar_url text,
  gthb_owner_login text,
  gthb_owner_url text,
  repositories_total_count bigint
);
create type t_ivals_gthb_user as (
  bio text,
  bio_html text,
  company text,
  company_html text,
  created_at timestamp with time zone,
  email text,
  followers_total_count bigint,
  gthb_user_name text,
  twitter_username text,
  website_url text
);
create type t_ivals_gthb_org as (
  created_at timestamp with time zone,
  description_html text,
  email text,
  gthb_org_description text,
  gthb_org_name text,
  twitter_username text,
  website_url text
);
create type t_ivals_gthb_repo as (
  contributor_count bigint,
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
  stargazer_count bigint
);
create type t_ivals_gthb_star_hist as (
  amount bigint,
  gthb_star_hist_date timestamp with time zone
);
create type t_ivals_gthb_fork_hist as (
  amount bigint,
  gthb_fork_hist_date timestamp with time zone
);
create type t_ivals_gthb_lang as (
  color text,
  gthb_lang_name text
);
create type t_ivals_gthb_issue_hist as (
  amount bigint,
  gthb_issue_hist_date timestamp with time zone
);
create type t_f_insert_gthb_owner as (
  avatar_url text,
  gthb_org t_ivals_gthb_org,
  gthb_owner_type d_gthb_owner_type,
  gthb_owner_login text,
  gthb_owner_url text,
  gthb_user t_ivals_gthb_user,
  repositories_total_count bigint
);
create type t_f_insert_gthb_contr_owner as (
  avatar_url text,
  gthb_owner_login text,
  gthb_owner_url text,
  gthb_user t_ivals_gthb_user,
  repositories_total_count bigint
);
create type t_f_insert_gthb_contr as (
  contributions bigint,
  gthb_owner t_f_insert_gthb_contr_owner
);
create type t_ivals_gthb_repo_topic as (
  gthb_repo_topic_name text,
  stargazer_count bigint
);

create type t_f_insert_gthb_repo as (
  contributor_count bigint,
  created_at timestamp with time zone,
  fork_count bigint,
  gthb_fork_hists t_ivals_gthb_fork_hist [],
  gthb_issue_hists t_ivals_gthb_issue_hist [],
  gthb_langs t_ivals_gthb_lang[],
  gthb_owner t_f_insert_gthb_owner,
  gthb_repo_contrs t_f_insert_gthb_contr [],
  gthb_repo_description text,
  gthb_repo_name text,
  gthb_repo_topics t_ivals_gthb_repo_topic[],
  gthb_repo_url text,
  gthb_star_hists t_ivals_gthb_star_hist [],
  homepage_url text,
  is_in_organization boolean,
  issues_total_count bigint,
  pull_requests_total_count bigint,
  stargazer_count bigint
);