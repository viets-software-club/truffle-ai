package types

import "github.com/jackc/pgx/v5/pgtype"

type T_ivals_sbot_lin_company struct {
	About                        pgtype.Text
	Employees_amount_in_linkedin pgtype.Int8
	Followers                    pgtype.Int8
	Headquarters                 pgtype.Text
	Logo                         pgtype.Text
	Sbot_lin_company_image       pgtype.Text
	Sbot_lin_company_name        pgtype.Text
	Sbot_lin_company_type        pgtype.Text
	Sbot_lin_company_url         pgtype.Text
	Sphere                       pgtype.Text
	Website                      pgtype.Text
}

type T_ivals_sbot_lin_profile struct {
	About                      pgtype.Text
	Avatar                     pgtype.Text
	City                       pgtype.Text
	Current_company_link       pgtype.Text
	Current_company_name       pgtype.Text
	Education_details          pgtype.Text
	Followers                  pgtype.Int8
	Position                   pgtype.Text
	Sbot_lin_profile_name      pgtype.Text
	Sbot_lin_profile_url       pgtype.Text
	Sbot_lin_profile_following pgtype.Int8
}

type T_f_insert_sbot_lin_keyword struct {
	Keywords         pgtype.Text
	Sbot_lin_company T_ivals_sbot_lin_company
	Sbot_lin_profile T_ivals_sbot_lin_profile
}

var SbotLinTypes = []string{
	"t_ivals_sbot_lin_company",
	"t_ivals_sbot_lin_profile",
	"t_f_insert_sbot_lin_keyword",
}
