package linkedin

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"maps"
	"net/http"
	"time"

	"github.com/viets-software-club/truffle-ai/graphql-server/api/scrapingbot"
)

type LinkedinCompany struct {
	URL                       string   `json:"url"`
	Name                      string   `json:"name"`
	Founded                   string   `json:"founded"`
	Sphere                    string   `json:"sphere"`
	Followers                 int      `json:"followers"`
	Logo                      string   `json:"logo"`
	Image                     string   `json:"image"`
	EmployeesAmountInLinkedin string   `json:"employeesAmountInLinkedin"`
	About                     string   `json:"about"`
	Website                   string   `json:"website"`
	Locations                 []string `json:"locations"`
	Employees                 []struct {
		Img      string `json:"img"`
		Title    string `json:"title"`
		Subtitle string `json:"subtitle"`
	} `json:"employees"`
	Updates       []interface{} `json:"updates"`
	ShowMore      []interface{} `json:"show_more"`
	Affiliated    []interface{} `json:"affiliated"`
	BrowseJobs    []interface{} `json:"browse_jobs"`
	CompanyID     interface{}   `json:"company_id"`
	Timestamp     string        `json:"timestamp"`
	Slogan        string        `json:"slogan"`
	CrunchbaseURL interface{}   `json:"crunchbase_url"`
	StockInfo     interface{}   `json:"stock_info"`
	Funding       interface{}   `json:"funding"`
	Investors     interface{}   `json:"investors"`
	SimilarPages  []struct {
		Name     string `json:"name"`
		PageURL  string `json:"pageUrl"`
		Activity string `json:"activity"`
		Location string `json:"location"`
	} `json:"similarPages"`
	Website2     string `json:"Website"`
	Industries   string `json:"Industries"`
	CompanySize  string `json:"Company size"`
	Headquarters string `json:"Headquarters"`
	Type         string `json:"Type"`
	Specialties  string `json:"Specialties"`
}

type LinkedinProfile struct {
	Followers  string `json:"followers"`
	Activities []struct {
		Title       string `json:"title"`
		Attribution string `json:"attribution"`
		Img         string `json:"img"`
		Link        string `json:"link"`
	} `json:"activities"`
	EducationsDetails    string      `json:"educations_details"`
	RecommendationsCount interface{} `json:"recommendations_count"`
	URL                  string      `json:"url"`
	Name                 string      `json:"name"`
	Position             string      `json:"position"`
	CurrentCompany       struct {
		Name string `json:"name"`
		Link string `json:"link"`
	} `json:"current_company"`
	Avatar    string `json:"avatar"`
	About     string `json:"about"`
	City      string `json:"city"`
	Following string `json:"following"`
	Posts     []struct {
		Title       string `json:"title"`
		Attribution string `json:"attribution"`
		Img         string `json:"img"`
		Link        string `json:"link"`
		CreatedAt   string `json:"created_at"`
	} `json:"posts"`
	Experience []struct {
		Title         string `json:"title"`
		Subtitle      string `json:"subtitle"`
		SubtitleURL   string `json:"subtitleURL"`
		Location      string `json:"location"`
		Description   string `json:"description"`
		Duration      string `json:"duration"`
		StartDate     string `json:"start_date"`
		EndDate       string `json:"end_date"`
		DurationShort string `json:"duration_short"`
	} `json:"experience"`
	Languages []struct {
		Title    string `json:"title"`
		Subtitle string `json:"subtitle"`
		Meta     string `json:"meta"`
	} `json:"languages"`
}

const (
	scraperLinkedinProfile = "linkedinProfile"
	scraperLinkedinCompany = "linkedinCompanyProfile"
)

type ScrapingBotLinkedin struct {
	scrapingBotScraper *scrapingbot.ScrapingBotScraperConfig
}

func New(s *scrapingbot.ScrapingBotScraperConfig) *ScrapingBotLinkedin {
	return &ScrapingBotLinkedin{
		scrapingBotScraper: s,
	}
}

