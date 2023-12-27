package github

import (
	"github.com/jackc/pgx/v5/pgtype"
	githubApi "github.com/viets-software-club/truffle-ai/graphql-server/api/github"
	"github.com/viets-software-club/truffle-ai/graphql-server/db/types"
)

func ConvertGithubRepoTopic(topics githubApi.GetRepositoryRepositoryTopics) (*pgtype.FlatArray[types.T_ivals_gthb_repo_topic], error) {

	var pgTopics pgtype.FlatArray[types.T_ivals_gthb_repo_topic]

	for _, topic := range topics.Edges {
		pgTopics = append(pgTopics, types.T_ivals_gthb_repo_topic{
			Gthb_repo_topic_name: pgtype.Text{String: string(topic.Node.Topic.Name), Valid: true},
			Stargazer_count:      pgtype.Int8{Int64: int64(topic.Node.Topic.StargazerCount), Valid: true},
		})
	}

	return &pgTopics, nil
}
