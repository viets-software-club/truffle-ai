create table
  public.bookmark (
    id uuid not null default gen_random_uuid (),
    created_at timestamp with time zone null default now(),
    user_id uuid not null,
    project_id uuid not null,
    category text null,
    constraint bookmark_pkey primary key (id),
    constraint bookmark_project_id_fkey foreign key (project_id) references project (id) on delete cascade,
    constraint bookmark_user_id_fkey foreign key (user_id) references auth.users (id) on delete cascade
  ) tablespace pg_default;