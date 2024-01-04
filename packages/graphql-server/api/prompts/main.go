package controller

import (
	"context"
	"fmt"
	"os"
	"strings"

	openai "github.com/sashabaranov/go-openai"
	"github.com/viets-software-club/truffle-ai/graphql-server/api/algolia/hackernews"
)

type Prompts struct {
	client *openai.Client
}

func New() *Prompts {
	client := openai.NewClient(os.Getenv("OPENAI_API_KEY"))
	return &Prompts{
		client: client,
	}
}

func (p *Prompts) GenerateEli5FromReadme(readme string) (string, error) {

	if len(readme) > 300 {
		readme = readme[:300]
	}

	resp, err := p.client.CreateChatCompletion(
		context.Background(),
		openai.ChatCompletionRequest{
			Model:     openai.GPT3Dot5Turbo,
			MaxTokens: 250,
			Messages: []openai.ChatCompletionMessage{
				{
					Role:    openai.ChatMessageRoleSystem,
					Content: "You are helping an investor invest in a company",
				},
				{
					Role:    openai.ChatMessageRoleUser,
					Content: fmt.Sprintf("Below is a readme from a Github Repository, can you provide an short explain like I am 5 description of the repo:\n%s", readme),
				},
			},
		},
	)

	if err != nil {
		fmt.Printf("ChatCompletion error: %v\n", err)
		return "", err
	}

	return resp.Choices[0].Message.Content, nil
}

func (p *Prompts) GenerateHackernewsSentiment(comments *hackernews.HackernewsCommentsResponse) (string, error) {

	var commentsSlice []string
	for _, comment := range comments.Hits {
		commentsSlice = append(commentsSlice, comment.CommentText)
	}
	commentsString := strings.Join(commentsSlice, ",")
	if len(commentsString) > 700 {
		commentsString = commentsString[:700]
	}

	resp, err := p.client.CreateChatCompletion(
		context.Background(),
		openai.ChatCompletionRequest{
			Model:     openai.GPT3Dot5Turbo,
			MaxTokens: 250,
			Messages: []openai.ChatCompletionMessage{
				{
					Role:    openai.ChatMessageRoleSystem,
					Content: "You are helping an investor invest in a company",
				},
				{
					Role:    openai.ChatMessageRoleUser,
					Content: fmt.Sprintf("Below is a Golang struct containing Hackernews Comments from Hackernews's Algolia API to a specific search term, the name of a Github Repository, can you provide the overall sentiment, the overall perception of the comments in a short statement, also make sure that the comments might have outliers that should not be considered as they don't talk about the project/Github Repository:\n%v", &commentsString),
				},
			},
		},
	)

	if err != nil {
		fmt.Printf("ChatCompletion error: %v\n", err)
		return "", err
	}

	return resp.Choices[0].Message.Content, nil
}

func (p *Prompts) GenerateCategories() (string, error) {
	resp, err := p.client.CreateChatCompletion(
		context.Background(),
		openai.ChatCompletionRequest{
			Model: openai.GPT3Dot5Turbo,
			Messages: []openai.ChatCompletionMessage{
				{
					Role:    openai.ChatMessageRoleSystem,
					Content: "You are helping an investor invest in a company",
				},
			},
		},
	)

	if err != nil {
		fmt.Printf("ChatCompletion error: %v\n", err)
		return "", err
	}

	return resp.Choices[0].Message.Content, nil
}
