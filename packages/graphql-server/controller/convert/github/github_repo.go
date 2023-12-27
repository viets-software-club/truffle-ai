package github

import (
	githubv3 "github.com/google/go-github/v57/github"
	"github.com/jackc/pgx/v5/pgtype"
	githubApi "github.com/viets-software-club/truffle-ai/graphql-server/api/github"
	"github.com/viets-software-club/truffle-ai/graphql-server/db/types"
)

func ConvertGithubRepo(repo *githubApi.GetRepository, forkHist *map[string]githubApi.Hist, issueHist *map[string]githubApi.Hist, starHist *map[string]githubApi.Hist, contributorsToUsers *map[*githubv3.Contributor]*githubApi.GetUser) (*types.T_f_insert_gthb_repo, error) {
	pgForkHist, err := ConvertForkHist(forkHist)
	if err != nil {
		return nil, err
	}
	pgIssueHist, err := ConvertIssueHist(issueHist)
	if err != nil {
		return nil, err
	}
	pgStarHist, err := ConvertStarHist(starHist)
	if err != nil {
		return nil, err
	}
	pgContributions, err := ConvertGithubContr(contributorsToUsers)
	if err != nil {
		return nil, err
	}
	pgOwner, err := ConvertGithubOwner(&repo.Repository.Owner)
	if err != nil {
		return nil, err
	}
	pgGithubLangs, err := ConvertGithubLang(&repo.Repository.Languages)
	if err != nil {
		return nil, err
	}
	pgRepoTopics, err := ConvertGithubRepoTopic(repo.Repository.RepositoryTopics)
	if err != nil {
		return nil, err
	}

	return &types.T_f_insert_gthb_repo{
		Created_at:                pgtype.Timestamptz{Time: repo.Repository.CreatedAt.Time, Valid: true},
		Fork_count:                pgtype.Int8{Int64: int64(repo.Repository.ForkCount), Valid: true},
		Gthb_fork_hists:           *pgForkHist,
		Gthb_issue_hists:          *pgIssueHist,
		Gthb_langs:                *pgGithubLangs,
		Gthb_owner:                *pgOwner,
		Gthb_repo_contrs:          *pgContributions,
		Gthb_repo_description:     pgtype.Text{String: string(repo.Repository.Description), Valid: true},
		Gthb_repo_name:            pgtype.Text{String: string(repo.Repository.Name), Valid: true},
		Gthb_repo_topics:          *pgRepoTopics,
		Gthb_repo_url:             pgtype.Text{String: string(repo.Repository.Url.URL.String()), Valid: true},
		Gthb_star_hists:           *pgStarHist,
		Homepage_url:              pgtype.Text{String: string(repo.Repository.HomepageUrl.String()), Valid: true},
		Is_in_organization:        pgtype.Bool{Bool: bool(repo.Repository.IsInOrganization), Valid: true},
		Issues_total_count:        pgtype.Int8{Int64: int64(repo.Repository.Issues.TotalCount), Valid: true},
		Pull_requests_total_count: pgtype.Int8{Int64: int64(repo.Repository.PullRequests.TotalCount), Valid: true},
		Stargazer_count:           pgtype.Int8{Int64: int64(repo.Repository.StargazerCount), Valid: true},
	}, nil
}
