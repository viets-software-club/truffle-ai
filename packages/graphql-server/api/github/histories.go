package github

import (
	"context"
	"fmt"
	"log"
	"math/rand"
	"time"

	githubv3 "github.com/google/go-github/v57/github"
)

type Hist struct {
	Date   time.Time
	Amount int
}
type IHist interface{ Hist }

type StarHistMap = map[string]Hist
type ForkHistMap = map[string]Hist
type IssueHistMap = map[string]Hist

func (g *GithubApi) GetStarHist(amountPages int, owner string, name string) (*StarHistMap, error) {
	starHistMap := make(map[string]Hist)

	appendGazersToMap := func(gazers []*githubv3.Stargazer, page int) {
		prevAmount := (page - 1) * 30
		for i := 0; i < len(gazers); i++ {
			starHistMap[gazers[i].StarredAt.String()] = Hist{
				Date:   gazers[i].StarredAt.Time,
				Amount: prevAmount + i,
			}
		}
	}
	// get first page
	firstGazers, response, err := g.clientv3.Activity.ListStargazers(context.Background(), owner, name, &githubv3.ListOptions{
		PerPage: 30,
		Page:    1,
	})
	appendGazersToMap(firstGazers, 1)

	if err != nil {
		return nil, err
	}
	// set last page number
	lastPage, err := GetLastPageFromLinkHeader(response.Header.Get("Link"))
	fmt.Println("lastPage: ", lastPage)
	if err != nil {
		// all fit gazers fit on one page
		log.Println(err)
		return &starHistMap, nil
	}

	if lastPage == 1 {
		return &starHistMap, nil
	}

	var pageCount int
	if amountPages > lastPage {
		pageCount = lastPage
	} else {
		pageCount = amountPages
	}
	fmt.Print("amountPage: ", amountPages, "\n")
	fmt.Print("pageCount: ", pageCount, "\n")
	fmt.Print("lastPage: ", lastPage, "\n")

	stepWidth := float64(lastPage) / float64(pageCount)
	fmt.Print("stepWidth: ", stepWidth, "\n")

	// get all in between pages
	for i := 1; i < pageCount; i++ {
		page := int(float64(i) * stepWidth)
		fmt.Print("page: ", page, "\n")
		gazers, _, err := g.clientv3.Activity.ListStargazers(context.Background(), owner, name, &githubv3.ListOptions{
			PerPage: 30,
			Page:    page,
		})
		if err != nil {

			return nil, err
		}
		appendGazersToMap(gazers, page)
	}

	// get last page
	if lastPage != 1 {
		lastGazers, _, err := g.clientv3.Activity.ListStargazers(context.Background(), owner, name, &githubv3.ListOptions{
			PerPage: 30,
			Page:    lastPage,
		})
		if err != nil {

			return nil, err
		}
		appendGazersToMap(lastGazers, lastPage)
	}

	return &starHistMap, nil
}

func (g *GithubApi) GetForkHist(amountPages int, owner string, name string) (*ForkHistMap, error) {
	forkHistMap := make(map[string]Hist)

	appendReposToMap := func(repos []*githubv3.Repository, page int) {
		prevAmount := (page - 1) * 30
		for i, repo := range repos {
			if *repo.Fork {
				forkHistMap[repo.CreatedAt.String()] = Hist{
					Date:   repo.CreatedAt.Time,
					Amount: prevAmount + i,
				}
			}
		}
	}
	// get first page
	repos, response, err := g.clientv3.Repositories.ListForks(context.Background(), owner, name, &githubv3.RepositoryListForksOptions{
		ListOptions: githubv3.ListOptions{
			PerPage: 30,
			Page:    1,
		},
		Sort: "oldest",
	})
	appendReposToMap(repos, 1)

	if err != nil {
		return nil, err
	}
	// set last page number
	lastPage, err := GetLastPageFromLinkHeader(response.Header.Get("Link"))
	if err != nil {
		// all forks fit on one page
		log.Println(err)
		return &forkHistMap, nil
	}
	if lastPage == 1 {
		return &forkHistMap, nil
	}

	var pageCount int
	if amountPages > lastPage {
		pageCount = lastPage
	} else {
		pageCount = amountPages
	}
	stepWidth := float64(lastPage) / float64(pageCount)

	// get all in between pages
	for i := 1; i < pageCount; i++ {
		page := int(float64(i) * stepWidth)
		repos, _, err := g.clientv3.Repositories.ListForks(context.Background(), owner, name, &githubv3.RepositoryListForksOptions{
			ListOptions: githubv3.ListOptions{
				PerPage: 30,
				Page:    page,
			},
			Sort: "oldest",
		})
		if err != nil {
			return nil, err
		}
		appendReposToMap(repos, page)
	}

	// get last page
	if lastPage != 1 {
		repos, _, err := g.clientv3.Repositories.ListForks(context.Background(), owner, name, &githubv3.RepositoryListForksOptions{
			ListOptions: githubv3.ListOptions{
				PerPage: 30,
				Page:    lastPage,
			},
			Sort: "oldest",
		})
		if err != nil {
			return nil, err
		}
		appendReposToMap(repos, lastPage)
	}
	return &forkHistMap, nil
}

