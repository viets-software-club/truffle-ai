package github

import (
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
	text, err := scrapingBotHtml.FetchUrl("https://github.com/trending")
	if err != nil {
		return repos, err
	}
	doc, err := goquery.NewDocumentFromReader(strings.NewReader(text))
	if err != nil {
		return repos, err
	}
	doc.Find("main .Box .Box-row a.Link").Each(func(i int, s *goquery.Selection) {
		owner := s.Find("span").First().Text()
		repos = append(repos, TrendingRepository{
			Owner: owner[:len(owner)-2],
			Name:  s.Text(),
		})
	})
	return repos, nil
}
