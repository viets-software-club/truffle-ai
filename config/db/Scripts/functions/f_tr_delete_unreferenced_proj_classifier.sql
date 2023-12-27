CREATE OR REPLACE FUNCTION f_tr_delete_unreferenced_proj_classifier() RETURNS TRIGGER AS $$
BEGIN
  DELETE FROM proj_classifier
  WHERE NOT EXISTS (
    SELECT 1 FROM proj_repo_and_proj_classifier
    WHERE proj_repo_and_proj_classifier.proj_classifier_id = proj_classifier.proj_classifier_id
  );
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;