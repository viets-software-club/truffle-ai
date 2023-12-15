create type t_ivals_algo_hn_tag(
  title text
);

create type t_ivals_algo_hn_query(
  algo_hn_query text
);

create type t_ivals_algo_hn_comment(
  author text,
  object_id bigint,
  comment_text text,
  story_id bigint,
  story_title text,
  story_url text,
  created_at timestamp with time zone,
  updated_at timestamp with time zone,
);

create type t_ivals_algo_hn_story(
  author text,
  created_at timestamp with time zone,
  algo_hn_story_url text,
  object_id bigint,
  points bigint,
  story_text text,
  title text,
  updated_at timestamp with time zone
);

create type t_insert_algo_hn_story(
  author text,
  created_at timestamp with time zone,
  algo_hn_story_url text,
  object_id bigint,
  points bigint,
  story_text text,
  title text,
  updated_at timestamp with time zone,
  algo_hn_tags: t_ivals_algo_hn_tag[]
);

create type t_insert_algo_hn_comment(
  author text,
  object_id bigint,
  comment_text text,
  story_id bigint,
  story_title text,
  story_url text,
  created_at timestamp with time zone,
  updated_at timestamp with time zone,
  algo_hn_tags: t_ivals_algo_hn_tag[]
);

create type t_f_insert_algo_hn_comment(
  proj_repo_id: bigint,
  query: text,
  algo_hn_comments: t_insert_algo_hn_comment[]
);

create type t_f_insert_algo_hn_story(
  proj_repo_id: bigint,
  query: text,
  algo_hn_stories: t_insert_algo_hn_story[]
);
