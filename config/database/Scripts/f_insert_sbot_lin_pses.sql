create or replace function f_insert_sbot_lin_pses(projectRepoId bigint, keywords text, linkedInProfileSearches t_f_insert_algo_hn_story[])
returns VOID as $$
declare
begin
  githubRepoId := f_insert_gthb_repo();
  f_insert_algo_hn_comment();
  f_insert_algo_hn_stories();
  f_insert_sbot_lin_pses()
end;
$$ language plpgsql;