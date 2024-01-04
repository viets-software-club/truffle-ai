package github

import (
	"errors"

	githubApi "github.com/viets-software-club/truffle-ai/graphql-server/api/github"
	"github.com/viets-software-club/truffle-ai/graphql-server/controller/convert/helper"
	"github.com/viets-software-club/truffle-ai/graphql-server/db/types"
)

func ConvertGetRepositoryOwnerPtrToTFInsertGthbOwnerPtr(owner *githubApi.GetRepositoryOwner) (*types.T_f_insert_gthb_owner, error) {

	if owner == nil {
		return nil, errors.New("owner can not be nil")
	}

	if owner.AvatarUrl.URL == nil {
		return nil, errors.New("owner AvatarUrl is nil")
	}

	gthbOrg, err := ConvertGetRepositoryOwnerOrganizationPtrToTIvalsGthbOrgPtr(&owner.Organization)
	if err != nil {
		return nil, err
	}

	gthbUser, err := ConvertGetRepositoryOwnerUserPtrToTIvalsGthbUserPtr(&owner.User)
	if err != nil {
		return nil, err
	}

	return &types.T_f_insert_gthb_owner{
		Avatar_url:               helper.StringToNoEmptyPgText(owner.AvatarUrl.URL.String()),
		Repositories_total_count: Githubv4IntToPgInt8(owner.Repositories.TotalCount),
		Gthb_org:                 gthbOrg,
		Gthb_owner_login:         Githubv4StringToNoEmptyPgText(owner.Login),
		Gthb_owner_url:           helper.StringToNoEmptyPgText(owner.Url.URL.String()),
		Gthb_owner_type:          helper.StringToPgText("User"),
		Gthb_user:                gthbUser,
	}, nil
}

func ConvertGetRepositoryOwnerOrganizationPtrToTIvalsGthbOrgPtr(org *githubApi.GetRepositoryOwnerOrganization) (*types.T_ivals_gthb_org, error) {

	if org == nil {
		return nil, errors.New("org can not be nil")
	}

	pgOrg := types.T_ivals_gthb_org{
		Created_at:           helper.TimeToNoDefaultPgTimestampz(org.CreatedAt.Time),
		Description_html:     Githubv4StringToNoEmptyPgText(org.DescriptionHtml),
		Email:                Githubv4StringToNoEmptyPgText(org.OrgEmail),
		Gthb_org_description: Githubv4StringToNoEmptyPgText(org.Description),
		Gthb_org_name:        Githubv4StringToNoEmptyPgText(org.Name),
		Twitter_username:     Githubv4StringToNoEmptyPgText(org.TwitterUsername),
	}

	if org.WebsiteUrl.URL != nil {
		pgOrg.Website_url = helper.StringToNoEmptyPgText(org.WebsiteUrl.String())
	}

	return &pgOrg, nil
}

func ConvertGetRepositoryOwnerUserPtrToTIvalsGthbUserPtr(user *githubApi.GetRepositoryOwnerUser) (*types.T_ivals_gthb_user, error) {

	if user == nil {
		return nil, errors.New("user can not be nil")
	}

	pgUser := types.T_ivals_gthb_user{
		Bio:                   Githubv4StringToNoEmptyPgText(user.Bio),
		Bio_html:              Githubv4StringToNoEmptyPgText(user.BioHtml),
		Company:               Githubv4StringToNoEmptyPgText(user.Company),
		Company_html:          Githubv4StringToNoEmptyPgText(user.CompanyHtml),
		Created_at:            helper.TimeToNoDefaultPgTimestampz(user.CreatedAt.Time),
		Email:                 Githubv4StringToNoEmptyPgText(user.UserEmail),
		Followers_total_count: Githubv4IntToPgInt8(user.Followers.TotalCount),
		Gthb_user_name:        Githubv4StringToNoEmptyPgText(user.Name),
		Twitter_username:      Githubv4StringToNoEmptyPgText(user.TwitterUsername),
	}
	if user.WebsiteUrl.URL != nil {
		pgUser.Website_url = helper.StringToNoEmptyPgText(user.WebsiteUrl.String())
	}

	return &pgUser, nil

}
