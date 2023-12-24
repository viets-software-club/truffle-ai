-- drop trigger if exists on_delete_trending on github_trending;
-- drop trigger if exists on_delete_bookmark on project_repo;
-- drop trigger if exists on_delete_bookmark on project_bookmark;
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

create or replace trigger tr_signup_based_on_whitelist
  before insert on auth.users
  for each row execute function f_tr_signup_based_on_whitelist();
-- CREATE OR REPLACE FUNCTION delete_project_repo_if_empty() RETURNS TRIGGER AS $delete_project_repo_if_empty$
--     DECLARE trendingCount INTEGER; bookmarkCount INTEGER;
--     BEGIN
--         trendingCount := COUNT(*) FROM github_trending WHERE github_trending.github_repo_id = OLD.github_repo_id;
--         bookmarkCount := COUNT(*) FROM project_bookmark WHERE project_bookmark.github_repo_id = OLD.github_repo_id;
--         IF trendingCount > 0 or bookmarkCount > 0 THEN
--             DELETE FROM project_repo WHERE project_repo.github_repo_id = OLD.github_repo_id;
--         END IF;
--         RETURN NULL;
--     END;
-- $delete_project_repo_if_empty$ LANGUAGE plpgsql;
-- CREATE OR REPLACE TRIGGER on_delete_trending
-- AFTER DELETE ON github_trending
--     FOR EACH ROW EXECUTE FUNCTION delete_project_repo_if_empty();
-- CREATE OR REPLACE TRIGGER on_delete_bookmark
-- AFTER DELETE ON project_bookmark
--     FOR EACH ROW EXECUTE FUNCTION delete_project_repo_if_empty();
-- CREATE OR REPLACE FUNCTION delete_owner_if_no_project() RETURNS TRIGGER AS $delete_owner_if_no_project$
--     DECLARE githubRepoCount INTEGER; bookmarkCount INTEGER;
--     BEGIN
--         githubRepoCount := COUNT(*) FROM github_repo WHERE github_repo.github_owner_id = OLD.github_owner_id;
--         IF githubRepoCount > 0 THEN
--             DELETE FROM github_owner WHERE github_owner.github_owner_id = OLD.github_repo_id;
--         END IF;
--         RETURN NULL;
--     END;
-- $delete_owner_if_no_project$ LANGUAGE plpgsql;
-- CREATE OR REPLACE TRIGGER on_delete_bookmark
-- AFTER DELETE ON project_repo
--     FOR EACH ROW EXECUTE FUNCTION delete_owner_if_no_project();
