CREATE OR REPLACE FUNCTION f_tr_delete_unreferenced_gthb_repo_topic() RETURNS TRIGGER AS $$
BEGIN
  DELETE FROM gthb_repo_topic
  WHERE NOT EXISTS (
    SELECT 1 FROM gthb_repo_and_gthb_repo_topic
    WHERE gthb_repo_and_gthb_repo_topic.gthb_repo_topic_id = gthb_repo_topic.gthb_repo_topic_id
  );
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;