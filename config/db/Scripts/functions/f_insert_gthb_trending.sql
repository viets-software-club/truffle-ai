create or replace function f_insert_gthb_trending(githubTrending t_f_insert_gthb_trending)
returns VOID as $$
declare
githubRepoId bigint;
projRepoId bigint;
projRepo t_f_insert_proj_repo := githubTrending.proj_repo;
begin
  githubRepoId := f_insert_gthb_repo(projRepo.gthb_repo);

  insert into proj_repo (gthb_repo_id, note) values (githubRepoId, projRepo.note) on conflict(gthb_repo_id) do update set note = excluded.note returning proj_repo_id into projRepoId;

  perform f_insert_proj_repo_metadata_for_proj(projRepoId, projRepo.proj_repo_metadata);
  if projRepo.algo_hn_queries is not null then
  perform f_insert_algo_hn_queries_w_stories_and_comments_for_proj(projRepoId, projRepo.algo_hn_queries);
  end if;

  insert into gthb_trending (gthb_repo_id, date_range, lang) values(githubRepoId, githubTrending.date_range, githubTrending.lang) on conflict(gthb_repo_id, date_range) do nothing;
end;
$$ language plpgsql;



create or replace function f_insert_gthb_trending(githubTrendingArr t_f_insert_gthb_trending[])
returns VOID as $$
declare
githubTrending t_f_insert_gthb_trending;
begin
  foreach githubTrending in array githubTrendingArr loop
    perform f_insert_gthb_trending(githubTrending);
  end loop;
end;
$$ language plpgsql;