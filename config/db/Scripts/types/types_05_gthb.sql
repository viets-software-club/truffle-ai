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