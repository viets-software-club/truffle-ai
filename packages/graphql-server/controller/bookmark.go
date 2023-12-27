package controller

import (
	"errors"
	"fmt"
	"strings"

	githubv3 "github.com/google/go-github/v57/github"
	"github.com/viets-software-club/truffle-ai/graphql-server/api/algolia/hackernews"
	"github.com/viets-software-club/truffle-ai/graphql-server/api/github"
	"github.com/viets-software-club/truffle-ai/graphql-server/api/scrapingbot/linkedin"
	convert "github.com/viets-software-club/truffle-ai/graphql-server/controller/convert"
	githubScraper "github.com/viets-software-club/truffle-ai/graphql-server/scraper/github"
)

func (c *Controller) CreateBookmarkWithCategories(authUserId string, repoOwner string, repoName string, categories []string) error {

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

	readme, err := githubScraper.GetReadme(RawApi, repoOwner, repoName, string(repo.Repository.DefaultBranchRef.Name))
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
			fmt.Println(err)
			continue
		}
		contributorToUserMap[contributor] = user
	}

	repoEli5, err := PromptsApi.GenerateEli5FromReadme(readme)
	if err != nil {
		return err
	}

	starHist, err := GithubApi.GetStarHistEven(30, repoOwner, repoName)
	if err != nil {
		return err
	}
	fmt.Println(starHist)

	issueHist, err := GithubApi.GetStarHistEven(30, repoOwner, repoName)
	if err != nil {
		return err
	}
	forkHist, err := GithubApi.GetStarHistEven(30, repoOwner, repoName)
	if err != nil {
		return err
	}

	var linkedinCompanies []linkedin.LinkedinCompany
	var linkedinProfiles []linkedin.LinkedinProfile
	if repo.Repository.IsInOrganization {
		linkedinCompany, err := LinkedinApi.GetLinkedinCompany(string(repo.Repository.Owner.Organization.Name))
		if err != nil {
			return err
		}
		linkedinCompanies = append(linkedinCompanies, *linkedinCompany)
	} else {
		linkedinProfile, err := LinkedinApi.GetLinkedinProfile(string(repo.Repository.Owner.Organization.Name))
		if err != nil {
			return err
		}
		linkedinProfiles = append(linkedinProfiles, *linkedinProfile)
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

	hackernewsSentiment, err := PromptsApi.GenerateHackernewsSentiment(comments)
	if err != nil {
		return err
	}

	projBookmarkWithCats, err := convert.ConvertToProjBookmarkWithCats(authUserId, &categories, repo, contributorToUserMap, starHist, issueHist, forkHist, &linkedinCompanies, &linkedinProfiles, hackernewsQuery, stories, comments, repoEli5, hackernewsSentiment)
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
