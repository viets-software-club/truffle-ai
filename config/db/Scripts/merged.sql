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
drop table if exists proj_repo cascade;
drop table if exists proj_bookmark cascade;
drop table if exists algo_hn_story_and_algo_hn_tag cascade;
drop table if exists algo_hn_comment_and_algo_hn_tag cascade;
drop table if exists proj_repo_and_algo_hn_query cascade;
drop table if exists proj_repo_and_twitter_search cascade;
drop table if exists user_admin cascade;
drop table if exists gthb_repo_contr cascade;
drop table if exists proj_cat_and_proj_bookmark cascade;
drop table if exists sbot_lin_profile cascade;
drop table if exists sbot_lin_company cascade;
drop table if exists pinned_proj_bookmark cascade;
drop table if exists proj_repo_and_sbot_lin_company cascade;
drop table if exists proj_repo_and_sbot_lin_profile cascade;
drop table if exists gthb_repo_and_gthb_repo_topic cascade;
drop table if exists gthb_repo_topic cascade;
drop table if exists proj_classifier cascade;
drop table if exists proj_repo_and_proj_classifier cascade;

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
drop type if exists t_f_insert_sbot_lin_companies_for_proj cascade;
drop type if exists t_f_insert_sbot_lin_profiles_for_proj cascade;
drop type if exists t_ivals_gthb_repo_topic;
drop type if exists t_ivals_proj_classifier;

drop policy if exists "if proj_cat.is_public allow select access to proj_cat" on proj_cat cascade;
drop policy if exists "if proj_bookmark.is_public allow select access to proj_bookmark" on proj_bookmark cascade;
drop policy if exists "authenticated can access proj_bookmark" on proj_bookmark cascade;
drop policy if exists "authenticated can access proj_repo" on proj_repo cascade;
drop policy if exists "authenticated can access proj_cat" on proj_cat cascade;
drop policy if exists "authenticated can access gthb_repo" on gthb_repo cascade;
drop policy if exists "admin can access user_whitelist" on user_whitelist cascade;
drop policy if exists "admin can insert admins" on user_admin cascade;
drop policy if exists "admin can select admins" on user_admin cascade;
drop policy if exists "admin can only update himself" on user_admin cascade;
drop policy if exists "admin can only delete himself" on user_admin cascade;

comment on schema public is e'@graphql({"max_rows": 300, "inflect_names": true})';


create domain d_gthb_owner_type as text check (value in ('User', 'Organization'));
create domain d_gthb_trending_date_range as text check (value in ('daily', 'weekly', 'monthly'));
create table public.gthb_owner(
  gthb_owner_id bigint generated by default as identity,
  gthb_owner_type d_gthb_owner_type not null,
  avatar_url text not null,
  gthb_owner_login text not null,
  gthb_owner_url text not null,
  repositories_total_count bigint not null,
  _internal_created_at timestamp with time zone not null default now(),
  constraint gthb_owner_pkey primary key (gthb_owner_id),
  constraint gthb_owner_gthb_owner_login_uq unique (gthb_owner_login)
) tablespace pg_default;
create table public.gthb_user(
  gthb_user_id bigint not null,
  _internal_created_at timestamp with time zone not null default now(),
  bio text null,
  bio_html text null,
  company text null,
  company_html text null,
  created_at timestamp with time zone not null,
  email text null,
  followers_total_count bigint not null,
  gthb_user_name text null,
  twitter_username text null,
  website_url text null,
  constraint gthb_user_pkey primary key (gthb_user_id),
  constraint gthb_user_gthb_user_id_fkey foreign key (gthb_user_id) references gthb_owner(gthb_owner_id) on delete cascade
) tablespace pg_default;
create table public.gthb_org(
  gthb_org_id bigint not null,
  _internal_created_at timestamp with time zone not null default now(),
  created_at timestamp with time zone not null,
  gthb_org_description text null,
  description_html text null,
  email text null,
  gthb_org_name text null,
  twitter_username text null,
  website_url text null,
  constraint gthb_org_pkey primary key (gthb_org_id),
  constraint gthb_org_gthb_org_name_uq unique (gthb_org_name),
  constraint gthb_org_gthb_org_id_fkey foreign key (gthb_org_id) references gthb_owner(gthb_owner_id) on delete cascade
) tablespace pg_default;
create table public.gthb_lang(
  gthb_lang_id bigint generated by default as identity,
  _internal_created_at timestamp with time zone not null default now(),
  color text not null,
  gthb_lang_name text not null,
  constraint gthb_lang_pkey primary key (gthb_lang_id),
  constraint gthb_lang_gthb_lang_name_uq unique (gthb_lang_name)
) tablespace pg_default;
create table public.gthb_repo(
  gthb_repo_id bigint generated by default as identity,
  _internal_created_at timestamp with time zone not null default now(),
  created_at timestamp with time zone not null,
  gthb_repo_description text null,
  fork_count bigint not null,
  homepage_url text null,
  is_in_organization boolean not null,
  issues_total_count bigint not null,
  gthb_repo_name text not null,
  gthb_owner_id bigint not null,
  pull_requests_total_count bigint not null,
  gthb_repo_url text not null,
  stargazer_count bigint not null,
  contributor_count bigint not null,
  forks_per_contributor bigint not null,
  issues_per_contributor bigint not null,
  stargazers_per_contributor bigint not null,
  pull_requests_per_contributor bigint not null,
  constraint gthb_repo_pkey primary key (gthb_repo_id),
  constraint gthb_repo_gthb_owner_id_fkey foreign key (gthb_owner_id) references gthb_owner(gthb_owner_id) on delete cascade,
  constraint gthb_repo_fields_name_and_gthb_owner_id_uq unique (gthb_repo_name, gthb_owner_id),
  constraint gthb_repo_gthb_repo_name_uq unique (gthb_repo_name)
) tablespace pg_default;
create table public.gthb_repo_topic(
  gthb_repo_topic_id bigint generated by default as identity,
  _internal_created_at timestamp with time zone not null default now(),
  gthb_repo_topic_name text not null,
  stargazer_count bigint not null,
  constraint gthb_repo_topic_pkey primary key (gthb_repo_topic_id),
  constraint gthb_repo_topic_name_uq unique(gthb_repo_topic_name)
) tablespace pg_default;
create table public.gthb_repo_and_gthb_lang(
  gthb_repo_id bigint not null,
  gthb_lang_id bigint not null,
  _internal_created_at timestamp with time zone not null default now(),
  constraint gthb_repo_language_pkey primary key (gthb_repo_id, gthb_lang_id),
  constraint gthb_repo_and_gthb_lang_gthb_repo_id_fkey foreign key (gthb_repo_id) references gthb_repo(gthb_repo_id) on delete cascade,
  constraint gthb_repo_and_gthb_lang_gthb_lang_id_fkey foreign key (gthb_lang_id) references gthb_lang(gthb_lang_id) on delete cascade,
  constraint gthb_repo_and_gthb_lang_gthb_repo_id_and_gthb_lang_id_uq unique(gthb_repo_id, gthb_lang_id)
) tablespace pg_default;
create table public.gthb_star_hist(
  gthb_star_hist_id bigint generated by default as identity,
  _internal_created_at timestamp with time zone not null default now(),
  gthb_repo_id bigint not null,
  gthb_star_hist_date timestamp with time zone not null,
  amount bigint not null,
  constraint gthb_star_hist_pkey primary key (gthb_star_hist_id),
  constraint gthb_star_hist_gthb_repo_id_fkey foreign key (gthb_repo_id) references gthb_repo(gthb_repo_id) on delete cascade,
  constraint gthb_star_hist_gthb_star_hist_date_and_gthb_repo_id_uq unique (gthb_star_hist_date, gthb_repo_id)
) tablespace pg_default;
create table public.gthb_fork_hist(
  gthb_fork_hist_id bigint generated by default as identity,
  _internal_created_at timestamp with time zone not null default now(),
  gthb_repo_id bigint not null,
  gthb_fork_hist_date timestamp with time zone not null,
  amount bigint not null,
  constraint gthb_fork_hist_pkey primary key (gthb_fork_hist_id),
  constraint gthb_fork_hist_gthb_repo_id_fkey foreign key (gthb_repo_id) references gthb_repo(gthb_repo_id) on delete cascade,
  constraint gthb_fork_hist_gthb_fork_hist_date_and_gthb_repo_id_uq unique (gthb_fork_hist_date, gthb_repo_id)
) tablespace pg_default;
create table public.gthb_issue_hist(
  gthb_issue_hist_id bigint generated by default as identity,
  _internal_created_at timestamp with time zone not null default now(),
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
  _internal_created_at timestamp with time zone not null default now(),
  date_range d_gthb_trending_date_range not null,
  lang text null,
  constraint gthb_trending_pkey primary key (gthb_trending_id),
  constraint gthb_trending_gthb_repo_id_fkey foreign key (gthb_repo_id) references gthb_repo(gthb_repo_id) on delete cascade,
  constraint gthb_trending_gthb_repo_id_and_date_range_uq unique (gthb_repo_id, date_range)
) tablespace pg_default;
create table public.proj_cat(
  proj_cat_id bigint generated by default as identity,
  _internal_created_at timestamp with time zone not null default now(),
  title text not null,
  auth_users_id uuid not null,
  note text null,
  is_public boolean default false,
  constraint proj_cat_pkey primary key (proj_cat_id),
  constraint proj_cat_user_id_fkey foreign key (auth_users_id) references auth.users(id) on delete cascade,
  constraint proj_cat_title_and_auth_users_id_uq unique (title, auth_users_id)
) tablespace pg_default;
create table public.user_whitelist(
  user_whitelist_id bigint generated by default as identity not null,
  _internal_created_at timestamp with time zone null default now(),
  kind text not null check (kind in ('email', 'domain')),
  user_whitelist_value text null,
  constraint user_whitelist_pkey primary key (user_whitelist_id),
  constraint user_whitelist_fields_kind_and_user_whitelist_value_uq unique (kind, user_whitelist_value)
) tablespace pg_default;
create table public.algo_hn_tag(
  algo_hn_tag_id bigint generated by default as identity,
  _internal_created_at timestamp with time zone not null default now(),
  title text not null,
  constraint algo_hn_tag_pkey primary key (algo_hn_tag_id),
  constraint algo_hn_tag_title_uq unique (title)
) tablespace pg_default;
create table public.algo_hn_query(
  algo_hn_query_id bigint generated by default as identity,
  query text not null,
  _internal_created_at timestamp with time zone not null default now(),
  constraint algo_hn_query_pkey primary key (algo_hn_query_id),
  constraint algo_hn_query_query_uq unique (query)
) tablespace pg_default;
create table public.algo_hn_story(
  algo_hn_story_id bigint generated by default as identity,
  _internal_created_at timestamp with time zone not null default now(),
  author text not null,
  created_at timestamp with time zone not null,
  algo_hn_story_url text null,
  algo_hn_story_object_id bigint not null,
  points bigint not null,
  algo_hn_query_id bigint not null,
  title text not null,
  updated_at timestamp with time zone not null,
  constraint algo_hn_story_pkey primary key (algo_hn_story_id),
  constraint algo_hn_story_algo_hn_query_fkey foreign key (algo_hn_query_id) references algo_hn_query(algo_hn_query_id) on delete cascade,
  constraint algo_hn_story_algo_hn_story_object_id_uq unique (algo_hn_story_object_id)
) tablespace pg_default;
create table public.algo_hn_comment(
  algo_hn_comment_id bigint generated by default as identity,
  _internal_created_at timestamp with time zone not null default now(),
  author text not null,
  algo_hn_comment_object_id bigint not null,
  algo_hn_query_id bigint not null,
  comment_text text not null,
  story_id bigint not null,
  story_title text not null,
  story_url text null,
  created_at timestamp with time zone not null,
  updated_at timestamp with time zone not null,
  constraint algo_hn_comment_pkey primary key (algo_hn_comment_id),
  constraint algo_hn_comment_algo_hn_query_fkey foreign key (algo_hn_query_id) references algo_hn_query(algo_hn_query_id) on delete cascade,
  constraint algo_hn_comment_algo_hn_comment_object_id_uq unique (algo_hn_comment_object_id)
) tablespace pg_default;
create table public.proj_repo(
  proj_repo_id bigint generated by default as identity,
  _internal_created_at timestamp with time zone not null default now(),
  gthb_repo_id bigint not null,
  note text null,
  algo_hn_eli5 text null,
  repo_eli5 text null,
  constraint proj_repo_pkey primary key (proj_repo_id),
  constraint proj_repo_gthb_repo_id_fkey foreign key (gthb_repo_id) references gthb_repo(gthb_repo_id) on delete cascade,
  constraint proj_repo_gthb_repo_id_uq unique (gthb_repo_id)
) tablespace pg_default;
create table public.gthb_repo_and_gthb_repo_topic(
  gthb_repo_id bigint not null,
  _internal_created_at timestamp with time zone not null default now(),
  gthb_repo_topic_id bigint not null,
  constraint gthb_repo_and_gthb_repo_topic_pkey primary key (gthb_repo_id, gthb_repo_topic_id),
  constraint gthb_repo_and_gthb_repo_topic_gthb_repo_id_fkey foreign key (gthb_repo_id) references gthb_repo(gthb_repo_id) on delete cascade,
  constraint gthb_repo_and_gthb_repo_topic_gthb_repo_topic_id_fkey foreign key (gthb_repo_topic_id) references gthb_repo_topic(gthb_repo_topic_id) on delete cascade
) tablespace pg_default;
create table public.proj_classifier (
  proj_classifier_id bigint generated by default as identity,
  _internal_created_at timestamp with time zone not null default now(),
  classifier text not null,
  constraint proj_classifier_pkey primary key (proj_classifier_id),
  constraint proj_classifier_classifier_uq unique (classifier)
) tablespace pg_default;
create table public.proj_repo_and_proj_classifier (
  proj_repo_id bigint not null,
  proj_classifier_id bigint not null,
  _internal_created_at timestamp with time zone not null default now(),
  constraint proj_repo_and_proj_classifier_pkey primary key (proj_repo_id, proj_classifier_id),
  constraint proj_repo_and_proj_classifier_proj_repo_id_fkey foreign key (proj_repo_id) references proj_repo(proj_repo_id) on delete cascade,
  constraint proj_repo_and_proj_classifier_proj_classifier_id_fkey foreign key (proj_classifier_id) references proj_classifier(proj_classifier_id) on delete cascade
) tablespace pg_default;
-- create table public.proj_repo_metadata(
--   proj_repo_metadata_id bigint generated by default as identity,
--   _internal_created_at timestamp with time zone not null default now(),
--   proj_repo_id bigint not null,
--   algo_hn_eli5 text not null,
--   repo_eli5 text not null,
--   constraint proj_repo_metadata_pkey primary key (proj_repo_metadata_id),
--   constraint proj_repo_metadata_proj_repo_id_fkey foreign key (proj_repo_id) references proj_repo(proj_repo_id) on delete cascade,
--   constraint proj_repo_metadata_proj_repo_id_uq unique (proj_repo_id)
-- ) tablespace pg_default;
create table public.user_api_key(
  user_api_key_id bigint generated by default as identity,
  _internal_created_at timestamp with time zone not null default now(),
  user_api_key uuid not null,
  auth_users_id uuid not null,
  constraint user_api_key_pkey primary key (user_api_key_id),
  constraint user_api_key_user_id_fkey foreign key (auth_users_id) references auth.users(id) on delete cascade,
  constraint user_api_key_key_key unique (user_api_key),
  constraint user_api_key_user_id_uq unique (auth_users_id)
) tablespace pg_default;

