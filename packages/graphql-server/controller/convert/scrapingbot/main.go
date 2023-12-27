package scrapingbot

import (
	"fmt"
	"regexp"
	"strconv"

	"github.com/jackc/pgx/v5/pgtype"
	"github.com/viets-software-club/truffle-ai/graphql-server/api/scrapingbot/linkedin"
	"github.com/viets-software-club/truffle-ai/graphql-server/db/types"
)

func ConvertLinkedinCompanies(companies *[]linkedin.LinkedinCompany) (*pgtype.FlatArray[types.T_ivals_sbot_lin_company], error) {
	var pgCompanies pgtype.FlatArray[types.T_ivals_sbot_lin_company]
	for _, company := range *companies {
		employeesAmount, err := strconv.Atoi(company.EmployeesAmountInLinkedin)
		if err != nil {
			return nil, err
		}

		pgCompanies = append(pgCompanies, types.T_ivals_sbot_lin_company{
			About:                        pgtype.Text{String: company.About, Valid: true},
			Employees_amount_in_linkedin: pgtype.Int8{Int64: int64(employeesAmount), Valid: true},
			Followers:                    pgtype.Int8{Int64: int64(company.Followers), Valid: true},
			Headquarters:                 pgtype.Text{String: company.Headquarters, Valid: true},
			Logo:                         pgtype.Text{String: company.Logo, Valid: true},
			Sbot_lin_company_image:       pgtype.Text{String: company.Image, Valid: true},
			Sbot_lin_company_name:        pgtype.Text{String: company.Name, Valid: true},
			Sbot_lin_company_type:        pgtype.Text{String: company.Type, Valid: true},
			Sbot_lin_company_url:         pgtype.Text{String: company.URL, Valid: true},
			Sphere:                       pgtype.Text{String: company.Sphere, Valid: true},
			Website:                      pgtype.Text{String: company.Website, Valid: true},
		})
	}

	return &pgCompanies, nil

}

func ConvertLinkedinProfiles(profiles *[]linkedin.LinkedinProfile) (*pgtype.FlatArray[types.T_ivals_sbot_lin_profile], error) {
	var pgProfiles pgtype.FlatArray[types.T_ivals_sbot_lin_profile]
	for _, profile := range *profiles {
		re := regexp.MustCompile("[0-9]+")
		matched := re.FindString(profile.Following)
		if matched == "" {
			return nil, fmt.Errorf("no number found in string Following")
		}
		following, err := strconv.Atoi(matched)
		if err != nil {
			return nil, err
		}

		matched2 := re.FindString(profile.Followers)
		if matched == "" {
			return nil, fmt.Errorf("no number found in string Followers")
		}
		followers, err := strconv.Atoi(matched2)
		if err != nil {
			return nil, err
		}
		pgProfiles = append(pgProfiles, types.T_ivals_sbot_lin_profile{
			About:                      pgtype.Text{String: profile.About, Valid: true},
			Avatar:                     pgtype.Text{String: profile.Avatar, Valid: true},
			City:                       pgtype.Text{String: profile.City, Valid: true},
			Current_company_link:       pgtype.Text{String: profile.CurrentCompany.Link, Valid: true},
			Current_company_name:       pgtype.Text{String: profile.CurrentCompany.Name, Valid: true},
			Education_details:          pgtype.Text{String: profile.EducationsDetails, Valid: true},
			Followers:                  pgtype.Int8{Int64: int64(followers), Valid: true},
			Position:                   pgtype.Text{String: profile.Position, Valid: true},
			Sbot_lin_profile_name:      pgtype.Text{String: profile.Name, Valid: true},
			Sbot_lin_profile_url:       pgtype.Text{String: profile.URL, Valid: true},
			Sbot_lin_profile_following: pgtype.Int8{Int64: int64(following), Valid: true},
		})
	}
	return &pgProfiles, nil
}
