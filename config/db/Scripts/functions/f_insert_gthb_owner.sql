create or replace function f_insert_gthb_owner(githubOwner t_f_insert_gthb_owner)
  returns bigint
  as $$
declare
  org t_ivals_gthb_org;
  usr t_ivals_gthb_user;
  ownerId bigint;
begin
 org := githubOwner.gthb_org;
 usr := githubOwner.gthb_user;
  insert into gthb_owner(gthb_owner_type, avatar_url, gthb_owner_login, gthb_owner_url, repositories_total_count)
    values (githubOwner.gthb_owner_type, githubOwner.avatar_url, githubOwner.gthb_owner_login, githubOwner.gthb_owner_url,
      githubOwner.repositories_total_count)
  on conflict (gthb_owner_login)
    do update set
      avatar_url = excluded.avatar_url, gthb_owner_url = excluded.gthb_owner_url, repositories_total_count =
	excluded.repositories_total_count, gthb_owner_type = excluded.gthb_owner_type
    returning
      gthb_owner_id into ownerId;
  if githubOwner.gthb_owner_type = 'User' then
    insert into gthb_user(gthb_user_id, bio, bio_html, company, company_html, created_at, email, followers_total_count, gthb_user_name, twitter_username, website_url)
      values (ownerId, usr.bio, usr.bio_html, usr.company, usr.company_html, usr.created_at, usr.email, usr.followers_total_count,
	usr.gthb_user_name, usr.twitter_username, usr.website_url)
    on conflict (gthb_user_id)
      do update set
	bio = excluded.bio, bio_html = excluded.bio_html, company = excluded.company, company_html = excluded.company_html, created_at =
	  excluded.created_at, email = excluded.email, followers_total_count = excluded.followers_total_count, twitter_username =
	  excluded.twitter_username, website_url = excluded.website_url;
  else
    insert into gthb_org(gthb_org_id, created_at, gthb_org_description, description_html, email, gthb_org_name, twitter_username, website_url)
      values (ownerId, org.created_at, org.gthb_org_description, org.description_html, org.email, org.gthb_org_name, org.twitter_username, org.website_url)
    on conflict (gthb_org_id)
      do update set
	created_at = excluded.created_at, gthb_org_description = excluded.gthb_org_description, description_html =
	  excluded.description_html, email = excluded.email, gthb_org_name = excluded.gthb_org_name, twitter_username =
	  excluded.twitter_username, website_url = excluded.website_url;
  end if;
  return ownerId;
end;
$$
language plpgsql;
