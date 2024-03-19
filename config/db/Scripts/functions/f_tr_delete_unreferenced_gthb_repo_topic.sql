create or replace function f_tr_delete_unreferenced_gthb_repo_topic() returns trigger as $$
begin
  delete from gthb_repo_topic
  where not exists (
    select 1 from gthb_repo_and_gthb_repo_topic
    where gthb_repo_and_gthb_repo_topic.gthb_repo_topic_id = gthb_repo_topic.gthb_repo_topic_id
  );
  return null;
end;
$$ language plpgsql security definer;