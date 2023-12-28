create or replace function f_tr_delete_unreferenced_sbot_lin_company() returns trigger as $$
begin
  delete from sbot_lin_company
  where not exists (
    select 1 from proj_repo_and_sbot_lin_company
    where sbot_lin_company.sbot_lin_company_id = proj_repo_and_sbot_lin_company.sbot_lin_company_id
  );
  return null;
end;
$$ language plpgsql;