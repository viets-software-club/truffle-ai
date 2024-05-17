create or replace function f_insert_proj_cat_for_proj_bookmark(categoryTitle string, projBookmarkId bigint) returns boolean as $$
begin

with cats as (
  insert into proj_cat(auth_users_id, title) values (auth.uid(), categoryTitle) on conflict (auth_users_id, title) do
  update
  set title = excluded.title
  returning *
)
insert into proj_cat_and_proj_bookmark(proj_cat_id, projBookmarkId)
select 
  cats.proj_cat_id,
  projBookmarkId
from cats on conflict do nothing;

return true;
end;
$$ language plpgsql;