func (g *GithubApi) GetIssueHist(amountPages int, owner string, name string) (*IssueHistMap, error) {
	issueHistMap := make(map[string]Hist)

	appendIssuesToMap := func(issues []*githubv3.Issue, page int) {
		prevAmount := (page - 1) * 30

		for i, issue := range issues {
			issueHistMap[issue.CreatedAt.String()] = Hist{
				Date:   issue.CreatedAt.Time,
				Amount: prevAmount + i,
			}
		}
	}
	// get first page
	issues, response, err := g.clientv3.Issues.ListByRepo(context.Background(), owner, name, &githubv3.IssueListByRepoOptions{
		ListOptions: githubv3.ListOptions{
			PerPage: 30,
			Page:    1,
		},
		Direction: "asc",
	})
	appendIssuesToMap(issues, 1)

	if err != nil {
		return nil, err
	}
	// set last page number
	lastPage, err := GetLastPageFromLinkHeader(response.Header.Get("Link"))
	if err != nil {
		// all issues fit on one page
		log.Println(err)
		return &issueHistMap, nil
	}
	if lastPage == 1 {
		return &issueHistMap, nil
	}
	var pageCount int
	if amountPages > lastPage {
		pageCount = lastPage
	} else {
		pageCount = amountPages
	}
	stepWidth := float64(lastPage) / float64(pageCount)

	// get all in between pages
	for i := 1; i < pageCount; i++ {
		page := int(float64(i) * stepWidth)
		issues, _, err := g.clientv3.Issues.ListByRepo(context.Background(), owner, name, &githubv3.IssueListByRepoOptions{
			ListOptions: githubv3.ListOptions{
				PerPage: 30,
				Page:    page,
			},
			Direction: "asc",
		})
		if err != nil {
			return nil, err
		}
		appendIssuesToMap(issues, page)
	}

	// get last page
	if lastPage != 1 {
		issues, _, err := g.clientv3.Issues.ListByRepo(context.Background(), owner, name, &githubv3.IssueListByRepoOptions{
			ListOptions: githubv3.ListOptions{
				PerPage: 30,
				Page:    lastPage,
			},
			Direction: "asc",
		})
		if err != nil {
			return nil, err
		}
		appendIssuesToMap(issues, lastPage)
	}
	return &issueHistMap, nil
}

