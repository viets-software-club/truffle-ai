create or replace function f_insert_hackernews (hackernews_comments my_hackernews_comment[])
  returns VOID
  as $$
declare
  hackernewsComment my_hackernews_comment;
begin
  FOREACH hackernewsComment in array hackernews_comments loop
    with comment as (
insert into hackernews_comment (author, comment_text, created_at, object_id, query, story_id, story_title, story_url, updated_at)
	values (hackernewsComment.author, hackernewsComment.comment_text, hackernewsComment.created_at, hackernewsComment.object_id,
	  hackernewsComment.query, hackernewsComment.story_id, hackernewsComment.story_title, hackernewsComment.story_url,
	  hackernewsComment.updated_at)
      on conflict (query, comment_text)
        do update set
	  author = excluded.author, created_at = excluded.created_at, object_id = excluded.object_id, story_id = excluded.story_id,
	    story_title = excluded.story_title, story_url = excluded.story_url, updated_at = excluded.updated_at
        returning hackernews_comment_id
), tags as (
insert into hackernews_tag (title)
  select distinct on (title)
    title
  from unnest(hackernewsComment.hackernews_tags)
  on conflict (title)
    do update set
      title = excluded.title
    returning hackernews_tag_id)
  insert into hackernews_comment_and_hackernews_tag (hackernews_comment_id, hackernews_tag_id)
  select x1.hackernews_comment_id, x2.hackernews_tag_id
  from comment
  cross join tags
on conflict (hackernews_comment_id, hackernews_tag_id)
  do nothing;
end loop;
end;
$$
language plpgsql;
