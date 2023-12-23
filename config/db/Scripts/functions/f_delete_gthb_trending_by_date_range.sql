create or replace function f_delete_gthb_trending_by_date_range(date_range d_gthb_trending_date_range)
  returns VOID
  as $$
begin
  delete from gthb_trending where gthb_trending.date_range = date_range;
end;
$$
language plpgsql;