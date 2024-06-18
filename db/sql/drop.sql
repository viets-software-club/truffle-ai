DO $$ DECLARE
    r RECORD;
    v_counter INTEGER;
BEGIN
    -- Drop all tables
    FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP
        EXECUTE 'DROP TABLE IF EXISTS public.' || quote_ident(r.tablename) || ' CASCADE';
    END LOOP;

    -- Drop all views
    FOR r IN (SELECT viewname FROM pg_views WHERE schemaname = 'public') LOOP
        EXECUTE 'DROP VIEW IF EXISTS public.' || quote_ident(r.viewname) || ' CASCADE';
    END LOOP;

    LOOP
        SELECT count(*) INTO v_counter FROM pg_type WHERE typnamespace = (SELECT oid FROM pg_namespace WHERE nspname = 'public');
        EXIT WHEN v_counter = 0;

        FOR r IN (SELECT typname FROM pg_type WHERE typnamespace = (SELECT oid FROM pg_namespace WHERE nspname = 'public')) LOOP
            BEGIN
                EXECUTE 'DROP TYPE IF EXISTS public.' || quote_ident(r.typname) || ' CASCADE';
            EXCEPTION WHEN OTHERS THEN
                -- do nothing, just skip this type for now
            END;
        END LOOP;
    END LOOP;
    -- Drop all domains
    FOR r IN (SELECT domain_name FROM information_schema.domains WHERE domain_schema = 'public') LOOP
        EXECUTE 'DROP DOMAIN IF EXISTS public.' || quote_ident(r.domain_name) || ' CASCADE';
    END LOOP;

    -- Drop all policies
    FOR r IN (SELECT p.policyname, t.tablename FROM pg_policies p JOIN pg_tables t ON p.tablename = t.tablename WHERE t.schemaname = 'public') LOOP
        EXECUTE 'DROP POLICY IF EXISTS ' || quote_ident(r.policyname) || ' ON public.' || quote_ident(r.tablename);
    END LOOP;

    -- Drop all triggers
    FOR r IN (SELECT trigger_name, event_object_table FROM information_schema.triggers WHERE event_object_schema = 'public') LOOP
        EXECUTE 'DROP TRIGGER IF EXISTS ' || quote_ident(r.trigger_name) || ' ON public.' || quote_ident(r.event_object_table);
    END LOOP;
END $$;
-- drop table if exists github_owner cascade;
-- drop table if exists github_user cascade;
-- drop table if exists github_org cascade;
-- drop table if exists gthb_owner cascade;
-- drop table if exists gthb_user cascade;
-- drop table if exists gthb_org cascade;
-- drop table if exists gthb_lang cascade;
-- drop table if exists gthb_repo cascade;
-- drop table if exists gthb_repo_and_gthb_lang cascade;
-- drop table if exists gthb_repo_issue cascade;
-- drop table if exists gthb_repo_fork cascade;
-- drop table if exists gthb_star cascade;
-- drop table if exists gthb_star_hist cascade;
-- drop table if exists gthb_fork_hist cascade;
-- drop table if exists gthb_issue_hist cascade;
-- drop table if exists gthb_trending cascade;
-- drop table if exists proj_cat cascade;
-- drop table if exists user_whitelist cascade;
-- drop table if exists algo_hn_tag cascade;
-- drop table if exists algo_hn_query cascade;
-- drop table if exists algo_hn_story cascade;
-- drop table if exists algo_hn_comment cascade;
-- drop table if exists proj_repo_metadata cascade;
-- drop table if exists user_api_key cascade;
-- drop table if exists twitter_user cascade;
-- drop table if exists twitter_search cascade;
-- drop table if exists twitter_search_and_twitter_user cascade;
-- drop table if exists proj_repo cascade;
-- drop table if exists proj_bookmark cascade;
-- drop table if exists algo_hn_story_and_algo_hn_tag cascade;
-- drop table if exists algo_hn_comment_and_algo_hn_tag cascade;
-- drop table if exists proj_repo_and_algo_hn_query cascade;
-- drop table if exists proj_repo_and_twitter_search cascade;
-- drop table if exists user_admin cascade;
-- drop table if exists gthb_repo_contr cascade;
-- drop table if exists proj_cat_and_proj_bookmark cascade;
-- drop table if exists sbot_lin_profile cascade;
-- drop table if exists sbot_lin_company cascade;
-- drop table if exists pinned_proj_bookmark cascade;
-- drop table if exists proj_repo_and_sbot_lin_company cascade;
-- drop table if exists proj_repo_and_sbot_lin_profile cascade;
-- drop table if exists gthb_repo_and_gthb_repo_topic cascade;
-- drop table if exists gthb_repo_topic cascade;
-- drop table if exists proj_classifier cascade;
-- drop table if exists proj_repo_and_proj_classifier cascade;

