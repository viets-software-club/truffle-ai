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
