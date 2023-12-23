CREATE OR REPLACE FUNCTION f_tr_delete_unreferenced_algo_hn_tag() RETURNS TRIGGER AS $$
BEGIN
  DELETE FROM algo_hn_tag
  WHERE NOT EXISTS (
    SELECT 1 FROM algo_hn_story_and_algo_hn_tag
    WHERE algo_hn_tag.algo_hn_tag_id = algo_hn_story_and_algo_hn_tag.algo_hn_tag_id
  )
  and 
   not exists (
    select 1 from algo_hn_comment_and_algo_hn_tag
    where algo_hn_tag.algo_hn_tag_id = algo_hn_comment_and_algo_hn_tag.algo_hn_tag_id
  );
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;