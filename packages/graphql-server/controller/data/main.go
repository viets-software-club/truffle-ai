package data

import (
	"errors"
	"log"

	githubv3 "github.com/google/go-github/v57/github"
	"github.com/viets-software-club/truffle-ai/graphql-server/api/algolia/hackernews"
	"github.com/viets-software-club/truffle-ai/graphql-server/api/github"
	"github.com/viets-software-club/truffle-ai/graphql-server/api/scrapingbot/linkedin"
	githubScraper "github.com/viets-software-club/truffle-ai/graphql-server/scraper/github"
	scraper "github.com/viets-software-club/truffle-ai/graphql-server/scraper/github"
)

type ProjectData struct {
	GithubData          GithubData
	ScrapingbotData     ScrapingbotData
	AlgoliaData         AlgoliaData
	HackernewsSentiment string
	RepoEli5            string
	ProjClassifiers     []string
}

type GithubData struct {
	RepoPtr                 *github.GetRepository
	ContributorToUserMapPtr *ContributorToUserMap
	StarHistMapPtr          *github.StarHistMap
	IssueHistMapPtr         *github.IssueHistMap
	ForkHistMapPtr          *github.ForkHistMap
}

type ScrapingbotData struct {
	LinkedinCompaniesPtr *[]linkedin.LinkedinCompany
	LinkedinProfilesPtr  *[]linkedin.LinkedinProfile
}

type AlgoliaData struct {
	Query                 string
	HackernewsStoriesPtr  *hackernews.HackernewsStoriesResponse
	HackernewsCommentsPtr *hackernews.HackernewsCommentsResponse
}

type ContributorToUserMap = map[*githubv3.Contributor]*github.GetUser

func GetProjectData(repoOwner string, repoName string) (*ProjectData, error) {

	// Create channels
	errChan := make(chan error)
	contributorToUserMapPtrChan := make(chan *map[*githubv3.Contributor]*github.GetUser)
	starHistPtrChan := make(chan *map[string]github.Hist)
	issueHistPtrChan := make(chan *map[string]github.Hist)
	forkHistPtrChan := make(chan *map[string]github.Hist)
	repoEli5Chan := make(chan string)
	linkedinCompaniesChan := make(chan *[]linkedin.LinkedinCompany)
	linkedinProfilesChan := make(chan *[]linkedin.LinkedinProfile)
	hackernewsStoriesResponseChan := make(chan *hackernews.HackernewsStoriesResponse)
	hackernewsCommentsResponseChan := make(chan *hackernews.HackernewsCommentsResponse)
	hackernewsSentimentChan := make(chan string)

	// close all channels
	defer close(errChan)
	defer close(contributorToUserMapPtrChan)
	defer close(starHistPtrChan)
	defer close(issueHistPtrChan)
	defer close(forkHistPtrChan)
	defer close(repoEli5Chan)
	defer close(linkedinCompaniesChan)
	defer close(linkedinProfilesChan)
	defer close(hackernewsStoriesResponseChan)
	defer close(hackernewsCommentsResponseChan)
	defer close(hackernewsSentimentChan)

	// Retrieve star history
	go func() {
		starHist, err := GithubApi.GetStarHist(30, repoOwner, repoName)
		if err != nil {
			errChan <- err
			return
		}
		starHistPtrChan <- starHist
	}()

	// Retrieve issue history
	go func() {
		issueHist, err := GithubApi.GetStarHist(30, repoOwner, repoName)
		if err != nil {
			errChan <- err
			return
		}
		issueHistPtrChan <- issueHist
	}()

	// Retrieve fork history
	go func() {
		forkHist, err := GithubApi.GetStarHist(30, repoOwner, repoName)
		if err != nil {
			errChan <- err
			return
		}
		forkHistPtrChan <- forkHist
	}()

	// Retrieve contributors
	go func() {
		type ContributorAndUser struct {
			Contributor *githubv3.Contributor
			User        *github.GetUser
		}
		contributors, err := GithubApi.GetContributors(repoOwner, repoName)
		if err != nil {
			errChan <- err
			return
		}
		if contributors == nil {
			errChan <- errors.New("no contributors found")
			return
		}
		contributorToUserMap := make(map[*githubv3.Contributor]*github.GetUser)
		userChan := make(chan *ContributorAndUser)
		defer close(userChan)
		for _, contributor := range *contributors {
			go func(contributor *githubv3.Contributor) {
				user, err := GithubApi.QueryUser(*contributor.Login)
				if err != nil {
					log.Println(err)
					userChan <- nil
				} else {
					userChan <- &ContributorAndUser{
						Contributor: contributor,
						User:        user,
					}
				}
			}(contributor)
		}
		for i := 0; i < len(*contributors); i++ {
			userAndContributor := <-userChan
			if userAndContributor != nil {
				contributorToUserMap[userAndContributor.Contributor] = userAndContributor.User
			}
		}

		contributorToUserMapPtrChan <- &contributorToUserMap
	}()

	hackernewsQuery := repoName

	// Retrieve stories
	go func() {
		stories, err := hackernews.GetStoriesForQuery(hackernewsQuery)
		if err != nil {
			errChan <- err
			return
		}
		hackernewsStoriesResponseChan <- stories
	}()
	// Retrieve comments
	go func() {
		comments, err := hackernews.GetCommentsForQuery(hackernewsQuery)
		if err != nil {
			errChan <- err
			return
		}
		hackernewsCommentsResponseChan <- comments
		hackernewsSentiment, err := PromptsApi.GenerateHackernewsSentiment(comments)
		if err != nil {
			errChan <- err
		}
		hackernewsSentimentChan <- hackernewsSentiment
	}()

	// Retrieve repository

	repoPtr, err := GithubApi.QueryData(repoOwner, repoName)
	if err != nil {
		return nil, err
	}

	// Retrieve Eli5 from readme
	go func() {
		readme, err := githubScraper.GetReadme(RawApi, repoOwner, repoName, string(repoPtr.Repository.DefaultBranchRef.Name))
		if err != nil {
			errChan <- err
			return
		}
		repoEli5, err := PromptsApi.GenerateEli5FromReadme(readme)
		if err != nil {
			errChan <- err
			return
		}
		repoEli5Chan <- repoEli5
	}()
	if repoPtr.Repository.IsInOrganization {
		go func() {
			var linkedinCompanies []linkedin.LinkedinCompany
			linkedinCompany, err := LinkedinApi.GetLinkedinCompany(string(repoPtr.Repository.Owner.Organization.Name))
			if err != nil {
				log.Println("couldn't get linkedin companies")
				linkedinCompaniesChan <- nil
			} else {
				linkedinCompanies = append(linkedinCompanies, *linkedinCompany)
				linkedinCompaniesChan <- &linkedinCompanies
			}

		}()
	}
	if !repoPtr.Repository.IsInOrganization {
		go func() {

			var linkedinProfiles []linkedin.LinkedinProfile

			linkedinProfile, err := LinkedinApi.GetLinkedinProfile(string(repoPtr.Repository.Owner.Login))
			if err != nil {
				log.Println("couldn't get linkedin profiles")
				linkedinProfilesChan <- nil
			} else {
				linkedinProfiles = append(linkedinProfiles, *linkedinProfile)
				linkedinProfilesChan <- &linkedinProfiles
			}

		}()
	}

	var data ProjectData
	data.GithubData.RepoPtr = repoPtr
	for i := 0; i < 9; i++ {
		select {
		case err := <-errChan:
			return nil, err
		case data.GithubData.ContributorToUserMapPtr = <-contributorToUserMapPtrChan:
		case data.GithubData.StarHistMapPtr = <-starHistPtrChan:
		case data.GithubData.IssueHistMapPtr = <-issueHistPtrChan:
		case data.GithubData.ForkHistMapPtr = <-forkHistPtrChan:
		case data.RepoEli5 = <-repoEli5Chan:
		case data.ScrapingbotData.LinkedinCompaniesPtr = <-linkedinCompaniesChan:
		case data.ScrapingbotData.LinkedinProfilesPtr = <-linkedinProfilesChan:
		case data.AlgoliaData.HackernewsStoriesPtr = <-hackernewsStoriesResponseChan:
		case data.AlgoliaData.HackernewsCommentsPtr = <-hackernewsCommentsResponseChan:
		case data.HackernewsSentiment = <-hackernewsSentimentChan:
		}
	}
	data.AlgoliaData.Query = hackernewsQuery

	return &data, nil

}

