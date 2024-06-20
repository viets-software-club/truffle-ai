package data

import (
	"errors"
	"fmt"
	"log"
	"sync"
	"time"

	"github.com/viets-software-club/truffle-ai/graphql-server/api/discord"
	prompts "github.com/viets-software-club/truffle-ai/graphql-server/api/prompts"

	githubv3 "github.com/google/go-github/v57/github"
	"github.com/viets-software-club/truffle-ai/graphql-server/api/algolia/hackernews"
	discordApi "github.com/viets-software-club/truffle-ai/graphql-server/api/discord"
	"github.com/viets-software-club/truffle-ai/graphql-server/api/github"

	"github.com/viets-software-club/truffle-ai/graphql-server/api/scrapingbot/linkedin"
	githubScraper "github.com/viets-software-club/truffle-ai/graphql-server/scraper/github"
	scraper "github.com/viets-software-club/truffle-ai/graphql-server/scraper/github"
)

type ProjectData struct {
	GithubData          GithubData
	ScrapingbotData     ScrapingbotData
	AlgoliaData         AlgoliaData
	DiscordData         DiscordData
	HackernewsSentiment string
	RepoEli5            string
	ProjClassifiers     []string
}

type GithubData struct {
	ContributorCount        int
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

type DiscordData struct {
	Invites *[]discordApi.DiscordInviteResponse
}

type ContributorToUserMap = map[*githubv3.Contributor]*github.GetUser

var MAX_PAGES = 10

// var limiter *rate.Limiter = rate.NewLimiter(rate.Every(time.Second), 120) // Adjust rate as needed

func GetProjectData(repoOwner string, repoName string) (*ProjectData, error) {
	log.Println("GetProjectData", repoOwner, repoName)
	// limiter := rate.NewLimiter(rate.Every(time.Second), 120) // Adjust rate as needed
	currentTime := time.Now()
	// Create channels
	errChan := make(chan error, 10)
	contributorToUserMapPtrChan := make(chan *map[*githubv3.Contributor]*github.GetUser, 1)
	starHistPtrChan := make(chan *map[string]github.Hist, 1)
	issueHistPtrChan := make(chan *map[string]github.Hist, 1)
	forkHistPtrChan := make(chan *map[string]github.Hist, 1)
	repoEli5Chan := make(chan string, 1)
	// twitterEli5Chan := make(chan string, 1)
	linkedinCompaniesChan := make(chan *[]linkedin.LinkedinCompany, 1)
	linkedinProfilesChan := make(chan *[]linkedin.LinkedinProfile, 1)
	hackernewsStoriesResponseChan := make(chan *hackernews.HackernewsStoriesResponse, 1)
	hackernewsCommentsResponseChan := make(chan *hackernews.HackernewsCommentsResponse, 1)
	hackernewsSentimentChan := make(chan string, 1)
	contributorCountChan := make(chan int, 1)
	discordInvitesChan := make(chan *[]discordApi.DiscordInviteResponse, 1)

	var wg sync.WaitGroup
	wg.Add(10)

	// Retrieve star history
	go func() {
		defer wg.Done()
		defer close(starHistPtrChan)

		starHist, err := GithubApi.GetStarHist(MAX_PAGES, repoOwner, repoName)
		if err != nil {
			errChan <- err
			return
		}

		starHistPtrChan <- starHist

	}()

	// Retrieve issue history
	go func() {
		defer wg.Done()
		defer close(issueHistPtrChan)

		issueHist, err := GithubApi.GetIssueHist(MAX_PAGES, repoOwner, repoName)
		if err != nil {
			errChan <- err
			return
		}

		issueHistPtrChan <- issueHist

	}()

	// Retrieve fork history
	go func() {
		defer wg.Done()
		defer close(forkHistPtrChan)

		forkHist, err := GithubApi.GetForkHist(MAX_PAGES, repoOwner, repoName)
		if err != nil {
			errChan <- err
			return
		}

		forkHistPtrChan <- forkHist
	}()

	go func() {
		defer wg.Done()
		defer close(contributorCountChan)
		count, err := GithubApi.GetContributorCount(repoOwner, repoName)
		if err != nil {
			errChan <- err
			return
		}
		contributorCountChan <- count
	}()

	// Retrieve contributors
	go func() {
		defer wg.Done()
		defer close(contributorToUserMapPtrChan)

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
		defer wg.Done()
		defer close(hackernewsStoriesResponseChan)

		stories, err := hackernews.GetStoriesForQuery(hackernewsQuery)
		if err != nil {
			errChan <- err
			return
		}

		hackernewsStoriesResponseChan <- stories

	}()
	// Retrieve comments
	go func() {
		defer wg.Done()
		defer wg.Done()
		defer close(hackernewsCommentsResponseChan)

		defer close(hackernewsSentimentChan)

		comments, err := hackernews.GetCommentsForQuery(hackernewsQuery)
		if err != nil {
			errChan <- err
			return
		}
		hackernewsCommentsResponseChan <- comments

		hackernewsSentiment, err := PromptsApi.GenerateHackernewsSentiment(comments)
		if err != nil {
			errChan <- err
			return
		}

		hackernewsSentimentChan <- hackernewsSentiment

	}()

	// Retrieve repository
	repoPtr, err := GithubApi.QueryData(repoOwner, repoName)
	if err != nil {
		return nil, err
	}

	// Retrieve Eli5 from readme
	go func(about string) {
		defer wg.Done()
		defer close(repoEli5Chan)

		readme, err := githubScraper.GetReadme(RawApi, repoOwner, repoName, string(repoPtr.Repository.DefaultBranchRef.Name))
		if err != nil {
			errChan <- err
			return
		}
		codes := discord.GetDiscordInviteCodesFromDiscordInviteLinksInString(readme)
		var invites []discordApi.DiscordInviteResponse
		for _, code := range codes {
			invite, err := DiscordApi.GetInvite(code)
			if err != nil {
				errChan <- err
				return
			}
			// if invite == nil {
			// 	errChan <- errors.New("invite is nil")
			// 	return
			// }
			if invite != nil {
				invites = append(invites, *invite)
			}
		}
		for i, invite := range invites {
			fmt.Printf("Invite %d: %+v\n", i, invite)
		}

		if len(invites) > 0 {
			discordInvitesChan <- &invites
		} else {
			discordInvitesChan <- nil
		}
		repoEli5, err := PromptsApi.GenerateEli5FromReadme(prompts.RepoData{
			Readme: readme,
			About:  about,
		})
		if err != nil {
			errChan <- err
			return
		}
		repoEli5Chan <- repoEli5
	}(string(repoPtr.Repository.Description))
	if repoPtr.Repository.IsInOrganization {
		go func() {
			defer wg.Done()
			defer close(linkedinCompaniesChan)
			var linkedinCompanies []linkedin.LinkedinCompany
			linkedinCompany, err := LinkedinApi.GetLinkedinCompany(string(repoPtr.Repository.Owner.Organization.Name))

			if err != nil {
				linkedinCompaniesChan <- nil
			} else {
				linkedinCompanies = append(linkedinCompanies, *linkedinCompany)
				linkedinCompaniesChan <- &linkedinCompanies
			}

		}()
	}
	if !repoPtr.Repository.IsInOrganization {
		go func() {
			defer wg.Done()
			defer close(linkedinProfilesChan)
			var linkedinProfiles []linkedin.LinkedinProfile
			if len(repoPtr.Repository.Owner.User.Name) == 0 {
				linkedinProfilesChan <- nil
				return
			}
			linkedinProfile, err := LinkedinApi.GetLinkedinProfile(string(repoPtr.Repository.Owner.User.Name))

			if err != nil {
				linkedinProfilesChan <- nil
			} else {
				linkedinProfiles = append(linkedinProfiles, *linkedinProfile)
				linkedinProfilesChan <- &linkedinProfiles

			}

		}()
	}
	var data ProjectData
	data.GithubData.RepoPtr = repoPtr
	wg.Wait()
	close(errChan)

	if err := <-errChan; err != nil {
		fmt.Println("error", err)
		return nil, err
	}
	data.GithubData.ContributorCount = <-contributorCountChan
	data.GithubData.ContributorToUserMapPtr = <-contributorToUserMapPtrChan
	data.GithubData.StarHistMapPtr = <-starHistPtrChan
	data.GithubData.IssueHistMapPtr = <-issueHistPtrChan
	data.GithubData.ForkHistMapPtr = <-forkHistPtrChan
	data.RepoEli5 = <-repoEli5Chan
	if repoPtr.Repository.IsInOrganization {
		data.ScrapingbotData.LinkedinCompaniesPtr = <-linkedinCompaniesChan
	} else {
		data.ScrapingbotData.LinkedinProfilesPtr = <-linkedinProfilesChan
	}
	data.AlgoliaData.HackernewsStoriesPtr = <-hackernewsStoriesResponseChan
	data.AlgoliaData.HackernewsCommentsPtr = <-hackernewsCommentsResponseChan
	data.HackernewsSentiment = <-hackernewsSentimentChan
	data.DiscordData.Invites = <-discordInvitesChan
	if data.GithubData.StarHistMapPtr != nil && data.GithubData.RepoPtr != nil {
		(*data.GithubData.StarHistMapPtr)[currentTime.String()] = github.Hist{
			Amount: int(data.GithubData.RepoPtr.Repository.StargazerCount),
			Date:   currentTime,
		}
	}
	if data.GithubData.ForkHistMapPtr != nil && data.GithubData.RepoPtr != nil {
		(*data.GithubData.ForkHistMapPtr)[currentTime.String()] = github.Hist{
			Amount: int(data.GithubData.RepoPtr.Repository.ForkCount),
			Date:   currentTime,
		}
	}
	if data.GithubData.IssueHistMapPtr != nil && data.GithubData.RepoPtr != nil {
		(*data.GithubData.IssueHistMapPtr)[currentTime.String()] = github.Hist{
			Amount: int(data.GithubData.RepoPtr.Repository.Issues.TotalCount),
			Date:   currentTime,
		}
	}

	data.AlgoliaData.Query = hackernewsQuery
	fmt.Println("done1", repoOwner, repoName)

	return &data, nil

}

func GetProjectUpdateData(repoOwner string, repoName string) (*ProjectData, error) {
	fmt.Println("start", repoOwner, repoName)

	currentTime := time.Now()
	// Create channels
	errChan := make(chan error, 9)
	contributorToUserMapPtrChan := make(chan *map[*githubv3.Contributor]*github.GetUser, 1)
	starHistPtrChan := make(chan *map[string]github.Hist, 1)
	issueHistPtrChan := make(chan *map[string]github.Hist, 1)
	forkHistPtrChan := make(chan *map[string]github.Hist, 1)
	repoEli5Chan := make(chan string, 1)
	hackernewsStoriesResponseChan := make(chan *hackernews.HackernewsStoriesResponse, 1)
	hackernewsCommentsResponseChan := make(chan *hackernews.HackernewsCommentsResponse, 1)
	hackernewsSentimentChan := make(chan string, 1)
	contributorCountChan := make(chan int, 1)
	discordInvitesChan := make(chan *[]discordApi.DiscordInviteResponse, 1)

	var wg sync.WaitGroup
	wg.Add(9)

	// Retrieve star history
	go func() {

		defer wg.Done()
		defer close(starHistPtrChan)

		starHist, err := GithubApi.GetStarHistRandom(MAX_PAGES, repoOwner, repoName)

		if err != nil {
			log.Println(err)
			errChan <- err
			return
		}

		starHistPtrChan <- starHist

	}()

	// Retrieve issue history
	go func() {

		defer wg.Done()
		defer close(issueHistPtrChan)

		issueHist, err := GithubApi.GetIssueHistRandom(MAX_PAGES, repoOwner, repoName)

		if err != nil {
			errChan <- err
			return
		}

		issueHistPtrChan <- issueHist

	}()

	// Retrieve fork history
	go func() {

		defer wg.Done()
		defer close(forkHistPtrChan)

		forkHist, err := GithubApi.GetForkHistRandom(MAX_PAGES, repoOwner, repoName)

		if err != nil {
			errChan <- err
			return
		}

		forkHistPtrChan <- forkHist
	}()

	go func() {
		defer wg.Done()
		defer close(contributorCountChan)
		count, err := GithubApi.GetContributorCount(repoOwner, repoName)
		if err != nil {
			errChan <- err
			return
		}
		contributorCountChan <- count
	}()

	// Retrieve contributors
	go func() {

		defer wg.Done()
		defer close(contributorToUserMapPtrChan)

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

		defer wg.Done()
		defer close(hackernewsStoriesResponseChan)

		stories, err := hackernews.GetStoriesForQuery(hackernewsQuery)
		if err != nil {
			errChan <- err
			return
		}

		hackernewsStoriesResponseChan <- stories

	}()

	// Retrieve comments
	go func() {

		defer wg.Done()
		defer wg.Done()
		defer close(hackernewsCommentsResponseChan)

		defer close(hackernewsSentimentChan)

		comments, err := hackernews.GetCommentsForQuery(hackernewsQuery)
		if err != nil {
			errChan <- err
			return
		}
		hackernewsCommentsResponseChan <- comments
		hackernewsSentiment, err := PromptsApi.GenerateHackernewsSentiment(comments)
		if err != nil {
			errChan <- err
			return
		}

		hackernewsSentimentChan <- hackernewsSentiment

	}()

	// Retrieve repository
	repoPtr, err := GithubApi.QueryData(repoOwner, repoName)
	if err != nil {
		return nil, err
	}

	// Retrieve Eli5 from readme
	go func(about string) {
		defer wg.Done()
		defer close(repoEli5Chan)

		readme, err := githubScraper.GetReadme(RawApi, repoOwner, repoName, string(repoPtr.Repository.DefaultBranchRef.Name))
		if err != nil {
			errChan <- err
			return
		}
		codes := discord.GetDiscordInviteCodesFromDiscordInviteLinksInString(readme)
		var invites []discordApi.DiscordInviteResponse
		for _, code := range codes {
			invite, err := DiscordApi.GetInvite(code)
			if err != nil {
				errChan <- err
				return
			}
			// if invite == nil {
			// 	errChan <- errors.New("invite is nil")
			// 	return
			// }
			if invite != nil {
				invites = append(invites, *invite)
			}
		}
		discordInvitesChan <- &invites
		repoEli5, err := PromptsApi.GenerateEli5FromReadme(prompts.RepoData{
			Readme: readme,
			About:  about,
		})
		if err != nil {
			errChan <- err
			return
		}
		repoEli5Chan <- repoEli5
	}(string(repoPtr.Repository.Description))

	var data ProjectData
	data.GithubData.RepoPtr = repoPtr

	wg.Wait()
	close(errChan)

	if err := <-errChan; err != nil {
		log.Println("important", err)
		return nil, err
	}
	fmt.Println("done1")
	data.GithubData.ContributorCount = <-contributorCountChan
	fmt.Println("done1-")

	data.GithubData.ContributorToUserMapPtr = <-contributorToUserMapPtrChan
	fmt.Println("done12")

	data.GithubData.StarHistMapPtr = <-starHistPtrChan
	fmt.Println("done123")

	data.GithubData.IssueHistMapPtr = <-issueHistPtrChan
	fmt.Println("done1234")

	data.GithubData.ForkHistMapPtr = <-forkHistPtrChan
	fmt.Println("done12345")

	data.RepoEli5 = <-repoEli5Chan
	fmt.Println("done123456")

	data.AlgoliaData.HackernewsStoriesPtr = <-hackernewsStoriesResponseChan
	fmt.Println("done1234567")

	data.AlgoliaData.HackernewsCommentsPtr = <-hackernewsCommentsResponseChan
	fmt.Println("done12345678")

	data.HackernewsSentiment = <-hackernewsSentimentChan
	fmt.Println("done123456789")

	data.DiscordData.Invites = <-discordInvitesChan
	fmt.Println("done123456789")

	if data.GithubData.StarHistMapPtr != nil {
		fmt.Println("said not nil")
	}

	if data.GithubData.StarHistMapPtr != nil && data.GithubData.RepoPtr != nil {
		(*data.GithubData.StarHistMapPtr)[currentTime.String()] = github.Hist{
			Amount: int(data.GithubData.RepoPtr.Repository.StargazerCount),
			Date:   currentTime,
		}
	}
	if data.GithubData.ForkHistMapPtr != nil && data.GithubData.RepoPtr != nil {
		(*data.GithubData.ForkHistMapPtr)[currentTime.String()] = github.Hist{
			Amount: int(data.GithubData.RepoPtr.Repository.ForkCount),
			Date:   currentTime,
		}
	}
	if data.GithubData.IssueHistMapPtr != nil && data.GithubData.RepoPtr != nil {
		(*data.GithubData.IssueHistMapPtr)[currentTime.String()] = github.Hist{
			Amount: int(data.GithubData.RepoPtr.Repository.Issues.TotalCount),
			Date:   currentTime,
		}
	}

	data.AlgoliaData.Query = hackernewsQuery
	fmt.Println("done", repoOwner, repoName)

	return &data, nil

}

func GetTrendingRepositoriesToProjectDataMap(dateRange string) (*map[*githubScraper.TrendingRepository]*ProjectData, error) {

	type trendingRepoAndProjData struct {
		TrendingRepository *githubScraper.TrendingRepository
		ProjectData        *ProjectData
	}

	trendingRepositories, err := scraper.GetTrendingRepositories(RawApi, dateRange)
	if err != nil {
		return nil, err
	}

	trendingRepositoriesToProjectDataMap := make(map[*githubScraper.TrendingRepository]*ProjectData)
	trendingRepoAndProjDataChan := make(chan *trendingRepoAndProjData)
	for index, trendingRepository := range trendingRepositories {
		go func(trendingRepository githubScraper.TrendingRepository, index int) {
			// TODO in prod use 900, in dev 30
			time.Sleep(30 * time.Duration(index/7) * time.Second)
			projectData, err := GetProjectData(trendingRepository.Owner, trendingRepository.Name)
			// if projectData.ScrapingbotData.LinkedinProfilesPtr != nil {
			// 	fmt.Printf("linkedin_profile %+v\n", projectData.ScrapingbotData.LinkedinProfilesPtr)
			// } else if projectData.ScrapingbotData.LinkedinCompaniesPtr != nil {
			// 	fmt.Printf("linkedin_company %+v\n", projectData.ScrapingbotData.LinkedinCompaniesPtr)
			// }
			if err != nil {
				log.Fatal("Error when getting project data for trending repository", err)
				trendingRepoAndProjDataChan <- nil
				return
			}
			trendingRepoAndProjDataChan <- &trendingRepoAndProjData{
				TrendingRepository: &trendingRepository,
				ProjectData:        projectData,
			}
		}(trendingRepository, index)
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
