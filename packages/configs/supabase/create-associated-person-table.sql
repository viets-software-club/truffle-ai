create table
  public.associated_person (
    id uuid not null default gen_random_uuid (),
    created_at timestamp with time zone null default now(),
    name text null,
    login text null,
    avatar_url text null,
    repository_count integer null,
    email text null,
    github_url text null,
    website_url text null,
    twitter_username text null,
    constraint associated_person_pkey primary key (id),
    constraint associated_person_login_key unique (login)
  ) tablespace pg_default;