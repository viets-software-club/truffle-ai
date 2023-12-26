package convert

import (
	"github.com/jackc/pgx/v5/pgtype"
	"github.com/viets-software-club/truffle-ai/graphql-server/db/types"

	githubv3 "github.com/google/go-github/v57/github"
	"github.com/viets-software-club/truffle-ai/graphql-server/api/algolia/hackernews"
	"github.com/viets-software-club/truffle-ai/graphql-server/api/github"
	"github.com/viets-software-club/truffle-ai/graphql-server/api/scrapingbot/linkedin"
	convertAlgolia "github.com/viets-software-club/truffle-ai/graphql-server/controller/convert/algolia"
	convertGithub "github.com/viets-software-club/truffle-ai/graphql-server/controller/convert/github"
	convertScrapingbot "github.com/viets-software-club/truffle-ai/graphql-server/controller/convert/scrapingbot"
)

func convertProjRepo(repo *github.GetRepository, contributorToUserMap map[*githubv3.Contributor]*github.GetUser, starHist *[]github.Hist, issueHist *[]github.Hist, forkHist *[]github.Hist, linkedinCompanies *[]linkedin.LinkedinCompany, linkedinProfiles *[]linkedin.LinkedinProfile, hackernewsQuery string, hackernewsStories *hackernews.HackernewsStoriesResponse, hackernewsComments *hackernews.HackernewsCommentsResponse, repoEli5 string, hackernewsSentiment string) (*types.T_f_insert_proj_repo, error) {

	pgGithubRepo, err := convertGithub.ConvertGithubRepo(repo, forkHist, issueHist, starHist, &contributorToUserMap)
	if err != nil {
		return nil, err
	}
	pgLinkedinCompanies, err := convertScrapingbot.ConvertLinkedinCompanies(linkedinCompanies)
	if err != nil {
		return nil, err
	}
	pgLinkedinProfiles, err := convertScrapingbot.ConvertLinkedinProfiles(linkedinProfiles)
	if err != nil {
		return nil, err
	}

	storiesAndComments, err := convertAlgolia.ConvertHackernewsResponsesToQuery(hackernewsQuery, hackernewsStories, hackernewsComments)
	if err != nil {
		return nil, err
	}

	return &types.T_f_insert_proj_repo{
		Algo_hn_queries: pgtype.FlatArray[types.T_f_insert_algo_hn_query_with_stories_and_comments]{
			*storiesAndComments,
		},
		Gthb_repo: *pgGithubRepo,
		Note:      pgtype.Text{Valid: false},
		Proj_repo_metadata: types.T_f_insert_proj_repo_metadata{
			Algo_hn_eli5: pgtype.Text{String: hackernewsSentiment, Valid: true},
			Repo_eli5:    pgtype.Text{String: repoEli5, Valid: true},
		},
		Sbot_lin_companies: *pgLinkedinCompanies,
		Sbot_lin_profiles:  *pgLinkedinProfiles,
	}, nil

}

func ConvertToProjBookmarkWithCats(categories *[]string, repo *github.GetRepository, contributorToUserMap map[*githubv3.Contributor]*github.GetUser, starHist *[]github.Hist, issueHist *[]github.Hist, forkHist *[]github.Hist, linkedinCompanies *[]linkedin.LinkedinCompany, linkedinProfiles *[]linkedin.LinkedinProfile, hackernewsQuery string, hackernewsStories *hackernews.HackernewsStoriesResponse, hackernewsComments *hackernews.HackernewsCommentsResponse, repoEli5 string, hackernewsSentiment string) (*types.T_f_insert_proj_bookmark_w_cats, error) {
	pgCategories := pgtype.FlatArray[pgtype.Text]{}
	for _, category := range *categories {
		pgCategories = append(pgCategories, pgtype.Text{String: category, Valid: true})
	}

	projRepo, err := convertProjRepo(repo, contributorToUserMap, starHist, issueHist, forkHist, linkedinCompanies, linkedinProfiles, hackernewsQuery, hackernewsStories, hackernewsComments, repoEli5, hackernewsSentiment)

	if err != nil {
		return nil, err
	}

	return &types.T_f_insert_proj_bookmark_w_cats{
		Proj_repo: *projRepo,
	}, nil
}
