create domain gthb_owner_type as text check (value in ('User', 'Organization'));

create type t_ivals_gthb_owner(
  gthb_owner_type gthb_owner_type,
  avatar_url text,
  gthb_owner_login text,
  gthb_owner_url text,
  repositories_total_count bigint
);

create type t_ivals_gthb_user(
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

create type t_ivals_gthb_org(
  created_at timestamp with time zone,
  gthb_org_description text,
  description_html text,
  email text,
  gthb_org_name text,
  twitter_username text,
  website_url text,
);

create type t_ivals_gthb_lang(
  color text,
  gthb_lang_name text
);

create type t_ivals_gthb_repo(
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

create type t_ivals_gthb_star_hist(
  star_date timestamp with time zone,
  amount bigintl
);

create type t_ivals_gthb_fork_hist(
  fork_date timestamp with time zone,
  amount bigint
);

create type t_ivals_gthb_issue_hist(
  issue_date timestamp with time zone,
  amount bigint
);

create type t_f_insert_gthb_owner(
  gthb_owner_type gthb_owner_type,
  avatar_url text,
  gthb_owner_login text,
  gthb_owner_url text,
  repositories_total_count bigint,
  gthb_user t_ivals_gthb_user,
  gthb_org t_ivals_gthb_org
);

create type t_f_insert_gthb_repo(
  created_at timestamp with time zone,
  gthb_repo_description text,
  fork_count bigint,
  homepage_url text,
  is_in_organization boolean,
  issues_total_count bigint,
  gthb_repo_name text,
  gthb_owner t_f_insert_gthb_owner,
  pull_requests_total_count bigint,
  gthb_repo_url text,
  stargazer_count bigint,
  gthb_star_histories t_ivals_gthb_star_hist[],
  gthb_issue_histories t_ivals_gthb_issue_hist[],
  gthb_fork_histories t_ivals_gthb_fork_hist[]
);