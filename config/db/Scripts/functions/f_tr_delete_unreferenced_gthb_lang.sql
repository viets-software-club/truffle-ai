create or replace function f_tr_delete_unreferenced_gthb_lang() returns trigger as $$
begin
  delete from public.gthb_lang
  where not exists (
    select 1 from public.gthb_repo_and_gthb_lang
    where gthb_lang.gthb_lang_id = gthb_repo_and_gthb_lang.gthb_lang_id
  );
  return null;
end;
$$ language plpgsql security definer;