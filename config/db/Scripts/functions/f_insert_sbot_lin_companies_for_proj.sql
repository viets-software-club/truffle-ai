create or replace function f_insert_sbot_lin_companies_for_proj(projRepoId bigint, companies t_ivals_sbot_lin_company[])
returns VOID as $$
begin 
  with company as (
    insert into sbot_lin_company(sbot_lin_company_url, sbot_lin_company_name, sphere, followers, logo, sbot_lin_company_image, employees_amount_in_linkedin, about, website, headquarters, sbot_lin_company_type)
    select c.sbot_lin_company_url, c.sbot_lin_company_name, c.sphere, c.followers, c.logo, c.sbot_lin_company_image, c.employees_amount_in_linkedin, c.about, c.website, c.headquarters, c.sbot_lin_company_type from unnest(companies) as c
    on conflict(sbot_lin_company_url) do update set sbot_lin_company_name = excluded.sbot_lin_company_name, sphere = excluded.sphere, followers = excluded.followers, logo = excluded.logo, sbot_lin_company_image = excluded.sbot_lin_company_image, employees_amount_in_linkedin = excluded.employees_amount_in_linkedin, about = excluded.about, website = excluded.website, headquarters = excluded.headquarters, sbot_lin_company_type = excluded.sbot_lin_company_type returning sbot_lin_company_id
  )
  insert into proj_repo_and_sbot_lin_company(proj_repo_id, sbot_lin_company_id) select projRepoId, sbot_lin_company_id from company on conflict(proj_repo_id, sbot_lin_company_id) do nothing;
end;
$$ language plpgsql;