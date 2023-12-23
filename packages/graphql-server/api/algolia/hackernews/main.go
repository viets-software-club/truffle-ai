package hackernews

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

type HackernewsStoriesResponse struct {
	Exhaustive struct {
		NbHits bool `json:"nbHits"`
		Typo   bool `json:"typo"`
	} `json:"exhaustive"`
	ExhaustiveNbHits bool `json:"exhaustiveNbHits"`
	ExhaustiveTypo   bool `json:"exhaustiveTypo"`
	Hits             []struct {
		HighlightResult struct {
			Author struct {
				MatchLevel   string   `json:"matchLevel"`
				MatchedWords []string `json:"matchedWords"`
				Value        string   `json:"value"`
			} `json:"author"`
			Title struct {
				FullyHighlighted bool     `json:"fullyHighlighted"`
				MatchLevel       string   `json:"matchLevel"`
				MatchedWords     []string `json:"matchedWords"`
				Value            string   `json:"value"`
			} `json:"title"`
			URL struct {
				FullyHighlighted bool     `json:"fullyHighlighted"`
				MatchLevel       string   `json:"matchLevel"`
				MatchedWords     []string `json:"matchedWords"`
				Value            string   `json:"value"`
			} `json:"url"`
		} `json:"_highlightResult"`
		Tags        []string `json:"_tags"`
		Author      string   `json:"author"`
		Children    []int    `json:"children"`
		CreatedAt   string   `json:"created_at"`
		CreatedAtI  int      `json:"created_at_i"`
		NumComments int      `json:"num_comments"`
		ObjectID    string   `json:"objectID"`
		Points      int      `json:"points"`
		StoryID     int      `json:"story_id"`
		Title       string   `json:"title"`
		UpdatedAt   string   `json:"updated_at"`
		URL         string   `json:"url"`
	} `json:"hits"`
	HitsPerPage         int    `json:"hitsPerPage"`
	NbHits              int    `json:"nbHits"`
	NbPages             int    `json:"nbPages"`
	Page                int    `json:"page"`
	Params              string `json:"params"`
	ProcessingTimeMS    int    `json:"processingTimeMS"`
	ProcessingTimingsMS struct {
		Request struct {
			RoundTrip int `json:"roundTrip"`
		} `json:"_request"`
		AfterFetch struct {
			Merge struct {
				Total int `json:"total"`
			} `json:"merge"`
			Total int `json:"total"`
		} `json:"afterFetch"`
		Fetch struct {
			Query    int `json:"query"`
			Scanning int `json:"scanning"`
			Total    int `json:"total"`
		} `json:"fetch"`
		Total int `json:"total"`
	} `json:"processingTimingsMS"`
	Query        string `json:"query"`
	ServerTimeMS int    `json:"serverTimeMS"`
}

type HackernewsCommentsResponse struct {
	Exhaustive struct {
		NbHits bool `json:"nbHits"`
		Typo   bool `json:"typo"`
	} `json:"exhaustive"`
	ExhaustiveNbHits bool `json:"exhaustiveNbHits"`
	ExhaustiveTypo   bool `json:"exhaustiveTypo"`
	Hits             []struct {
		HighlightResult struct {
			Author struct {
				MatchLevel   string   `json:"matchLevel"`
				MatchedWords []string `json:"matchedWords"`
				Value        string   `json:"value"`
			} `json:"author"`
			CommentText struct {
				FullyHighlighted bool     `json:"fullyHighlighted"`
				MatchLevel       string   `json:"matchLevel"`
				MatchedWords     []string `json:"matchedWords"`
				Value            string   `json:"value"`
			} `json:"comment_text"`
			StoryTitle struct {
				MatchLevel   string   `json:"matchLevel"`
				MatchedWords []string `json:"matchedWords"`
				Value        string   `json:"value"`
			} `json:"story_title"`
			StoryURL struct {
				MatchLevel   string   `json:"matchLevel"`
				MatchedWords []string `json:"matchedWords"`
				Value        string   `json:"value"`
			} `json:"story_url"`
		} `json:"_highlightResult"`
		Tags        []string `json:"_tags"`
		Author      string   `json:"author"`
		Children    []int    `json:"children"`
		CommentText string   `json:"comment_text"`
		CreatedAt   string   `json:"created_at"`
		CreatedAtI  int      `json:"created_at_i"`
		ObjectID    string   `json:"objectID"`
		ParentID    int      `json:"parent_id"`
		Points      *int     `json:"points"`
		StoryID     int      `json:"story_id"`
		StoryTitle  string   `json:"story_title"`
		StoryURL    string   `json:"story_url"`
		UpdatedAt   string   `json:"updated_at"`
	} `json:"hits"`
	HitsPerPage         int    `json:"hitsPerPage"`
	NbHits              int    `json:"nbHits"`
	NbPages             int    `json:"nbPages"`
	Page                int    `json:"page"`
	Params              string `json:"params"`
	ProcessingTimeMS    int    `json:"processingTimeMS"`
	ProcessingTimingsMS struct {
		Request struct {
			RoundTrip int `json:"roundTrip"`
		} `json:"_request"`
		AfterFetch struct {
			Format struct {
				Highlighting int `json:"highlighting"`
				Total        int `json:"total"`
			} `json:"format"`
			Merge struct {
				Total int `json:"total"`
			} `json:"merge"`
			Total int `json:"total"`
		} `json:"afterFetch"`
		Fetch struct {
			Query    int `json:"query"`
			Scanning int `json:"scanning"`
			Total    int `json:"total"`
		} `json:"fetch"`
		Total int `json:"total"`
	} `json:"processingTimingsMS"`
	Query        string `json:"query"`
	ServerTimeMS int    `json:"serverTimeMS"`
}

func GetCommentsForQuery(query string) (*HackernewsCommentsResponse, error) {
	resp, err := http.Get(fmt.Sprintf("http://hn.algolia.com/api/v1/search?query=%s&tags=comment", query))
	if err != nil {
		return nil, err
	}
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	c := HackernewsCommentsResponse{}
	err = json.Unmarshal(body, &c)
	if err != nil {
		return nil, err
	}
	return &c, nil
}

func GetStoriesForQuery(query string) (*HackernewsStoriesResponse, error) {
	resp, err := http.Get(fmt.Sprintf("http://hn.algolia.com/api/v1/search?query=%s&tags=story", query))
	if err != nil {
		return nil, err
	}
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	s := HackernewsStoriesResponse{}
	err = json.Unmarshal(body, &s)
	if err != nil {
		return nil, err
	}
	return &s, nil
}
