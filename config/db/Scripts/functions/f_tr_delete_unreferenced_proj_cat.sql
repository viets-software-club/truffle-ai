create or replace function f_tr_delete_unreferenced_proj_cat() returns trigger as $$
begin
  delete from proj_cat
  where not exists (
    select 1 from proj_cat_and_proj_bookmark
    where proj_cat_and_proj_bookmark.proj_cat_id = proj_cat.proj_cat_id
  );
  return null;
end;
$$ language plpgsql security definer;