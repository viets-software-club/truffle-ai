create or replace function f_insert_algo_hn_stories(queryId bigint, algoHnStories t_f_insert_algo_hn_story[])
  returns VOID
  as $$
declare
  algoHnStory t_f_insert_algo_hn_story;
begin

  foreach algoHnStory in array algoHnStories loop
    with story as (
insert into algo_hn_story(algo_hn_query_id, algo_hn_story_object_id, algo_hn_story_url, author, created_at, points, title, updated_at)
	values (queryId, algoHnStory.algo_hn_story_object_id, algoHnStory.algo_hn_story_url, algoHnStory.author, algoHnStory.created_at,
	  algoHnStory.points, algoHnStory.title, algoHnStory.updated_at)
      on conflict (algo_hn_story_object_id)
        do update set
	  algo_hn_query_id = excluded.algo_hn_query_id, author = excluded.author, created_at = excluded.created_at, algo_hn_story_url =
	    excluded.algo_hn_story_url, algo_hn_story_object_id = excluded.algo_hn_story_object_id, points = excluded.points, title = excluded.title, updated_at = excluded.updated_at
        returning
          algo_hn_story_id
), tags as (
insert into algo_hn_tag(title)
  select distinct on (title)
    title
  from
    unnest(algoHnStory.algo_hn_tags)
  on conflict (title)
    do update set
      title = excluded.title
    returning
      algo_hn_tag_id)
  insert into algo_hn_story_and_algo_hn_tag(algo_hn_story_id, algo_hn_tag_id)
  select
    story.algo_hn_story_id,
    tags.algo_hn_tag_id
  from
    story
  cross join tags
on conflict (algo_hn_story_id,
  algo_hn_tag_id)
  do nothing;
end loop;
end;
$$
language plpgsql;
