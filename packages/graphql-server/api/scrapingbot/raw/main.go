package raw

import (
	"bytes"
	"fmt"
	"io"
	"net/http"

	"github.com/viets-software-club/truffle-ai/graphql-server/api/scrapingbot"
)

type ScrapingBotHtml struct {
	scrapingBotScraper *scrapingbot.ScrapingBotScraperConfig
}

func New(s *scrapingbot.ScrapingBotScraperConfig) *ScrapingBotHtml {
	return &ScrapingBotHtml{
		scrapingBotScraper: s,
	}
}
func (s *ScrapingBotHtml) FetchUrl(url string) (string, error) {

	body := []byte(fmt.Sprintf(`{"url": "%s"}`, url))
	req, err := http.NewRequest("POST", "http://api.scraping-bot.io/scrape/raw-html", bytes.NewBuffer(body))
	if err != nil {
		return "", err
	}
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", s.scrapingBotScraper.Auth)

	client := &http.Client{}
	res, err := client.Do(req)
	if err != nil {
		return "", err
	}
	defer res.Body.Close()

	readBytes, err := io.ReadAll(res.Body)
	if err != nil {
		return "", err
	}
	str := string(readBytes)
	return str, nil
}

func (s *ScrapingBotHtml) GetHttpRequest(ScrapingBoturl string) (*http.Request, error) {

	body := []byte(`{"url": "https://www.scraping-bot.io/rawHtmlPage.html"}`)
	req, err := http.NewRequest("POST", "http://api.scraping-bot.io/scrape/raw-html", bytes.NewBuffer(body))
	if err != nil {
		return nil, err
	}
	req.Header.Set("Accept", "application/json")
	req.Header.Set("Authorization", s.scrapingBotScraper.Auth)

	return req, nil
}
