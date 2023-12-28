package convert

import (
	"errors"
	"time"

	"github.com/jackc/pgx/v5/pgtype"
	"github.com/viets-software-club/truffle-ai/graphql-server/controller/convert/helper"
	data "github.com/viets-software-club/truffle-ai/graphql-server/controller/data"
	"github.com/viets-software-club/truffle-ai/graphql-server/db/types"

	"github.com/google/uuid"
	convertAlgolia "github.com/viets-software-club/truffle-ai/graphql-server/controller/convert/algolia"
	convertGithub "github.com/viets-software-club/truffle-ai/graphql-server/controller/convert/github"
	convertScrapingbot "github.com/viets-software-club/truffle-ai/graphql-server/controller/convert/scrapingbot"
)

var NO_TIME time.Time

func ConvertProjRepoClassifier(classifiers *[]string) (pgtype.FlatArray[types.T_ivals_proj_classifier], error) {

	var pgClassifiers pgtype.FlatArray[types.T_ivals_proj_classifier]

	for _, classifier := range *classifiers {
		pgClassifiers = append(pgClassifiers, types.T_ivals_proj_classifier{
			Classifier: pgtype.Text{String: classifier, Valid: true},
		})
	}

	return pgClassifiers, nil
}

func convertProjectDataToTFInsertProjRepo(data *data.ProjectData) (*types.T_f_insert_proj_repo, error) {

	// convert github repo
	pgGithubRepo, err := convertGithub.ConvertGithubDataToTFInsertGthbRepo(&data.GithubData)
	if err != nil {
		return nil, err
	}

	// convert linkedin data
	pgLinkedinCompanies, pgLinkedinProfiles, err := convertScrapingbot.ConvertScrapingbotData(&data.ScrapingbotData)

	if err != nil {
		return nil, err
	}

	storiesAndComments, err := convertAlgolia.ConvertAlogliaDataToTFInsertAlgoHnQueryWithStoriesAndComments(&data.AlgoliaData)
	if err != nil {
		return nil, err
	}
	if storiesAndComments == nil {
		return nil, errors.New("storiesAndComments can not be nil")
	}

	classifiers, err := ConvertProjRepoClassifier(&data.ProjClassifiers)
	if err != nil {
		return nil, err
	}

	return &types.T_f_insert_proj_repo{
		Algo_hn_queries: pgtype.FlatArray[types.T_f_insert_algo_hn_query_with_stories_and_comments]{
			*storiesAndComments,
		},
		Gthb_repo: pgGithubRepo,
		Note:      pgtype.Text{Valid: false},
		Proj_repo_metadata: &types.T_f_insert_proj_repo_metadata{
			Algo_hn_eli5: helper.StringToNoEmptyPgText(data.HackernewsSentiment),
			Repo_eli5:    helper.StringToNoEmptyPgText(data.RepoEli5),
		},
		Proj_repo_classifiers: classifiers,
		Sbot_lin_companies:    pgLinkedinCompanies,
		Sbot_lin_profiles:     pgLinkedinProfiles,
	}, nil
}

func ConvertToTFInsertProjBookmarkWCats(authUserId string, categories *[]string, data *data.ProjectData) (*types.T_f_insert_proj_bookmark_w_cats, error) {
	pgCategories := pgtype.FlatArray[pgtype.Text]{}
	for _, category := range *categories {
		pgCategories = append(pgCategories, pgtype.Text{String: category, Valid: true})
	}

	projRepo, err := convertProjectDataToTFInsertProjRepo(data)

	if err != nil {
		return nil, err
	}
	uuid, err := uuid.Parse(authUserId)
	if err != nil {
		return nil, err
	}
	return &types.T_f_insert_proj_bookmark_w_cats{
		Auth_users_id: pgtype.UUID{Bytes: uuid, Valid: true},
		Proj_cats:     pgCategories,
		Proj_repo:     projRepo,
	}, nil
}

func ConvertToTFInsertGthbTrending(dateRange string, data *data.ProjectData) (*types.T_f_insert_gthb_trending, error) {

	projRepo, err := convertProjectDataToTFInsertProjRepo(data)

	if err != nil {
		return nil, err
	}
	if projRepo == nil {
		return nil, errors.New("projRepo can not be nil")
	}
	return &types.T_f_insert_gthb_trending{
		Date_range: helper.StringToNoEmptyPgText(dateRange),
		Lang:       pgtype.Text{Valid: false},
		Proj_repo:  *projRepo,
	}, nil
}
