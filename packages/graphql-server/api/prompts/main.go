package controller

import (
	"context"
	"fmt"
	"os"
	"strings"
	"time"

	"golang.org/x/time/rate"

	openai "github.com/sashabaranov/go-openai"
	"github.com/viets-software-club/truffle-ai/graphql-server/api/algolia/hackernews"
)

type Prompts struct {
	client  *openai.Client
	limiter *rate.Limiter
}

func New() *Prompts {
	client := openai.NewClient(os.Getenv("OPENAI_API_KEY"))
	limiter := rate.NewLimiter(rate.Every(time.Second), 120) // Adjust rate as needed

	return &Prompts{
		client:  client,
		limiter: limiter,
	}
}

func (p *Prompts) GenerateEli5FromReadme(data RepoData) (string, error) {

	if err := p.limiter.Wait(context.Background()); err != nil {
		return "", err
	}
	if len(data.Readme) > 300 {
		data.Readme = data.Readme[:300]
	}

	if len(data.About) > 70 {
		data.About = data.About[:70]
	}

	t := fmt.Sprintf("Below is a readme and an about description from a Github Repository, can you provide an short explain like I am 5 description of the repo:\n%s\n\n\n\nAbout:\n%s", data.Readme, data.About)
	println("first", len(t))
	// resp, err := p.client.CreateChatCompletion(
	// 	context.Background(),
	// 	openai.ChatCompletionRequest{
	// 		Model:     openai.GPT3Dot5Turbo,
	// 		MaxTokens: 250,
	// 		Messages: []openai.ChatCompletionMessage{
	// 			{
	// 				Role:    openai.ChatMessageRoleSystem,
	// 				Content: "You are helping an investor invest in a company",
	// 			},
	// 			{
	// 				Role:    openai.ChatMessageRoleUser,
	// 				Content: fmt.Sprintf("Below is a readme and an about description from a Github Repository, can you provide an short explain like I am 5 description of the repo:\n%s\n\n\n\nAbout:\n%s", data.Readme, data.About),
	// 			},
	// 		},
	// 	},
	// )

	// if err != nil {
	// 	fmt.Printf("ChatCompletion error: %v\n", err)
	// 	return "", err
	// }

	// return resp.Choices[0].Message.Content, nil
	return "test", nil
}

func (p *Prompts) GenerateHackernewsSentiment(comments *hackernews.HackernewsCommentsResponse) (string, error) {
	if err := p.limiter.Wait(context.Background()); err != nil {
		return "", err
	}
	var commentsSlice []string
	for _, comment := range comments.Hits {
		commentsSlice = append(commentsSlice, comment.CommentText)
	}
	commentsString := strings.Join(commentsSlice, ",")
	if len(commentsString) > 700 {
		commentsString = commentsString[:700]
	}
	t := fmt.Sprintf("Below is a Golang struct containing Hackernews Comments from Hackernews's Algolia API to a specific search term, the name of a Github Repository, can you provide the overall sentiment, the overall perception of the comments in a short statement, also make sure that the comments might have outliers that should not be considered as they don't talk about the project/Github Repository:\n%v", &commentsString)
	println("second", len(t))

	// resp, err := p.client.CreateChatCompletion(
	// 	context.Background(),
	// 	openai.ChatCompletionRequest{
	// 		Model:     openai.GPT3Dot5Turbo,
	// 		MaxTokens: 250,
	// 		Messages: []openai.ChatCompletionMessage{
	// 			{
	// 				Role:    openai.ChatMessageRoleSystem,
	// 				Content: "You are helping an investor invest in a company",
	// 			},
	// 			{
	// 				Role:    openai.ChatMessageRoleUser,
	// 				Content: fmt.Sprintf("Below is a Golang struct containing Hackernews Comments from Hackernews's Algolia API to a specific search term, the name of a Github Repository, can you provide the overall sentiment, the overall perception of the comments in a short statement, also make sure that the comments might have outliers that should not be considered as they don't talk about the project/Github Repository:\n%v", &commentsString),
	// 			},
	// 		},
	// 	},
	// )

	// if err != nil {
	// 	fmt.Printf("ChatCompletion error: %v\n", err)
	// 	return "", err
	// }

	return "hn", nil
	// return resp.Choices[0].Message.Content, nil
}

// func (p *Prompts) GenerateCategories() (string, error) {
// 	resp, err := p.client.CreateChatCompletion(
// 		context.Background(),
// 		openai.ChatCompletionRequest{
// 			Model: openai.GPT3Dot5Turbo,
// 			Messages: []openai.ChatCompletionMessage{
// 				{
// 					Role:    openai.ChatMessageRoleSystem,
// 					Content: "You are helping an investor invest in a company",
// 				},
// 			},
// 		},
// 	)

// 	if err != nil {
// 		fmt.Printf("ChatCompletion error: %v\n", err)
// 		return "", err
// 	}

//		return resp.Choices[0].Message.Content, nil
//	}
type RepoData struct {
	Readme string
	About  string
}
type Category struct {
	Title string
	Id    string
}

func (p *Prompts) SuggestCategories(data RepoData, categories []Category) ([]string, error) {

	var plainCategoriesString string
	for _, category := range categories {
		plainCategoriesString += fmt.Sprintf("%s(%s), ", category.Title, category.Id)
	}
	if data.Readme != "" && len(data.Readme) > 300 {
		data.Readme = data.Readme[:300]
	}
	if len(data.About) > 70 {
		data.About = data.About[:70]
	}
	resp, err := p.client.CreateChatCompletion(
		context.Background(),
		openai.ChatCompletionRequest{
			Model: openai.GPT3Dot5Turbo,
			Messages: []openai.ChatCompletionMessage{
				{
					Role:    openai.ChatMessageRoleSystem,
					Content: "You are finding similarities",
				},
				{
					Role:    openai.ChatMessageRoleUser,
					Content: fmt.Sprintf("Here is a Github Repository readme '%s' and here a Github Repository about '%s', here is a list of categories with ids in parentheses '%s'. I want you to only return me fitting category ids that fit the data, comma separated and nothing more", data.Readme, data.About, plainCategoriesString),
				},
			},
		},
	)
	if err != nil {
		fmt.Printf("ChatCompletion error: %v\n", err)
		return nil, err
	}

	splitted := strings.Split(resp.Choices[0].Message.Content, ",")
	return splitted, nil

}