create table public.sbot_lin_profile(
  sbot_lin_profile_id bigint generated by default as identity,
  _internal_created_at timestamp with time zone not null default now(),
  sbot_lin_profile_url text not null,
  sbot_lin_profile_name text not null,
  position text null,
  current_company_name text null,
  current_company_link text null,
  avatar text null,
  about text null,
  city text null,
  followers text null,
  sbot_lin_profile_following text null,
  education_details text null,
  constraint sbot_lin_profile_pkey primary key (sbot_lin_profile_id),
  constraint sbot_lin_profile_sbot_lin_profile_url_uq unique (sbot_lin_profile_url)
) tablespace pg_default;
create table public.proj_repo_and_sbot_lin_profile(
  proj_repo_id bigint not null,
  sbot_lin_profile_id bigint not null,
  _internal_created_at timestamp with time zone not null default now(),
  constraint proj_repo_and_sbot_lin_profile_pkey primary key (proj_repo_id, sbot_lin_profile_id),
  constraint proj_repo_and_sbot_lin_profile_proj_repo_id_fkey foreign key (proj_repo_id) references proj_repo(proj_repo_id) on delete cascade,
  constraint proj_repo_and_sbot_lin_profile_sbot_lin_profile_id_fkey foreign key (sbot_lin_profile_id) references sbot_lin_profile(sbot_lin_profile_id) on delete cascade,
  constraint proj_repo_and_sbot_lin_profile_proj_repo_id_and_sbot_lin_profile_id_uq unique (proj_repo_id, sbot_lin_profile_id)
) tablespace pg_default;
create table public.sbot_lin_company(
  sbot_lin_company_id bigint generated by default as identity,
  _internal_created_at timestamp with time zone not null default now(),
  sbot_lin_company_url text not null,
  sbot_lin_company_name text not null,
  sphere text null,
  followers bigint not null,
  logo text not null,
  sbot_lin_company_image text not null,
  employees_amount_in_linkedin bigint not null,
  about text null,
  website text null,
  headquarters text null,
  sbot_lin_company_type text null,
  constraint sbot_lin_company_pkey primary key (sbot_lin_company_id),
  constraint sbot_lin_company_sbot_lin_company_url_uq unique (sbot_lin_company_url),
  constraint sbot_lin_company_sbot_lin_company_name_uq unique (sbot_lin_company_name)
) tablespace pg_default;
create table public.proj_repo_and_sbot_lin_company(
  proj_repo_id bigint not null,
  sbot_lin_company_id bigint not null,
  _internal_created_at timestamp with time zone not null default now(),
  constraint proj_repo_and_sbot_lin_company_pkey primary key (proj_repo_id, sbot_lin_company_id),
  constraint proj_repo_and_sbot_lin_company_proj_repo_id_fkey foreign key (proj_repo_id) references proj_repo(proj_repo_id) on delete cascade,
  constraint proj_repo_and_sbot_lin_company_sbot_lin_company_id_fkey foreign key (sbot_lin_company_id) references sbot_lin_company(sbot_lin_company_id) on delete cascade,
  constraint proj_repo_and_sbot_lin_company_proj_repo_id_and_sbot_lin_company_id_uq unique (proj_repo_id, sbot_lin_company_id)
) tablespace pg_default;
create table public.proj_bookmark(
  proj_bookmark_id bigint generated by default as identity,
  _internal_created_at timestamp with time zone not null default now(),
  proj_repo_id bigint not null,
  auth_users_id uuid not null,
  is_public boolean default false,
  constraint proj_bookmark_pkey primary key (proj_bookmark_id),
  constraint proj_bookmark_proj_repo_id foreign key (proj_repo_id) references proj_repo(proj_repo_id) on delete cascade,
  constraint proj_bookmark_user_id_fkey foreign key (auth_users_id) references auth.users(id) on delete cascade,
  constraint proj_bookmark_proj_repo_id_and_auth_users_id_uq unique (proj_repo_id, auth_users_id) 
) tablespace pg_default;
create table public.proj_cat_and_proj_bookmark(
  proj_cat_id bigint not null,
  proj_bookmark_id bigint not null,
  is_pinned boolean default false,
  _internal_created_at timestamp with time zone not null default now(),
  constraint proj_cat_and_proj_bookmark_pkey primary key (proj_cat_id, proj_bookmark_id),
  constraint proj_cat_and_proj_bookmark_proj_cat_id_fkey foreign key (proj_cat_id) references proj_cat(proj_cat_id) on delete cascade,
  constraint proj_cat_and_proj_bookmark_proj_bookmark_id_fkey foreign key (proj_bookmark_id) references proj_bookmark(proj_bookmark_id) on delete cascade,
  constraint proj_cat_and_proj_bookmark_proj_cat_id_and_proj_bookmark_id_uq unique (proj_cat_id, proj_bookmark_id)
) tablespace pg_default;
create table public.algo_hn_story_and_algo_hn_tag(
  _internal_created_at timestamp with time zone not null default now(),
  algo_hn_story_id bigint not null,
  algo_hn_tag_id bigint not null,
  constraint algo_hn_story_and_algo_hn_tag_pkey primary key (algo_hn_story_id, algo_hn_tag_id),
  constraint algo_hn_story_and_algo_hn_tag_algo_hn_story_fkey foreign key (algo_hn_story_id) references algo_hn_story(algo_hn_story_id) on delete cascade,
  constraint algo_hn_story_and_algo_hn_tag_algo_hn_tag_id_fkey foreign key (algo_hn_tag_id) references algo_hn_tag(algo_hn_tag_id) on delete cascade
) tablespace pg_default;
create table public.algo_hn_comment_and_algo_hn_tag(
  _internal_created_at timestamp with time zone not null default now(),
  algo_hn_comment_id bigint not null,
  algo_hn_tag_id bigint not null,
  constraint algo_hn_comment_and_algo_hn_tag_pkey primary key (algo_hn_comment_id, algo_hn_tag_id),
  constraint algo_hn_comment_and_algo_hn_tag_algo_hn_comment_fkey foreign key (algo_hn_comment_id) references algo_hn_comment(algo_hn_comment_id) on delete cascade,
  constraint algo_hn_comment_and_algo_hn_tag_algo_hn_tag_id_fkey foreign key (algo_hn_tag_id) references algo_hn_tag(algo_hn_tag_id) on delete cascade
) tablespace pg_default;
create table public.proj_repo_and_algo_hn_query(
  proj_repo_id bigint not null,
  algo_hn_query_id bigint not null,
  _internal_created_at timestamp with time zone not null default now(),
  constraint proj_repo_and_algo_hn_query_pkey primary key (proj_repo_id, algo_hn_query_id),
  constraint proj_repo_and_algo_hn_query_proj_repo_id_fkey foreign key (proj_repo_id) references proj_repo(proj_repo_id) on delete cascade,
  constraint proj_repo_and_algo_hn_query_algo_hn_query_id_fkey foreign key (algo_hn_query_id) references algo_hn_query(algo_hn_query_id) on delete cascade
) tablespace pg_default;
create table public.user_admin(
  auth_users_id uuid not null,
  _internal_created_at timestamp with time zone not null default now(),
  constraint user_admin_pkey primary key (auth_users_id),
  constraint user_admin_user_id_fkey foreign key (auth_users_id) references auth.users(id) on delete cascade
) tablespace pg_default;
create table public.gthb_repo_contr(
  gthb_repo_id bigint not null,
  gthb_owner_id bigint not null,
  contributions bigint not null,
  _internal_created_at timestamp with time zone not null default now(),
  constraint gthb_repo_contr_pkey primary key (gthb_repo_id, gthb_owner_id),
  constraint gthb_repo_contr_gthb_repo_id_fkey foreign key (gthb_repo_id) references gthb_repo(gthb_repo_id) on delete cascade,
  constraint gthb_repo_contr_gthb_owner_id_fkey foreign key (gthb_owner_id) references gthb_owner(gthb_owner_id) on delete cascade
) tablespace pg_default;
-- create table public.pinned_proj_bookmark(
--   pinned_proj_bookmark_id bigint generated by default as identity,
--   _internal_created_at timestamp with time zone not null default now(),
--   proj_bookmark_id bigint not null,
--   constraint pinned_proj_bookmark_pkey primary key (pinned_proj_bookmark_id),
--   constraint pinned_proj_bookmark_proj_bookmark_id_fkey foreign key (proj_bookmark_id) references proj_bookmark(proj_bookmark_id) on delete cascade,
--   constraint pinned_proj_bookmark_proj_bookmark_id_uq unique (proj_bookmark_id)
-- ) tablespace pg_default;

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
create type t_ivals_sbot_lin_company as (
  about text,
  employees_amount_in_linkedin bigint,
  followers bigint,
  headquarters text,
  logo text,
  sbot_lin_company_image text,
  sbot_lin_company_name text,
  sbot_lin_company_type text,
  sbot_lin_company_url text,
  sphere text,
  website text
);

