package scrapingbot

import (
	"strconv"

	"github.com/jackc/pgx/v5/pgtype"
	"github.com/viets-software-club/truffle-ai/graphql-server/api/scrapingbot/linkedin"
	"github.com/viets-software-club/truffle-ai/graphql-server/controller/convert/helper"
	"github.com/viets-software-club/truffle-ai/graphql-server/controller/data"
	"github.com/viets-software-club/truffle-ai/graphql-server/db/types"
)

func ConvertLinkedinCompanySlicePtrToTIvalsSbotLinCompanyFlatArray(companies *[]linkedin.LinkedinCompany) (pgtype.FlatArray[types.T_ivals_sbot_lin_company], error) {
	var pgCompanies pgtype.FlatArray[types.T_ivals_sbot_lin_company]
	if companies == nil {
		return nil, nil
	}
	for _, company := range *companies {
		employeesAmount, err := strconv.Atoi(company.EmployeesAmountInLinkedin)
		if err != nil {
			return nil, err
		}

		pgCompanies = append(pgCompanies, types.T_ivals_sbot_lin_company{
			About:                        helper.StringToNoEmptyPgText(company.About),
			Employees_amount_in_linkedin: helper.IntToPgInt8(employeesAmount),
			Followers:                    helper.IntToPgInt8(company.Followers),
			Headquarters:                 helper.StringToNoEmptyPgText(company.Headquarters),
			Logo:                         helper.StringToNoEmptyPgText(company.Logo),
			Sbot_lin_company_image:       helper.StringToNoEmptyPgText(company.Image),
			Sbot_lin_company_name:        helper.StringToNoEmptyPgText(company.Name),
			Sbot_lin_company_type:        helper.StringToNoEmptyPgText(company.Type),
			Sbot_lin_company_url:         helper.StringToNoEmptyPgText(company.URL),
			Sphere:                       helper.StringToNoEmptyPgText(company.Sphere),
			Website:                      helper.StringToNoEmptyPgText(company.Website),
		})
	}

	return pgCompanies, nil

}

func ConvertLinkedinProfileSlicePtrToTIvalsSbotLinProfileFlatArray(profiles *[]linkedin.LinkedinProfile) (pgtype.FlatArray[types.T_ivals_sbot_lin_profile], error) {
	var pgProfiles pgtype.FlatArray[types.T_ivals_sbot_lin_profile]
	if profiles == nil {
		return nil, nil
	}
	for _, profile := range *profiles {
		pgProfiles = append(pgProfiles, types.T_ivals_sbot_lin_profile{
			About:                      helper.StringToNoEmptyPgText(profile.About),
			Avatar:                     helper.StringToNoEmptyPgText(profile.Avatar),
			City:                       helper.StringToNoEmptyPgText(profile.City),
			Current_company_link:       helper.StringToNoEmptyPgText(profile.CurrentCompany.Link),
			Current_company_name:       helper.StringToNoEmptyPgText(profile.CurrentCompany.Name),
			Education_details:          helper.StringToNoEmptyPgText(profile.EducationsDetails),
			Followers:                  helper.StringToNoEmptyPgText(profile.Followers),
			Position:                   helper.StringToNoEmptyPgText(profile.Position),
			Sbot_lin_profile_name:      helper.StringToNoEmptyPgText(profile.Name),
			Sbot_lin_profile_url:       helper.StringToNoEmptyPgText(profile.URL),
			Sbot_lin_profile_following: helper.StringToNoEmptyPgText(profile.Following),
		})
	}
	return pgProfiles, nil
}

func ConvertScrapingbotData(data *data.ScrapingbotData) (pgtype.FlatArray[types.T_ivals_sbot_lin_company], pgtype.FlatArray[types.T_ivals_sbot_lin_profile], error) {
	pgLinkedinCompanies, err := ConvertLinkedinCompanySlicePtrToTIvalsSbotLinCompanyFlatArray(data.LinkedinCompaniesPtr)
	if err != nil {
		return nil, nil, err
	}
	pgLinkedinProfiles, err := ConvertLinkedinProfileSlicePtrToTIvalsSbotLinProfileFlatArray(data.LinkedinProfilesPtr)
	if err != nil {
		return nil, nil, err
	}
	return pgLinkedinCompanies, pgLinkedinProfiles, nil
}
