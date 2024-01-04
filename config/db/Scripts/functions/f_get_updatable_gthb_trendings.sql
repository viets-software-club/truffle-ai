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

