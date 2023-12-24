CREATE OR REPLACE FUNCTION f_tr_delete_unreferenced_sbot_lin_profile() RETURNS TRIGGER AS $$
BEGIN
  DELETE FROM sbot_lin_profile
  WHERE NOT EXISTS (
    SELECT 1 FROM proj_repo_and_sbot_lin_profile
    WHERE sbot_lin_profile.sbot_lin_profile_id = proj_repo_and_sbot_lin_profile.sbot_lin_profile_id
  );
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;