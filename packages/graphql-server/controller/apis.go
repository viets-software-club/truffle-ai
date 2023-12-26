package controller

import (
	"github.com/viets-software-club/truffle-ai/graphql-server/api/github"
	prompts "github.com/viets-software-club/truffle-ai/graphql-server/api/prompts"
	"github.com/viets-software-club/truffle-ai/graphql-server/api/scrapingbot"
	"github.com/viets-software-club/truffle-ai/graphql-server/api/scrapingbot/linkedin"
	"github.com/viets-software-club/truffle-ai/graphql-server/api/scrapingbot/raw"
)

var GithubApi = github.New()
var ScrapingBotScraperConfig = scrapingbot.New()
var LinkedinApi = linkedin.New(ScrapingBotScraperConfig)
var RawApi = raw.New(ScrapingBotScraperConfig)
var PromptsApi = prompts.New()
