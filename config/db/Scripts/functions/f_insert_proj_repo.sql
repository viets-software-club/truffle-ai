create or replace function f_insert_proj_repo(projectRepoArg t_f_insert_proj_repo)
returns bigint as $$
declare
githubRepoId bigint;
projRepoId bigint;
begin
  githubRepoId := f_insert_gthb_repo(projectRepoArg.gthb_repo);

  insert into proj_repo (gthb_repo_id, note) values (githubRepoId, projectRepoArg.note) on conflict(gthb_repo_id) do update set note = excluded.note returning proj_repo_id into projRepoId;

  perform f_insert_proj_repo_metadata_for_proj(projRepoId, projectRepoArg.proj_repo_metadata);
  if projectRepoArg.algo_hn_queries is not null then
    perform f_insert_algo_hn_queries_w_stories_and_comments_for_proj(projRepoId, projectRepoArg.algo_hn_queries);
  end if;
  if projectRepoArg.sbot_lin_companies is not null then
    perform f_insert_sbot_lin_companies_for_proj(projRepoId, projectRepoArg.sbot_lin_companies);
  end if;

  if projectRepoArg.sbot_lin_profiles is not null then
    perform f_insert_sbot_lin_profiles_for_proj(projRepoId, projectRepoArg.sbot_lin_profiles);
  end if;
  with classifiers as (insert into proj_classifier (classifier) select * from unnest(projectRepoArg.proj_classifiers) on conflict (classifier) do update set classifier = excluded.classifier returning *)
  insert into proj_repo_and_proj_classifier(proj_repo_id, proj_classifier_id) select projRepoId, classifiers.proj_classifier_id from classifiers on conflict(proj_repo_id, proj_classifier_id) do nothing;
  
  return projRepoId;
end;
$$ language plpgsql;