CREATE OR REPLACE FUNCTION f_tr_delete_unreferenced_gthb_repo() RETURNS TRIGGER AS $$
BEGIN
  DELETE FROM gthb_repo
  WHERE NOT EXISTS (
    SELECT 1 FROM proj_repo
    WHERE proj_repo.gthb_repo_id = gthb_repo.gthb_repo_id
  );
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;