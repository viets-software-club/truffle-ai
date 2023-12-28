package github

import (
	"errors"
	"strings"

	"time"

	"github.com/jackc/pgx/v5/pgtype"
	"github.com/shurcooL/githubv4"
	"github.com/viets-software-club/truffle-ai/graphql-server/controller/convert/helper"
	"github.com/viets-software-club/truffle-ai/graphql-server/controller/convert/validate"
	"github.com/viets-software-club/truffle-ai/graphql-server/controller/data"
	"github.com/viets-software-club/truffle-ai/graphql-server/db/types"
)

var NO_TIME time.Time

func ConvertGithubDataToTFInsertGthbRepo(data *data.GithubData) (*types.T_f_insert_gthb_repo, error) {
	if data.RepoPtr == nil {
		return nil, errors.New("repo can not be nil")
	}
	pgForkHist, err := ConvertForkHistMapPtrToTIvalsGthbForkHistFlatArrayPtr(data.ForkHistMapPtr)
	if err != nil {
		return nil, err
	}
	pgIssueHist, err := ConvertIssueHistMapPtrToTIvalsGthbIssueHistFlatArrayPtr(data.IssueHistMapPtr)
	if err != nil {
		return nil, err
	}
	pgStarHist, err := ConvertStarHistMapPtrToTIvalsGthbStarHistFlatArrayPtr(data.StarHistMapPtr)
	if err != nil {
		return nil, err
	}
	pgContributions, err := ConvertGithubv3ContributorToGetUserMapPtrToTFInsertGthbContrFlatArrayPtr(data.ContributorToUserMapPtr)
	if err != nil {
		return nil, err
	}

	repo := data.RepoPtr.Repository
	pgOwner, err := ConvertGetRepositoryOwnerPtrToTFInsertGthbOwnerPtr(&repo.Owner)
	if err != nil {
		return nil, err
	}
	if pgOwner == nil {
		return nil, errors.New("owner can not be nil")
	}
	pgGithubLangs, err := ConvertGetRepositoryLanguagesPtrToTIvalsGthbLangFlatArrayPtr(&repo.Languages)
	if err != nil {
		return nil, err
	}
	pgRepoTopics, err := ConvertGetRepositoryRepositoryTopicsPtrToTIvalsGthbRepoTopicFlatArrayPtr(&repo.RepositoryTopics)
	if err != nil {
		return nil, err
	}

	pgRepo := types.T_f_insert_gthb_repo{
		Created_at:                helper.TimeToNoDefaultPgTimestampz(repo.CreatedAt.Time),
		Fork_count:                Githubv4IntToPgInt8(repo.ForkCount),
		Gthb_fork_hists:           pgForkHist,
		Gthb_issue_hists:          pgIssueHist,
		Gthb_langs:                pgGithubLangs,
		Gthb_owner:                pgOwner,
		Gthb_repo_contrs:          pgContributions,
		Gthb_repo_description:     Githubv4StringToNoEmptyPgText(repo.Description),
		Gthb_repo_name:            Githubv4StringToNoEmptyPgText(repo.Name),
		Gthb_repo_topics:          pgRepoTopics,
		Gthb_star_hists:           pgStarHist,
		Is_in_organization:        pgtype.Bool{Bool: bool(repo.IsInOrganization), Valid: true},
		Issues_total_count:        Githubv4IntToPgInt8(repo.Issues.TotalCount),
		Pull_requests_total_count: Githubv4IntToPgInt8(repo.PullRequests.TotalCount),
		Stargazer_count:           Githubv4IntToPgInt8(repo.StargazerCount),
	}

	if repo.Url.URL != nil {
		pgRepo.Gthb_repo_url = helper.StringToNoEmptyPgText(repo.Url.URL.String())
	}

	if repo.HomepageUrl.URL != nil {
		pgRepo.Homepage_url = helper.StringToNoEmptyPgText(repo.HomepageUrl.String())
	}

	return &pgRepo, nil

}

func IsGithubv4StringValid(s githubv4.String) bool {
	return validate.IsStringValid(string(s))
}

func Githubv4StringToNoEmptyPgText(s githubv4.String) pgtype.Text {
	if strings.TrimSpace(string(s)) == "" {
		return pgtype.Text{String: string(s), Valid: false}
	}
	return pgtype.Text{String: string(s), Valid: true}
}

func Githubv4IntToPgInt8(i githubv4.Int) pgtype.Int8 {
	return pgtype.Int8{Int64: int64(i), Valid: true}
}