create type t_ivals_sbot_lin_profile as (
  about text,
  avatar text,
  city text,
  current_company_link text,
  current_company_name text,
  education_details text,
  followers text,
  position text,
  sbot_lin_profile_name text,
  sbot_lin_profile_url text,
  sbot_lin_profile_following text
);
create type t_ivals_algo_hn_tag as (
  title text
);

create type t_ivals_algo_hn_query as (
  query text
);

create type t_ivals_algo_hn_comment as (
  author text,
  algo_hn_story_object_id bigint,
  comment_text text,
  story_id bigint,
  story_title text,
  story_url text,
  created_at timestamp with time zone,
  updated_at timestamp with time zone
);

create type t_ivals_algo_hn_story as (
  author text,
  created_at timestamp with time zone,
  algo_hn_story_url text,
  algo_hn_story_object_id bigint,
  points bigint,
  title text,
  updated_at timestamp with time zone
);

create type t_f_insert_algo_hn_story as (
  algo_hn_story_object_id bigint,
  algo_hn_story_url text,
  algo_hn_tags t_ivals_algo_hn_tag[],
  author text,
  created_at timestamp with time zone,
  points bigint,
  title text,
  updated_at timestamp with time zone
);

create type t_f_insert_algo_hn_comment as (
  algo_hn_comment_object_id bigint,
  algo_hn_tags t_ivals_algo_hn_tag[],
  author text,
  comment_text text,
  created_at timestamp with time zone,
  story_id bigint,
  story_title text,
  story_url text,
  updated_at timestamp with time zone
);

create type t_f_insert_algo_hn_query_with_stories_and_comments as (
  algo_hn_comments t_f_insert_algo_hn_comment[],
  algo_hn_stories t_f_insert_algo_hn_story[],
  query text
);

create type t_ivals_proj_classifier as (
  classifier text
);

create type t_f_insert_proj_repo_metadata as (
  algo_hn_eli5 text,
  repo_eli5 text
);
create type t_f_insert_proj_repo as (
  algo_hn_queries t_f_insert_algo_hn_query_with_stories_and_comments [],
  gthb_repo t_f_insert_gthb_repo,
  note text,
  proj_classifiers t_ivals_proj_classifier[],
  -- proj_repo_metadata t_f_insert_proj_repo_metadata,
  sbot_lin_companies t_ivals_sbot_lin_company[],
  sbot_lin_profiles t_ivals_sbot_lin_profile[],
  algo_hn_eli5 text,
  repo_eli5 text
);
create type t_f_insert_proj_bookmark_w_cats as (
  auth_users_id uuid,
  proj_cats text [],
  proj_repo t_f_insert_proj_repo
);
drop type if exists t_f_insert_gthb_trending cascade;
create type t_f_insert_gthb_trending as (
  date_range d_gthb_trending_date_range,
  lang text,
  proj_repo t_f_insert_proj_repo
);

drop type if exists t_f_select_updatable_result cascade;
create type t_f_select_updatable_result as (
  gthb_repo_name text,
  gthb_owner_login text
);

drop type if exists t_f_gthb_repo_identifier cascade;
create type t_f_gthb_repo_identifier as (
  gthb_owner_login text,
  gthb_repo_name text
);
create or replace function f_insert_gthb_owner(githubOwner t_f_insert_gthb_owner)
  returns bigint
  as $$
declare
  org t_ivals_gthb_org;
  usr t_ivals_gthb_user;
  ownerId bigint;
begin
 org := githubOwner.gthb_org;
 usr := githubOwner.gthb_user;
  insert into gthb_owner(gthb_owner_type, avatar_url, gthb_owner_login, gthb_owner_url, repositories_total_count)
    values (githubOwner.gthb_owner_type, githubOwner.avatar_url, githubOwner.gthb_owner_login, githubOwner.gthb_owner_url,
      githubOwner.repositories_total_count)
  on conflict (gthb_owner_login)
    do update set
      avatar_url = excluded.avatar_url, gthb_owner_url = excluded.gthb_owner_url, repositories_total_count =
	excluded.repositories_total_count, gthb_owner_type = excluded.gthb_owner_type
    returning
      gthb_owner_id into ownerId;
  if githubOwner.gthb_owner_type = 'User' then
    insert into gthb_user(gthb_user_id, bio, bio_html, company, company_html, created_at, email, followers_total_count, gthb_user_name, twitter_username, website_url)
      values (ownerId, usr.bio, usr.bio_html, usr.company, usr.company_html, usr.created_at, usr.email, usr.followers_total_count,
	usr.gthb_user_name, usr.twitter_username, usr.website_url)
    on conflict (gthb_user_id)
      do update set
	bio = excluded.bio, bio_html = excluded.bio_html, company = excluded.company, company_html = excluded.company_html, created_at =
	  excluded.created_at, email = excluded.email, followers_total_count = excluded.followers_total_count, twitter_username =
	  excluded.twitter_username, website_url = excluded.website_url;
  else
    insert into gthb_org(gthb_org_id, created_at, gthb_org_description, description_html, email, gthb_org_name, twitter_username, website_url)
      values (ownerId, org.created_at, org.gthb_org_description, org.description_html, org.email, org.gthb_org_name, org.twitter_username, org.website_url)
    on conflict (gthb_org_id)
      do update set
	created_at = excluded.created_at, gthb_org_description = excluded.gthb_org_description, description_html =
	  excluded.description_html, email = excluded.email, gthb_org_name = excluded.gthb_org_name, twitter_username =
	  excluded.twitter_username, website_url = excluded.website_url;
  end if;
  return ownerId;
end;
$$
language plpgsql;

create or replace function f_insert_algo_hn_comments(queryId bigint, algoHnComments t_f_insert_algo_hn_comment[])
  returns VOID
  as $$
declare
  algoHnComment t_f_insert_algo_hn_comment;
begin
  foreach algoHnComment in array algoHnComments loop
    with comment as (
insert into algo_hn_comment(algo_hn_comment_object_id, algo_hn_query_id, author, comment_text, created_at, story_id, story_title, story_url, updated_at)
	values (algoHnComment.algo_hn_comment_object_id, queryId, algoHnComment.author, algoHnComment.comment_text, algoHnComment.created_at, algoHnComment.story_id,
	  algoHnComment.story_title, algoHnComment.story_url, algoHnComment.updated_at)
      on conflict (algo_hn_comment_object_id)
        do update set
	  algo_hn_query_id = excluded.algo_hn_query_id, author = excluded.author, algo_hn_comment_object_id =
	    excluded.algo_hn_comment_object_id, comment_text = excluded.comment_text, story_id = excluded.story_id, story_title =
	    excluded.story_title, story_url = excluded.story_url, created_at = excluded.created_at,
	    updated_at = excluded.updated_at
        returning
          algo_hn_comment_id
), tags as (
insert into algo_hn_tag(title)
  select distinct on (title)
    title
  from
    unnest(algoHnComment.algo_hn_tags)
  on conflict (title)
    do update set
      title = excluded.title
    returning
      algo_hn_tag_id)
  insert into algo_hn_comment_and_algo_hn_tag(algo_hn_comment_id, algo_hn_tag_id)
  select
    comment.algo_hn_comment_id,
    tags.algo_hn_tag_id
  from
    comment
  cross join tags
on conflict (algo_hn_comment_id,
  algo_hn_tag_id)
  do nothing;
end loop;
end;
$$
language plpgsql;

create or replace function f_insert_algo_hn_stories(queryId bigint, algoHnStories t_f_insert_algo_hn_story[])
  returns VOID
  as $$
declare
  algoHnStory t_f_insert_algo_hn_story;
begin

  foreach algoHnStory in array algoHnStories loop
    with story as (
insert into algo_hn_story(algo_hn_query_id, algo_hn_story_object_id, algo_hn_story_url, author, created_at, points, title, updated_at)
	values (queryId, algoHnStory.algo_hn_story_object_id, algoHnStory.algo_hn_story_url, algoHnStory.author, algoHnStory.created_at,
	  algoHnStory.points, algoHnStory.title, algoHnStory.updated_at)
      on conflict (algo_hn_story_object_id)
        do update set
	  algo_hn_query_id = excluded.algo_hn_query_id, author = excluded.author, created_at = excluded.created_at, algo_hn_story_url =
	    excluded.algo_hn_story_url, algo_hn_story_object_id = excluded.algo_hn_story_object_id, points = excluded.points, title = excluded.title, updated_at = excluded.updated_at
        returning
          algo_hn_story_id
), tags as (
insert into algo_hn_tag(title)
  select distinct on (title)
    title
  from
    unnest(algoHnStory.algo_hn_tags)
  on conflict (title)
    do update set
      title = excluded.title
    returning
      algo_hn_tag_id)
  insert into algo_hn_story_and_algo_hn_tag(algo_hn_story_id, algo_hn_tag_id)
  select
    story.algo_hn_story_id,
    tags.algo_hn_tag_id
  from
    story
  cross join tags
