create or replace function f_insert_algo_hn_queries_w_stories_and_comments_for_proj(projRepoId bigint, queries
  t_f_insert_algo_hn_query_with_stories_and_comments[])
  returns VOID
  as $$
declare
  queryIter t_f_insert_algo_hn_query_with_stories_and_comments;
  queryId bigint;
begin
  foreach queryIter in array queries loop
    insert into algo_hn_query(query)
      values (queryIter.query)
    on conflict (query)
      do update set
        query = excluded.query
      returning
        algo_hn_query_id into queryId;
    insert into proj_repo_and_algo_hn_query(proj_repo_id, algo_hn_query_id)
      values (projRepoId, queryId)
    on conflict (proj_repo_id, algo_hn_query_id)
      do nothing;
    if queryIter.algo_hn_comments is not null then
      perform f_insert_algo_hn_comments(queryId, queryIter.algo_hn_comments);
    end if;
    if queryIter.algo_hn_stories is not null then
      perform f_insert_algo_hn_stories(queryId, queryIter.algo_hn_stories);
    end if;
  end loop;
end;
$$
language plpgsql;