create domain d_gthb_owner_type as text check (value in ('User', 'Organization'));
create domain d_gthb_trending_date_range as text check (value in ('today', 'week', 'month'));
create table public.gthb_owner(
  gthb_owner_id bigint generated by default as identity,
  gthb_owner_type d_gthb_owner_type not null,
  avatar_url text not null,
  gthb_owner_login text not null,
  gthb_owner_url text not null,
  repositories_total_count bigint not null,
  _created_at timestamp with time zone not null default now(),
  constraint gthb_owner_pkey primary key (gthb_owner_id),
  constraint gthb_owner_gthb_owner_login_uq unique (gthb_owner_login)
) tablespace pg_default;
create table public.gthb_user(
  gthb_user_id bigint not null,
  _created_at timestamp with time zone not null default now(),
  bio text not null,
  bio_html text not null,
  company text not null,
  company_html text not null,
  created_at timestamp with time zone not null,
  email text not null,
  followers_total_count bigint not null,
  gthb_user_name text not null,
  twitter_username text not null,
  website_url text not null,
  constraint gthb_user_pkey primary key (gthb_user_id),
  constraint gthb_user_gthb_user_id_fkey foreign key (gthb_user_id) references gthb_owner(gthb_owner_id) on delete cascade
) tablespace pg_default;
create table public.gthb_org(
  gthb_org_id bigint not null,
  _created_at timestamp with time zone not null default now(),
  created_at timestamp with time zone not null,
  gthb_org_description text not null,
  description_html text not null,
  email text not null,
  gthb_org_name text not null,
  twitter_username text not null,
  website_url text not null,
  constraint gthb_org_pkey primary key (gthb_org_id),
  constraint gthb_org_gthb_org_name_uq unique (gthb_org_name),
  constraint gthb_org_gthb_org_id_fkey foreign key (gthb_org_id) references gthb_owner(gthb_owner_id) on delete cascade
) tablespace pg_default;
create table public.gthb_lang(
  gthb_lang_id bigint generated by default as identity,
  _created_at timestamp with time zone not null default now(),
  color text not null,
  gthb_lang_name text not null,
  constraint gthb_lang_pkey primary key (gthb_lang_id),
  constraint gthb_lang_gthb_lang_name_uq unique (gthb_lang_name)
) tablespace pg_default;
create table public.gthb_repo(
  gthb_repo_id bigint generated by default as identity,
  _created_at timestamp with time zone not null default now(),
  created_at timestamp with time zone not null,
  gthb_repo_description text not null,
  fork_count bigint not null,
  homepage_url text not null,
  is_in_organization boolean not null,
  issues_total_count bigint not null,
  gthb_repo_name text not null,
  gthb_owner_id bigint not null,
  pull_requests_total_count bigint not null,
  gthb_repo_url text not null,
  stargazer_count bigint not null,
  constraint gthb_repo_pkey primary key (gthb_repo_id),
  constraint gthb_repo_gthb_owner_id_fkey foreign key (gthb_owner_id) references gthb_owner(gthb_owner_id) on delete cascade,
  constraint gthb_repo_fields_name_and_gthb_owner_id_uq unique (gthb_repo_name, gthb_owner_id),
  constraint gthb_repo_gthb_repo_name_uq unique (gthb_repo_name)
) tablespace pg_default;
create table public.gthb_repo_and_gthb_lang(
  gthb_repo_id bigint not null,
  gthb_lang_id bigint not null,
  _created_at timestamp with time zone not null default now(),
  constraint gthb_repo_language_pkey primary key (gthb_repo_id, gthb_lang_id),
  constraint gthb_repo_and_gthb_lang_gthb_repo_id_fkey foreign key (gthb_repo_id) references gthb_repo(gthb_repo_id) on delete cascade,
  constraint gthb_repo_and_gthb_lang_gthb_lang_id_fkey foreign key (gthb_lang_id) references gthb_lang(gthb_lang_id) on delete cascade,
  constraint gthb_repo_and_gthb_lang_gthb_repo_id_and_gthb_lang_id_uq unique(gthb_repo_id, gthb_lang_id)
) tablespace pg_default;
create table public.gthb_star_hist(
  gthb_star_hist_id bigint generated by default as identity,
  _created_at timestamp with time zone not null default now(),
  gthb_repo_id bigint not null,
  gthb_star_hist_date timestamp with time zone not null,
  amount bigint not null,
  constraint gthb_star_hist_pkey primary key (gthb_star_hist_id),
  constraint gthb_star_hist_gthb_repo_id_fkey foreign key (gthb_repo_id) references gthb_repo(gthb_repo_id) on delete cascade,
  constraint gthb_star_hist_gthb_star_hist_date_and_gthb_repo_id_uq unique (gthb_star_hist_date, gthb_repo_id)
) tablespace pg_default;
create table public.gthb_fork_hist(
  gthb_fork_hist_id bigint generated by default as identity,
  _created_at timestamp with time zone not null default now(),
  gthb_repo_id bigint not null,
  gthb_fork_hist_date timestamp with time zone not null,
  amount bigint not null,
  constraint gthb_fork_hist_pkey primary key (gthb_fork_hist_id),
  constraint gthb_fork_hist_gthb_repo_id_fkey foreign key (gthb_repo_id) references gthb_repo(gthb_repo_id) on delete cascade,
  constraint gthb_fork_hist_gthb_fork_hist_date_and_gthb_repo_id_uq unique (gthb_fork_hist_date, gthb_repo_id)
) tablespace pg_default;
create table public.gthb_issue_hist(
  gthb_issue_hist_id bigint generated by default as identity,
  _created_at timestamp with time zone not null default now(),
  gthb_repo_id bigint not null,
  gthb_issue_hist_date timestamp with time zone not null,
  amount bigint not null,
  constraint gthb_issue_hist_pkey primary key (gthb_issue_hist_id),
  constraint gthb_issue_hist_gthb_repo_id_fkey foreign key (gthb_repo_id) references gthb_repo(gthb_repo_id) on delete cascade,
  constraint gthb_issue_hist_gthb_issue_hist_date_and_gthb_repo_id_uq unique (gthb_issue_hist_date, gthb_repo_id)
) tablespace pg_default;
create table public.gthb_trending(
  gthb_trending_id bigint generated by default as identity,
  gthb_repo_id bigint not null,
  _created_at timestamp with time zone not null default now(),
  date_range d_gthb_trending_date_range not null,
  lang text null,
  constraint gthb_trending_pkey primary key (gthb_trending_id),
  constraint gthb_trending_gthb_repo_id_fkey foreign key (gthb_repo_id) references gthb_repo(gthb_repo_id) on delete cascade,
  constraint gthb_trending_gthb_repo_id_and_date_range_uq unique (gthb_repo_id, date_range)
) tablespace pg_default;
create table public.proj_cat(
  proj_cat_id bigint generated by default as identity,
  _created_at timestamp with time zone not null default now(),
  title text not null,
  auth_users_id uuid not null,
  constraint proj_cat_pkey primary key (proj_cat_id),
  constraint proj_cat_user_id_fkey foreign key (auth_users_id) references auth.users(id) on delete cascade,
  constraint proj_cat_title_and_auth_users_id_uq unique (title, auth_users_id)
) tablespace pg_default;
create table public.user_whitelist(
  user_whitelist_id bigint generated by default as identity not null,
  _created_at timestamp with time zone null default now(),
  kind text not null check (kind in ('email', 'domain')),
  user_whitelist_value text null,
  constraint user_whitelist_pkey primary key (user_whitelist_id),
  constraint user_whitelist_fields_kind_and_user_whitelist_value_uq unique (kind, user_whitelist_value)
) tablespace pg_default;
create table public.algo_hn_tag(
  algo_hn_tag_id bigint generated by default as identity,
  _created_at timestamp with time zone not null default now(),
  title text not null,
  constraint algo_hn_tag_pkey primary key (algo_hn_tag_id),
  constraint algo_hn_tag_title_uq unique (title)
) tablespace pg_default;
create table public.algo_hn_query(
  algo_hn_query_id bigint generated by default as identity,
  query text not null,
  _created_at timestamp with time zone not null default now(),
  constraint algo_hn_query_pkey primary key (algo_hn_query_id),
  constraint algo_hn_query_query_uq unique (query)
) tablespace pg_default;
create table public.algo_hn_story(
  algo_hn_story_id bigint generated by default as identity,
  _created_at timestamp with time zone not null default now(),
  author text not null,
  created_at timestamp with time zone not null,
  algo_hn_story_url text not null,
  algo_hn_story_object_id bigint not null,
  points bigint not null,
  algo_hn_query_id bigint not null,
  story_text text not null,
  title text not null,
  updated_at timestamp with time zone not null,
  constraint algo_hn_story_pkey primary key (algo_hn_story_id),
  constraint algo_hn_story_algo_hn_query_fkey foreign key (algo_hn_query_id) references algo_hn_query(algo_hn_query_id) on delete cascade,
  constraint algo_hn_story_algo_hn_story_url_uq unique (algo_hn_story_url),
  constraint algo_hn_story_algo_hn_story_object_id_uq unique (algo_hn_story_object_id)
) tablespace pg_default;
create table public.algo_hn_comment(
  algo_hn_comment_id bigint generated by default as identity,
  _created_at timestamp with time zone not null default now(),
  author text not null,
  algo_hn_comment_object_id bigint not null,
  algo_hn_query_id bigint not null,
  comment_text text not null,
  story_id bigint not null,
  story_title text not null,
  story_url text not null,
  created_at timestamp with time zone not null,
  updated_at timestamp with time zone not null,
  constraint algo_hn_comment_pkey primary key (algo_hn_comment_id),
  constraint algo_hn_comment_algo_hn_query_fkey foreign key (algo_hn_query_id) references algo_hn_query(algo_hn_query_id) on delete cascade,
  constraint algo_hn_comment_comment_text_uq unique (comment_text),
  constraint algo_hn_comment_algo_hn_comment_object_id_uq unique (algo_hn_comment_object_id)
) tablespace pg_default;
create table public.proj_repo(
  proj_repo_id bigint generated by default as identity,
  _created_at timestamp with time zone not null default now(),
  gthb_repo_id bigint not null,
  note text not null,
  constraint proj_repo_pkey primary key (proj_repo_id),
  constraint proj_repo_gthb_repo_id_fkey foreign key (gthb_repo_id) references gthb_repo(gthb_repo_id) on delete cascade,
  constraint proj_repo_gthb_repo_id_uq unique (gthb_repo_id)
) tablespace pg_default;
create table public.proj_repo_metadata(
  proj_repo_metadata_id bigint generated by default as identity,
  _created_at timestamp with time zone not null default now(),
  proj_repo_id bigint not null,
  algo_hn_eli5 text not null,
  repo_eli5 text not null,
  constraint proj_repo_metadata_pkey primary key (proj_repo_metadata_id),
  constraint proj_repo_metadata_proj_repo_id_fkey foreign key (proj_repo_id) references proj_repo(proj_repo_id) on delete cascade,
  constraint proj_repo_metadata_proj_repo_id_uq unique (proj_repo_id)
) tablespace pg_default;
create table public.user_api_key(
  user_api_key_id bigint generated by default as identity,
  _created_at timestamp with time zone not null default now(),
  user_api_key uuid not null,
  auth_users_id uuid not null,
  constraint user_api_key_pkey primary key (user_api_key_id),
  constraint user_api_key_user_id_fkey foreign key (auth_users_id) references auth.users(id) on delete cascade,
  constraint user_api_key_key_key unique (user_api_key),
  constraint user_api_key_user_id_uq unique (auth_users_id)
) tablespace pg_default;
create table public.sbot_lin_keyword(
  sbot_lin_keyword_id bigint generated by default as identity,
  keywords text not null,
  _created_at timestamp with time zone not null default now(),
  constraint sbot_lin_keywords_pkey primary key (sbot_lin_keyword_id),
  constraint lin_keywords_uq unique (keywords)
) tablespace pg_default;
create table public.proj_repo_and_sbot_lin_keyword(
  proj_repo_id bigint not null,
  sbot_lin_keyword_id bigint not null,
  _created_at timestamp with time zone not null default now(),
  constraint proj_repo_and_sbot_lin_keyword_pkey primary key (proj_repo_id, sbot_lin_keyword_id),
  constraint proj_repo_and_sbot_lin_keyword_proj_repo_id_fkey foreign key (proj_repo_id) references proj_repo(proj_repo_id) on delete cascade,
  constraint proj_repo_and_sbot_lin_keyword_sbot_lin_keyword_id_fkey foreign key (sbot_lin_keyword_id) references sbot_lin_keyword(sbot_lin_keyword_id) on delete cascade,
  constraint proj_repo_and_sbot_lin_keyword_proj_repo_id_and_sbot_lin_keyword_id_uq unique (proj_repo_id, sbot_lin_keyword_id)
) tablespace pg_default;

