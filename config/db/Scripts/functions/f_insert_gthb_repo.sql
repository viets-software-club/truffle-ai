create or replace function f_insert_gthb_repo(githubRepo t_f_insert_gthb_repo)
  returns bigint
  as $$
declare
  contrOwnerId bigint;
  contr t_f_insert_gthb_contr;
  contrOwner t_f_insert_gthb_contr_owner;
  contrUser t_ivals_gthb_user;
  ownerId bigint;
  repoId bigint;
  stars t_ivals_gthb_star_hist[] := githubRepo.gthb_star_hists;
  forks t_ivals_gthb_fork_hist[] := githubRepo.gthb_fork_hists;
  issues t_ivals_gthb_issue_hist[] := githubRepo.gthb_issue_hists;
  topic t_ivals_gthb_repo_topic;
begin
  ownerId := f_insert_gthb_owner(githubRepo.gthb_owner);

  insert into gthb_repo(created_at, gthb_repo_description, fork_count, homepage_url, is_in_organization, issues_total_count,
    gthb_repo_name, gthb_owner_id, pull_requests_total_count, gthb_repo_url, stargazer_count, contributor_count, forks_per_contributor, issues_per_contributor, stargazers_per_contributor, pull_requests_per_contributor)
    values (githubRepo.created_at, githubRepo.gthb_repo_description, githubRepo.fork_count, githubRepo.homepage_url,
      githubRepo.is_in_organization, githubRepo.issues_total_count, githubRepo.gthb_repo_name, ownerId,
      githubRepo.pull_requests_total_count, githubRepo.gthb_repo_url, githubRepo.stargazer_count, githubRepo.contributor_count, githubRepo.fork_count / githubRepo.contributor_count, githubRepo.issues_total_count / githubRepo.contributor_count, githubRepo.stargazer_count / githubRepo.contributor_count, githubRepo.pull_requests_total_count / githubRepo.contributor_count)
  on conflict (gthb_repo_name)
    do update set
      created_at = excluded.created_at, gthb_repo_description = excluded.gthb_repo_description, fork_count = excluded.fork_count,
	homepage_url = excluded.homepage_url, is_in_organization = excluded.is_in_organization, issues_total_count =
	excluded.issues_total_count, gthb_repo_name = excluded.gthb_repo_name, gthb_owner_id = excluded.gthb_owner_id,
	pull_requests_total_count = excluded.pull_requests_total_count, gthb_repo_url = excluded.gthb_repo_url, stargazer_count =
	excluded.stargazer_count, contributor_count = excluded.contributor_count,
  forks_per_contributor = excluded.fork_count / excluded.contributor_count, issues_per_contributor = excluded.issues_total_count / excluded.contributor_count, stargazers_per_contributor = excluded.stargazer_count / excluded.contributor_count, pull_requests_per_contributor = excluded.pull_requests_total_count / excluded.contributor_count
    returning
      gthb_repo_id into repoId;

  foreach contr in array githubRepo.gthb_repo_contrs
    loop
    contrOwner := contr.gthb_owner;
        contrUser := contrOwner.gthb_user;

      insert into gthb_owner(gthb_owner_type, avatar_url, gthb_owner_login, gthb_owner_url, repositories_total_count)
      values ('User', contrOwner.avatar_url, contrOwner.gthb_owner_login, contrOwner.gthb_owner_url,
        contrOwner.repositories_total_count)
    on conflict (gthb_owner_login)
      do update set
        avatar_url = excluded.avatar_url, gthb_owner_url = excluded.gthb_owner_url, repositories_total_count =
    excluded.repositories_total_count, gthb_owner_type = excluded.gthb_owner_type
      returning
        gthb_owner_id into contrOwnerId;
      insert into gthb_user(gthb_user_id, bio, bio_html, company, company_html, created_at, email, followers_total_count, gthb_user_name, twitter_username, website_url)
      values (contrOwnerId, contrUser.bio, contrUser.bio_html, contrUser.company, contrUser.company_html, contrUser.created_at, contrUser.email, contrUser.followers_total_count,
    contrUser.gthb_user_name, contrUser.twitter_username, contrUser.website_url)
      on conflict (gthb_user_id)
        do update set
    bio = excluded.bio, bio_html = excluded.bio_html, company = excluded.company, company_html = excluded.company_html, created_at =
      excluded.created_at, email = excluded.email, followers_total_count = excluded.followers_total_count, twitter_username =
      excluded.twitter_username, website_url = excluded.website_url;

      insert into gthb_repo_contr(gthb_repo_id, gthb_owner_id, contributions) 
      values (repoId, contrOwnerId, contr.contributions)
      on conflict(gthb_repo_id, gthb_owner_id) do update set contributions = excluded.contributions;
    end loop;

  if array_length(githubRepo.gthb_langs, 1) is null then
    with langs as (insert into gthb_lang (gthb_lang_name, color) select * from unnest(githubRepo.gthb_langs) on conflict (gthb_lang_name) do update set color = excluded.color returning *)
    insert into gthb_repo_and_gthb_lang(gthb_repo_id, gthb_lang_id) select repoId, langs.gthb_lang_id from langs on conflict(gthb_repo_id, gthb_lang_id) do nothing;
  end if;
  
  if array_length(githubRepo.gthb_repo_topics, 1) is null then
    with topics as (insert into gthb_repo_topic (gthb_repo_topic_name, stargazer_count) select * from unnest(githubRepo.gthb_repo_topics) on conflict (gthb_repo_topic_name) do update set stargazer_count = excluded.stargazer_count returning *)
    insert into gthb_repo_and_gthb_repo_topic(gthb_repo_id, gthb_repo_topic_id) select repoId, topics.gthb_repo_topic_id from topics on conflict(gthb_repo_id, gthb_repo_topic_id) do nothing;
  end if;
  insert into gthb_star_hist(gthb_repo_id, gthb_star_hist_date, amount)
   select
    repoId,
    s.gthb_star_hist_date,
    s.amount
  from
    unnest(stars) s
  on conflict (gthb_repo_id,
    gthb_star_hist_date)
    do update set
      amount = excluded.amount where excluded.amount > gthb_star_hist.amount;
  insert into gthb_fork_hist(gthb_repo_id, gthb_fork_hist_date, amount)
  select
    repoId,
    f.gthb_fork_hist_date,
    f.amount
  from
    unnest(forks) f
  on conflict (gthb_repo_id,
    gthb_fork_hist_date)
    do update set
      amount = excluded.amount where excluded.amount > gthb_fork_hist.amount;
  insert into gthb_issue_hist(gthb_repo_id, gthb_issue_hist_date, amount)
   select
    repoId,
    i.gthb_issue_hist_date,
    i.amount
  from
    unnest(issues) i
  on conflict (gthb_repo_id,
    gthb_issue_hist_date)
    do update set
      amount = excluded.amount where excluded.amount > gthb_issue_hist.amount;
  return repoId;
end;
$$
language plpgsql;
