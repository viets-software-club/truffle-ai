package controller

import (
	"time"

	"github.com/viets-software-club/truffle-ai/graphql-server/api/github"
	"github.com/viets-software-club/truffle-ai/graphql-server/api/scrapingbot"
	"github.com/viets-software-club/truffle-ai/graphql-server/api/scrapingbot/linkedin"
	"github.com/viets-software-club/truffle-ai/graphql-server/api/scrapingbot/raw"
	"github.com/viets-software-club/truffle-ai/graphql-server/db"

	"github.com/go-co-op/gocron/v2"
)

type Controller struct {
	db *db.Database
}

func (c *Controller) Close() {
	c.db.Close()
}
func New() *Controller {
	db := db.New()
	db.Open(true)
	return &Controller{
		db,
	}
}

var GithubApi = github.New()
var ScrapingBotScraperConfig = scrapingbot.New()
var LinkedinApi = linkedin.New(ScrapingBotScraperConfig)
var RawApi = raw.New(ScrapingBotScraperConfig)

func (c *Controller) CreateBookmarkWithCategories(repoOwner string, repoName string, categories []string) error {
	// repo, err := GithubApi.QueryData(repoOwner, repoName)
	// if err != nil {
	// 	return err
	// }
	// contributors, err := GithubApi.GetContributors(repoOwner, repoName)
	// if err != nil {
	// 	return err
	// }

	// var linkedinCompany *[]linkedin.LinkedinCompany
	// var linkedinProfile *[]linkedin.LinkedinProfile
	// if repo.Repository.IsInOrganization {
	// 	linkedinCompany, err = LinkedinApi.GetLinkedInCompanySearch(string(repo.Repository.Owner.Organization.Name))
	// 	if err != nil {
	// 		return err
	// 	}
	// } else {
	// 	linkedinProfile, err = LinkedinApi.GetLinkedInProfileSearch(string(repo.Repository.Owner.Organization.Name))
	// 	if err != nil {
	// 		return err
	// 	}
	// }

	// stories, err := hackernews.GetStoriesForQuery(string(repo.Repository.Name))
	// if err != nil {
	// 	return err
	// }
	// comments, err := hackernews.GetCommentsForQuery(string(repo.Repository.Name))
	// if err != nil {
	// 	return err
	// }
	// comments.
	dummy1, err := getDummyObject("6766a618-85c4-48f1-8536-d9a51692d953")
	if err != nil {
		return err
	}
	dummy2, err := getDummyObject("997cd1f0-a7b7-4eeb-9702-0f839ea7fa22")
	if err != nil {
		return err
	}
	err = c.db.CallInsertProjBookmarkWCats(dummy1)
	if err != nil {
		return err
	}
	err = c.db.CallInsertProjBookmarkWCats(dummy2)
	if err != nil {
		return err
	}

	return nil
}

func RemoveBookmark(repoOwner string, repoName string) {

}

func updateTrending(dateRange string) {

}

func runCronjobs() error {

	s, err := gocron.NewScheduler(gocron.WithLocation(time.UTC))

	if err != nil {
		return err
	}

	// daily
	_, err = s.NewJob(
		gocron.CronJob("0 3 * * *", false),
		gocron.NewTask(updateTrending, "daily"),
	)
	if err != nil {
		return err
	}
	// weekly
	_, err = s.NewJob(
		gocron.CronJob("0 4 * * 0", false),
		gocron.NewTask(updateTrending, "weekly"),
	)
	if err != nil {
		return err
	}
	// monthly
	_, err = s.NewJob(
		gocron.CronJob("0 5 2 * *", false),
		gocron.NewTask(updateTrending, "monthly"),
	)
	if err != nil {
		return err
	}

	s.Start()
	return nil
}
