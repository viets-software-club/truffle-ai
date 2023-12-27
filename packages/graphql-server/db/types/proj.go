package types

import "github.com/jackc/pgx/v5/pgtype"

type T_ivals_proj_classifier struct {
	Classifier pgtype.Text
}

type T_f_insert_proj_repo_metadata struct {
	Algo_hn_eli5 pgtype.Text
	Repo_eli5    pgtype.Text
}

type T_f_insert_proj_repo struct {
	Algo_hn_queries       pgtype.FlatArray[T_f_insert_algo_hn_query_with_stories_and_comments]
	Gthb_repo             T_f_insert_gthb_repo
	Note                  pgtype.Text
	Proj_repo_classifiers pgtype.FlatArray[T_ivals_proj_classifier]
	Proj_repo_metadata    T_f_insert_proj_repo_metadata
	Sbot_lin_companies    pgtype.FlatArray[T_ivals_sbot_lin_company]
	Sbot_lin_profiles     pgtype.FlatArray[T_ivals_sbot_lin_profile]
}

type T_f_insert_proj_bookmark_w_cats struct {
	Auth_users_id pgtype.UUID
	Proj_cats     pgtype.FlatArray[pgtype.Text]
	Proj_repo     T_f_insert_proj_repo
}

var ProjTypes = []string{
	"t_ivals_proj_classifier",
	"_t_ivals_proj_classifier",
	"t_f_insert_proj_repo_metadata",
	"t_f_insert_proj_repo",
	"t_f_insert_proj_bookmark_w_cats",
}
