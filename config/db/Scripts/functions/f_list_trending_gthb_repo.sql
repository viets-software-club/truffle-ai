drop function if exists f_list_trending_gthb_repo();
create or replace function f_list_trending_gthb_repo()
  returns setof "gthb_repo"
  as $$
begin
  return query select gthb_repo.* from gthb_repo
  inner join gthb_trending on gthb_repo.gthb_repo_id = gthb_trending.gthb_repo_id;
end;
$$
language plpgsql stable;

