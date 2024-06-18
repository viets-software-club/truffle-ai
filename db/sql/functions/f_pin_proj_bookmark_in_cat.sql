create or replace function f_pin_proj_bookmark_in_cat(categoryId bigint, bookmarkId bigint) returns boolean as $$
begin

update proj_cat_and_proj_bookmark
set is_pinned = true
where projBookmarkId = bookmarkId and proj_cat_id = categoryId;

return true;
end;
$$ language plpgsql;