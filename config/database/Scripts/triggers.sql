CREATE OR REPLACE FUNCTION delete_project_repo_if_empty() RETURNS TRIGGER AS $delete_project_repo_if_empty$
    DECLARE trendingCount INTEGER; bookmarkCount INTEGER;
    BEGIN
        
        trendingCount := COUNT(*) FROM github_trending WHERE github_trending.github_repo_id = OLD.github_repo_id;
        bookmarkCount := COUNT(*) FROM project_bookmark WHERE project_bookmark.github_repo_id = OLD.github_repo_id;
        IF trendingCount > 0 or bookmarkCount > 0 THEN
            DELETE FROM project_repo WHERE project_repo.github_repo_id = OLD.github_repo_id;
        END IF;
        RETURN NULL;
    END;
$delete_project_repo_if_empty$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER on_delete_trending
AFTER DELETE ON github_trending
    FOR EACH ROW EXECUTE FUNCTION delete_project_repo_if_empty();

CREATE OR REPLACE TRIGGER on_delete_bookmark
AFTER DELETE ON project_bookmark
    FOR EACH ROW EXECUTE FUNCTION delete_project_repo_if_empty();


CREATE OR REPLACE FUNCTION delete_owner_if_no_project() RETURNS TRIGGER AS $delete_owner_if_no_project$
    DECLARE githubRepoCount INTEGER; bookmarkCount INTEGER;
    BEGIN
        githubRepoCount := COUNT(*) FROM github_repo WHERE github_repo.github_owner_id = OLD.github_owner_id;
        IF githubRepoCount > 0 THEN
            DELETE FROM github_owner WHERE github_owner.github_owner_id = OLD.github_repo_id;
        END IF;
        RETURN NULL;
    END;
$delete_owner_if_no_project$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER on_delete_bookmark
AFTER DELETE ON project_repo
    FOR EACH ROW EXECUTE FUNCTION delete_owner_if_no_project();