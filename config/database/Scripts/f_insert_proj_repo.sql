create or replace function f_insert_proj_repo(projectRepoArg t_f_insert_proj_repo)
returns VOID as $$
declare
begin

  githubRepoId := f_insert_gthb_repo(projectRepoArg.gthb_repo);
  
  insert into proj_repo (gthb_repo_id, note) values (githubRepoId, projectRepoArg.note) on conflict(gthb_repo_id) do update set note = excluded.note;

  f_insert_proj_repo_metadata(projectRepoArg.proj_repo_metadata);



  f_insert_algo_hn_comment();
  f_insert_algo_hn_stories();
  f_insert_sbot_lin_pses()
end;
$$ language plpgsql;