create table public.sbot_lin_profile(
  sbot_lin_profile_id bigint generated by default as identity,
  _created_at timestamp with time zone not null default now(),
  sbot_lin_profile_url text not null,
  sbot_lin_profile_name text not null,
  position text not null,
  current_company_name text not null,
  current_company_link text not null,
  avatar text not null,
  about text not null,
  city text not null,
  followers bigint not null,
  sbot_lin_profile_following bigint not null,
  education_details text not null,
  constraint sbot_lin_profile_pkey primary key (sbot_lin_profile_id),
  constraint sbot_lin_profile_sbot_lin_profile_url_uq unique (sbot_lin_profile_url)
) tablespace pg_default;
create table public.sbot_lin_company(
  sbot_lin_company_id bigint generated by default as identity,
  _created_at timestamp with time zone not null default now(),
  sbot_lin_company_url text not null,
  sbot_lin_company_name text not null,
  sphere text not null,
  followers bigint not null,
  logo text not null,
  sbot_lin_company_image text not null,
  employees_amount_in_linkedin bigint not null,
  about text not null,
  website text not null,
  headquarters text not null,
  sbot_lin_company_type text not null,
  constraint sbot_lin_company_pkey primary key (sbot_lin_company_id),
  constraint sbot_lin_company_sbot_lin_company_url_uq unique (sbot_lin_company_url),
  constraint sbot_lin_company_sbot_lin_company_name_uq unique (sbot_lin_company_name)
) tablespace pg_default;
create table public.proj_bookmark(
  proj_bookmark_id bigint generated by default as identity,
  _created_at timestamp with time zone not null default now(),
  proj_repo_id bigint not null,
  auth_users_id uuid not null,
  constraint proj_bookmark_pkey primary key (proj_bookmark_id),
  constraint proj_bookmark_proj_repo_id foreign key (proj_repo_id) references proj_repo(proj_repo_id) on delete cascade,
  constraint proj_bookmark_user_id_fkey foreign key (auth_users_id) references auth.users(id) on delete cascade,
  constraint proj_bookmark_proj_repo_id_and_auth_users_id_uq unique (proj_repo_id, auth_users_id) 
) tablespace pg_default;
create table public.proj_cat_and_proj_bookmark(
  proj_cat_id bigint not null,
  proj_bookmark_id bigint not null,
  _created_at timestamp with time zone not null default now(),
  constraint proj_cat_and_proj_bookmark_pkey primary key (proj_cat_id, proj_bookmark_id),
  constraint proj_cat_and_proj_bookmark_proj_cat_id_fkey foreign key (proj_cat_id) references proj_cat(proj_cat_id) on delete cascade,
  constraint proj_cat_and_proj_bookmark_proj_bookmark_id_fkey foreign key (proj_bookmark_id) references proj_bookmark(proj_bookmark_id) on delete cascade,
  constraint proj_cat_and_proj_bookmark_proj_cat_id_and_proj_bookmark_id_uq unique (proj_cat_id, proj_bookmark_id)
) tablespace pg_default;
create table public.algo_hn_story_and_algo_hn_tag(
  _created_at timestamp with time zone not null default now(),
  algo_hn_story_id bigint not null,
  algo_hn_tag_id bigint not null,
  constraint algo_hn_story_and_algo_hn_tag_pkey primary key (algo_hn_story_id, algo_hn_tag_id),
  constraint algo_hn_story_and_algo_hn_tag_algo_hn_story_fkey foreign key (algo_hn_story_id) references algo_hn_story(algo_hn_story_id) on delete cascade,
  constraint algo_hn_story_and_algo_hn_tag_algo_hn_tag_id_fkey foreign key (algo_hn_tag_id) references algo_hn_tag(algo_hn_tag_id) on delete cascade
) tablespace pg_default;
create table public.algo_hn_comment_and_algo_hn_tag(
  _created_at timestamp with time zone not null default now(),
  algo_hn_comment_id bigint not null,
  algo_hn_tag_id bigint not null,
  constraint algo_hn_comment_and_algo_hn_tag_pkey primary key (algo_hn_comment_id, algo_hn_tag_id),
  constraint algo_hn_comment_and_algo_hn_tag_algo_hn_comment_fkey foreign key (algo_hn_comment_id) references algo_hn_comment(algo_hn_comment_id) on delete cascade,
  constraint algo_hn_comment_and_algo_hn_tag_algo_hn_tag_id_fkey foreign key (algo_hn_tag_id) references algo_hn_tag(algo_hn_tag_id) on delete cascade
) tablespace pg_default;
create table public.proj_repo_and_algo_hn_query(
  proj_repo_id bigint not null,
  algo_hn_query_id bigint not null,
  _created_at timestamp with time zone not null default now(),
  constraint proj_repo_and_algo_hn_query_pkey primary key (proj_repo_id, algo_hn_query_id),
  constraint proj_repo_and_algo_hn_query_proj_repo_id_fkey foreign key (proj_repo_id) references proj_repo(proj_repo_id) on delete cascade,
  constraint proj_repo_and_algo_hn_query_algo_hn_query_id_fkey foreign key (algo_hn_query_id) references algo_hn_query(algo_hn_query_id) on delete cascade
) tablespace pg_default;
create table public.user_admin(
  auth_users_id uuid not null,
  _created_at timestamp with time zone not null default now(),
  constraint user_admin_pkey primary key (auth_users_id),
  constraint user_admin_user_id_fkey foreign key (auth_users_id) references auth.users(id) on delete cascade
) tablespace pg_default;
create table public.gthb_repo_contr(
  gthb_repo_id bigint not null,
  gthb_owner_id bigint not null,
  contributions bigint not null,
  _created_at timestamp with time zone not null default now(),
  constraint gthb_repo_contr_pkey primary key (gthb_repo_id, gthb_owner_id),
  constraint gthb_repo_contr_gthb_repo_id_fkey foreign key (gthb_repo_id) references gthb_repo(gthb_repo_id) on delete cascade,
  constraint gthb_repo_contr_gthb_owner_id_fkey foreign key (gthb_owner_id) references gthb_owner(gthb_owner_id) on delete cascade
) tablespace pg_default;
create table public.pinned_proj_bookmark(
  pinned_proj_bookmark_id bigint generated by default as identity,
  _created_at timestamp with time zone not null default now(),
  proj_bookmark_id bigint not null,
  constraint pinned_proj_bookmark_pkey primary key (pinned_proj_bookmark_id),
  constraint pinned_proj_bookmark_proj_bookmark_id_fkey foreign key (proj_bookmark_id) references proj_bookmark(proj_bookmark_id) on delete cascade,
  constraint pinned_proj_bookmark_proj_bookmark_id_uq unique (proj_bookmark_id)
) tablespace pg_default;