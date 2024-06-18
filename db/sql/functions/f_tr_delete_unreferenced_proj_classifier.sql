create or replace function f_tr_delete_unreferenced_proj_classifier() returns trigger as $$
begin
  delete from public.proj_classifier
  where not exists (
    select 1 from public.proj_repo_and_proj_classifier
    where proj_repo_and_proj_classifier.proj_classifier_id = proj_classifier.proj_classifier_id
  );
  return null;
end;
$$ language plpgsql security definer;