on conflict (algo_hn_story_id,
  algo_hn_tag_id)
  do nothing;
end loop;
end;
$$
language plpgsql;

create or replace function f_insert_algo_hn_comments(queryId bigint, algoHnComments t_f_insert_algo_hn_comment[])
  returns VOID
  as $$
declare
  algoHnComment t_f_insert_algo_hn_comment;
begin
  foreach algoHnComment in array algoHnComments loop
    with comment as (
insert into algo_hn_comment(algo_hn_comment_object_id, algo_hn_query_id, author, comment_text, created_at, story_id, story_title, story_url, updated_at)
	values (algoHnComment.algo_hn_comment_object_id, queryId, algoHnComment.author, algoHnComment.comment_text, algoHnComment.created_at, algoHnComment.story_id,
	  algoHnComment.story_title, algoHnComment.story_url, algoHnComment.updated_at)
      on conflict (algo_hn_comment_object_id)
        do update set
	  algo_hn_query_id = excluded.algo_hn_query_id, author = excluded.author, algo_hn_comment_object_id =
	    excluded.algo_hn_comment_object_id, comment_text = excluded.comment_text, story_id = excluded.story_id, story_title =
	    excluded.story_title, story_url = excluded.story_url, created_at = excluded.created_at,
	    updated_at = excluded.updated_at
        returning
          algo_hn_comment_id
), tags as (
insert into algo_hn_tag(title)
  select distinct on (title)
    title
  from
    unnest(algoHnComment.algo_hn_tags)
  on conflict (title)
    do update set
      title = excluded.title
    returning
      algo_hn_tag_id)
  insert into algo_hn_comment_and_algo_hn_tag(algo_hn_comment_id, algo_hn_tag_id)
  select
    comment.algo_hn_comment_id,
    tags.algo_hn_tag_id
  from
    comment
  cross join tags
on conflict (algo_hn_comment_id,
  algo_hn_tag_id)
  do nothing;
end loop;
end;
$$
language plpgsql;

create or replace function f_insert_algo_hn_queries_w_stories_and_comments_for_proj(projRepoId bigint, queries
  t_f_insert_algo_hn_query_with_stories_and_comments[])
  returns VOID
  as $$
declare
  queryIter t_f_insert_algo_hn_query_with_stories_and_comments;
  queryId bigint;
begin
  foreach queryIter in array queries loop
    insert into algo_hn_query(query)
      values (queryIter.query)
    on conflict (query)
      do update set
        query = excluded.query
      returning
        algo_hn_query_id into queryId;
    insert into proj_repo_and_algo_hn_query(proj_repo_id, algo_hn_query_id)
      values (projRepoId, queryId)
    on conflict (proj_repo_id, algo_hn_query_id)
      do nothing;
    if queryIter.algo_hn_comments is not null then
      perform f_insert_algo_hn_comments(queryId, queryIter.algo_hn_comments);
    end if;
    if queryIter.algo_hn_stories is not null then
      perform f_insert_algo_hn_stories(queryId, queryIter.algo_hn_stories);
    end if;
  end loop;
end;
$$
language plpgsql;
create or replace function f_insert_gthb_repo(githubRepo t_f_insert_gthb_repo)
  returns bigint
  as $$
declare
  contrOwnerId bigint;
  contr t_f_insert_gthb_contr;
  contrOwner t_f_insert_gthb_contr_owner;
  contrUser t_ivals_gthb_user;
  ownerId bigint;
  repoId bigint;
  stars t_ivals_gthb_star_hist[] := githubRepo.gthb_star_hists;
  forks t_ivals_gthb_fork_hist[] := githubRepo.gthb_fork_hists;
  issues t_ivals_gthb_issue_hist[] := githubRepo.gthb_issue_hists;
  topic t_ivals_gthb_repo_topic;
begin
  ownerId := f_insert_gthb_owner(githubRepo.gthb_owner);

  insert into gthb_repo(created_at, gthb_repo_description, fork_count, homepage_url, is_in_organization, issues_total_count,
    gthb_repo_name, gthb_owner_id, pull_requests_total_count, gthb_repo_url, stargazer_count, contributor_count, forks_per_contributor, issues_per_contributor, stargazers_per_contributor, pull_requests_per_contributor)
    values (githubRepo.created_at, githubRepo.gthb_repo_description, githubRepo.fork_count, githubRepo.homepage_url,
      githubRepo.is_in_organization, githubRepo.issues_total_count, githubRepo.gthb_repo_name, ownerId,
      githubRepo.pull_requests_total_count, githubRepo.gthb_repo_url, githubRepo.stargazer_count, githubRepo.contributor_count, githubRepo.fork_count / githubRepo.contributor_count, githubRepo.issues_total_count / githubRepo.contributor_count, githubRepo.stargazer_count / githubRepo.contributor_count, githubRepo.pull_requests_total_count / githubRepo.contributor_count)
  on conflict (gthb_repo_name)
    do update set
      created_at = excluded.created_at, gthb_repo_description = excluded.gthb_repo_description, fork_count = excluded.fork_count,
	homepage_url = excluded.homepage_url, is_in_organization = excluded.is_in_organization, issues_total_count =
	excluded.issues_total_count, gthb_repo_name = excluded.gthb_repo_name, gthb_owner_id = excluded.gthb_owner_id,
	pull_requests_total_count = excluded.pull_requests_total_count, gthb_repo_url = excluded.gthb_repo_url, stargazer_count =
	excluded.stargazer_count, contributor_count = excluded.contributor_count,
  forks_per_contributor = excluded.fork_count / excluded.contributor_count, issues_per_contributor = excluded.issues_total_count / excluded.contributor_count, stargazers_per_contributor = excluded.stargazer_count / excluded.contributor_count, pull_requests_per_contributor = excluded.pull_requests_total_count / excluded.contributor_count
    returning
      gthb_repo_id into repoId;

  foreach contr in array githubRepo.gthb_repo_contrs
    loop
    contrOwner := contr.gthb_owner;
        contrUser := contrOwner.gthb_user;

      insert into gthb_owner(gthb_owner_type, avatar_url, gthb_owner_login, gthb_owner_url, repositories_total_count)
      values ('User', contrOwner.avatar_url, contrOwner.gthb_owner_login, contrOwner.gthb_owner_url,
        contrOwner.repositories_total_count)
    on conflict (gthb_owner_login)
      do update set
        avatar_url = excluded.avatar_url, gthb_owner_url = excluded.gthb_owner_url, repositories_total_count =
    excluded.repositories_total_count, gthb_owner_type = excluded.gthb_owner_type
      returning
        gthb_owner_id into contrOwnerId;
      insert into gthb_user(gthb_user_id, bio, bio_html, company, company_html, created_at, email, followers_total_count, gthb_user_name, twitter_username, website_url)
      values (contrOwnerId, contrUser.bio, contrUser.bio_html, contrUser.company, contrUser.company_html, contrUser.created_at, contrUser.email, contrUser.followers_total_count,
    contrUser.gthb_user_name, contrUser.twitter_username, contrUser.website_url)
      on conflict (gthb_user_id)
        do update set
    bio = excluded.bio, bio_html = excluded.bio_html, company = excluded.company, company_html = excluded.company_html, created_at =
      excluded.created_at, email = excluded.email, followers_total_count = excluded.followers_total_count, twitter_username =
      excluded.twitter_username, website_url = excluded.website_url;

      insert into gthb_repo_contr(gthb_repo_id, gthb_owner_id, contributions) 
      values (repoId, contrOwnerId, contr.contributions)
      on conflict(gthb_repo_id, gthb_owner_id) do update set contributions = excluded.contributions;
    end loop;

  if array_length(githubRepo.gthb_langs, 1) is not null then
    with langs as (insert into gthb_lang (gthb_lang_name, color) select * from unnest(githubRepo.gthb_langs) on conflict (gthb_lang_name) do update set color = excluded.color returning *)
    insert into gthb_repo_and_gthb_lang(gthb_repo_id, gthb_lang_id) select repoId, langs.gthb_lang_id from langs on conflict(gthb_repo_id, gthb_lang_id) do nothing;
  end if;
  
  if array_length(githubRepo.gthb_repo_topics, 1) is not null then
    with topics as (insert into gthb_repo_topic (gthb_repo_topic_name, stargazer_count) select * from unnest(githubRepo.gthb_repo_topics) on conflict (gthb_repo_topic_name) do update set stargazer_count = excluded.stargazer_count returning *)
    insert into gthb_repo_and_gthb_repo_topic(gthb_repo_id, gthb_repo_topic_id) select repoId, topics.gthb_repo_topic_id from topics on conflict(gthb_repo_id, gthb_repo_topic_id) do nothing;
  end if;
  insert into gthb_star_hist(gthb_repo_id, gthb_star_hist_date, amount)
   select
    repoId,
    s.gthb_star_hist_date,
    s.amount
  from
    unnest(stars) s
  on conflict (gthb_repo_id,
    gthb_star_hist_date)
    do update set
      amount = excluded.amount where excluded.amount > gthb_star_hist.amount;
  insert into gthb_fork_hist(gthb_repo_id, gthb_fork_hist_date, amount)
  select
    repoId,
    f.gthb_fork_hist_date,
    f.amount
  from
    unnest(forks) f
  on conflict (gthb_repo_id,
    gthb_fork_hist_date)
    do update set
      amount = excluded.amount where excluded.amount > gthb_fork_hist.amount;
  insert into gthb_issue_hist(gthb_repo_id, gthb_issue_hist_date, amount)
   select
    repoId,
    i.gthb_issue_hist_date,
    i.amount
  from
    unnest(issues) i
  on conflict (gthb_repo_id,
    gthb_issue_hist_date)
    do update set
      amount = excluded.amount where excluded.amount > gthb_issue_hist.amount;
  return repoId;
end;
$$
language plpgsql;

create or replace function f_insert_sbot_lin_companies_for_proj(projRepoId bigint, companies t_ivals_sbot_lin_company[])
returns VOID as $$
begin 
  with company as (
    insert into sbot_lin_company(sbot_lin_company_url, sbot_lin_company_name, sphere, followers, logo, sbot_lin_company_image, employees_amount_in_linkedin, about, website, headquarters, sbot_lin_company_type)
    select c.sbot_lin_company_url, c.sbot_lin_company_name, c.sphere, c.followers, c.logo, c.sbot_lin_company_image, c.employees_amount_in_linkedin, c.about, c.website, c.headquarters, c.sbot_lin_company_type from unnest(companies) as c
    on conflict(sbot_lin_company_url) do update set sbot_lin_company_name = excluded.sbot_lin_company_name, sphere = excluded.sphere, followers = excluded.followers, logo = excluded.logo, sbot_lin_company_image = excluded.sbot_lin_company_image, employees_amount_in_linkedin = excluded.employees_amount_in_linkedin, about = excluded.about, website = excluded.website, headquarters = excluded.headquarters, sbot_lin_company_type = excluded.sbot_lin_company_type returning sbot_lin_company_id
  )
  insert into proj_repo_and_sbot_lin_company(proj_repo_id, sbot_lin_company_id) select projRepoId, sbot_lin_company_id from company on conflict(proj_repo_id, sbot_lin_company_id) do nothing;
