CREATE OR REPLACE FUNCTION f_tr_delete_unreferenced_gthb_lang() RETURNS TRIGGER AS $$
BEGIN
  DELETE FROM gthb_lang
  WHERE NOT EXISTS (
    SELECT 1 FROM gthb_repo_and_gthb_lang
    WHERE gthb_lang.gthb_lang_id = gthb_repo_and_gthb_lang.gthb_lang_id
  );
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;