package controller

import (
	"errors"
	"log"

	"github.com/jackc/pgx/v5/pgtype"
	"github.com/viets-software-club/truffle-ai/graphql-server/db/types"

	"github.com/viets-software-club/truffle-ai/graphql-server/controller/convert"
	"github.com/viets-software-club/truffle-ai/graphql-server/controller/data"
)

func UpdateTrending(dateRange string) error {
	err := DeleteTrending(dateRange)
	if err != nil {
		return err
	}
	err = InsertTrending(dateRange)
	if err != nil {
		return err
	}
	return nil
}

func DeleteTrending(dateRange string) error {

	err := ControllerInstance.db.CallDeleteGthbTrending(dateRange)
	if err != nil {
		return err
	}

	return nil

}

func InsertTrending(dateRange string) error {

	trendingReposToProjectDataMap, err := data.GetTrendingRepositoriesToProjectDataMap(dateRange)
	if err != nil {
		return err
	}

	log.Println("trendingReposToProjectDataMap", trendingReposToProjectDataMap)

	if trendingReposToProjectDataMap == nil {
		return errors.New("trendingReposToProjectDataMap is nil")
	}

	var gthbTrendings pgtype.FlatArray[types.T_f_insert_gthb_trending]
	for _, projectData := range *trendingReposToProjectDataMap {
		if projectData == nil {
			return errors.New("projectData is nil")
		}
		gthbTrending, err := convert.ConvertToTFInsertGthbTrending(dateRange, projectData)
		if err != nil {
			return err
		}
		if gthbTrending == nil {
			return errors.New("gthbTrending is nil")
		}
		gthbTrendings = append(gthbTrendings, *gthbTrending)
	}

	err = ControllerInstance.db.CallInsertGthbTrendings(gthbTrendings)
	if err != nil {
		return err
	}

	return nil

}