end;
$$ language plpgsql;
create or replace function f_insert_sbot_lin_profiles_for_proj(projRepoId bigint, profiles t_ivals_sbot_lin_profile[])
returns VOID as $$
declare
  p t_ivals_sbot_lin_profile;
begin 
  with lin_profile as (
    insert into sbot_lin_profile(sbot_lin_profile_url, sbot_lin_profile_name, position, current_company_name, current_company_link, avatar, about, city, followers, sbot_lin_profile_following, education_details)
    select the_profile.sbot_lin_profile_url, the_profile.sbot_lin_profile_name, the_profile.position, the_profile.current_company_name, the_profile.current_company_link, the_profile.avatar, the_profile.about, the_profile.city, the_profile.followers, the_profile.sbot_lin_profile_following, the_profile.education_details from unnest(profiles) as the_profile
    on conflict(sbot_lin_profile_url) do update set sbot_lin_profile_name = excluded.sbot_lin_profile_name, position = excluded.position, current_company_name = excluded.current_company_name, current_company_link = excluded.current_company_link, avatar = excluded.avatar, about = excluded.about, city = excluded.city, followers = excluded.followers, sbot_lin_profile_following = excluded.sbot_lin_profile_following, education_details = excluded.education_details returning sbot_lin_profile_id
  )
  insert into proj_repo_and_sbot_lin_profile(proj_repo_id, sbot_lin_profile_id) select projRepoId, sbot_lin_profile_id from lin_profile on conflict(proj_repo_id, sbot_lin_profile_id) do nothing;
end;
$$ language plpgsql;
create or replace function f_insert_proj_repo_metadata_for_proj(projRepoId bigint, projectMetadata t_f_insert_proj_repo_metadata)
returns VOID as $$
declare
begin
  insert into proj_repo_metadata (proj_repo_id, algo_hn_eli5, repo_eli5) values(projRepoId, projectMetadata.algo_hn_eli5, projectMetadata.repo_eli5) on conflict(proj_repo_id) do update set
    algo_hn_eli5 = excluded.algo_hn_eli5, repo_eli5 = excluded.repo_eli5;
end;
$$ language plpgsql;
create or replace function f_insert_proj_repo(projectRepoArg t_f_insert_proj_repo)
returns bigint as $$
declare
githubRepoId bigint;
projRepoId bigint;
begin
  githubRepoId := f_insert_gthb_repo(projectRepoArg.gthb_repo);

  -- not updateing note here
  insert into proj_repo (gthb_repo_id, note, algo_hn_eli5, repo_eli5) values (githubRepoId, projectRepoArg.note, projectRepoArg.algo_hn_eli5, projectRepoArg.repo_eli5) on conflict(gthb_repo_id) do update set gthb_repo_id = excluded.gthb_repo_id, algo_hn_eli5 = excluded.algo_hn_eli5, repo_eli5 = excluded.repo_eli5 returning proj_repo_id into projRepoId;

  -- perform f_insert_proj_repo_metadata_for_proj(projRepoId, projectRepoArg.proj_repo_metadata);
  if projectRepoArg.algo_hn_queries is not null then
    perform f_insert_algo_hn_queries_w_stories_and_comments_for_proj(projRepoId, projectRepoArg.algo_hn_queries);
  end if;
  if projectRepoArg.sbot_lin_companies is not null then
    perform f_insert_sbot_lin_companies_for_proj(projRepoId, projectRepoArg.sbot_lin_companies);
  end if;

  if projectRepoArg.sbot_lin_profiles is not null then
    perform f_insert_sbot_lin_profiles_for_proj(projRepoId, projectRepoArg.sbot_lin_profiles);
  end if;
  with classifiers as (insert into proj_classifier (classifier) select * from unnest(projectRepoArg.proj_classifiers) on conflict (classifier) do update set classifier = excluded.classifier returning *)
  insert into proj_repo_and_proj_classifier(proj_repo_id, proj_classifier_id) select projRepoId, classifiers.proj_classifier_id from classifiers on conflict(proj_repo_id, proj_classifier_id) do nothing;
  
  return projRepoId;
end;
$$ language plpgsql;
create or replace function f_insert_proj_bookmark_w_cats(bookmarkWithCats t_f_insert_proj_bookmark_w_cats) returns boolean as $$
declare
projRepoId bigint;
bookmarkId bigint;
begin
projRepoId := f_insert_proj_repo(bookmarkWithCats.proj_repo);
insert into proj_bookmark (proj_repo_id, auth_users_id)
values(
    projRepoId,
    bookmarkWithCats.auth_users_id
  ) on conflict(proj_repo_id, auth_users_id) do
update
set proj_repo_id = excluded.proj_repo_id
returning proj_bookmark_id into bookmarkId;
with cats as (
  insert into proj_cat(auth_users_id, title)
  select bookmarkWithCats.auth_users_id, cat
  from unnest(bookmarkWithCats.proj_cats) as cat on conflict (auth_users_id, title) do
  update
  set title = excluded.title
  returning *
)
insert into proj_cat_and_proj_bookmark(proj_cat_id, proj_bookmark_id)
select cats.proj_cat_id,
  bookmarkId
from cats on conflict do nothing;
return true;
end;
$$ language plpgsql;
create or replace function f_insert_gthb_trending(githubTrending t_f_insert_gthb_trending)
returns VOID as $$
declare
projectRepoArg t_f_insert_proj_repo;
githubRepoId bigint;
projRepoId bigint;
begin
  projectRepoArg := githubTrending.proj_repo;
  githubRepoId := f_insert_gthb_repo(projectRepoArg.gthb_repo);

  -- not updateing note here
  insert into proj_repo (gthb_repo_id, note) values (githubRepoId, projectRepoArg.note) on conflict(gthb_repo_id) do update set gthb_repo_id = excluded.gthb_repo_id returning proj_repo_id into projRepoId;

  -- perform f_insert_proj_repo_metadata_for_proj(projRepoId, projectRepoArg.proj_repo_metadata);
  if projectRepoArg.algo_hn_queries is not null then
    perform f_insert_algo_hn_queries_w_stories_and_comments_for_proj(projRepoId, projectRepoArg.algo_hn_queries);
  end if;
  if projectRepoArg.sbot_lin_companies is not null then
    perform f_insert_sbot_lin_companies_for_proj(projRepoId, projectRepoArg.sbot_lin_companies);
  end if;

  if projectRepoArg.sbot_lin_profiles is not null then
    perform f_insert_sbot_lin_profiles_for_proj(projRepoId, projectRepoArg.sbot_lin_profiles);
  end if;
  with classifiers as (insert into proj_classifier (classifier) select * from unnest(projectRepoArg.proj_classifiers) on conflict (classifier) do update set classifier = excluded.classifier returning *)
  insert into proj_repo_and_proj_classifier(proj_repo_id, proj_classifier_id) select projRepoId, classifiers.proj_classifier_id from classifiers on conflict(proj_repo_id, proj_classifier_id) do nothing;
  

  insert into gthb_trending (gthb_repo_id, date_range, lang) values(githubRepoId, githubTrending.date_range, githubTrending.lang) on conflict(gthb_repo_id, date_range) do nothing;

end;
$$ language plpgsql;
create or replace function f_insert_gthb_trendings(githubTrendings t_f_insert_gthb_trending[])
returns VOID as $$
declare
trending t_f_insert_gthb_trending;
begin
  foreach trending in array githubTrendings loop
    perform f_insert_gthb_trending(trending);
  end loop;
end;
$$ language plpgsql;
create or replace function f_delete_gthb_trending_by_date_range(dateRange d_gthb_trending_date_range)
  returns VOID
  as $$
begin
  delete from gthb_trending where gthb_trending.date_range = dateRange;
end;
$$
language plpgsql;
drop function if exists f_delete_proj_bookmark(bigint);
create or replace function f_delete_proj_bookmark(projBookmarkId bigint)
  returns INTEGER
  as $$
declare
  deletedId bigint := 0;
begin
  delete from proj_bookmark where proj_bookmark_id = projBookmarkId returning proj_bookmark_id into deletedId;
  if deletedId = 0 then
    raise exception 'No bookmark found for proj_bookmark_id %', projBookmarkId;
  end if;
  return deletedId;
end;
$$
language plpgsql;
drop function if exists f_delete_proj_bookmark_by_proj_repo_id(bigint);
create or replace function f_delete_proj_bookmark_by_proj_repo_id(projRepoId bigint)
  returns INTEGER
  as $$
declare
  deletedId bigint := 0;
begin
  delete from proj_bookmark where proj_repo_id = projRepoId returning proj_repo_id into deletedId;
  if deletedId = 0 then
    raise exception 'No bookmark found for projRepoId %', projRepoId;
  end if;
  return deletedId;
end;
$$
language plpgsql;
create or replace function f_delete_user()
returns boolean
language plpgsql
as $$
begin
  delete from auth.mfa_amr_claims where session_id in (select id from auth.sessions where user_id = auth_uid());
	delete from auth.users where id = auth_uid();
  delete from auth.sessions where user_id = auth_uid();
  delete from auth.refresh_tokens where user_id = auth_uid()::varchar;
  delete from auth.mfa_factors where user_id = auth_uid();
  delete from auth.identities where user_id = auth_uid();
  delete from auth.flow_state where auth.flow_state.user_id = auth_uid();
  delete from auth.audit_log_entries;
  delete from proj_bookmark where auth_users_id = auth_uid();
  return true;
end;
$$;
create or replace function f_tr_delete_unreferenced_algo_hn_query() returns trigger as $$
begin
  delete from algo_hn_query
  where not exists (
    select 1 from proj_repo_and_algo_hn_query
    where algo_hn_query.algo_hn_query_id = proj_repo_and_algo_hn_query.algo_hn_query_id
  );
  return null;
end;
$$ language plpgsql security definer;
create or replace function f_tr_delete_unreferenced_algo_hn_tag() returns trigger as $$
begin
  delete from algo_hn_tag
  where not exists (
    select 1 from algo_hn_story_and_algo_hn_tag
    where algo_hn_tag.algo_hn_tag_id = algo_hn_story_and_algo_hn_tag.algo_hn_tag_id
  )
  and 
   not exists (
    select 1 from algo_hn_comment_and_algo_hn_tag
    where algo_hn_tag.algo_hn_tag_id = algo_hn_comment_and_algo_hn_tag.algo_hn_tag_id
  );
  return null;
end;
$$ language plpgsql security definer;
create or replace function f_tr_delete_unreferenced_gthb_lang() returns trigger as $$
begin
  delete from gthb_lang
  where not exists (
    select 1 from gthb_repo_and_gthb_lang
    where gthb_lang.gthb_lang_id = gthb_repo_and_gthb_lang.gthb_lang_id
  );
  return null;
end;
$$ language plpgsql security definer;
create or replace function f_tr_delete_unreferenced_gthb_repo_from_gthb_trending() returns trigger as $$
begin
  delete from gthb_repo
  where not exists (
    select 1 from gthb_trending
    where gthb_trending.gthb_repo_id = old.gthb_repo_id
  )
  and
   not exists (
    select 1 from proj_bookmark inner join proj_repo on proj_bookmark.proj_repo_id = proj_repo.proj_repo_id
    where proj_repo.gthb_repo_id = old.gthb_repo_id
  );
  return null;
