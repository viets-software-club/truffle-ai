create or replace function f_insert_gthb_owner(githubOwner t_f_insert_gthb_owner)
  returns integer
  as $$
declare
  org gthb_org := githubOwner.gthb_org;
  user gthb_user := githubOwner.gthb_user;
  ownerId bigint;
begin
  insert into gthb_owner(gthb_owner_type, avatar_url, gthb_owner_login, gthb_owner_url, repositories_total_count)
    values (githubOwner.gthb_owner_type, githubOwner.avatar_url, githubOwner.gthb_owner_login, githubOwner.gthb_owner_url,
      githubOwner.repositories_total_count)
  on conflict (gthb_owner_login)
    do update set
      avatar_url = excluded.avatar_url, gthb_owner_url = excluded.gthb_owner_url, repositories_total_count =
	excluded.repositories_total_count, gthb_owner_type = excluded.gthb_owner_type
    returning
      gthb_owner_id into ownerId;
  if githubOwner.gthb_owner_type = "User" then
    insert into gthb_user(bio, bio_html, company, company_html, created_at, email, follower_total_count, gthb_user_name, twitter_username, website_url)
      values (user.bio, user.bio_html, user.company, user.company_html, user.created_at, user.email, user.follower_total_count,
	user.gthb_user_name, user.twitter_username, user.website_url)
    on conflict (gthb_user_name)
      do update set
	bio = excluded.bio, bio_html = excluded.bio_html, company = excluded.company, company_html = excluded.company_html, created_at =
	  excluded.created_at, email = excluded.email, follower_total_count = excluded.follower_total_count, twitter_username =
	  excluded.twitter_username, website_url = exclued.website_url;
  else
    insert into gthb_org(created_at, gthb_org_description, description_html, email, gthb_org_name, twitter_username, website_url)
      values (org.created_at, org.gthb_org_description, org.description_html, org.email, org.gthb_org_name, org.twitter_username, org.website_url)
    on conflict (gthb_org_name)
      do update set
	created_at = excluded.created_at, gthb_org_description = excluded.gthb_org_description, description_html =
	  excluded.description_html, email = excluded.email, gthb_org_name = excluded.gthb_org_name, twitter_username =
	  excluded.twitter_username, website_url = excluded.website_url;
  end if;
  return ownerId;
end;
$$
language plpgsql;
