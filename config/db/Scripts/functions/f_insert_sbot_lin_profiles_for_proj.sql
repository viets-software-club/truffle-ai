create or replace function f_insert_sbot_lin_profiles_for_proj(projRepoId bigint, profiles t_ivals_sbot_lin_profile[])
returns VOID as $$
declare
  p t_ivals_sbot_lin_profile;
begin 
  with lin_profile as (
    insert into sbot_lin_profile(sbot_lin_profile_url, sbot_lin_profile_name, position, current_company_name, current_company_link, avatar, about, city, followers, sbot_lin_profile_following, education_details)
    select the_profile.sbot_lin_profile_url, the_profile.sbot_lin_profile_name, the_profile.position, the_profile.current_company_name, the_profile.current_company_link, the_profile.avatar, the_profile.about, the_profile.city, the_profile.followers, the_profile.sbot_lin_profile_following, the_profile.education_details from unnest(profiles) as the_profile
    on conflict(sbot_lin_profile_url) do update set sbot_lin_profile_name = excluded.sbot_lin_profile_name, position = excluded.position, current_company_name = excluded.current_company_name, current_company_link = excluded.current_company_link, avatar = excluded.avatar, about = excluded.about, city = excluded.city, followers = excluded.followers, sbot_lin_profile_following = excluded.sbot_lin_profile_following, education_details = excluded.education_details returning sbot_lin_profile_id
  )
  insert into proj_repo_and_sbot_lin_profile(proj_repo_id, sbot_lin_profile_id) select projRepoId, sbot_lin_profile_id from lin_profile on conflict(proj_repo_id, sbot_lin_profile_id) do nothing;
end;
$$ language plpgsql;