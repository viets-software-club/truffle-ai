package github

import (
	"context"
	"errors"
	"log"
	"math/rand"
	"regexp"
	"strconv"
	"time"

	githubv3 "github.com/google/go-github/v57/github"
)

type Hist struct {
	Date   time.Time
	Amount int
}
type IHist interface{ Hist }

func getLastPageForHist(linkHeader string) (int, error) {
	regex, err := regexp.Compile(`page=(\d+)>; rel="last"`)
	if err != nil {
		return 0, err
	}
	match := regex.FindStringSubmatch(linkHeader)
	if len(match) <= 1 {
		return 0, errors.New("no match for rel last")
	}
	return strconv.Atoi(match[1])
}

type StarHistMap = map[string]Hist
type ForkHistMap = map[string]Hist
type IssueHistMap = map[string]Hist

func (g *GithubApi) GetStarHist(amountPages int, owner string, name string) (*StarHistMap, error) {
	starHistMap := make(map[string]Hist)

	appendGazersToMap := func(gazers []*githubv3.Stargazer, prevAmount int) {
		for i := 0; i < len(gazers); i++ {
			starHistMap[gazers[i].StarredAt.String()] = Hist{
				Date:   *&gazers[i].StarredAt.Time,
				Amount: prevAmount + i,
			}
		}
	}
	// get first page
	firstGazers, response, err := g.clientv3.Activity.ListStargazers(context.Background(), owner, name, &githubv3.ListOptions{
		PerPage: 30,
		Page:    0,
	})
	appendGazersToMap(firstGazers, 0)

	if err != nil {

		return nil, err
	}
	// set last page number
	lastPage, err := getLastPageForHist(response.Header.Get("Link"))
	if err != nil {
		// all fit gazers fit on one page
		log.Println(err)
		return &starHistMap, nil
	}

	var pageCount int
	if amountPages > lastPage {
		pageCount = lastPage
	} else {
		pageCount = amountPages
	}
	stepWidth := float64(lastPage) / float64(pageCount)

	// get all in between pages
	for i := 1; i < pageCount-1; i++ {
		page := int(float64(i) * stepWidth)
		gazers, _, err := g.clientv3.Activity.ListStargazers(context.Background(), owner, name, &githubv3.ListOptions{
			PerPage: 30,
			Page:    page,
		})
		if err != nil {

			return nil, err
		}
		appendGazersToMap(gazers, page*30)
	}

	// get last page
	if lastPage != 0 {
		lastGazers, _, err := g.clientv3.Activity.ListStargazers(context.Background(), owner, name, &githubv3.ListOptions{
			PerPage: 30,
			Page:    lastPage - 1,
		})
		if err != nil {

			return nil, err
		}
		appendGazersToMap(lastGazers, lastPage*30)
	}

	return &starHistMap, nil
}

