do
$$
declare
  row record;
begin
  for row in select tablename from pg_tables as tablename
    where tablename.schemaname = 'public'
  loop
    execute format('alter table %I enable row level security', row.tablename);
  end loop;
end;
$$;

create policy "authenticated can access proj_bookmark"
  on proj_bookmark for all to authenticated
  using (auth.uid() = proj_bookmark.auth_users_id);

create policy "authenticated can access proj_cat"
  on proj_cat for all to authenticated
  using (auth.uid() = proj_cat.auth_users_id);

create policy "authenticated can access proj_repo"
  on proj_repo for all to authenticated
  using (auth.uid() in (
    select proj_bookmark.auth_users_id from proj_bookmark where proj_bookmark.proj_repo_id = proj_repo.proj_repo_id
  ));

create policy "authenticated can access gthb_repo"
  on gthb_repo for all to authenticated
  using (auth.uid() in (
    select proj_bookmark.auth_users_id from proj_cat inner join proj_repo on gthb_repo.gthb_repo_id = proj_repo.gthb_repo_id inner join proj_bookmark on proj_bookmark.proj_repo_id = proj_repo.proj_repo_id
  ));

create policy "admin can access user_whitelist"
  on user_whitelist for all to authenticated
  using (auth.uid() in (
    select auth_users_id from user_admin
  ));