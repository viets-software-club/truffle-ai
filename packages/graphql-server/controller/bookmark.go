package controller

import (
	"errors"
	"strings"

	"github.com/viets-software-club/truffle-ai/graphql-server/controller/convert"
	"github.com/viets-software-club/truffle-ai/graphql-server/controller/data"
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
	// dummy, err := mock.GetDummyObject(authUserId)
	// if err != nil {
	// 	return err
	// }
	// err = c.db.CallInsertProjBookmarkWCats(&dummy)
	// if err != nil {
	// 	return err
	// }
	data, err := data.GetProjectData(repoOwner, repoName)
	if err != nil {
		return err
	}

	projBookmarkWithCatsPtr, err := convert.ConvertToTFInsertProjBookmarkWCats(authUserId, &categories, data)
	if err != nil {
		return err
	}
	err = c.db.CallInsertProjBookmarkWCats(projBookmarkWithCatsPtr)
	if err != nil {
		return err
	}

	// t := pgtype.FlatArray[types.T_ivals_proj_classifier]{
	// 	types.T_ivals_proj_classifier{
	// 		Classifier: pgtype.Text{String: "Classifier1", Valid: true},
	// 	},
	// }
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
