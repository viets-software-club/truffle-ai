CREATE OR REPLACE FUNCTION insert_hackernews(
    hackernews_comments my_hackernews_comment[]
    )
RETURNS VOID AS $$
DECLARE
  hackernewsComment my_hackernews_comment;
  hackernewsTag my_hackernews_tag;
BEGIN
  FOREACH hackernewsComment IN ARRAY hackernews_comments
  LOOP
    insert into hackernews_comment (query, object_id, comment_text, author, story_id, story_title, story_url, created_at, updated_at)
      values (hackernewsComment.query, hackernewsComment.object_id, hackernewsComment.comment_text, hackernewsComment.author, hackernewsComment.story_id, hackernewsComment.story_title, hackernewsComment.story_url, hackernewsComment.created_at, hackernewsComment.updated_at)
    on conflict (query, comment_text)
      do update set
        query = excluded.query, comment_text = excluded.comment_text, author = excluded.author, story_id = excluded.story_id, story_title = excluded.story_title, story_url = excluded.story_url, created_at = excluded.created_at, updated_at = excluded.updated_at;
    FOREACH hackernewsTag IN ARRAY hackernewsComment.hackernews_tags
    LOOP
      insert into hackernews_tag (title)
        values (hackernewsTag.title)
      on conflict (title)
        do update set
          title = excluded.title;
    END LOOP;
  END LOOP;

END;
$$ LANGUAGE plpgsql;

select insert_hackernews(ARRAY[ROW('author', 4, 'query', 'comment_text', 6, 'story_title', 'story_url', NOW(), NOW(), ARRAY[ROW('wow2')::my_hackernews_tag])::my_hackernews_comment]::my_hackernews_comment[]);
 


