package controller

import (
	"errors"
	"strings"

	githubv3 "github.com/google/go-github/v57/github"
	"github.com/viets-software-club/truffle-ai/graphql-server/api/algolia/hackernews"
	"github.com/viets-software-club/truffle-ai/graphql-server/api/github"
	"github.com/viets-software-club/truffle-ai/graphql-server/api/scrapingbot/linkedin"
	convert "github.com/viets-software-club/truffle-ai/graphql-server/controller/convert"
)

func (c *Controller) CreateBookmarkWithCategories(repoOwner string, repoName string, categories []string) error {

	if len(categories) == 0 {
		return errors.New("no categories provided")
	}
	if strings.TrimSpace(repoOwner) == "" {
		return errors.New("no repo owner provided")
	}
	if strings.TrimSpace(repoName) == "" {
		return errors.New("no repo name provided")
	}

	repo, err := GithubApi.QueryData(repoOwner, repoName)
	if err != nil {
		return err
	}

	contributors, err := GithubApi.GetContributors(repoOwner, repoName)
	if err != nil {
		return err
	}
	contributorToUserMap := make(map[*githubv3.Contributor]*github.GetUser)
	for _, contributor := range *contributors {
		user, err := GithubApi.QueryUser(*contributor.Login)
		if err != nil {
			return err
		}
		contributorToUserMap[contributor] = user
	}

	repoEli5, err := PromptsApi.GenerateEli5FromReadme()
	if err != nil {
		return err
	}
	hackernewsSentiment, err := PromptsApi.GenerateHackernewsSentiment()
	if err != nil {
		return err
	}

	starHist, err := GithubApi.GetStarHistEven(int(repo.Repository.StargazerCount), 30, repoOwner, repoName)
	if err != nil {
		return err
	}
	issueHist, err := GithubApi.GetIssueHistEven(int(repo.Repository.StargazerCount), 30, repoOwner, repoName)
	if err != nil {
		return err
	}
	forkHist, err := GithubApi.GetForkHistEven(int(repo.Repository.StargazerCount), 30, repoOwner, repoName)
	if err != nil {
		return err
	}

	var linkedinCompanies *[]linkedin.LinkedinCompany
	var linkedinProfiles *[]linkedin.LinkedinProfile
	if repo.Repository.IsInOrganization {
		linkedinCompanies, err = LinkedinApi.GetLinkedInCompanySearch(string(repo.Repository.Owner.Organization.Name))
		if err != nil {
			return err
		}
	} else {
		linkedinProfiles, err = LinkedinApi.GetLinkedInProfileSearch(string(repo.Repository.Owner.Organization.Name))
		if err != nil {
			return err
		}
	}

	hackernewsQuery := string(repo.Repository.Name)

	stories, err := hackernews.GetStoriesForQuery(hackernewsQuery)
	if err != nil {
		return err
	}
	comments, err := hackernews.GetCommentsForQuery(hackernewsQuery)
	if err != nil {
		return err
	}

	projBookmarkWithCats, err := convert.ConvertToProjBookmarkWithCats(&categories, repo, contributorToUserMap, starHist, issueHist, forkHist, linkedinCompanies, linkedinProfiles, hackernewsQuery, stories, comments, repoEli5, hackernewsSentiment)
	if err != nil {
		return err
	}
	err = c.db.CallInsertProjBookmarkWCats(*projBookmarkWithCats)
	if err != nil {
		return err
	}

	return nil
}

func (c *Controller) RemoveBookmark(projBookmarkId int) error {
	err := c.db.CallDeleteProjBookmark(projBookmarkId)
	if err != nil {
		return err
	}
	return nil
}

func (c *Controller) RemoveBookmarkByProjRepoId(projRepoId int) error {
	err := c.db.CallDeleteProjBookmarkByProjRepoId(projRepoId)
	if err != nil {
		return err
	}
	return nil
}
