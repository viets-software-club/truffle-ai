package github

import (
	"context"
	"errors"
	"log"
	"os"
	"regexp"
	"strconv"

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

func (g *GithubApi) QueryUser(login string) (*GetUser, error) {
	var getUser GetUser
	variables := map[string]interface{}{
		"login": githubv4.String(login),
	}
	err := g.clientv4.Query(context.Background(), &getUser, variables)
	if err != nil {
		return nil, err
	}
	return &getUser, nil
}
func GetLastPageFromLinkHeader(linkHeader string) (int, error) {
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

func (g *GithubApi) GetContributors(owner string, name string) (*[]*github.Contributor, error) {
	contrs, _, err := g.clientv3.Repositories.ListContributors(context.Background(), owner, name, nil)
	return &contrs, err
}

func (g *GithubApi) GetContributorCount(owner string, name string) (int, error) {
	_, response, err := g.clientv3.Repositories.ListContributors(context.Background(), owner, name, &github.ListContributorsOptions{
		ListOptions: github.ListOptions{
			PerPage: 1,
		},
	})
	if err != nil {
		return -1, err
	}
	lastPage, err := GetLastPageFromLinkHeader(response.Header.Get("Link"))
	if err != nil {
		log.Println(err)
		return 1, nil
	}

	return lastPage, nil
}

// func (g *GithubApi) GetStarsRandStar(totalStars int, amountPages int, owner string, name string, includeFirstAndLastPage bool) ([]Hist, error) {
// 	starHist := []Hist{}
// 	random := rand.New(rand.NewSource(time.Now().UnixNano()))
// 	stepWidth := totalStars / amountPages
// 	start := random.Intn(stepWidth) + 1
// 	amountOfSteps := amountPages
// 	for i := 0; i < amountOfSteps; i++ {
// 		gazers, _, err := g.clientv3.Activity.ListStargazers(context.Background(), owner, name, &github.ListOptions{
// 			PerPage: 30,
// 			Page:    start + i*stepWidth,
// 		})
// 		if err != nil {
// 			return starHist, err
// 		}
// 		for j := 0; j < len(gazers); j++ {
// 			starHist = append(starHist, Hist{
// 				Date:   *gazers[j].StarredAt,
// 				Amount: i*stepWidth + j,
// 			})
// 		}
// 	}
// 	return starHist, nil

// }

// // func (g *GithubApi) GetForkHistEven(totalStars int, amountPages int, owner string, name string) (*ForkHistMap, error) {
// 	forkHist := []Hist{}
// 	stepWidth := totalStars / amountPages
// 	amountOfSteps := amountPages + 1
// 	for i := 0; i < amountOfSteps; i++ {
// 		gazers, _, err := g.clientv3.Activity.ListStargazers(context.Background(), owner, name, &github.ListOptions{
// 			PerPage: 30,
// 			Page:    i * stepWidth,
// 		})
// 		if err != nil {
// 			return &forkHist, err
// 		}
// 		for j := 0; j < len(gazers); j++ {
// 			forkHist = append(forkHist, Hist{
// 				Date:   *gazers[j].StarredAt,
// 				Amount: i*stepWidth + j,
// 			})
// 		}
// 	}
// 	return &forkHist, nil
// }

// func (g *GithubApi) GetIssueHistEven(totalStars int, amountPages int, owner string, name string) (*[]Hist, error) {
// 	starHist := []Hist{}
// 	stepWidth := totalStars / amountPages
// 	amountOfSteps := amountPages + 1
// 	for i := 0; i < amountOfSteps; i++ {
// 		gazers, _, err := g.clientv3.Activity.ListStargazers(context.Background(), owner, name, &github.ListOptions{
// 			PerPage: 30,
// 			Page:    i * stepWidth,
// 		})
// 		if err != nil {
// 			return &starHist, err
// 		}
// 		for j := 0; j < len(gazers); j++ {
// 			starHist = append(starHist, Hist{
// 				Date:   *gazers[j].StarredAt,
// 				Amount: i*stepWidth + j,
// 			})
// 		}
// 	}
// 	return &starHist, nil
// }
