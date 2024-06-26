create type t_ivals_sbot_lin_company as (
  about text,
  employees_amount_in_linkedin bigint,
  followers bigint,
  headquarters text,
  logo text,
  sbot_lin_company_image text,
  sbot_lin_company_name text,
  sbot_lin_company_type text,
  sbot_lin_company_url text,
  sphere text,
  website text
);

create type t_ivals_sbot_lin_profile as (
  about text,
  avatar text,
  city text,
  current_company_link text,
  current_company_name text,
  education_details text,
  followers text,
  position text,
  sbot_lin_profile_name text,
  sbot_lin_profile_url text,
  sbot_lin_profile_following text
);