func (s ScrapingBotLinkedin) GetLinkedInProfileSearch(name string) (*[]LinkedinProfile, error) {
	res := []LinkedinProfile{}
	err := scrape(s.scrapingBotScraper, "linkedinProfile", &map[string]string{
		"url": fmt.Sprintf("https://www.linkedin.com/in/%s", name),
	}, 10, 30, &res)
	if err != nil {
		return nil, err
	}
	if len(res) == 0 {
		return nil, errors.New("Returned data contains no linkedin entry")
	}
	return &res, nil
}

func (s ScrapingBotLinkedin) GetLinkedInCompanySearch(keywords string) (*[]LinkedinCompany, error) {
	res := []LinkedinCompany{}
	err := scrape(s.scrapingBotScraper, "linkedinSearchResult", &map[string]string{
		"keywords": keywords,
	}, 10, 30, &res)
	if err != nil {
		return nil, err
	}
	if len(res) == 0 {
		return nil, errors.New("Returned data contains no linkedin entry")
	}
	return &res, nil
}

func (s ScrapingBotLinkedin) GetLinkedinProfile(keywords string) (*LinkedinProfile, error) {
	res := []LinkedinProfile{}
	err := scrape(s.scrapingBotScraper, "linkedinSearchResult", &map[string]string{
		"keywords": keywords,
	}, 2, 10, &res)
	if err != nil {
		return nil, err
	}
	if len(res) == 0 {
		return nil, errors.New("Returned data contains no linkedin entry")
	}
	return &res[0], nil
}

func (s ScrapingBotLinkedin) GetLinkedinCompany(name string) (*LinkedinCompany, error) {
	res := []LinkedinCompany{}
	err := scrape(s.scrapingBotScraper, "linkedinProfile",
		&map[string]string{
			"url": fmt.Sprintf("https://www.linkedin.com/company/%s", name),
		}, 2, 10, &res)
	if err != nil {
		return nil, err
	}
	if len(res) == 0 {
		return nil, errors.New("Returned data contains no linkedin entry")
	}
	return &res[0], nil
}

func scrape(s *scrapingbot.ScrapingBotScraperConfig, scraper string, params *map[string]string, retryTimes int, waitTime time.Duration, inter interface{}) error {
	data := map[string]string{
		"scraper": scraper,
	}
	maps.Copy(data, *params)

	jsonData, err := json.Marshal(data)
	if err != nil {
		return err
	}
	ctx := context.Background()
	req, err := http.NewRequestWithContext(ctx, "POST", "http://api.scraping-bot.io/scrape/data-scraper", bytes.NewBuffer(jsonData))
	if err != nil {
		return err
	}

	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Accept", "application/json")
	req.Header.Set("Authorization", s.Auth)

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	body, _ := io.ReadAll(resp.Body)

	var firstResponse struct {
		ResponseId string `json:"responseId"`
	}
	err = json.Unmarshal(body, &firstResponse)
	if err != nil {
		fmt.Println("hmm")
		return err
	}

	fmt.Println("responseId received : ", firstResponse.ResponseId)

	var secondResponse struct {
		Status string `json:"status"`
	}
	scrapingBotResponseUrl := fmt.Sprintf("http://api.scraping-bot.io/scrape/data-scraper-response?scraper=%s&responseId=%s", scraper, firstResponse.ResponseId)
	for i := 0; i < retryTimes; i++ {
		time.Sleep(waitTime * time.Second)
		req, err := http.NewRequestWithContext(ctx, "GET", scrapingBotResponseUrl, nil)
		if err != nil {
			return err
		}
		req.Header.Set("Accept", "application/json")
		req.Header.Set("Authorization", s.Auth)
		resp, err := client.Do(req)
		if err != nil {
			return err
		}
		defer resp.Body.Close()

		body, err := io.ReadAll(resp.Body)
		if err != nil {
			return err
		}
		fmt.Println(string(body))

		err = json.Unmarshal(body, &secondResponse)
		if err != nil {
			fmt.Println("weird")
			err = json.Unmarshal(body, &inter)
			if err != nil {
				return err
			}
			return nil
		}
		if secondResponse.Status == "pending" {
			continue
		}
		break
	}
	return errors.New("Couldn't retrieve data from scraping bot")
}
