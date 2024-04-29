package scrapingbot

import (
	"encoding/base64"
	"os"
)

type ScrapingBotScraperConfig struct {
	Auth string
}

func New() *ScrapingBotScraperConfig {
	username := os.Getenv("SCRAPING_BOT_USER_NAME")
	apiKey := os.Getenv("SCRAPING_BOT_API_KEY")
	scraper := ScrapingBotScraperConfig{
		Auth: "Basic " + base64.StdEncoding.EncodeToString([]byte(username+":"+apiKey)),
	}
	return &scraper
}

func NewFromUsernameAndApiKey(username string, apiKey string) *ScrapingBotScraperConfig {
	scraper := &ScrapingBotScraperConfig{
		Auth: "Basic " + base64.StdEncoding.EncodeToString([]byte(username+":"+apiKey)),
	}
	return scraper
}
