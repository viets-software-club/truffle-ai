create or replace function f_insert_sbot_lin_profiles_for_proj(projRepoId bigint, profiles t_ivals_sbot_lin_profile[])
returns VOID as $$
declare
  p t_ivals_sbot_lin_profile;
begin 
  with lin_profile as (
    insert into sbot_lin_profile(sbot_lin_profile_url, sbot_lin_profile_name, position, current_company_name, current_company_link, avatar, about, city, followers, sbot_lin_profile_following, education_details)
    select p.sbot_lin_profile_url, p.sbot_lin_profile_name, p.position, p.current_company_name, p.current_company_link, p.avatar, p.about, p.city, p.followers, p.sbot_lin_profile_following, p.education_details from unnest(profiles) as p
    on conflict(sbot_lin_profile_url) do update set sbot_lin_profile_name = excluded.sbot_lin_profile_name, position = excluded.position, current_company_name = excluded.current_company_name, current_company_link = excluded.current_company_link, avatar = excluded.avatar, about = excluded.about, city = excluded.city, followers = excluded.followers, sbot_lin_profile_following = excluded.sbot_lin_profile_following, education_details = excluded.education_details returning sbot_lin_profile_id
  )
  insert into proj_repo_and_sbot_lin_profile(proj_repo_id, sbot_lin_profile_id) select projRepoId, sbot_lin_profile_id from lin_profile on conflict(proj_repo_id, sbot_lin_profile_id) do nothing;
end;
$$ language plpgsql;