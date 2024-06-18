/**
 * This script merges database files into one file in specific order
 */

package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"path/filepath"
	"strings"
)

var allowedFiles = []string{
	"drop.sql",
	"create.sql",
	"types/types_01_gthb.sql",
	"types/types_02_sbot_lin.sql",
	"types/types_03_algo_hn.sql",
	"types/types_04_proj.sql",
	"types/types_05_gthb.sql",
	"functions/f_is_admin.sql",
	"functions/f_insert_gthb_owner.sql",
	"functions/f_insert_algo_hn_comments.sql",
	"functions/f_insert_algo_hn_stories.sql",
	"functions/f_insert_algo_hn_comments.sql",
	"functions/f_insert_algo_hn_queries_w_stories_and_comments_for_proj.sql",
	"functions/f_insert_gthb_repo.sql",
	"functions/f_insert_sbot_lin_companies_for_proj.sql",
	"functions/f_insert_sbot_lin_profiles_for_proj.sql",
	"functions/f_insert_proj_repo_metadata_for_proj.sql",
	"functions/f_insert_proj_repo.sql",
	"functions/f_insert_proj_bookmark_w_cats.sql",
	"functions/f_insert_gthb_trending.sql",
	"functions/f_insert_gthb_trendings.sql",
	"functions/f_delete_gthb_trending_by_date_range.sql",
	"functions/f_delete_proj_bookmark.sql",
	"functions/f_delete_proj_bookmark_by_proj_repo_id.sql",
	"functions/f_delete_user.sql",
	"functions/f_tr_delete_unreferenced_algo_hn_query.sql",
	"functions/f_tr_delete_unreferenced_algo_hn_tag.sql",
	"functions/f_tr_delete_unreferenced_gthb_lang.sql",
	"functions/f_tr_delete_unreferenced_gthb_repo_from_gthb_trending.sql",
	"functions/f_tr_delete_unreferenced_gthb_repo.sql",
	"functions/f_tr_delete_unreferenced_proj_repo.sql",
	"functions/f_tr_delete_unreferenced_sbot_lin_company.sql",
	"functions/f_tr_delete_unreferenced_sbot_lin_profile.sql",
	"functions/f_tr_signup_based_on_whitelist.sql",
	"functions/f_tr_delete_unreferenced_proj_cat_and_proj_bookmark.sql",
	"functions/f_select_data_science.sql",
	"functions/f_tr_delete_unreferenced_gthb_repo_topic.sql",
	"functions/f_tr_delete_unreferenced_proj_classifier.sql",
	"functions/f_tr_delete_unreferenced_gthb_owner.sql",
	"functions/f_tr_delete_unreferenced_proj_bookmark.sql",
	"functions/f_get_updatable_bookmarks.sql",
	"functions/f_get_updatable_gthb_trendings.sql",
	"functions/f_is_proj_repo_bookmarked.sql",
	"functions/f_is_gthb_repo_bookmarked.sql",
	"functions/f_select_updatable.sql",
	"functions/f_list_bookmarked_gthb_repo.sql",
	"functions/f_list_trending_gthb_repo.sql",
	"functions/f_delete_proj_bookmark_on_proj_cat_by_title_and_gthb_name.sql",
	"functions/f_delete_proj_bookmark_on_proj_cat_by_title_and_gthb_repo_id.sql",
	"functions/f_delete_proj_bookmark_by_gthb_name.sql",
	"functions/f_get_extensive_gthb_repo_by_name.sql",
	"functions/f_get_gthb_owner_by_gthb_name.sql",
	"functions/f_get_gthb_repo_by_gthb_name.sql",
	"functions/f_get_gthb_repos_by_names.sql",
	"functions/f_get_proj_bookmark_by_gthb_name.sql",
	"functions/f_get_proj_repo_by_gthb_name.sql",
	"functions/f_tr_delete_unreferenced_proj_cat.sql",
	"functions/f_get_gthb_org_by_gthb_repo_id.sql",
	"functions/f_get_gthb_org_by_gthb_name.sql",
	"functions/f_get_gthb_user_by_gthb_name.sql",
	"functions/f_get_gthb_user_by_gthb_repo_id.sql",
	"functions/f_list_gthb_repos_by_cat_title.sql",
	"functions/f_insert_user_admin_by_email.sql",
	"functions/f_tr_insert_auto_generated_user_api_key.sql",
	"functions/f_is_user_admin.sql",
	"functions/f_insert_discord_invites_for_proj.sql",
	"functions/f_pin_proj_bookmark_in_cat.sql",
	"functions/f_select_list_gthb_repo.sql",
	"functions/f_tr_delete_unreferenced_bookmark_and_cat.sql",
	"functions/f_tr_delete_unreferenced_discord_invite.sql",
	"triggers.sql",
	"policies.sql",
	"grants.sql",
	"supabase_realtime_publication.sql",
}

func main() {
	dir := "./sql"
	outFile, err := os.Create("output/merged.sql")
	if err != nil {
		fmt.Println("Error creating output file:", err)
		return
	}
	defer outFile.Close()

	err = filepath.Walk(dir, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}
		if info.IsDir() {
			return nil
		}

		if !isAllowed(path[len(dir)-1:]) {
			return fmt.Errorf("encountered disallowed file: %s", path)
		}

		return nil
	})

	for _, filename := range allowedFiles {
		path := filepath.Join(dir, filename)
	
		info, err := os.Stat(path)
		if err != nil {
			fmt.Println("Error getting file info:", err)
			return
		}
	
		if info.IsDir() {
			continue
		}
	
		content, err := ioutil.ReadFile(path)
		if err != nil {
			fmt.Println("Error reading file:", err)
			return
		}
	
		_, err = outFile.Write(content)
		if err != nil {
			fmt.Println("Error writing to output file:", err)
			return
		}
		_, err = outFile.Write([]byte("\n"))
		if err != nil {
			fmt.Println("Error writing to output file:", err)
			return
		}
	}

	if err != nil {
		fmt.Println("Error:", err)
	}
}

func isAllowed(filename string) bool {
	for _, allowedFile := range allowedFiles {
		if strings.EqualFold(filename, allowedFile) {
			return true
		}
	}
	return false
}