func GetTrendingRepositoriesToProjectDataMap(time string) (*map[*githubScraper.TrendingRepository]*ProjectData, error) {

	type trendingRepoAndProjData struct {
		TrendingRepository *githubScraper.TrendingRepository
		ProjectData        *ProjectData
	}

	trendingRepositories, err := scraper.GetTrendingRepositories(RawApi, time)
	if err != nil {
		return nil, err
	}

	log.Println("trendingRepositories", trendingRepositories)

	trendingRepositoriesToProjectDataMap := make(map[*githubScraper.TrendingRepository]*ProjectData)
	trendingRepoAndProjDataChan := make(chan *trendingRepoAndProjData)
	for _, trendingRepository := range trendingRepositories {
		go func(trendingRepository githubScraper.TrendingRepository) {

			projectData, err := GetProjectData(trendingRepository.Owner, trendingRepository.Name)
			if err != nil {
				log.Fatal("Error when getting project data for trending repository", err)
				trendingRepoAndProjDataChan <- nil
				return
			}
			trendingRepoAndProjDataChan <- &trendingRepoAndProjData{
				TrendingRepository: &trendingRepository,
				ProjectData:        projectData,
			}
		}(trendingRepository)
	}

	for i := 0; i < len(trendingRepositories); i++ {
		trendingRepoAndProjData := <-trendingRepoAndProjDataChan
		if trendingRepoAndProjData == nil || trendingRepoAndProjData.ProjectData == nil || trendingRepoAndProjData.TrendingRepository == nil {
			log.Fatal("trendingRepoAndProjData can not be nil")
		} else {
			trendingRepositoriesToProjectDataMap[trendingRepoAndProjData.TrendingRepository] = trendingRepoAndProjData.ProjectData
		}
	}
	return &trendingRepositoriesToProjectDataMap, nil
}
