package twitter

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
)

type TwitterAPI struct {
}

func New() *TwitterAPI {

	return &TwitterAPI{}
}

type SentimentResponse struct {
	Sentiment string `json:"sentiment"`
}

func (api *TwitterAPI) GetSentiment(owner string, repo string) (*SentimentResponse, error) {
	resp, err := http.Get("http://example.com/sentiment")
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	var sentimentResponse SentimentResponse
	err = json.Unmarshal(body, &sentimentResponse)
	if err != nil {
		return nil, err
	}

	return &sentimentResponse, nil
}