func (g *GithubApi) GetStarHistRandom(amountPages int, owner string, name string) (*StarHistMap, error) {
	random := rand.New(rand.NewSource(time.Now().UnixNano()))
	starHistMap := make(map[string]Hist)

	appendGazersToMap := func(gazers []*githubv3.Stargazer, page int) {
		prevAmount := (page - 1) * 30

		for i := 0; i < len(gazers); i++ {
			starHistMap[gazers[i].StarredAt.String()] = Hist{
				Date:   gazers[i].StarredAt.Time,
				Amount: prevAmount + i,
			}
		}
	}
	// get first page
	firstGazers, response, err := g.clientv3.Activity.ListStargazers(context.Background(), owner, name, &githubv3.ListOptions{
		PerPage: 30,
		Page:    1,
	})
	appendGazersToMap(firstGazers, 1)

	if err != nil {
		return nil, err
	}
	// set last page number
	lastPage, err := GetLastPageFromLinkHeader(response.Header.Get("Link"))
	if err != nil {
		// all fit gazers fit on one page
		log.Println(err)
		return &starHistMap, nil
	}

	if lastPage == 1 {
		return &starHistMap, nil
	}

	// iterate only through pages
	if amountPages > lastPage {
		for i := 1; i < amountPages; i++ {
			page := i
			gazers, _, err := g.clientv3.Activity.ListStargazers(context.Background(), owner, name, &githubv3.ListOptions{
				PerPage: 30,
				Page:    page,
			})
			if err != nil {
				return nil, err
			}
			appendGazersToMap(gazers, page)
		}
		return &starHistMap, nil
	}
	stepWidth := lastPage / amountPages
	restItems := lastPage % amountPages
	iterationElementIndex := random.Intn(stepWidth) // exclusive

	// pages in stepWidth apart and only 'amountPages' many
	for i := 1; i <= amountPages; i++ {
		var page int
		if amountPages == i {
			page = i * stepWidth
		} else {
			page = iterationElementIndex + i*stepWidth
		}

		gazers, _, err := g.clientv3.Activity.ListStargazers(context.Background(), owner, name, &githubv3.ListOptions{
			PerPage: 30,
			Page:    page,
		})
		if err != nil {
			return nil, err
		}
		appendGazersToMap(gazers, page)
	}

	hasRest := restItems != 0
	if !hasRest {
		return &starHistMap, nil
	}
	// get on rest page in the modulo rest, after division of all pages by amountPages
	restPage := amountPages*stepWidth + random.Intn(restItems)
	gazers, _, err := g.clientv3.Activity.ListStargazers(context.Background(), owner, name, &githubv3.ListOptions{
		PerPage: 30,
		Page:    restPage,
	})
	if err != nil {
		return nil, err
	}
	appendGazersToMap(gazers, restPage)

	return &starHistMap, nil
}

func (g *GithubApi) GetIssueHistRandom(amountPages int, owner string, name string) (*IssueHistMap, error) {
	random := rand.New(rand.NewSource(time.Now().UnixNano()))
	issueHistMap := make(map[string]Hist)

	appendIssuesToMap := func(issues []*githubv3.Issue, page int) {
		prevAmount := (page - 1) * 30

		for i, issue := range issues {
			issueHistMap[issue.CreatedAt.String()] = Hist{
				Date:   issue.CreatedAt.Time,
				Amount: prevAmount + i,
			}
		}
	}
	// get first page
	firstGazers, response, err := g.clientv3.Issues.ListByRepo(context.Background(), owner, name, &githubv3.IssueListByRepoOptions{
		ListOptions: githubv3.ListOptions{
			PerPage: 30,
			Page:    1,
		},
		Direction: "asc",
	})
	appendIssuesToMap(firstGazers, 1)

	if err != nil {
		return nil, err
	}
	// set last page number
	lastPage, err := GetLastPageFromLinkHeader(response.Header.Get("Link"))
	if err != nil {
		// all fit gazers fit on one page
		log.Println(err)
		return &issueHistMap, nil
	}

	if lastPage == 1 {
		return &issueHistMap, nil
	}
	// iterate only through pages
	if amountPages > lastPage {
		for i := 1; i < amountPages; i++ {
			page := i
			gazers, _, err := g.clientv3.Issues.ListByRepo(context.Background(), owner, name, &githubv3.IssueListByRepoOptions{
				ListOptions: githubv3.ListOptions{
					PerPage: 30,
					Page:    page,
				},
				Direction: "asc",
			})
			if err != nil {
				return nil, err
			}
			appendIssuesToMap(gazers, page)
		}
		return &issueHistMap, nil
	}
	stepWidth := lastPage / amountPages
	restItems := lastPage % amountPages
	iterationElementIndex := random.Intn(stepWidth) // exclusive

	// pages in stepWidth apart and only 'amountPages' many
	for i := 1; i <= amountPages; i++ {
		var page int
		if amountPages == i {
			page = i * stepWidth
		} else {
			page = iterationElementIndex + i*stepWidth
		}

		gazers, _, err := g.clientv3.Issues.ListByRepo(context.Background(), owner, name, &githubv3.IssueListByRepoOptions{
			ListOptions: githubv3.ListOptions{
				PerPage: 30,
				Page:    page,
			},
			Direction: "asc",
		})
		if err != nil {
			return nil, err
		}
		appendIssuesToMap(gazers, page)
	}

	hasRest := restItems != 0
	if !hasRest {
		return &issueHistMap, nil
	}
	// get on rest page in the modulo rest, after division of all pages by amountPages
	restPage := amountPages*stepWidth + random.Intn(restItems)
	gazers, _, err := g.clientv3.Issues.ListByRepo(context.Background(), owner, name, &githubv3.IssueListByRepoOptions{
		ListOptions: githubv3.ListOptions{
			PerPage: 30,
			Page:    restPage,
		},
	})
	if err != nil {
		return nil, err
	}
	appendIssuesToMap(gazers, restPage)

	return &issueHistMap, nil
}

