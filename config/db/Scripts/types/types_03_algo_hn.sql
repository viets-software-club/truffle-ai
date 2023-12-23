create type t_ivals_algo_hn_tag as (
  title text
);

create type t_ivals_algo_hn_query as (
  query text
);

create type t_ivals_algo_hn_comment as (
  author text,
  algo_hn_story_object_id bigint,
  comment_text text,
  story_id bigint,
  story_title text,
  story_url text,
  created_at timestamp with time zone,
  updated_at timestamp with time zone
);

create type t_ivals_algo_hn_story as (
  author text,
  created_at timestamp with time zone,
  algo_hn_story_url text,
  algo_hn_story_object_id bigint,
  points bigint,
  story_text text,
  title text,
  updated_at timestamp with time zone
);

create type t_f_insert_algo_hn_story as (
  algo_hn_story_object_id bigint,
  algo_hn_story_url text,
  algo_hn_tags t_ivals_algo_hn_tag[],
  author text,
  created_at timestamp with time zone,
  points bigint,
  story_text text,
  title text,
  updated_at timestamp with time zone
);

create type t_f_insert_algo_hn_comment as (
  algo_hn_comment_object_id bigint,
  algo_hn_tags t_ivals_algo_hn_tag[],
  author text,
  comment_text text,
  created_at timestamp with time zone,
  story_id bigint,
  story_title text,
  story_url text,
  updated_at timestamp with time zone
);

create type t_f_insert_algo_hn_query_with_stories_and_comments as (
  algo_hn_comments t_f_insert_algo_hn_comment[],
  algo_hn_stories t_f_insert_algo_hn_story[],
  query text
);
