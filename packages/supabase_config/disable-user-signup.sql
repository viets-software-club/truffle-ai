-- disables sign up for emails without @lafamiglia.vc ending
-- additionally if email is in 'allowed_users' table will also be allowed
create or replace function disable_sign_up()
returns trigger
language plpgsql
as $$
declare has_email boolean := 0;
begin
  select count(*) > 0 from public.allowed_users allowed into has_email where allowed.email = new.email;
  if right(new.email, 14) = '@lafamiglia.vc' then
    return new;
  elsif has_email then
    return new;
  else
    return null;
  end if;
end;
$$;

-- create trigger on insert
drop trigger if exists on_sign_up on auth.users;
create trigger on_sign_up
before insert on auth.users
for each row execute procedure disable_sign_up();

-- create permissive select policy for access
drop policy if exists "Enable read access for all users on allowed_users" on "public"."allowed_users";
CREATE POLICY "Enable read access for all users on allowed_users" ON "public"."allowed_users"
AS PERMISSIVE FOR SELECT
TO supabase_auth_admin
USING (true);

-- policy alone is not enough, supabase_auth_admin needs select access on public.allowed_users
GRANT SELECT ON TABLE public.allowed_users TO supabase_auth_admin;