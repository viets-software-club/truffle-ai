create type t_ivals_proj_classifier as (
  classifier text
);

create type t_f_insert_proj_repo_metadata as (
  algo_hn_eli5 text,
  repo_eli5 text
);

create type t_ivals_discord_invite as (
  discord_invite_code text,
  guild_id text,
  guild_name text,
  approximate_member_count bigint,
  expires_at timestamp with time zone
);

create type t_f_insert_proj_repo as (
  algo_hn_queries t_f_insert_algo_hn_query_with_stories_and_comments [],
  gthb_repo t_f_insert_gthb_repo,
  note text,
  proj_classifiers t_ivals_proj_classifier[],
  -- proj_repo_metadata t_f_insert_proj_repo_metadata,
  sbot_lin_companies t_ivals_sbot_lin_company[],
  sbot_lin_profiles t_ivals_sbot_lin_profile[],
  discord_invites t_ivals_discord_invite[],
  algo_hn_eli5 text,
  repo_eli5 text,
  twitter_eli5 text
);

create type t_f_insert_proj_bookmark_w_cats as (
  auth_users_id uuid,
  proj_cats text [],
  proj_repo t_f_insert_proj_repo
);