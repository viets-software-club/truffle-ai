package controller

import (
	"errors"
	"time"

	"github.com/go-co-op/gocron/v2"
	"github.com/viets-software-club/truffle-ai/graphql-server/controller/convert"
	"github.com/viets-software-club/truffle-ai/graphql-server/controller/data"
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

func (c *Controller) UpdateProjects() error {
	utcTime := time.Now().UTC()
	updatables, err := c.db.CallSelectUpdatables(false, utcTime.Weekday() == time.Monday, utcTime.Day() == 1)
	if err != nil {
		return err
	}
	if updatables == nil {
		return errors.New("updatables is nil")
	}
	for _, updatable := range *updatables {
		data, err := data.GetProjectUpdateData(updatable.Gthb_repo_name.String, updatable.Gthb_owner_login.String)
		if err != nil {
			return err
		}
		projRepo, err := convert.ConvertProjectDataToTFInsertProjRepo(data)
		if err != nil {
			return err
		}
		err = c.db.CallInsertProjRepo(projRepo)
		if err != nil {
			return err
		}
	}
	return nil
}

func RunCronjobs() error {

	s, err := gocron.NewScheduler(gocron.WithLocation(time.UTC))

	if err != nil {
		return err
	}

	// Updates
	_, err = s.NewJob(
		gocron.CronJob("0 2 * * *", false),
		gocron.NewTask(ControllerInstance.UpdateProjects),
	)
	if err != nil {
		return err
	}

	// daily
	_, err = s.NewJob(
		gocron.CronJob("0 3 * * *", false),
		gocron.NewTask(ControllerInstance.RecreateTrending, "daily"),
	)
	if err != nil {
		return err
	}
	// weekly
	_, err = s.NewJob(
		gocron.CronJob("0 4 * * 0", false),
		gocron.NewTask(ControllerInstance.RecreateTrending, "weekly"),
	)
	if err != nil {
		return err
	}
	// monthly
	_, err = s.NewJob(
		gocron.CronJob("0 5 1 * *", false),
		gocron.NewTask(ControllerInstance.RecreateTrending, "monthly"),
	)
	if err != nil {
		return err
	}

	s.Start()
	return nil
}
