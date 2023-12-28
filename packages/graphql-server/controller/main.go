package controller

import (
	"time"

	"github.com/go-co-op/gocron/v2"
	"github.com/viets-software-club/truffle-ai/graphql-server/db"
)

type Controller struct {
	db *db.Database
}

var ControllerInstance = New()

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

func RunCronjobs() error {

	s, err := gocron.NewScheduler(gocron.WithLocation(time.UTC))

	if err != nil {
		return err
	}

	// daily
	_, err = s.NewJob(
		gocron.CronJob("0 3 * * *", false),
		gocron.NewTask(UpdateTrending, "daily"),
	)
	if err != nil {
		return err
	}
	// weekly
	_, err = s.NewJob(
		gocron.CronJob("0 4 * * 0", false),
		gocron.NewTask(UpdateTrending, "weekly"),
	)
	if err != nil {
		return err
	}
	// monthly
	_, err = s.NewJob(
		gocron.CronJob("0 5 2 * *", false),
		gocron.NewTask(UpdateTrending, "monthly"),
	)
	if err != nil {
		return err
	}

	s.Start()
	return nil
}
