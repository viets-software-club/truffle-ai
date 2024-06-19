package controller

import (
	"errors"
	"log"
	"time"

	"github.com/go-co-op/gocron/v2"
	"github.com/viets-software-club/truffle-ai/graphql-server/controller/convert"
	"github.com/viets-software-club/truffle-ai/graphql-server/controller/data"
	"github.com/viets-software-club/truffle-ai/graphql-server/db"
	"github.com/viets-software-club/truffle-ai/graphql-server/db/types"
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

	// data, err := data.GetProjectUpdateData("pczern", "verify-pr-action")
	// log.Println("thedata2", data)

	// if data.GithubData.StarHistMapPtr == nil {
	// 	fmt.Println("star hist nils")
	// }
	// if data.GithubData.IssueHistMapPtr == nil {
	// 	fmt.Println("issue hist nils")
	// }
	// if data.GithubData.ForkHistMapPtr == nil {
	// 	fmt.Println("fork hist nils")
	// }
	// log.Println("thedata", data)
	// if err != nil {
	// 	log.Println("err", err)
	// 	log.Println("skipped repo update")
	// }
	// projRepo, err := convert.ConvertProjectDataToTFInsertProjRepo(data)
	// if err != nil {
	// 	log.Println("err", err)
	// 	log.Println("skipped repo update")
	// }
	// err = c.db.CallInsertProjRepo(projRepo)
	// if err != nil {
	// 	log.Println("err", err)
	// 	log.Println("skipped repo update")
	// }
	// fmt.Println("updatables", *updatables)
	for index, updatable := range *updatables {
		go func(updatable types.T_f_select_updatable_result, index int) {

			time.Sleep(900 * time.Duration(index/7) * time.Second)

			data, err := data.GetProjectUpdateData(updatable.Gthb_owner_login.String, updatable.Gthb_repo_name.String)
			log.Println(data)
			if err != nil {
				log.Println("err", err)
				log.Println("skipped repo update", updatable.Gthb_owner_login.String, updatable.Gthb_repo_name.String)
				return
			}
			projRepo, err := convert.ConvertProjectDataToTFInsertProjRepo(data)
			if err != nil {
				log.Println("err", err)
				log.Println("skipped repo update", updatable.Gthb_owner_login.String, updatable.Gthb_repo_name.String)
				return
			}
			err = c.db.CallInsertProjRepo(projRepo)
			if err != nil {
				log.Println("err", err)
				log.Println("skipped repo update", updatable.Gthb_owner_login.String, updatable.Gthb_repo_name.String)
				return
			}
			log.Println("updated", updatable.Gthb_owner_login.String, updatable.Gthb_repo_name.String)
		}(updatable, index)
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
		gocron.CronJob("0 4 * * 1", false),
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
