CREATE OR REPLACE FUNCTION f_tr_delete_unreferenced_sbot_lin_keyword() RETURNS TRIGGER AS $$
BEGIN
  DELETE FROM sbot_lin_keyword
  WHERE NOT EXISTS (
    SELECT 1 FROM proj_repo_and_sbot_lin_keyword
    WHERE sbot_lin_keyword.sbot_lin_keyword_id = proj_repo_and_sbot_lin_keyword.sbot_lin_keyword_id
  );
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;