create or replace function f_insert_gthb_trendings(githubTrendings t_f_insert_gthb_trending[])
returns VOID as $$
declare
trending t_f_insert_gthb_trending;
begin
  foreach trending in array githubTrendings loop
    perform f_insert_gthb_trending(trending);
  end loop;
end;
$$ language plpgsql;