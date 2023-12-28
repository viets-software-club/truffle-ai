package types

import "github.com/jackc/pgx/v5/pgtype"

type T_ivals_gthb_repo_topic struct {
	Gthb_repo_topic_name pgtype.Text
	Stargazer_count      pgtype.Int8
}

// Github Organization
type T_ivals_gthb_org struct {
	Created_at           pgtype.Timestamptz
	Description_html     pgtype.Text
	Email                pgtype.Text
	Gthb_org_description pgtype.Text
	Gthb_org_name        pgtype.Text
	Twitter_username     pgtype.Text
	Website_url          pgtype.Text
}

// Github User
type T_ivals_gthb_user struct {
	Bio                   pgtype.Text
	Bio_html              pgtype.Text
	Company               pgtype.Text
	Company_html          pgtype.Text
	Created_at            pgtype.Timestamptz
	Email                 pgtype.Text
	Followers_total_count pgtype.Int8
	Gthb_user_name        pgtype.Text
	Twitter_username      pgtype.Text
	Website_url           pgtype.Text
}

// Github Owner
type T_f_insert_gthb_owner struct {
	Avatar_url               pgtype.Text
	Gthb_org                 *T_ivals_gthb_org
	Gthb_owner_type          pgtype.Text
	Gthb_owner_login         pgtype.Text
	Gthb_owner_url           pgtype.Text
	Gthb_user                *T_ivals_gthb_user
	Repositories_total_count pgtype.Int8
}

type T_f_insert_gthb_contr_owner struct {
	Avatar_url               pgtype.Text
	Gthb_owner_login         pgtype.Text
	Gthb_owner_url           pgtype.Text
	Gthb_user                *T_ivals_gthb_user
	Repositories_total_count pgtype.Int8
}

// Github Repo Contributor
type T_f_insert_gthb_contr struct {
	Contributions pgtype.Int8
	Gthb_owner    T_f_insert_gthb_contr_owner
}

// Github Repo
type T_f_insert_gthb_repo struct {
	Created_at                pgtype.Timestamptz
	Fork_count                pgtype.Int8
	Gthb_fork_hists           pgtype.FlatArray[T_ivals_gthb_fork_hist]
	Gthb_issue_hists          pgtype.FlatArray[T_ivals_gthb_issue_hist]
	Gthb_langs                pgtype.FlatArray[T_ivals_gthb_lang]
	Gthb_owner                *T_f_insert_gthb_owner
	Gthb_repo_contrs          pgtype.FlatArray[T_f_insert_gthb_contr]
	Gthb_repo_description     pgtype.Text
	Gthb_repo_name            pgtype.Text
	Gthb_repo_topics          pgtype.FlatArray[T_ivals_gthb_repo_topic]
	Gthb_repo_url             pgtype.Text
	Gthb_star_hists           pgtype.FlatArray[T_ivals_gthb_star_hist]
	Homepage_url              pgtype.Text
	Is_in_organization        pgtype.Bool
	Issues_total_count        pgtype.Int8
	Pull_requests_total_count pgtype.Int8
	Stargazer_count           pgtype.Int8
}

// Github Star History
type T_ivals_gthb_star_hist struct {
	Amount              pgtype.Int8
	Gthb_star_hist_date pgtype.Timestamptz
}

// Github Issue History
type T_ivals_gthb_issue_hist struct {
	Amount               pgtype.Int8
	Gthb_issue_hist_date pgtype.Timestamptz
}

// Github Fork History
type T_ivals_gthb_fork_hist struct {
	Amount              pgtype.Int8
	Gthb_fork_hist_date pgtype.Timestamptz
}

// Github Language
type T_ivals_gthb_lang struct {
	Color          pgtype.Text
	Gthb_lang_name pgtype.Text
}

type T_f_insert_gthb_trending struct {
	Date_range pgtype.Text
	Lang       pgtype.Text
	Proj_repo  T_f_insert_proj_repo
}

// types for arrays are prefixed with _
var GthbTypes = []string{
	"d_gthb_trending_date_range",
	"d_gthb_owner_type",
	"t_ivals_gthb_owner",
	"t_ivals_gthb_user",
	"t_ivals_gthb_org",
	"t_ivals_gthb_repo_topic",
	"_t_ivals_gthb_repo_topic",
	"t_ivals_gthb_repo",
	"t_ivals_gthb_star_hist",
	"_t_ivals_gthb_star_hist",
	"t_ivals_gthb_fork_hist",
	"_t_ivals_gthb_fork_hist",
	"t_ivals_gthb_lang",
	"_t_ivals_gthb_lang",
	"t_ivals_gthb_issue_hist",
	"_t_ivals_gthb_issue_hist",
	"t_f_insert_gthb_owner",
	"t_f_insert_gthb_contr_owner",
	"t_f_insert_gthb_contr",
	"_t_f_insert_gthb_contr",
	"t_f_insert_gthb_repo",
}
var GthbTypes2 = []string{
	"t_f_insert_gthb_trending",
	"_t_f_insert_gthb_trending",
}
