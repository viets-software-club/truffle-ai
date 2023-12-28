create or replace function f_tr_delete_unreferenced_algo_hn_tag() returns trigger as $$
begin
  delete from algo_hn_tag
  where not exists (
    select 1 from algo_hn_story_and_algo_hn_tag
    where algo_hn_tag.algo_hn_tag_id = algo_hn_story_and_algo_hn_tag.algo_hn_tag_id
  )
  and 
   not exists (
    select 1 from algo_hn_comment_and_algo_hn_tag
    where algo_hn_tag.algo_hn_tag_id = algo_hn_comment_and_algo_hn_tag.algo_hn_tag_id
  );
  return null;
end;
$$ language plpgsql security definer;