grant select on table public.user_whitelist to supabase_auth_admin;
GRANT INSERT ON user_api_key TO supabase_auth_admin;
GRANT EXECUTE ON FUNCTION uuid_generate_v4() TO supabase_auth_admin;
GRANT USAGE ON SCHEMA extensions TO supabase_auth_admin;