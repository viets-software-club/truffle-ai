create table
  public.organization (
    id uuid not null default gen_random_uuid (),
    created_at timestamp with time zone null default now(),
    name text null,
    login text null,
    avatar_url text null,
    repository_count integer null,
    email text null,
    website_url text null,
    twitter_username text null,
    github_url text null,
    linkedin_url text null,
    founded integer null,
    linkedin_followers integer null,
    number_of_employees integer null,
    linkedin_about text null,
    linkedin_website_url text null,
    linkedin_updates array null,
    crunchbase text null,
    industries text null,
    hq_location text null,
    specialties text null,
    constraint organization_pkey primary key (id),
    constraint organization_login_key unique (login)
  ) tablespace pg_default;