func (g *GithubApi) GetForkHistRandom(amountPages int, owner string, name string) (*IssueHistMap, error) {
	random := rand.New(rand.NewSource(time.Now().UnixNano()))
	forkHistMap := make(map[string]Hist)

	appendReposToMap := func(repos []*githubv3.Repository, page int) {
		prevAmount := (page - 1) * 30

		for i, repo := range repos {
			if *repo.Fork {
				forkHistMap[repo.CreatedAt.String()] = Hist{
					Date:   repo.CreatedAt.Time,
					Amount: prevAmount + i,
				}
			}
		}
	}
	// get first page
	firstGazers, response, err := g.clientv3.Repositories.ListForks(context.Background(), owner, name, &githubv3.RepositoryListForksOptions{
		ListOptions: githubv3.ListOptions{
			PerPage: 30,
			Page:    1,
		},
		Sort: "oldest",
	})
	appendReposToMap(firstGazers, 1)

	if err != nil {
		return nil, err
	}
	// set last page number
	lastPage, err := GetLastPageFromLinkHeader(response.Header.Get("Link"))
	if err != nil {
		// all fit gazers fit on one page
		log.Println(err)
		return &forkHistMap, nil
	}
	if lastPage == 1 {
		return &forkHistMap, nil
	}
	// iterate only through pages
	if amountPages > lastPage {
		for i := 1; i < amountPages; i++ {
			page := i
			gazers, _, err := g.clientv3.Repositories.ListForks(context.Background(), owner, name, &githubv3.RepositoryListForksOptions{
				ListOptions: githubv3.ListOptions{
					PerPage: 30,
					Page:    page,
				},
				Sort: "oldest",
			})
			if err != nil {
				return nil, err
			}
			appendReposToMap(gazers, page)
		}
		return &forkHistMap, nil
	}
	stepWidth := lastPage / amountPages
	restItems := lastPage % amountPages
	iterationElementIndex := random.Intn(stepWidth) // exclusive

	// pages in stepWidth apart and only 'amountPages' many
	for i := 1; i <= amountPages; i++ {
		var page int
		if amountPages == i {
			page = i * stepWidth
		} else {
			page = iterationElementIndex + i*stepWidth
		}

		gazers, _, err := g.clientv3.Repositories.ListForks(context.Background(), owner, name, &githubv3.RepositoryListForksOptions{
			ListOptions: githubv3.ListOptions{
				PerPage: 30,
				Page:    page,
			},
			Sort: "oldest",
		})

		if err != nil {
			return nil, err
		}
		appendReposToMap(gazers, page)
	}

	hasRest := restItems != 0
	if !hasRest {
		return &forkHistMap, nil
	}
	// get on rest page in the modulo rest, after division of all pages by amountPages
	restPage := amountPages*stepWidth + random.Intn(restItems)
	gazers, _, err := g.clientv3.Repositories.ListForks(context.Background(), owner, name, &githubv3.RepositoryListForksOptions{
		ListOptions: githubv3.ListOptions{
			PerPage: 30,
			Page:    restPage,
		},
	})
	if err != nil {
		return nil, err
	}
	appendReposToMap(gazers, restPage)

	return &forkHistMap, nil
}