end;
$$ language plpgsql security definer;
create or replace function f_tr_delete_unreferenced_gthb_repo() returns trigger as $$
begin
  delete from gthb_repo
  where not exists (
    select 1 from proj_repo
    where proj_repo.gthb_repo_id = gthb_repo.gthb_repo_id
  );
  return null;
end;
$$ language plpgsql security definer;
create or replace function f_tr_delete_unreferenced_proj_repo() returns trigger as $$
begin
  delete from proj_repo
  where not exists (
    select 1 from gthb_trending
    where gthb_trending.gthb_repo_id = proj_repo.gthb_repo_id
  )
  and
   not exists (
    select 1 from proj_bookmark
    where proj_bookmark.proj_repo_id = proj_repo.proj_repo_id
  );
  return null;
end;
$$ language plpgsql security definer;
create or replace function f_tr_delete_unreferenced_sbot_lin_company() returns trigger as $$
begin
  delete from sbot_lin_company
  where not exists (
    select 1 from proj_repo_and_sbot_lin_company
    where sbot_lin_company.sbot_lin_company_id = proj_repo_and_sbot_lin_company.sbot_lin_company_id
  );
  return null;
end;
$$ language plpgsql security definer;
create or replace function f_tr_delete_unreferenced_sbot_lin_profile() returns trigger 
as $$
begin
  delete from sbot_lin_profile
  where not exists (
    select 1 from proj_repo_and_sbot_lin_profile
    where sbot_lin_profile.sbot_lin_profile_id = proj_repo_and_sbot_lin_profile.sbot_lin_profile_id
  );
  return null;
end;
$$ language plpgsql security definer;
create or replace function f_tr_signup_based_on_whitelist()
returns trigger
language plpgsql
security definer
as $$
declare has_email boolean := FALSE;
begin
  select count(*) > 0 from public.user_whitelist where (kind = 'email' and user_whitelist_value = new.email) or (kind = 'domain' and user_whitelist_value = substring(new.email from position('@' in new.email) + 1)) into has_email;
 
  if has_email then
    return new;
  else
    raise exception 'Email not in whitelist';
  end if;
end;
$$;
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


create or replace function f_tr_delete_unreferenced_gthb_repo_topic() returns trigger as $$
begin
  delete from gthb_repo_topic
  where not exists (
    select 1 from gthb_repo_and_gthb_repo_topic
    where gthb_repo_and_gthb_repo_topic.gthb_repo_topic_id = gthb_repo_topic.gthb_repo_topic_id
  );
  return null;
end;
$$ language plpgsql security definer;
create or replace function f_tr_delete_unreferenced_proj_classifier() returns trigger as $$
begin
  delete from proj_classifier
  where not exists (
    select 1 from proj_repo_and_proj_classifier
    where proj_repo_and_proj_classifier.proj_classifier_id = proj_classifier.proj_classifier_id
  );
  return null;
end;
$$ language plpgsql security definer;
drop function if exists f_tr_delete_unreferenced_gthb_owner() cascade;
create or replace function f_tr_delete_unreferenced_gthb_owner() returns trigger as $$
begin
  delete from gthb_owner
  where not exists (
    select 1 from gthb_repo
    where gthb_owner.gthb_owner_id = gthb_repo.gthb_owner_id
  ) and not exists (
    select 1 from gthb_repo_contr
    where gthb_owner.gthb_owner_id = gthb_repo_contr.gthb_owner_id
  );
  return null;
end;
$$ language plpgsql security definer;
create or replace function f_get_updatable_bookmarks_wo_gthb_trending()
  returns table(gthb_repo_name bigint, gthb_owner_login bigint)
  as $$
begin
  return query select gthb_repo.gthb_repo_name, gthb_owner.gthb_owner_login from gthb_repo inner join proj_repo on proj_repo.gthb_repo_id = gthb_repo.gthb_repo_id inner join proj_bookmark on proj_bookmark.proj_repo_id = proj_repo.proj_repo_id inner join gthb_owner on gthb_owner.gthb_owner_id = gthb_repo.gthb_owner_id where not exists (
    select 1 from gthb_trending where gthb_trending.gthb_repo_id = gthb_repo.gthb_repo_id
  );
end;
$$
language plpgsql;


create or replace function f_get_updatable_gthb_trendings(isDaily boolean, isWeekly boolean, isMonthly boolean)
  returns table(gthb_repo_name bigint, gthb_owner_login bigint)
  as $$
begin
  return query select gthb_trending.gthb_repo_name, gthb_owner.gthb_owner_login from gthb_repo inner join gthb.trending on gthb_trending.gthb_repo_id = gthb_repo.gthb_repo_id inner join gthb_owner on gthb_owner.gthb_owner_id = gthb_repo.gthb_owner_id where not exists (
    select 1 from gthb_trending where gthb_trending.gthb_repo_id = gthb_repo.gthb_repo_id
  ) and (
      (isDaily = false and gthb_trending.date_range != 'daily') or
      (isWeekly = false and gthb_trending.date_range != 'weekly') or
      (isMonthly = false and gthb_trending.date_range != 'monthly')
    );
end;
$$
language plpgsql;


create or replace function f_is_proj_repo_bookmarked(projRepoId bigint)
  returns boolean
  as $$
begin
  return exists(select 1 from proj_bookmark where proj_bookmark.proj_repo_id = projRepoId);
end;
$$
language plpgsql;


drop function if exists f_is_gthb_repo_bookmarked(githubRepoName text);
create or replace function f_is_gthb_repo_bookmarked(githubRepoName text)
  returns boolean
  as $$
declare
  isBookmarked boolean;
begin
  select exists (
    select 1 from gthb_repo
    inner join proj_repo on proj_repo.gthb_repo_id = gthb_repo.gthb_repo_id
    inner join proj_bookmark on proj_bookmark.proj_repo_id = proj_repo.proj_repo_id
    where gthb_repo.gthb_repo_name = githubRepoName
  ) into isBookmarked;
  return isBookmarked;
end;
$$
language plpgsql immutable;


-- drop function if exists f_is_gthb_repo_bookmarked(ownerLogin text, repoName text);
-- create or replace function f_is_gthb_repo_bookmarked(ownerLogin text, repoName text)
--   returns boolean
--   as $$
-- declare
--   isBookmarked boolean;
-- begin
--   select exists (
--     select 1 from gthb_repo
--     inner join proj_repo on proj_repo.gthb_repo_id = gthb_repo.gthb_repo_id
--     inner join proj_bookmark on proj_bookmark.proj_repo_id = proj_repo.proj_repo_id
--     inner join gthb_owner on gthb_owner.gthb_owner_id = gthb_repo.gthb_owner_id
--     where gthb_owner.gthb_owner_login = ownerLogin and gthb_repo.gthb_repo_name = repoName
--   ) into isBookmarked;
--   return isBookmarked;
-- end;
-- $$
-- language plpgsql immutable;
drop function if exists f_select_updatable(isDaily boolean, isWeekly boolean, isMonthly boolean);
create or replace function f_select_updatable(isDaily boolean, isWeekly boolean, isMonthly boolean)
  returns setof t_f_select_updatable_result
  as $$
begin
  return query select gthb_repo.gthb_repo_name, gthb_owner.gthb_owner_login from gthb_repo
  inner join gthb_owner on gthb_owner.gthb_owner_id = gthb_repo.gthb_owner_id
  inner join proj_repo on proj_repo.gthb_repo_id = gthb_repo.gthb_repo_id
  inner join proj_bookmark on proj_bookmark.proj_repo_id = proj_repo.proj_repo_id
  where not exists (
    select 1 from gthb_trending
    where gthb_trending.gthb_repo_id = gthb_repo.gthb_repo_id
  )
  union
  select gthb_repo.gthb_repo_name, gthb_owner.gthb_owner_login from gthb_repo
  inner join gthb_trending on gthb_trending.gthb_repo_id = gthb_repo.gthb_repo_id
  inner join gthb_owner on gthb_owner.gthb_owner_id = gthb_repo.gthb_owner_id
  where not (
      (isDaily = false and gthb_trending.date_range != 'daily') or
      (isWeekly = false and gthb_trending.date_range != 'weekly') or
      (isMonthly = false and gthb_trending.date_range != 'monthly')
    );
end;
$$
language plpgsql;


drop function if exists f_list_bookmarked_gthb_repo();
drop function if exists f_list_bookmarked_gthb_repo(text);
create or replace function f_list_bookmarked_gthb_repo()
  returns setof "gthb_repo"
  as $$
begin
  return query select gthb_repo.* from gthb_repo
  inner join gthb_owner on gthb_owner.gthb_owner_id = gthb_repo.gthb_owner_id
  inner join proj_repo on proj_repo.gthb_repo_id = gthb_repo.gthb_repo_id
  inner join proj_bookmark on proj_bookmark.proj_repo_id = proj_repo.proj_repo_id
  where auth.uid() = proj_bookmark.auth_users_id;
end;
$$
language plpgsql stable;

drop function if exists f_list_trending_gthb_repo();
drop function if exists f_list_trending_gthb_repo(text);
create or replace function f_list_trending_gthb_repo(gthb_date_range_arg text)
  returns setof "gthb_repo"
  as $$
begin
  return query select gthb_repo.* from gthb_repo
  inner join gthb_trending on gthb_repo.gthb_repo_id = gthb_trending.gthb_repo_id
  where gthb_trending.date_range = gthb_date_range_arg;
end;
$$
language plpgsql stable;


drop function if exists f_delete_proj_bookmark_on_proj_cat_by_title_and_gthb_name(catTitle text, ownerLogin text, repoName text);
create or replace function f_delete_proj_bookmark_on_proj_cat_by_title_and_gthb_name(catTitle text, ownerLogin text, repoName text)
  returns boolean
  as $$
declare
  resultId bigint;
begin
  delete from proj_cat_and_proj_bookmark
  where proj_cat_id in (
    select proj_cat.proj_cat_id from proj_cat
    inner join proj_cat_and_proj_bookmark on proj_cat_and_proj_bookmark.proj_cat_id = proj_cat.proj_cat_id
    inner join proj_bookmark on proj_bookmark.proj_bookmark_id = proj_cat_and_proj_bookmark.proj_bookmark_id
    inner join proj_repo on proj_repo.proj_repo_id = proj_bookmark.proj_repo_id
    inner join gthb_repo on gthb_repo.gthb_repo_id = proj_repo.gthb_repo_id
    inner join gthb_owner on gthb_owner.gthb_owner_id = gthb_owner.gthb_owner_id
    where proj_cat.title = catTitle and gthb_owner.gthb_owner_login = ownerLogin and gthb_repo.gthb_repo_name = repoName 
  )
  returning proj_cat_id
  into resultId;

  if resultId is null then
    raise exception 'No bookmark on category deleted';
  end if;
  return true;
end;
$$
language plpgsql;
drop function if exists f_delete_proj_bookmark_on_proj_cat_by_title_and_gthb_repo_id(catTitle text, id bigint);
create or replace function f_delete_proj_bookmark_on_proj_cat_by_title_and_gthb_repo_id(catTitle text, id bigint)
  returns boolean
  as $$
