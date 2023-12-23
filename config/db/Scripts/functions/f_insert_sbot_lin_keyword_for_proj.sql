create or replace function f_insert_sbot_lin_keyword_for_proj(projRepoId bigint, sbotLinKeyword t_f_insert_sbot_lin_keyword)
returns VOID as $$
declare
  sbotLinKeywordId bigint;
  c t_ivals_sbot_lin_company;
  p t_ivals_sbot_lin_profile;
begin

  if sbotLinKeyword.keywords is null then
    raise exception 'keywords must be not null';
  end if;

  insert into sbot_lin_keyword(keywords)
    values (sbotLinKeyword.keywords)
  on conflict (keywords) do update set keywords = excluded.keywords returning sbot_lin_keyword_id into sbotLinKeywordId;

  insert into proj_repo_and_sbot_lin_keyword(proj_repo_id, sbot_lin_keyword_id)
    values (projRepoId, sbotLinKeywordId) on conflict (proj_repo_id, sbot_lin_keyword_id) do nothing;

  if sbotLinKeyword.sbot_lin_company is not null then

    c := sbotLinKeyword.sbot_lin_company;

    insert into sbot_lin_company(sbot_lin_company_url, sbot_lin_company_name, sphere, followers, logo, sbot_lin_company_image, employees_amount_in_linkedin, about, website, headquarters, sbot_lin_company_type)
    values (c.sbot_lin_company_url, c.sbot_lin_company_name, c.sphere, c.followers, c.logo, c.sbot_lin_company_image, c.employees_amount_in_linkedin, c.about, c.website, c.headquarters, c.sbot_lin_company_type) on conflict(sbot_lin_company_url) do update set sbot_lin_company_name = excluded.sbot_lin_company_name, sphere = excluded.sphere, followers = excluded.followers, logo = excluded.logo, sbot_lin_company_image = excluded.sbot_lin_company_image, employees_amount_in_linkedin = excluded.employees_amount_in_linkedin, about = excluded.about, website = excluded.website, headquarters = excluded.headquarters, sbot_lin_company_type = excluded.sbot_lin_company_type;
  elsif sbotLinKeyword.sbot_lin_profile is not null then
    p := sbotLinKeyword.sbot_lin_profile;
    insert into sbot_lin_profile(sbot_lin_profile_url, sbot_lin_profile_name, position, current_company_name, current_company_link, avatar, about, city, followers, sbot_lin_profile_following, education_details)
    values (p.sbot_lin_profile_url, p.sbot_lin_profile_name, p.position, p.current_company_name, p.current_company_link, p.avatar, p.about, p.city, p.followers, p.sbot_lin_profile_following, p.education_details) on conflict(sbot_lin_profile_url) do update set sbot_lin_profile_name = excluded.sbot_lin_profile_name, position = excluded.position, current_company_name = excluded.current_company_name, current_company_link = excluded.current_company_link, avatar = excluded.avatar, about = excluded.about, city = excluded.city, followers = excluded.followers, sbot_lin_profile_following = excluded.sbot_lin_profile_following, education_details = excluded.education_details;
  else
    raise exception 'sbot_lin_company or sbot_lin_profile must be not null';
  end if;

end;
$$ language plpgsql;