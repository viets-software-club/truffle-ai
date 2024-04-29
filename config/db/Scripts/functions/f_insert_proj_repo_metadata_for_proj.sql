create or replace function f_insert_proj_repo_metadata_for_proj(projRepoId bigint, projectMetadata t_f_insert_proj_repo_metadata)
returns VOID as $$
declare
begin
  insert into proj_repo_metadata (proj_repo_id, algo_hn_eli5, repo_eli5) values(projRepoId, projectMetadata.algo_hn_eli5, projectMetadata.repo_eli5) on conflict(proj_repo_id) do update set
    algo_hn_eli5 = excluded.algo_hn_eli5, repo_eli5 = excluded.repo_eli5;
end;
$$ language plpgsql;