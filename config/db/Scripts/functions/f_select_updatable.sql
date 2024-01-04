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

