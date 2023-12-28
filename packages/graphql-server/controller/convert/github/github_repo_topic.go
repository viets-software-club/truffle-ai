package github

import (
	"errors"

	"github.com/jackc/pgx/v5/pgtype"
	githubApi "github.com/viets-software-club/truffle-ai/graphql-server/api/github"
	"github.com/viets-software-club/truffle-ai/graphql-server/db/types"
)

func ConvertGetRepositoryRepositoryTopicsPtrToTIvalsGthbRepoTopicFlatArrayPtr(topics *githubApi.GetRepositoryRepositoryTopics) (pgtype.FlatArray[types.T_ivals_gthb_repo_topic], error) {

	var pgTopics pgtype.FlatArray[types.T_ivals_gthb_repo_topic]

	if topics == nil {
		return nil, errors.New("topics can not be nil")
	}

	for _, topic := range topics.Edges {
		pgTopics = append(pgTopics, types.T_ivals_gthb_repo_topic{
			Gthb_repo_topic_name: Githubv4StringToNoEmptyPgText(topic.Node.Topic.Name),
			Stargazer_count:      Githubv4IntToPgInt8(topic.Node.Topic.StargazerCount),
		})
	}

	return pgTopics, nil
}
