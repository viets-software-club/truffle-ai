package controller

import (
	"time"

	"github.com/go-co-op/gocron/v2"
	"github.com/viets-software-club/truffle-ai/graphql-server/db"
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