func (g *GithubApi) GetForkHist(amountPages int, owner string, name string) (*ForkHistMap, error) {
	forkHistMap := make(map[string]Hist)

	appendReposToMap := func(repos []*githubv3.Repository, prevAmount int) {
		for i, repo := range repos {
			if *repo.Fork {
				forkHistMap[repo.CreatedAt.String()] = Hist{
					Date:   *&repo.CreatedAt.Time,
					Amount: prevAmount + i,
				}
			}
		}
	}
	// get first page
	repos, response, err := g.clientv3.Repositories.ListForks(context.Background(), owner, name, &githubv3.RepositoryListForksOptions{
		ListOptions: githubv3.ListOptions{
			PerPage: 30,
			Page:    0,
		},
	})
	appendReposToMap(repos, 0)

	if err != nil {
		return nil, err
	}
	// set last page number
	lastPage, err := getLastPageForHist(response.Header.Get("Link"))
	if err != nil {
		// all forks fit on one page
		log.Println(err)
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
	for i := 1; i < pageCount-1; i++ {
		page := int(float64(i) * stepWidth)
		repos, _, err := g.clientv3.Repositories.ListForks(context.Background(), owner, name, &githubv3.RepositoryListForksOptions{
			ListOptions: githubv3.ListOptions{
				PerPage: 30,
				Page:    page,
			},
		})
		if err != nil {
			return nil, err
		}
		appendReposToMap(repos, page*30)
	}

	// get last page
	if lastPage != 0 {
		repos, _, err := g.clientv3.Repositories.ListForks(context.Background(), owner, name, &githubv3.RepositoryListForksOptions{
			ListOptions: githubv3.ListOptions{
				PerPage: 30,
				Page:    lastPage - 1,
			},
		})
		if err != nil {
			return nil, err
		}
		appendReposToMap(repos, lastPage*30)
	}
	return &forkHistMap, nil
}

func (g *GithubApi) GetIssueHist(amountPages int, owner string, name string) (*IssueHistMap, error) {
	issueHistMap := make(map[string]Hist)

	appendIssuesToMap := func(issues []*githubv3.Issue, prevAmount int) {
		for i, issue := range issues {
			issueHistMap[issue.CreatedAt.String()] = Hist{
				Date:   *&issue.CreatedAt.Time,
				Amount: prevAmount + i,
			}
		}
	}
	// get first page
	issues, response, err := g.clientv3.Issues.ListByRepo(context.Background(), owner, name, &githubv3.IssueListByRepoOptions{
		ListOptions: githubv3.ListOptions{
			PerPage: 30,
			Page:    0,
		},
	})
	appendIssuesToMap(issues, 0)

	if err != nil {
		return nil, err
	}
	// set last page number
	lastPage, err := getLastPageForHist(response.Header.Get("Link"))
	if err != nil {
		// all issues fit on one page
		log.Println(err)
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
	for i := 1; i < pageCount-1; i++ {
		page := int(float64(i) * stepWidth)
		issues, _, err := g.clientv3.Issues.ListByRepo(context.Background(), owner, name, &githubv3.IssueListByRepoOptions{
			ListOptions: githubv3.ListOptions{
				PerPage: 30,
				Page:    page,
			},
		})
		if err != nil {
			return nil, err
		}
		appendIssuesToMap(issues, page*30)
	}

	// get last page
	if lastPage != 0 {
		issues, _, err := g.clientv3.Issues.ListByRepo(context.Background(), owner, name, &githubv3.IssueListByRepoOptions{
			ListOptions: githubv3.ListOptions{
				PerPage: 30,
				Page:    lastPage - 1,
			},
		})
		if err != nil {
			return nil, err
		}
		appendIssuesToMap(issues, lastPage*30)
	}
	return &issueHistMap, nil
}

func appendAmountTo[T []any](s T) int {
	x := 0
	l, ok := s[0].(int)
	if ok {
		x = 0 + l
	}
	return x
}

func (g *GithubApi) GetStarHistRandom(amountPages int, owner string, name string) (*StarHistMap, error) {
	random := rand.New(rand.NewSource(time.Now().UnixNano()))
	starHistMap := make(map[string]Hist)

	appendGazersToMap := func(gazers []*githubv3.Stargazer, prevAmount int) {
		for i := 0; i < len(gazers); i++ {
			starHistMap[gazers[i].StarredAt.String()] = Hist{
				Date:   *&gazers[i].StarredAt.Time,
				Amount: prevAmount + i,
			}
		}
	}
	// get first page
	firstGazers, response, err := g.clientv3.Activity.ListStargazers(context.Background(), owner, name, &githubv3.ListOptions{
		PerPage: 30,
		Page:    0,
	})
	appendGazersToMap(firstGazers, 0)

	if err != nil {
		return nil, err
	}
	// set last page number
	lastPage, err := getLastPageForHist(response.Header.Get("Link"))
	if err != nil {
		// all fit gazers fit on one page
		log.Println(err)
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
			appendGazersToMap(gazers, page*30)
		}
		return &starHistMap, nil
	}
	itemsPerIteration := lastPage / amountPages
	restItems := lastPage % amountPages
	iterationElementIndex := random.Intn(itemsPerIteration)
	pagesWithoutRest := amountPages

	i := 0
	for ; i < pagesWithoutRest; i++ {
		page := iterationElementIndex + i*itemsPerIteration
		gazers, _, err := g.clientv3.Activity.ListStargazers(context.Background(), owner, name, &githubv3.ListOptions{
			PerPage: 30,
			Page:    page,
		})
		if err != nil {
			return nil, err
		}
		appendGazersToMap(gazers, page*30)
	}

	hasRest := restItems != 0
	if !hasRest {
		return &starHistMap, nil
	}
	restPage := i*itemsPerIteration + random.Intn(restItems)
	gazers, _, err := g.clientv3.Activity.ListStargazers(context.Background(), owner, name, &githubv3.ListOptions{
		PerPage: 30,
		Page:    restPage,
	})
	if err != nil {
		return nil, err
	}
	appendGazersToMap(gazers, restPage*30)

	return &starHistMap, nil
}

func (g *GithubApi) GetIssueHistRandom(amountPages int, owner string, name string) (*IssueHistMap, error) {
	random := rand.New(rand.NewSource(time.Now().UnixNano()))
	issueHistMap := make(map[string]Hist)

	appendIssuesToMap := func(issues []*githubv3.Issue, prevAmount int) {
		for i, issue := range issues {
			issueHistMap[issue.CreatedAt.String()] = Hist{
				Date:   *&issue.CreatedAt.Time,
				Amount: prevAmount + i,
			}
		}
	}
	// get first page
	firstGazers, response, err := g.clientv3.Issues.ListByRepo(context.Background(), owner, name, &githubv3.IssueListByRepoOptions{
		ListOptions: githubv3.ListOptions{
			PerPage: 30,
			Page:    0,
		},
	})
	appendIssuesToMap(firstGazers, 0)

	if err != nil {
		return nil, err
	}
	// set last page number
	lastPage, err := getLastPageForHist(response.Header.Get("Link"))
	if err != nil {
		// all fit gazers fit on one page
		log.Println(err)
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
			})
			if err != nil {
				return nil, err
			}
			appendIssuesToMap(gazers, page*30)
		}
		return &issueHistMap, nil
	}
	itemsPerIteration := lastPage / amountPages
	restItems := lastPage % amountPages
	iterationElementIndex := random.Intn(itemsPerIteration)
	pagesWithoutRest := amountPages

	i := 0
	for ; i < pagesWithoutRest; i++ {
		page := iterationElementIndex + i*itemsPerIteration
		gazers, _, err := g.clientv3.Issues.ListByRepo(context.Background(), owner, name, &githubv3.IssueListByRepoOptions{
			ListOptions: githubv3.ListOptions{
				PerPage: 30,
				Page:    page,
			},
		})
		if err != nil {
			return nil, err
		}
		appendIssuesToMap(gazers, page*30)
	}

	hasRest := restItems != 0
	if !hasRest {
		return &issueHistMap, nil
	}
	restPage := i*itemsPerIteration + random.Intn(restItems)
	gazers, _, err := g.clientv3.Issues.ListByRepo(context.Background(), owner, name, &githubv3.IssueListByRepoOptions{
		ListOptions: githubv3.ListOptions{
			PerPage: 30,
			Page:    restPage,
		},
	})
	if err != nil {
		return nil, err
	}
	appendIssuesToMap(gazers, restPage*30)

	return &issueHistMap, nil
}

