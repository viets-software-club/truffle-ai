package github

import (
	"github.com/jackc/pgx/v5/pgtype"
	githubApi "github.com/viets-software-club/truffle-ai/graphql-server/api/github"
	"github.com/viets-software-club/truffle-ai/graphql-server/db/types"
)

func ConvertGithubOwner(owner *githubApi.GetRepositoryOwner) (*types.T_f_insert_gthb_owner, error) {
	return &types.T_f_insert_gthb_owner{
		Avatar_url:       pgtype.Text{String: owner.AvatarUrl.URL.String(), Valid: true},
		Gthb_org:         *ConvertGithubOrganization(&owner.Organization),
		Gthb_owner_login: pgtype.Text{String: string(owner.Login), Valid: true},
		Gthb_owner_url:   pgtype.Text{String: string(owner.Url.URL.String()), Valid: true},
		Gthb_owner_type:  pgtype.Text{String: "User", Valid: true},
		Gthb_user:        *ConvertGithubUser(&owner.User),
	}, nil
}

func ConvertGithubOrganization(org *githubApi.GetRepositoryOwnerOrganization) *types.T_ivals_gthb_org {
	return &types.T_ivals_gthb_org{
		Created_at:           pgtype.Timestamptz{Time: org.CreatedAt.Time, Valid: true},
		Description_html:     pgtype.Text{String: string(org.DescriptionHtml), Valid: true},
		Email:                pgtype.Text{String: string(org.OrgEmail), Valid: true},
		Gthb_org_description: pgtype.Text{String: string(org.Description), Valid: true},
		Gthb_org_name:        pgtype.Text{String: string(org.Name), Valid: true},
		Twitter_username:     pgtype.Text{String: string(org.TwitterUsername), Valid: true},
		Website_url:          pgtype.Text{String: string(org.WebsiteUrl.URL.String()), Valid: true},
	}
}

func ConvertGithubUser(User *githubApi.GetRepositoryOwnerUser) *types.T_ivals_gthb_user {
	return &types.T_ivals_gthb_user{
		Bio:                   pgtype.Text{String: string(User.Bio), Valid: true},
		Bio_html:              pgtype.Text{String: string(User.BioHtml), Valid: true},
		Company:               pgtype.Text{String: string(User.Company), Valid: true},
		Company_html:          pgtype.Text{String: string(User.CompanyHtml), Valid: true},
		Created_at:            pgtype.Timestamptz{Time: User.CreatedAt.Time, Valid: true},
		Email:                 pgtype.Text{String: string(User.UserEmail), Valid: true},
		Followers_total_count: pgtype.Int8{Int64: int64(User.Followers.TotalCount), Valid: true},
		Gthb_user_name:        pgtype.Text{String: string(User.Name), Valid: true},
		Twitter_username:      pgtype.Text{String: string(User.TwitterUsername), Valid: true},
		Website_url:           pgtype.Text{String: string(User.WebsiteUrl.URL.String()), Valid: true},
	}
}
