create or replace function f_delete_gthb_trending_by_date_range(dateRange d_gthb_trending_date_range)
  returns VOID
  as $$
begin
  delete from gthb_trending where gthb_trending.date_range = dateRange;
end;
$$
language plpgsql;