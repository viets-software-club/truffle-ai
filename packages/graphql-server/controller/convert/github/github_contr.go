package github

import (
	"errors"

	githubv3 "github.com/google/go-github/v57/github"
	"github.com/jackc/pgx/v5/pgtype"
	githubApi "github.com/viets-software-club/truffle-ai/graphql-server/api/github"
	"github.com/viets-software-club/truffle-ai/graphql-server/controller/convert/helper"

	"github.com/viets-software-club/truffle-ai/graphql-server/db/types"
)

func ConvertGithubv3ContributorToGetUserMapPtrToTFInsertGthbContrFlatArrayPtr(contributors *map[*githubv3.Contributor]*githubApi.GetUser) (pgtype.FlatArray[types.T_f_insert_gthb_contr], error) {

	var pgContributors pgtype.FlatArray[types.T_f_insert_gthb_contr]
	if contributors == nil {
		return nil, errors.New("contributors can not be nil")
	}
	for contributorPtr, userPtr := range *contributors {
		if userPtr == nil {
			return nil, errors.New("user in map can not be nil")
		}
		if contributorPtr == nil {
			return nil, errors.New("contributor can not be nil")
		}

		if contributorPtr.AvatarURL == nil {
			return nil, errors.New("contributor AvatarUrl is nil")
		}

		if contributorPtr.Login == nil {
			return nil, errors.New("contributor Login is nil")
		}
		if contributorPtr.URL == nil {
			return nil, errors.New("contributor URL is nil")
		}
		if contributorPtr.Contributions == nil {
			return nil, errors.New("contributor Contributions is nil")
		}

		user := userPtr.User

		owner := types.T_f_insert_gthb_contr_owner{
			Avatar_url:               helper.StringToNoEmptyPgText(*contributorPtr.AvatarURL),
			Gthb_owner_login:         helper.StringToNoEmptyPgText(*contributorPtr.Login),
			Gthb_owner_url:           helper.StringToNoEmptyPgText(*contributorPtr.URL),
			Repositories_total_count: Githubv4IntToPgInt8(user.Repositories.TotalCount),
			Gthb_user: &types.T_ivals_gthb_user{
				Bio:                   Githubv4StringToNoEmptyPgText(user.Bio),
				Bio_html:              Githubv4StringToNoEmptyPgText(user.BioHtml),
				Company:               Githubv4StringToNoEmptyPgText(user.Company),
				Company_html:          Githubv4StringToNoEmptyPgText(user.CompanyHtml),
				Created_at:            helper.TimeToNoDefaultPgTimestampz(user.CreatedAt.Time),
				Email:                 Githubv4StringToNoEmptyPgText(user.UserEmail),
				Followers_total_count: Githubv4IntToPgInt8(user.Followers.TotalCount),
				Gthb_user_name:        Githubv4StringToNoEmptyPgText(user.Name),
				Twitter_username:      Githubv4StringToNoEmptyPgText(user.TwitterUsername),
			},
		}

		if user.WebsiteUrl.URL != nil {
			owner.Gthb_user.Website_url = helper.StringToNoEmptyPgText(user.WebsiteUrl.String())
		}

		pgContributors = append(pgContributors, types.T_f_insert_gthb_contr{
			Contributions: helper.IntToPgInt8(*contributorPtr.Contributions),
			Gthb_owner:    owner,
		})
	}

	return pgContributors, nil
}
