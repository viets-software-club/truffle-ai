create or replace function f_insert_gthb_trending(githubTrending t_f_insert_gthb_trending)
returns VOID as $$
declare
projectRepoArg t_f_insert_proj_repo;
githubRepoId bigint;
projRepoId bigint;
begin
  projectRepoArg := githubTrending.proj_repo;
  githubRepoId := f_insert_gthb_repo(projectRepoArg.gthb_repo);

  -- not updateing note here
  insert into proj_repo (gthb_repo_id, note) values (githubRepoId, projectRepoArg.note) on conflict(gthb_repo_id) do update set gthb_repo_id = excluded.gthb_repo_id returning proj_repo_id into projRepoId;

  -- perform f_insert_proj_repo_metadata_for_proj(projRepoId, projectRepoArg.proj_repo_metadata);
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
  

  insert into gthb_trending (gthb_repo_id, date_range, lang) values(githubRepoId, githubTrending.date_range, githubTrending.lang) on conflict(gthb_repo_id, date_range) do nothing;

end;
$$ language plpgsql;