declare
  resultId bigint;
  rowCount int;
begin
  delete from proj_cat_and_proj_bookmark
  where proj_bookmark_id in (
    select proj_cat_and_proj_bookmark.proj_bookmark_id from proj_cat_and_proj_bookmark
    inner join proj_cat on proj_cat.proj_cat_id = proj_cat_and_proj_bookmark.proj_cat_id
    inner join proj_bookmark on proj_bookmark.proj_bookmark_id = proj_cat_and_proj_bookmark.proj_bookmark_id
    inner join proj_repo on proj_repo.proj_repo_id = proj_bookmark.proj_repo_id
    inner join gthb_repo on gthb_repo.gthb_repo_id = proj_repo.gthb_repo_id
    inner join gthb_owner on gthb_owner.gthb_owner_id = gthb_owner.gthb_owner_id
    where proj_cat.title = catTitle and gthb_repo.gthb_repo_id = id and auth.uid() = proj_cat.auth_users_id
  );
 

  GET DIAGNOSTICS rowCount = ROW_COUNT;

  if rowCount = 0 then
    raise exception 'No bookmark on category deleted';
  end if;
  return true;
end;
$$
language plpgsql;
drop function if exists f_delete_proj_bookmark_by_gthb_name(ownerLogin text, repoName text);
create or replace function f_delete_proj_bookmark_by_gthb_name(ownerLogin text, repoName text)
  returns boolean
  as $$
declare
  projRepoId bigint;
begin
  delete from proj_bookmark
  where proj_repo_id in (
    select proj_repo.proj_repo_id from proj_repo
    inner join proj_bookmark on proj_bookmark.proj_repo_id = proj_bookmark.proj_repo_id
    inner join gthb_repo on gthb_repo.gthb_repo_id = proj_repo.gthb_repo_id
    inner join gthb_owner on gthb_owner.gthb_owner_id = gthb_owner.gthb_owner_id
    where gthb_repo.gthb_repo_name = repoName and gthb_owner.gthb_owner_login = ownerLogin
  )
  returning proj_repo_id
  into projRepoId;

  if projRepoId is null then
    raise exception 'No bookmark deleted';
  end if;
  return true;
end;
$$
language plpgsql;
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
drop function if exists f_get_gthb_owner_by_gthb_name(text, text);
create or replace function f_get_gthb_owner_by_gthb_name(ownerLogin text, repoName text)
  returns setof "gthb_owner"
  as $$
begin
  return query select gthb_owner.* from gthb_repo
  inner join gthb_owner on gthb_owner.gthb_owner_id = gthb_repo.gthb_owner_id
  where gthb_owner.gthb_owner_login = ownerLogin and gthb_repo.gthb_repo_name = repoName;
end;
$$
language plpgsql stable;
drop function if exists f_get_gthb_repo_by_gthb_name(text, text);
create or replace function f_get_gthb_repo_by_gthb_name(ownerLogin text, repoName text)
  returns setof "gthb_repo"
  as $$
begin
  return query select gthb_repo.* from gthb_repo
  inner join gthb_owner on gthb_owner.gthb_owner_id = gthb_repo.gthb_owner_id
  where gthb_owner.gthb_owner_login = ownerLogin and gthb_repo.gthb_repo_name = repoName;
end;
$$
language plpgsql stable;
drop type if exists t_f_get_gthb_repos_by_names_arg cascade;
create type t_f_get_gthb_repos_by_names_arg as (
  identifiers t_f_gthb_repo_identifier[]
);

drop function if exists f_get_gthb_repos_by_names(t_f_get_gthb_repos_by_names_arg);
create or replace function f_get_gthb_repos_by_names(repoIdentifiersArg t_f_get_gthb_repos_by_names_arg)
  returns setof "gthb_repo"
  as $$
begin
  return query select gthb_repo.* from gthb_repo
  inner join gthb_owner on gthb_owner.gthb_owner_id = gthb_repo.gthb_owner_id
  inner join proj_repo on proj_repo.gthb_repo_id = gthb_repo.gthb_repo_id
  inner join unnest(repoIdentifiersArg) repoIdentifier on gthb_owner.gthb_owner_login = repoIdentifier.gthb_owner_login and gthb_repo.gthb_repo_name = repoIdentifier.gthb_repo_name;
end;
$$
language plpgsql stable;
drop function if exists f_get_proj_bookmark_by_gthb_name(text, text);
create or replace function f_get_proj_bookmark_by_gthb_name(ownerLogin text, repoName text)
  returns setof "proj_bookmark"
  as $$
begin
  return query select proj_bookmark.* from gthb_repo
  inner join gthb_owner on gthb_owner.gthb_owner_id = gthb_repo.gthb_owner_id
  inner join proj_repo on proj_repo.gthb_repo_id = gthb_repo.gthb_repo_id
  inner join proj_bookmark on proj_bookmark.proj_repo_id = proj_repo.proj_repo_id
  where gthb_owner.gthb_owner_login = ownerLogin and gthb_repo.gthb_repo_name = repoName;
end;
$$
language plpgsql stable;

drop function if exists f_get_proj_repo_by_gthb_name(text, text);
create or replace function f_get_proj_repo_by_gthb_name(ownerLogin text, repoName text)
  returns setof "proj_repo"
  as $$
begin
  return query select proj_repo.* from gthb_repo
  inner join gthb_owner on gthb_owner.gthb_owner_id = gthb_repo.gthb_owner_id
  inner join proj_repo on proj_repo.gthb_repo_id = gthb_repo.gthb_repo_id
  where gthb_owner.gthb_owner_login = ownerLogin and gthb_repo.gthb_repo_name = repoName;
end;
$$
language plpgsql stable;

create or replace function f_tr_delete_unreferenced_proj_cat() returns trigger as $$
begin
  delete from proj_cat
  where not exists (
    select 1 from proj_cat_and_proj_bookmark
    where proj_cat_and_proj_bookmark.proj_cat_id = proj_cat.proj_cat_id
  );
  return null;
end;
$$ language plpgsql security definer;
drop function if exists f_get_gthb_org_by_gthb_repo_id(gthb_repo_id_arg bigint);
create or replace function f_get_gthb_org_by_gthb_repo_id(gthb_repo_id_arg bigint)
  returns setof "gthb_org"
  as $$
begin
  return query select gthb_org.* from gthb_repo
  inner join gthb_owner on gthb_owner.gthb_owner_id = gthb_repo.gthb_owner_id
  inner join gthb_org on gthb_org.gthb_org_id = gthb_owner.gthb_owner_id
  where gthb_repo.gthb_repo_id = gthb_repo_id_arg;
end;
$$
language plpgsql immutable;
drop function if exists f_get_gthb_org_by_gthb_name(text, text);
create or replace function f_get_gthb_org_by_gthb_name(ownerLogin text, repoName text)
  returns setof "gthb_org"
  as $$
begin
  return query select gthb_org.* from gthb_repo
  inner join gthb_owner on gthb_owner.gthb_owner_id = gthb_repo.gthb_owner_id
  inner join gthb_org on gthb_org.gthb_org_id = gthb_owner.gthb_owner_id
  where gthb_owner.gthb_owner_login = ownerLogin and gthb_repo.gthb_repo_name = repoName;
end;
$$
language plpgsql stable;
drop function if exists f_get_gthb_user_by_gthb_name(text, text);
create or replace function f_get_gthb_user_by_gthb_name(ownerLogin text, repoName text)
  returns setof "gthb_user"
  as $$
begin
  return query select gthb_org.* from gthb_repo
  inner join gthb_owner on gthb_owner.gthb_owner_id = gthb_repo.gthb_owner_id
  inner join gthb_user on gthb_user.gthb_user_id = gthb_owner.gthb_owner_id
  where gthb_owner.gthb_owner_login = ownerLogin and gthb_repo.gthb_repo_name = repoName;
end;
$$
language plpgsql stable;
drop function if exists f_get_gthb_user_by_gthb_repo_id(gthb_repo_id_arg bigint);
create or replace function f_get_gthb_user_by_gthb_repo_id(gthb_repo_id_arg bigint)
  returns setof "gthb_user"
  as $$
begin
  return query select gthb_user.* from gthb_repo
  inner join gthb_owner on gthb_owner.gthb_owner_id = gthb_repo.gthb_owner_id
  inner join gthb_user on gthb_user.gthb_user_id = gthb_owner.gthb_owner_id
  where gthb_repo.gthb_repo_id = gthb_repo_id_arg;
end;
$$
language plpgsql stable;
drop function if exists f_list_gthb_repos_by_cat_title(text);
create or replace function f_list_gthb_repos_by_cat_title(cat_title_arg text)
  returns setof "gthb_repo"
  as $$
begin
  return query select gthb_repo.* from gthb_repo
  inner join proj_repo on proj_repo.gthb_repo_id = gthb_repo.gthb_repo_id
  inner join proj_bookmark on proj_bookmark.proj_repo_id = proj_repo.proj_repo_id
  inner join proj_cat_and_proj_bookmark on proj_cat_and_proj_bookmark.proj_bookmark_id = proj_bookmark.proj_bookmark_id
  inner join proj_cat on proj_cat.proj_cat_id = proj_cat_and_proj_bookmark.proj_cat_id
  where proj_cat.title = cat_title_arg and auth.uid() = proj_cat.auth_users_id;
end;
$$
language plpgsql stable;

create or replace trigger tr_on_delete_delete_unreferenced_algo_hn_query
  after delete on proj_repo_and_algo_hn_query
  for each STATEMENT
  execute function f_tr_delete_unreferenced_algo_hn_query();

create or replace trigger tr_on_delete_algo_hn_story_delete_unreferenced_algo_hn_tag
  after delete on algo_hn_story
  for each STATEMENT
  execute function f_tr_delete_unreferenced_algo_hn_tag();

create or replace trigger tr_on_delete_algo_hn_comment_delete_unreferenced_algo_hn_tag
  after delete on algo_hn_comment
  for each STATEMENT
  execute function f_tr_delete_unreferenced_algo_hn_tag();

create or replace trigger tr_on_delete_delete_unreferenced_gthb_lang
  after delete on gthb_repo_and_gthb_lang
  for each STATEMENT
  execute function f_tr_delete_unreferenced_gthb_lang();

create or replace trigger tr_on_delete_delete_unreferenced_sbot_lin_company
  after delete on proj_repo_and_sbot_lin_company
  for each STATEMENT
  execute function f_tr_delete_unreferenced_sbot_lin_company();

create or replace trigger tr_on_delete_delete_unreferenced_sbot_lin_profile
  after delete on proj_repo_and_sbot_lin_profile
  for each STATEMENT
  execute function f_tr_delete_unreferenced_sbot_lin_profile();

create or replace trigger tr_on_delete_proj_bookmark_delete_unreferenced_proj_repo
  after delete on proj_bookmark
  for each STATEMENT
  execute function f_tr_delete_unreferenced_proj_repo();

create or replace trigger tr_on_delete_gthb_trending_delete_unreferenced_proj_repo
  after delete on gthb_trending
  for each STATEMENT
  execute function f_tr_delete_unreferenced_proj_repo();

