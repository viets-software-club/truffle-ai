CREATE OR REPLACE FUNCTION f_tr_delete_unreferenced_sbot_lin_company() RETURNS TRIGGER AS $$
BEGIN
  DELETE FROM sbot_lin_company
  WHERE NOT EXISTS (
    SELECT 1 FROM proj_repo_and_sbot_lin_company
    WHERE sbot_lin_company.sbot_lin_company_id = proj_repo_and_sbot_lin_company.sbot_lin_company_id
  );
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;