func (g *GithubApi) GetForkHistRandom(amountPages int, owner string, name string) (*IssueHistMap, error) {
	random := rand.New(rand.NewSource(time.Now().UnixNano()))
	forkHistMap := make(map[string]Hist)

	appendReposToMap := func(repos []*githubv3.Repository, prevAmount int) {
		for i, repo := range repos {
			if *repo.Fork {
				forkHistMap[repo.CreatedAt.String()] = Hist{
					Date:   *&repo.CreatedAt.Time,
					Amount: prevAmount + i,
				}
			}
		}
	}
	// get first page
	firstGazers, response, err := g.clientv3.Repositories.ListForks(context.Background(), owner, name, &githubv3.RepositoryListForksOptions{
		ListOptions: githubv3.ListOptions{
			PerPage: 30,
			Page:    0,
		},
	})
	appendReposToMap(firstGazers, 0)

	if err != nil {
		return nil, err
	}
	// set last page number
	lastPage, err := getLastPageForHist(response.Header.Get("Link"))
	if err != nil {
		// all fit gazers fit on one page
		log.Println(err)
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
			})
			if err != nil {
				return nil, err
			}
			appendReposToMap(gazers, page*30)
		}
		return &forkHistMap, nil
	}
	itemsPerIteration := lastPage / amountPages
	restItems := lastPage % amountPages
	iterationElementIndex := random.Intn(itemsPerIteration)
	pagesWithoutRest := amountPages

	i := 0
	for ; i < pagesWithoutRest; i++ {
		page := iterationElementIndex + i*itemsPerIteration
		gazers, _, err := g.clientv3.Repositories.ListForks(context.Background(), owner, name, &githubv3.RepositoryListForksOptions{
			ListOptions: githubv3.ListOptions{
				PerPage: 30,
				Page:    0,
			},
		})

		if err != nil {
			return nil, err
		}
		appendReposToMap(gazers, page*30)
	}

	hasRest := restItems != 0
	if !hasRest {
		return &forkHistMap, nil
	}
	restPage := i*itemsPerIteration + random.Intn(restItems)
	gazers, _, err := g.clientv3.Repositories.ListForks(context.Background(), owner, name, &githubv3.RepositoryListForksOptions{
		ListOptions: githubv3.ListOptions{
			PerPage: 30,
			Page:    0,
		},
	})
	if err != nil {
		return nil, err
	}
	appendReposToMap(gazers, restPage*30)

	return &forkHistMap, nil
}
