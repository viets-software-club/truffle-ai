CREATE OR REPLACE FUNCTION f_tr_delete_unreferenced_proj_repo() RETURNS TRIGGER AS $$
BEGIN
  DELETE FROM proj_repo
  WHERE NOT EXISTS (
    SELECT 1 FROM gthb_trending
    WHERE gthb_trending.gthb_repo_id = proj_repo.gthb_repo_id
  )
  and
   not exists (
    SELECT 1 FROM proj_bookmark
    WHERE proj_bookmark.proj_repo_id = proj_repo.proj_repo_id
  );
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;