create or replace trigger tr_on_delete_proj_repo_delete_unreferenced_gthb_repo
  after delete on proj_repo
  for each STATEMENT
  execute function f_tr_delete_unreferenced_gthb_repo();

create or replace trigger tr_on_delete_gthb_repo_delete_unreferenced_gthb_repo_topic
  after delete on gthb_repo
  for each STATEMENT
  execute function f_tr_delete_unreferenced_gthb_repo_topic();

create or replace trigger tr_on_delete_proj_repo_delete_unreferenced_proj_repo_classifier
  after delete on proj_repo
  for each STATEMENT
  execute function f_tr_delete_unreferenced_proj_classifier();

create or replace trigger tr_on_delete_gthb_repo_delete_unreferenced_gthb_owner
  after delete on gthb_repo
  for each STATEMENT
  execute function f_tr_delete_unreferenced_gthb_owner();

create or replace trigger tr_signup_based_on_whitelist
  before insert on auth.users
  for each row execute function f_tr_signup_based_on_whitelist();

create or replace trigger tr_on_delete_proj_bookmark_delete_unreferenced_proj_cat
  after delete on proj_bookmark
  for each STATEMENT
  execute function f_tr_delete_unreferenced_proj_cat();

create or replace trigger tr_on_delete_proj_cat_and_proj_bookmark_delete_unreferenced_proj_cat
  after delete on proj_cat_and_proj_bookmark
  for each STATEMENT
  execute function f_tr_delete_unreferenced_proj_cat();
do
$$
declare
  row record;
begin
  for row in select tablename from pg_tables as tablename
    where tablename.schemaname = 'public'
  loop
    execute format('alter table %I enable row level security', row.tablename);
  end loop;
end;
$$;

drop policy if exists "authenticated can access proj_bookmark" on proj_bookmark;
create policy "authenticated can access proj_bookmark"
  on proj_bookmark for all to authenticated
  using (auth.uid() = proj_bookmark.auth_users_id);

drop policy if exists "if proj_bookmark.is_public allow select access to proj_bookmark" on proj_bookmark;
create policy "if proj_bookmark.is_public allow select access to proj_bookmark"
  on proj_bookmark for select to authenticated
  using (proj_bookmark.is_public = true);

drop policy if exists "authenticated can access proj_cat" on proj_cat;
create policy "authenticated can access proj_cat"
  on proj_cat for all to authenticated
  using (auth.uid() = proj_cat.auth_users_id);

drop policy if exists "authenticated can select proj_cat_and_proj_bookmark" on proj_cat_and_proj_bookmark;
create policy "authenticated can select proj_cat_and_proj_bookmark"
  on proj_cat_and_proj_bookmark for all to authenticated
  using (auth.uid() in (
    select proj_bookmark.auth_users_id from proj_bookmark where proj_bookmark.proj_bookmark_id = proj_cat_and_proj_bookmark.proj_bookmark_id
  ) and auth.uid() in (
    select proj_cat.auth_users_id from proj_cat where proj_cat.proj_cat_id = proj_cat_and_proj_bookmark.proj_cat_id
  ));

drop policy if exists "if proj_cat.is_public allow select access to proj_cat" on proj_cat;
create policy "if proj_cat.is_public allow select access to proj_cat"
  on proj_cat for select to authenticated
  using (proj_cat.is_public = true);

drop policy if exists "authenticated can access proj_repo" on proj_repo;
create policy "authenticated can access proj_repo"
  on proj_repo for all to authenticated
  using (auth.uid() in (
    select proj_bookmark.auth_users_id from proj_bookmark where proj_bookmark.proj_repo_id = proj_repo.proj_repo_id
  ));
drop policy if exists "authenticated can access proj_repo via gthb_trending" on proj_repo;
create policy "authenticated can access proj_repo via gthb_trending"
  on proj_repo for all to authenticated
  using (
    proj_repo.gthb_repo_id in (
      select gthb_trending.gthb_repo_id from gthb_trending
    )
  );

drop policy if exists "authenticated can access gthb_repo" on gthb_repo;
create policy "authenticated can access gthb_repo"
  on gthb_repo for all to authenticated
  using (auth.uid() in (
    select proj_bookmark.auth_users_id from proj_cat inner join proj_repo on gthb_repo.gthb_repo_id = proj_repo.gthb_repo_id inner join proj_bookmark on proj_bookmark.proj_repo_id = proj_repo.proj_repo_id
  ));

drop policy if exists "admin can access user_whitelist" on user_whitelist;
create policy "admin can access user_whitelist"
  on user_whitelist for all to authenticated
  using (auth.uid() in (
    select auth_users_id from user_admin
  ));

drop policy if exists "admin can insert admins" on user_admin;
create policy "admin can insert admins"
  on user_admin for insert to authenticated
  with check (auth.uid() in (
    select auth_users_id from user_admin
  ));

drop policy if exists "admin can select admins" on user_admin;
create policy "admin can select admins"
  on user_admin for select to authenticated
  using (auth.uid() in (
    select auth_users_id from user_admin
  ));

drop policy if exists "admin can only update himself" on user_admin;
create policy "admin can only update himself"
  on user_admin for update to authenticated
  using (auth.uid() = user_admin.auth_users_id);

drop policy if exists "admin can only delete himself" on user_admin;
create policy "admin can only delete himself"
  on user_admin for delete to authenticated
  using (auth.uid() = user_admin.auth_users_id);

drop policy if exists "authenticated can select gthb_trending" on gthb_trending;
create policy "authenticated can select gthb_trending"
  on gthb_trending for select to authenticated using (true);

drop policy if exists "authenticated can select gthb_repo" on gthb_repo;
create policy "authenticated can select gthb_repo"
  on gthb_repo for select to authenticated
  using (true);

drop policy if exists "authenticated can select gthb_star_hist" on gthb_star_hist;
create policy "authenticated can select gthb_star_hist"
  on gthb_star_hist for select to authenticated
  using (true);

drop policy if exists "authenticated can select gthb_fork_hist" on gthb_fork_hist;
create policy "authenticated can select gthb_fork_hist"
  on gthb_fork_hist for select to authenticated
  using (true);

drop policy if exists "authenticated can select gthb_issue_hist" on gthb_issue_hist;
create policy "authenticated can select gthb_issue_hist"
  on gthb_issue_hist for select to authenticated
  using (true);

drop policy if exists "authenticated can select gthb_repo_contr" on gthb_repo_contr;
create policy "authenticated can select gthb_repo_contr"
  on gthb_repo_contr for select to authenticated
  using (true);

drop policy if exists "authenticated can select algo_hn_comment" on algo_hn_comment;
create policy "authenticated can select algo_hn_comment"
  on algo_hn_comment for select to authenticated
  using (true);

drop policy if exists "authenticated can select algo_hn_story" on algo_hn_story;
create policy "authenticated can select algo_hn_story"
  on algo_hn_story for select to authenticated
  using (true);

drop policy if exists "authenticated can select algo_hn_query" on algo_hn_query;
create policy "authenticated can select algo_hn_query"
  on algo_hn_query for select to authenticated
  using (true);

drop policy if exists "authenticated can select proj_repo" on proj_repo;
create policy "authenticated can select proj_repo"
  on proj_repo for select to authenticated
  using (true);

drop policy if exists "authenticated can select gthb_owner" on gthb_owner;
create policy "authenticated can select gthb_owner"
  on gthb_owner for select to authenticated
  using (true);

drop policy if exists "authenticated can select gthb_user" on gthb_user;
create policy "authenticated can select gthb_user"
  on gthb_user for select to authenticated
  using (true);

drop policy if exists "authenticated can select gthb_org" on gthb_org;
create policy "authenticated can select gthb_org"
  on gthb_org for select to authenticated
  using (true);

drop policy if exists "authenticated can select sbot_lin_profile" on sbot_lin_profile;
create policy "authenticated can select sbot_lin_profile"
  on sbot_lin_profile for select to authenticated
  using (true);

drop policy if exists "authenticated can select sbot_lin_company" on sbot_lin_company;
create policy "authenticated can select sbot_lin_company"
  on sbot_lin_company for select to authenticated
  using (true);

drop policy if exists "authenticated can select algo_hn_tag" on algo_hn_tag;
create policy "authenticated can select algo_hn_tag"
  on algo_hn_tag for select to authenticated
  using (true);

drop policy if exists "authenticated can select gthb_lang" on gthb_lang;
create policy "authenticated can select gthb_lang"
  on gthb_lang for select to authenticated
  using (true);

drop policy if exists "authenticated can select gthb_repo_topic" on gthb_repo_topic;
create policy "authenticated can select gthb_repo_topic"
  on gthb_repo_topic for select to authenticated
  using (true);

drop policy if exists "authenticated can select proj_repo_and_algo_hn_query" on proj_repo_and_algo_hn_query;
create policy "authenticated can select proj_repo_and_algo_hn_query"
  on proj_repo_and_algo_hn_query for select to authenticated
  using (true);

-- drop policy if exists "authenticated can select proj_repo_metadata" on proj_repo_metadata;
-- create policy "authenticated can select proj_repo_metadata"
--   on proj_repo_metadata for select to authenticated
--   using (true);

drop policy if exists "authenticated can select proj_repo_and_sbot_lin_profile" on proj_repo_and_sbot_lin_profile;
create policy "authenticated can select proj_repo_and_sbot_lin_profile"
  on proj_repo_and_sbot_lin_profile for select to authenticated
  using (true);

drop policy if exists "authenticated can select proj_repo_and_sbot_lin_company" on proj_repo_and_sbot_lin_company;
create policy "authenticated can select proj_repo_and_sbot_lin_company"
  on proj_repo_and_sbot_lin_company for select to authenticated
  using (true);

drop policy if exists "authenticated can select proj_repo_and_proj_classifier" on proj_repo_and_proj_classifier;
create policy "authenticated can select proj_repo_and_proj_classifier"
  on proj_repo_and_proj_classifier for select to authenticated
  using (true);

drop policy if exists "authenticated can select pinned_proj_bookmark" on pinned_proj_bookmark;
-- create policy "authenticated can select pinned_proj_bookmark"
--   on pinned_proj_bookmark for select to authenticated
--   using (true);

drop policy if exists "authenticated can select algo_hn_story_and_algo_hn_tag" on algo_hn_story_and_algo_hn_tag;
create policy "authenticated can select algo_hn_story_and_algo_hn_tag"
  on algo_hn_story_and_algo_hn_tag for select to authenticated
  using (true);

drop policy if exists "authenticated can select gthb_repo_and_gthb_lang" on gthb_repo_and_gthb_lang;
create policy "authenticated can select gthb_repo_and_gthb_lang"
  on gthb_repo_and_gthb_lang for select to authenticated
  using (true);

drop policy if exists "authenticated can select gthb_repo_and_gthb_repo_topic" on gthb_repo_and_gthb_repo_topic;
create policy "authenticated can select gthb_repo_and_gthb_repo_topic"
  on gthb_repo_and_gthb_repo_topic for select to authenticated
  using (true);


grant select on table public.user_whitelist to supabase_auth_admin;

