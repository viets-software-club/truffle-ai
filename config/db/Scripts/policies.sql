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
  using ((select auth.uid()) in (
    select auth_users_id from user_admin
  ))
  with check ((select auth.uid()) in (
    select auth_users_id from user_admin
  ));

drop policy if exists "admin can insert admins" on user_admin;
create policy "admin can insert admins"
  on user_admin for insert to authenticated
  with check (f_is_admin());

drop policy if exists "admin can select admins" on user_admin;
create policy "admin can select admins"
  on user_admin for select to authenticated
   using (f_is_admin());

drop policy if exists "admin can only update himself" on user_admin;
create policy "admin can only update himself"
  on user_admin for update to authenticated
  using (auth.uid() = user_admin.auth_users_id);

drop policy if exists "admin can delete admins" on user_admin;
create policy "admin can delete admins"
  on user_admin for delete to authenticated
  using (f_is_admin());

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

drop policy if exists "authenticated can select algo_hn_comment_and_algo_hn_tag" on algo_hn_comment_and_algo_hn_tag;
create policy "authenticated can select algo_hn_comment_and_algo_hn_tag"
  on algo_hn_comment_and_algo_hn_tag for select to authenticated
  using (true);

drop policy if exists "authenticated can select gthb_repo_and_gthb_lang" on gthb_repo_and_gthb_lang;
create policy "authenticated can select gthb_repo_and_gthb_lang"
  on gthb_repo_and_gthb_lang for select to authenticated
  using (true);

drop policy if exists "authenticated can select gthb_repo_and_gthb_repo_topic" on gthb_repo_and_gthb_repo_topic;
create policy "authenticated can select gthb_repo_and_gthb_repo_topic"
  on gthb_repo_and_gthb_repo_topic for select to authenticated
  using (true);


drop view if exists public.members_view;
create or replace view public.members_view
    with (security_invoker=on)
    as
select
    id as auth_users_id,
    email,
    created_at
from
    auth.users;
comment on view public.members_view is e'@graphql({"primary_key_columns": ["auth_users_id"]})';
grant select on public.members_view to authenticated;

drop view if exists public.admins_view;
create or replace view public.admins_view
    with (security_invoker=on)
    as
select
auth_users_id, email, created_at from user_admin
inner join auth.users on user_admin.auth_users_id = auth.users.id;
comment on view public.admins_view is e'@graphql({"primary_key_columns": ["auth_users_id"]})';
grant select on public.admins_view to authenticated;
grant select on auth.users to authenticated;

alter table auth.users enable row level security;
drop policy if exists "admins can select auth.users" on auth.users;
create policy "admins can select auth.users" on auth.users
  for select
  using (((select auth.uid()) = id) or (auth.uid() in (
    select auth_users_id from user_admin
  )));

-- drop view if exists is_admin_view;
-- CREATE OR REPLACE VIEW is_admin_view AS
-- SELECT auth.uid() as id, f_is_admin() as is_admin;
-- grant select on public.is_admin_view to authenticated;
-- COMMENT ON VIEW is_admin_view IS E'@graphql({"primary_key_columns": ["id"]})';

drop policy if exists "authenticated can select their own user_api_key" on user_api_key;
create policy "authenticated can select their own user_api_key" on user_api_key
  for select to authenticated
  using (auth.uid() = user_api_key.auth_users_id);
drop policy if exists "authenticated can update their own user_api_key" on user_api_key;
create policy "authenticated can update their own user_api_key" on user_api_key
  for update to authenticated
  using (auth.uid() = user_api_key.auth_users_id);
GRANT INSERT ON user_api_key TO supabase_auth_admin;
GRANT EXECUTE ON FUNCTION uuid_generate_v4() TO supabase_auth_admin;
GRANT USAGE ON SCHEMA extensions TO supabase_auth_admin;