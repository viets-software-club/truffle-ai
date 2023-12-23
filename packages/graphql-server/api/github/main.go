package github

import (
	"context"
	"math/rand"
	"os"
	"time"

	"github.com/google/go-github/v57/github"
	"github.com/shurcooL/githubv4"
	"golang.org/x/oauth2"
)

type GithubApi struct {
	clientv4 *githubv4.Client
	clientv3 *github.Client
}

func New() *GithubApi {
	src := oauth2.StaticTokenSource(
		&oauth2.Token{AccessToken: os.Getenv("GITHUB_API_TOKEN")},
	)

	httpClient := oauth2.NewClient(context.Background(), src)
	clientv4 := githubv4.NewClient(httpClient)
	clientv3 := github.NewClient(nil).WithAuthToken(os.Getenv("GITHUB_API_TOKEN"))
	return &GithubApi{
		clientv4,
		clientv3,
	}
}

func NewWithToken(token string) *GithubApi {
	src := oauth2.StaticTokenSource(
		&oauth2.Token{AccessToken: token},
	)

	httpClient := oauth2.NewClient(context.Background(), src)
	clientv4 := githubv4.NewClient(httpClient)
	clientv3 := github.NewClient(nil).WithAuthToken(token)
	return &GithubApi{
		clientv4,
		clientv3,
	}
}

func (g *GithubApi) QueryData(owner string, name string) (*GetRepository, error) {
	var getRepository GetRepository
	variables := map[string]interface{}{
		"owner": githubv4.String(owner),
		"name":  githubv4.String(name),
	}
	err := g.clientv4.Query(context.Background(), &getRepository, variables)
	if err != nil {
		return nil, err
	}
	return &getRepository, nil
}

func (g *GithubApi) GetContributors(owner string, name string) ([]*github.Contributor, error) {
	contrs, _, err := g.clientv3.Repositories.ListContributors(context.Background(), owner, name, nil)
	return contrs, err
}

type StarHist struct {
	date   github.Timestamp
	amount int
}

func (g *GithubApi) GetStarHistEven(totalStars int, amountPages int, owner string, name string) ([]StarHist, error) {
	starHist := []StarHist{}
	stepWidth := totalStars / amountPages
	amountOfSteps := amountPages + 1
	for i := 0; i < amountOfSteps; i++ {
		gazers, _, err := g.clientv3.Activity.ListStargazers(context.Background(), owner, name, &github.ListOptions{
			PerPage: 30,
			Page:    i * stepWidth,
		})
		if err != nil {
			return starHist, err
		}
		for j := 0; j < len(gazers); j++ {
			starHist = append(starHist, StarHist{
				date:   *gazers[j].StarredAt,
				amount: i*stepWidth + j,
			})
		}
	}
	return starHist, nil
}

func (g *GithubApi) GetStarsRandStar(totalStars int, amountPages int, owner string, name string, includeFirstAndLastPage bool) ([]StarHist, error) {
	starHist := []StarHist{}
	random := rand.New(rand.NewSource(time.Now().UnixNano()))
	stepWidth := totalStars / amountPages
	start := random.Intn(stepWidth) + 1
	amountOfSteps := amountPages
	for i := 0; i < amountOfSteps; i++ {
		gazers, _, err := g.clientv3.Activity.ListStargazers(context.Background(), owner, name, &github.ListOptions{
			PerPage: 30,
			Page:    start + i*stepWidth,
		})
		if err != nil {
			return starHist, err
		}
		for j := 0; j < len(gazers); j++ {
			starHist = append(starHist, StarHist{
				date:   *gazers[j].StarredAt,
				amount: i*stepWidth + j,
			})
		}
	}
	return starHist, nil

}
