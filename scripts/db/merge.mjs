#!/usr/bin/env zx

import 'zx/globals'

const files = [
	'drop.sql',
	'create.sql',
	'types/types_01_gthb.sql',
	'types/types_02_sbot_lin.sql',
	'types/types_03_algo_hn.sql',
	'types/types_04_proj.sql',
	'types/types_05_gthb.sql',
	'functions/f_insert_gthb_owner.sql',
	'functions/f_insert_algo_hn_comments.sql',
	'functions/f_insert_algo_hn_stories.sql',
	'functions/f_insert_algo_hn_comments.sql',
	'functions/f_insert_algo_hn_queries_w_stories_and_comments_for_proj.sql',
	'functions/f_insert_gthb_repo.sql',
	'functions/f_insert_sbot_lin_companies_for_proj.sql',
	'functions/f_insert_sbot_lin_profiles_for_proj.sql',
	'functions/f_insert_proj_repo_metadata_for_proj.sql',
	'functions/f_insert_proj_repo.sql',
	'functions/f_insert_proj_bookmark_w_cats.sql',
	'functions/f_insert_gthb_trending.sql',
	'functions/f_insert_gthb_trendings.sql',
	'functions/f_delete_gthb_trending_by_date_range.sql',
	'functions/f_delete_proj_bookmark.sql',
	'functions/f_delete_proj_bookmark_by_proj_repo_id.sql',
	'functions/f_delete_user.sql',
	'functions/f_tr_delete_unreferenced_algo_hn_query.sql',
	'functions/f_tr_delete_unreferenced_algo_hn_tag.sql',
	'functions/f_tr_delete_unreferenced_gthb_lang.sql',
	'functions/f_tr_delete_unreferenced_gthb_repo_from_gthb_trending.sql',
	'functions/f_tr_delete_unreferenced_gthb_repo.sql',
	'functions/f_tr_delete_unreferenced_proj_repo.sql',
	'functions/f_tr_delete_unreferenced_sbot_lin_company.sql',
	'functions/f_tr_delete_unreferenced_sbot_lin_profile.sql',
	'functions/f_tr_signup_based_on_whitelist.sql',
	'functions/f_select_data_science.sql',
	'functions/f_tr_delete_unreferenced_gthb_repo_topic.sql',
	'functions/f_tr_delete_unreferenced_proj_classifier.sql',
	'functions/f_get_updatable_bookmarks.sql',
	'functions/f_get_updatable_gthb_trendings.sql',
	'functions/f_is_proj_repo_bookmarked.sql',
	'functions/f_select_updatable.sql',
	'triggers.sql',
	'policies.sql',
	'grants.sql'
]

fs.writeFileSync('./config/db/Scripts/merged.sql', '')
for (const file of files) {
	fs.appendFileSync(
		'./config/db/Scripts/merged.sql',
		`${fs.readFileSync(`./config/db/Scripts/${file}`, 'utf8')}\n`
	)
}

echo(
	`Written combined SQL to ${chalk.cyan(
		`${process.cwd()}/config/db/Scripts/merged.sql`
	)}!`
)
