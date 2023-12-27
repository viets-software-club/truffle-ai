package github

import (
	"errors"
	"fmt"

	githubv3 "github.com/google/go-github/v57/github"
	"github.com/jackc/pgx/v5/pgtype"
	githubApi "github.com/viets-software-club/truffle-ai/graphql-server/api/github"
	"github.com/viets-software-club/truffle-ai/graphql-server/db/types"
)

func ConvertGithubContr(contributors *map[*githubv3.Contributor]*githubApi.GetUser) (*pgtype.FlatArray[types.T_f_insert_gthb_contr], error) {

	var pgContributors pgtype.FlatArray[types.T_f_insert_gthb_contr]
	if contributors == nil {
		return nil, errors.New("contributors can not be nil")
	}
	for contributor, u := range *contributors {
		if contributor == nil {
			return nil, errors.New("contributor can not be nil")
		}
		if u == nil {
			return nil, errors.New("user can not be nil")
		}
		user := *u
		fmt.Println(user)
		owner := types.T_f_insert_gthb_contr_owner{
			Avatar_url:               pgtype.Text{String: *contributor.AvatarURL, Valid: true},
			Gthb_owner_login:         pgtype.Text{String: *contributor.Login, Valid: true},
			Gthb_owner_url:           pgtype.Text{String: *contributor.URL, Valid: true},
			Repositories_total_count: pgtype.Int8{Int64: int64(user.User.Repositories.TotalCount), Valid: true},
			Gthb_user: types.T_ivals_gthb_user{
				Bio:                   pgtype.Text{String: string(user.User.Bio), Valid: true},
				Bio_html:              pgtype.Text{String: string(user.User.BioHtml), Valid: true},
				Company:               pgtype.Text{String: string(user.User.Company), Valid: true},
				Company_html:          pgtype.Text{String: string(user.User.CompanyHtml), Valid: true},
				Created_at:            pgtype.Timestamptz{Time: user.User.CreatedAt.Time, Valid: true},
				Email:                 pgtype.Text{String: string(user.User.UserEmail), Valid: true},
				Followers_total_count: pgtype.Int8{Int64: int64(user.User.Followers.TotalCount), Valid: true},
				Gthb_user_name:        pgtype.Text{String: string(user.User.Name), Valid: true},
			},
		}

		if string(user.User.TwitterUsername) != "" {
			owner.Gthb_user.Twitter_username = pgtype.Text{String: string(user.User.TwitterUsername), Valid: true}
		}
		if user.User.WebsiteUrl.URL != nil {
			owner.Gthb_user.Website_url = pgtype.Text{String: user.User.WebsiteUrl.String(), Valid: true}
		}

		pgContributors = append(pgContributors, types.T_f_insert_gthb_contr{
			Contributions: pgtype.Int8{Int64: int64(*contributor.Contributions), Valid: true},
			Gthb_owner:    owner,
		})
	}

	return &pgContributors, nil
}
