package github

import (
	githubv3 "github.com/google/go-github/v57/github"
	"github.com/jackc/pgx/v5/pgtype"
	githubApi "github.com/viets-software-club/truffle-ai/graphql-server/api/github"
	"github.com/viets-software-club/truffle-ai/graphql-server/db/types"
)

func ConvertGithubContr(contributors *map[*githubv3.Contributor]*githubApi.GetUser) (*pgtype.FlatArray[types.T_f_insert_gthb_contr], error) {

	var pgContributors pgtype.FlatArray[types.T_f_insert_gthb_contr]
	for contributor, user := range *contributors {
		owner := types.T_f_insert_gthb_contr_owner{
			Avatar_url:       pgtype.Text{String: *contributor.AvatarURL, Valid: true},
			Gthb_owner_login: pgtype.Text{String: *contributor.Login, Valid: true},
			Gthb_owner_url:   pgtype.Text{String: *contributor.URL, Valid: true},
			Gthb_user: types.T_ivals_gthb_user{
				Bio:                   pgtype.Text{String: string(user.User.Bio), Valid: true},
				Bio_html:              pgtype.Text{String: string(user.User.BioHtml), Valid: true},
				Company:               pgtype.Text{String: string(user.User.Company), Valid: true},
				Company_html:          pgtype.Text{String: string(user.User.CompanyHtml), Valid: true},
				Created_at:            pgtype.Timestamptz{Time: user.User.CreatedAt.Time, Valid: true},
				Email:                 pgtype.Text{String: string(user.User.UserEmail), Valid: true},
				Followers_total_count: pgtype.Int8{Int64: int64(user.User.Followers.TotalCount), Valid: true},
				Gthb_user_name:        pgtype.Text{String: string(user.User.Name), Valid: true},
				Twitter_username:      pgtype.Text{String: string(user.User.TwitterUsername), Valid: true},
				Website_url:           pgtype.Text{String: user.User.WebsiteUrl.String(), Valid: true},
			},
		}

		pgContributors = append(pgContributors, types.T_f_insert_gthb_contr{
			Contributions: pgtype.Int8{Int64: int64(*contributor.Contributions), Valid: true},
			Gthb_owner:    owner,
		})
	}

	return &pgContributors, nil
}