-- drop domain if exists d_gthb_owner_type cascade;
-- drop domain if exists d_gthb_trending_date_range cascade;
-- drop type if exists t_ivals_gthb_owner cascade;
-- drop type if exists t_ivals_gthb_user cascade;
-- drop type if exists t_ivals_gthb_org cascade;
-- drop type if exists t_ivals_gthb_lang cascade;
-- drop type if exists t_ivals_gthb_repo cascade;
-- drop type if exists t_ivals_gthb_star_hist cascade;
-- drop type if exists t_ivals_gthb_fork_hist cascade;
-- drop type if exists t_ivals_gthb_issue_hist cascade;
-- drop type if exists t_f_insert_gthb_owner cascade;
-- drop type if exists t_f_insert_gthb_repo cascade;
-- drop type if exists t_ivals_gthb_repo_contr cascade;
-- drop type if exists t_f_insert_gthb_contr cascade;
-- drop type if exists t_f_insert_gthb_contr_owner cascade;
-- drop type if exists t_ivals_sbot_lin_company cascade;
-- drop type if exists t_ivals_sbot_lin_profile cascade;
-- drop type if exists t_ivals_algo_hn_tag cascade;
-- drop type if exists t_ivals_algo_hn_query cascade;
-- drop type if exists t_ivals_algo_hn_comment cascade;
-- drop type if exists t_ivals_algo_hn_story cascade;

-- drop type if exists t_f_insert_algo_hn_story cascade;
-- drop type if exists t_f_insert_algo_hn_comment cascade;
-- drop type if exists t_f_insert_algo_hn_query_with_stories_and_comments cascade;
-- drop type if exists t_f_insert_proj_repo_metadata cascade;
-- drop type if exists t_f_insert_proj_repo cascade;
-- drop type if exists t_f_insert_proj_bookmark_w_cats cascade;
-- drop type if exists t_f_insert_gthb_trending cascade;
-- drop type if exists t_f_insert_sbot_lin_companies_for_proj cascade;
-- drop type if exists t_f_insert_sbot_lin_profiles_for_proj cascade;
-- drop type if exists t_ivals_gthb_repo_topic;
-- drop type if exists t_ivals_proj_classifier;

-- drop policy if exists "if proj_cat.is_public allow select access to proj_cat" on proj_cat cascade;
-- drop policy if exists "if proj_bookmark.is_public allow select access to proj_bookmark" on proj_bookmark cascade;
-- drop policy if exists "authenticated can access proj_bookmark" on proj_bookmark cascade;
-- drop policy if exists "authenticated can access proj_repo" on proj_repo cascade;
-- drop policy if exists "authenticated can access proj_cat" on proj_cat cascade;
-- drop policy if exists "authenticated can access gthb_repo" on gthb_repo cascade;
-- drop policy if exists "admin can access user_whitelist" on user_whitelist cascade;
-- drop policy if exists "admin can insert admins" on user_admin cascade;
-- drop policy if exists "admin can select admins" on user_admin cascade;
-- drop policy if exists "admin can only update himself" on user_admin cascade;
-- drop policy if exists "admin can only delete himself" on user_admin cascade;
