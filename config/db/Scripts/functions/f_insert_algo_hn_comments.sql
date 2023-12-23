create or replace function f_insert_algo_hn_comments(queryId bigint, algoHnComments t_f_insert_algo_hn_comment[])
  returns VOID
  as $$
declare
  algoHnComment t_f_insert_algo_hn_comment;
begin
  foreach algoHnComment in array algoHnComments loop
    with comment as (
insert into algo_hn_comment(algo_hn_comment_object_id, algo_hn_query_id, author, comment_text, created_at, story_id, story_title, story_url, updated_at)
	values (algoHnComment.algo_hn_comment_object_id, queryId, algoHnComment.author, algoHnComment.comment_text, algoHnComment.created_at, algoHnComment.story_id,
	  algoHnComment.story_title, algoHnComment.story_url, algoHnComment.updated_at)
      on conflict (algo_hn_comment_object_id)
        do update set
	  algo_hn_query_id = excluded.algo_hn_query_id, author = excluded.author, algo_hn_comment_object_id =
	    excluded.algo_hn_comment_object_id, comment_text = excluded.comment_text, story_id = excluded.story_id, story_title =
	    excluded.story_title, story_url = excluded.story_url, created_at = excluded.created_at,
	    updated_at = excluded.updated_at
        returning
          algo_hn_comment_id
), tags as (
insert into algo_hn_tag(title)
  select distinct on (title)
    title
  from
    unnest(algoHnComment.algo_hn_tags)
  on conflict (title)
    do update set
      title = excluded.title
    returning
      algo_hn_tag_id)
  insert into algo_hn_comment_and_algo_hn_tag(algo_hn_comment_id, algo_hn_tag_id)
  select
    comment.algo_hn_comment_id,
    tags.algo_hn_tag_id
  from
    comment
  cross join tags
on conflict (algo_hn_comment_id,
  algo_hn_tag_id)
  do nothing;
end loop;
end;
$$
language plpgsql;
