create or replace function f_insert_algo_hn_stories(projectRepoId bigint, query text, hackernewsStories t_f_insert_algo_hn_story[]) returns VOID as $$ declare hackernewsStory t_insert_values_hackernews_story;
begin
foreach hackernewsStory in array hackernewsStories
  loop
    with query as (
      insert into algo_hn_query(query) values(query) on conflict(query) do update set query = excluded.query returning algo_hn_query_id
    )
    with story as (
      insert into algo_hn_story(
          algo_hn_query_id
          author,
          created_at,
          hackernews_story_url,
          object_id,
          points,
          query,
          story_text,
          title,
          updated_at
        )
      select
        query.algo_hn_query_id,
        hackernewsStory.author,
        hackernewsStory.created_at,
        hackernewsStory.hackernews_story_url,
        hackernewsStory.object_id,
        hackernewsStory.points,
        hackernewsStory.query,
        hackernewsStory.story_text,
        hackernewsStory.title,
        hackernewsStory.updated_at
      from query on conflict (algo_hn_query_id, comment_text) do
      update
      set
        algo_hn_query_id = excluded.algo_hn_query_id,
        author = excluded.author,
        created_at = excluded.created_at,
        hackernews_story_url = exlcluded.hackernews_story_url,
        object_id = excluded.object_id,
        points = excluded.points,
        query = excluded.query,
        story_text = excluded.story_text,
        title = excluded.title,
        updated_at = excluded.updated_at returning hackernews_comment_id
    ),
    tags as (
      insert into
        hackernews_tag(title)
      select
        distinct on (title) title
      from
        unnest(hackernewsComment.hackernews_tags) on conflict (title) do
      update
      set
        title = excluded.title returning hackernews_tag_id
    ),
    proj_repo_to_algo_hn_query as (
      insert into
        proj_repo_and_algo_hn_query(proj_repo_id, algo_hn_story_id) select projectRepoId, algo_hn_story_id from story
        on conflict(proj_repo_id, algo_hn_story_id) do nothing
    ),
    insert into
      hackernews_comment_and_hackernews_tag(hackernews_comment_id, hackernews_tag_id)
    select
      story.hackernews_comment_id,
      tags.hackernews_tag_id
    from
      story
      cross join tags on conflict (hackernews_comment_id, hackernews_tag_id) do nothing;
  end loop;
end;
$$ language plpgsql;