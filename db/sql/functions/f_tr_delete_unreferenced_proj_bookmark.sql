create or replace function f_tr_delete_unreferenced_proj_bookmark() returns trigger as $$
begin
  delete from public.proj_bookmark
  where not exists (
    select 1 from public.proj_cat_and_proj_bookmark
    where proj_cat_and_proj_bookmark.proj_bookmark_id = proj_bookmark.proj_bookmark_id
  );
  return null;
end;
$$ language plpgsql security definer;