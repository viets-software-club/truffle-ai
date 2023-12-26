package algolia

import (
	"strconv"

	"github.com/jackc/pgx/v5/pgtype"
	"github.com/viets-software-club/truffle-ai/graphql-server/api/algolia/hackernews"
	"github.com/viets-software-club/truffle-ai/graphql-server/db/types"
)

func ConvertHackernewsTags(tags []string) *pgtype.FlatArray[types.T_ivals_algo_hn_tag] {

	var pgTags pgtype.FlatArray[types.T_ivals_algo_hn_tag]
	for _, tag := range tags {
		pgTags = append(pgTags, types.T_ivals_algo_hn_tag{
			Title: pgtype.Text{String: tag, Valid: true},
		})
	}
	return &pgTags
}

func ConvertHackernewsStoriesResponse(hackernewsStoriesResponse *hackernews.HackernewsStoriesResponse) (*pgtype.FlatArray[types.T_f_insert_algo_hn_story], error) {
	var pgHackernewsStories pgtype.FlatArray[types.T_f_insert_algo_hn_story]
	for _, story := range hackernewsStoriesResponse.Hits {

		objectId, err := strconv.Atoi(story.ObjectID)
		if err != nil {
			return nil, err
		}
		pgHackernewsStories = append(pgHackernewsStories, types.T_f_insert_algo_hn_story{
			Algo_hn_story_url:       pgtype.Text{String: story.URL.String(), Valid: true},
			Algo_hn_story_object_id: pgtype.Int8{Int64: int64(objectId), Valid: true},
			Algo_hn_tags:            *ConvertHackernewsTags(story.Tags),
			Author:                  pgtype.Text{String: story.Author, Valid: true},
			Created_at:              pgtype.Timestamptz{Time: story.CreatedAt, Valid: true},
			Points:                  pgtype.Int8{Int64: int64(story.Points), Valid: true},
			Title:                   pgtype.Text{String: story.Title, Valid: true},
			Updated_at:              pgtype.Timestamptz{Time: story.UpdatedAt, Valid: true},
		})
	}
	return &pgHackernewsStories, nil
}

func ConvertHackernewsCommentsResponse(hackernewsCommentsResponse *hackernews.HackernewsCommentsResponse) (*pgtype.FlatArray[types.T_f_insert_algo_hn_comment], error) {

	var pgHackernewsComments pgtype.FlatArray[types.T_f_insert_algo_hn_comment]
	for _, story := range hackernewsCommentsResponse.Hits {
		pgHackernewsComments = append(pgHackernewsComments, types.T_f_insert_algo_hn_comment{
			Algo_hn_tags: *ConvertHackernewsTags(story.Tags),
			Author:       pgtype.Text{String: story.Author, Valid: true},
			Comment_text: pgtype.Text{String: story.CommentText, Valid: true},
			Created_at:   pgtype.Timestamptz{Time: story.CreatedAt, Valid: true},
			Story_id:     pgtype.Int8{Int64: int64(story.StoryID), Valid: true},
			Story_title:  pgtype.Text{String: story.StoryTitle, Valid: true},
			Story_url:    pgtype.Text{String: story.StoryURL.String(), Valid: true},
			Updated_at:   pgtype.Timestamptz{Time: story.UpdatedAt, Valid: true},
		})
	}
	return &pgHackernewsComments, nil
}

func ConvertHackernewsResponsesToQuery(query string, hackernewsStoriesResponse *hackernews.HackernewsStoriesResponse, hackernewsCommentsResponse *hackernews.HackernewsCommentsResponse) (*types.T_f_insert_algo_hn_query_with_stories_and_comments, error) {
	hnComments, err := ConvertHackernewsCommentsResponse(hackernewsCommentsResponse)
	if err != nil {
		return nil, err
	}
	hnStories, err := ConvertHackernewsStoriesResponse(hackernewsStoriesResponse)
	if err != nil {
		return nil, err
	}
	return &types.T_f_insert_algo_hn_query_with_stories_and_comments{
		Algo_hn_comments: *hnComments,
		Algo_hn_stories:  *hnStories,
		Query:            pgtype.Text{String: query, Valid: true},
	}, nil

}
