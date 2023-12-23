create or replace function f_insert_proj_bookmark_w_cats(bookmarkWithCats t_f_insert_proj_bookmark_w_cats) returns VOID as $$
declare projRepoId bigint;
bookmarkId bigint;
begin projRepoId := f_insert_proj_repo(bookmarkWithCats.proj_repo);
insert into proj_bookmark (proj_repo_id, auth_users_id)
values(
    projRepoId,
    bookmarkWithCats.auth_users_id
  ) on conflict(proj_repo_id, auth_users_id) do
update
set proj_repo_id = excluded.proj_repo_id
returning proj_bookmark_id into bookmarkId;
with cats as (
  insert into proj_cat(auth_users_id, title)
  select bookmarkWithCats.auth_users_id, cat
  from unnest(bookmarkWithCats.proj_cats) as cat on conflict (auth_users_id, title) do
  update
  set title = excluded.title
  returning *
)
insert into proj_cat_and_proj_bookmark(proj_cat_id, proj_bookmark_id)
select cats.proj_cat_id,
  bookmarkId
from cats on conflict do nothing;
end;
$$ language plpgsql;