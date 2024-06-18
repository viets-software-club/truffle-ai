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

