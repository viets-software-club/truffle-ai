-- Project table
create table
  truffle.project (
    github_project_id bigint generated by default as identity,
    _created_at timestamp with time zone not null default now(),
    github_repo_id uuid not null,
    constraint project_pkey primary key(id),
    constraint project_github_repo_id_fkey foreign key (github_repo_id) references github_repo (github_repo_id) on delete cascade
  ) tablespace pg_default;

-- GitHub Repo
create table
  truffle.github_repo (
    github_repo_id bigint generated by default as identity,
    _created_at timestamp with time zone not null default now(),
    created_at timestamp not null,
    description text not null,
    fork_count bigint not null,
    homepage_url text not null,
    is_in_organiztion bool not null,
    issues_total_count bigint not null,
    name: text not null,
    owner_id: bigint not null,
    pull_requests_total_count bigint not null,
    url text not null,
    stargazer_count bigint not null,
    constraint github_repo_pkey primary key (github_repo_id),
  ) tablespace pg_default;

-- Repo Issue
create table
  truffle.github_repo_issue (
    github_repo_issue_id bigint generated by default as identity,
    _created_at timestamp with time zone not null default now(),
    created_at timestamp with time zone not null,
    html_url text not null,
    body text not null,
    title text not null,
    state text not null,
    constraint github_repo_issue_pkey primary key (github_repo_issue_id),
  ) tablespace pg_default;

-- Repo Forks
create table
  truffle.github_repo_fork (
    github_repo_fork_id bigint not null as identity,
    _created_at timestamp with time zone not null default now(),
    github_forked_repo_id bigint not null,
    -- description text not null,
    -- html_url text not null,
    -- name text not null
    constraint github_repo_fork_pkey primary key (github_repo_fork_id),
    constraint github_repo_fork_github_repo_fork_id_fkey foreign key (github_repo_fork_id) references github_repo (github_repo_id) on delete cascade
    constraint github_repo_fork_github_forked_repo_id_fkey foreign key (github_forked_repo_id) references github_repo (github_repo_id) on delete cascade
  ) tablespace pg_default;

-- GitHub Language
create table
  truffle.github_language (
    github_language_id bigint generated by default as identity,
    _created_at timestamp with time zone not null default now(),
    language text not null,
    color text not null,
    name text not null
    constraint github_language_pkey primary key (github_language),
  ) tablespace pg_default;

-- GitHub Repo to Language
create table
  truffle.github_repo_language (
    github_repo_id bigint not null,
    github_language_id bigint not null,
    _created_at timestamp with time zone not null default now(),
    constraint github_repo_language_pkey primary key (github_repo_id, github_language),
  ) tablespace pg_default;

-- GitHub Star
create table
  truffle.github_star (
    github_star_id bigint generated by default as identity,
    _created_at timestamp with time zone not null default now(),
    github_repo_id bigint not null,
    starred_at timestamp with time zone not null,
    github_user_id bigint not null,
    constraint github_star_pkey primary key(github_star),
    constraint project_github_repo_id_fkey foreign key (github_repo_id) references github_repo (github_repo_id) on delete cascade
    constraint project_github_user_id_fkey foreign key (github_user_id) references github (github_user_id) on delete cascade
  ) tablespace pg_default;

-- GitHub Organization
create table
  truffle.github_organization (
    github_organization_id bigint generated by default as identity,
    _created_at timestamp with time zone not null default now(),
    avatar_url text not null,
    created_at timestamp with time zone not null,
    description text not null,
    description_html text not null,
    email text not null,
    github_owner_id bigint not null,
    login text not null,
    name text not null,
    repositories_total_count bigint not null,
    twitter_username text not null,
    url text not null
    website_url text not null,
    constraint github_organization_pkey primary key (github_organization_id),
    constraint github_organization_github_owner_id_fkey foreign key (github_owner_id) references github_owner (github_owner_id) on delete cascade
  ) tablespace pg_default;

-- GitHub User
create table
  truffle.github_user (
    github_user_id bigint generated by default as identity,
    _created_at timestamp with time zone not null default now(),
    avatar_url text not null,
    bio text not null,
    bio_html text not null,
    company text not null,
    company_html text not null,
    created_at timestamp with time zone not null,å
    email text not null,
    followers_total_count text not null,
    github_owner_id bigint not null,
    login text not null,
    name text not null,
    repositories_total_count bigint not null,
    twitter_username text not null,
    url text not null,
    website_url text not null,
    constraint github_user_pkey primary key (github_user_id),
    constraint github_user_github_owner_id_fkey foreign key (github_owner_id) references github_owner (github_owner_id) on delete cascade
  ) tablespace pg_default;

-- GitHub Owner (User, Organization)
create table
  truffle.github_owner (
    github_owner_id  bigint generated by default as identity,
    github_repo_id bigint not null,
    _created_at timestamp with time zone not null default now(),
    constraint github_repo_owner_pkey primary key (github_repo_owner_id),
    constraint github_owner_github_repo_id_fkey foreign key (github_repo_id) references github_repo (github_repo_id) on delete cascade
  ) tablespace pg_default;

-- GitHub Trending
create table
  truffle.github_trending (
    github_trending_id bigint generated by default as identity,
    github_repo_id bigint not null,
    _created_at timestamp with time zone not null default now(),
    date_range text not null CHECK (date_range IN ('today', 'week', 'month')),
    language text not null,
    constraint github_trending_pkey primary key (github_trending_id),
    constraint github_trending_github_repo_id_fkey foreign key (github_repo_id) references github_repo (github_repo_id) on delete cascade
  ) tablespace pg_default;