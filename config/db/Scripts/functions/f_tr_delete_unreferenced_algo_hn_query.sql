create or replace function f_tr_delete_unreferenced_algo_hn_query() returns trigger as $$
begin
  delete from algo_hn_query
  where not exists (
    select 1 from proj_repo_and_algo_hn_query
    where algo_hn_query.algo_hn_query_id = proj_repo_and_algo_hn_query.algo_hn_query_id
  );
  return null;
end;
$$ language plpgsql security definer;