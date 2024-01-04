package github

import (
	"errors"
	"fmt"
	"strings"

	"github.com/PuerkitoBio/goquery"
	"github.com/viets-software-club/truffle-ai/graphql-server/api/scrapingbot/raw"
)

// scraping bot html
func GetReadme(scrapingBotHtml *raw.ScrapingBotHtml, owner string, repoName string, branch string) (string, error) {
	return scrapingBotHtml.FetchUrl(fmt.Sprintf("https://raw.githubusercontent.com/%s/%s/%s/README.md", owner, repoName, branch))
}

const (
	TRENDING_WEEKLY  = "weekly"
	TRENDING_DAILY   = "daily"
	TRENDING_MONTHLY = "monthly"
)

type TrendingRepository struct {
	Owner string
	Name  string
}

func GetTrendingRepositories(scrapingBotHtml *raw.ScrapingBotHtml, time string) ([]TrendingRepository, error) {
	repos := []TrendingRepository{}
	text, err := scrapingBotHtml.FetchUrl(fmt.Sprintf("https://github.com/trending?since=%s", time))
	if err != nil {
		return nil, err
	}
	doc, err := goquery.NewDocumentFromReader(strings.NewReader(text))
	if err != nil {
		return nil, err
	}

	doc.Find("main .Box .Box-row h2 a.Link").Each(func(i int, s *goquery.Selection) {
		ownerRepoArr := strings.Split(s.Text(), "/")

		if len(ownerRepoArr) != 2 {
			err = errors.New("extracted less or more text when getting trending repository identifiers")
			return
		}

		ownerName := strings.TrimSpace(ownerRepoArr[0])
		repoName := strings.TrimSpace(ownerRepoArr[1])

		repos = append(repos, TrendingRepository{
			Owner: ownerName,
			Name:  repoName,
		})
	})
	if err != nil {
		return nil, err
	}
	return repos, nil
}
