CREATE OR REPLACE FUNCTION f_tr_delete_unreferenced_gthb_repo_from_gthb_trending() RETURNS TRIGGER AS $$
BEGIN
  DELETE FROM gthb_repo
  WHERE NOT EXISTS (
    SELECT 1 FROM gthb_trending
    WHERE gthb_trending.gthb_repo_id = OLD.gthb_repo_id
  )
  and
   not exists (
    select 1 from proj_bookmark inner join proj_repo on proj_bookmark.proj_repo_id = proj_repo.proj_repo_id
    where proj_repo.gthb_repo_id = OLD.gthb_repo_id
  );
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;