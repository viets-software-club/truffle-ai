package controller

import (
	"time"

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

func (c *Controller) CreateBookmarkWithCategories(repoOwner string, repoName string, categories []string) error {

	err := c.db.CallInsertProjBookmarkWCats(DummyObject)
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
