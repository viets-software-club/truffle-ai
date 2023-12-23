CREATE OR REPLACE FUNCTION f_tr_delete_unreferenced_algo_hn_query() RETURNS TRIGGER AS $$
BEGIN
  DELETE FROM algo_hn_query
  WHERE NOT EXISTS (
    SELECT 1 FROM proj_repo_and_algo_hn_query
    WHERE algo_hn_query.algo_hn_query_id = proj_repo_and_algo_hn_query.algo_hn_query_id
  );
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;