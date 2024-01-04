package algolia

import (
	"strconv"

	"github.com/jackc/pgx/v5/pgtype"
	"github.com/viets-software-club/truffle-ai/graphql-server/api/algolia/hackernews"
	"github.com/viets-software-club/truffle-ai/graphql-server/controller/convert/helper"
	"github.com/viets-software-club/truffle-ai/graphql-server/controller/data"
	"github.com/viets-software-club/truffle-ai/graphql-server/db/types"
)

func ConvertHackernewsTagsToTIvalsAlgoHnTag(tags []string) pgtype.FlatArray[types.T_ivals_algo_hn_tag] {

	var pgTags pgtype.FlatArray[types.T_ivals_algo_hn_tag]
	for _, tag := range tags {
		pgTags = append(pgTags, types.T_ivals_algo_hn_tag{
			Title: helper.StringToNoEmptyPgText(tag),
		})
	}
	return pgTags
}

func ConvertHackernewsStoriesResponseToTFInsertAlgoHnStory(hackernewsStoriesResponse *hackernews.HackernewsStoriesResponse) (pgtype.FlatArray[types.T_f_insert_algo_hn_story], error) {
	var pgHackernewsStories pgtype.FlatArray[types.T_f_insert_algo_hn_story]

	for _, story := range hackernewsStoriesResponse.Hits {

		objectId, err := strconv.Atoi(story.ObjectID)
		if err != nil {
			return nil, err
		}
		pgHackernewsStories = append(pgHackernewsStories, types.T_f_insert_algo_hn_story{
			Algo_hn_story_url:       helper.StringToNoEmptyPgText(story.URL),
			Algo_hn_story_object_id: helper.IntToPgInt8(objectId),
			Algo_hn_tags:            ConvertHackernewsTagsToTIvalsAlgoHnTag(story.Tags),
			Author:                  helper.StringToNoEmptyPgText(story.Author),
			Created_at:              helper.TimeToNoDefaultPgTimestampz(story.CreatedAt),
			Points:                  helper.IntToPgInt8(story.Points),
			Title:                   helper.StringToNoEmptyPgText(story.Title),
			Updated_at:              helper.TimeToNoDefaultPgTimestampz(story.UpdatedAt),
		})
	}
	return pgHackernewsStories, nil
}

func ConvertHackernewsCommentsResponseTFInsertAlgoHnComment(hackernewsCommentsResponse *hackernews.HackernewsCommentsResponse) (pgtype.FlatArray[types.T_f_insert_algo_hn_comment], error) {

	var pgHackernewsComments pgtype.FlatArray[types.T_f_insert_algo_hn_comment]
	for _, comment := range hackernewsCommentsResponse.Hits {
		objectId, err := strconv.Atoi(comment.ObjectID)
		if err != nil {
			return nil, err
		}
		pgHackernewsComments = append(pgHackernewsComments, types.T_f_insert_algo_hn_comment{
			Algo_hn_comment_object_id: helper.IntToPgInt8(objectId),
			Algo_hn_tags:              ConvertHackernewsTagsToTIvalsAlgoHnTag(comment.Tags),
			Author:                    helper.StringToNoEmptyPgText(comment.Author),
			Comment_text:              helper.StringToNoEmptyPgText(comment.CommentText),
			Created_at:                helper.TimeToNoDefaultPgTimestampz(comment.CreatedAt),
			Story_id:                  helper.IntToPgInt8(comment.StoryID),
			Story_title:               helper.StringToNoEmptyPgText(comment.StoryTitle),
			Story_url:                 helper.StringToNoEmptyPgText(comment.StoryURL),
			Updated_at:                helper.TimeToNoDefaultPgTimestampz(comment.UpdatedAt),
		})
	}
	return pgHackernewsComments, nil
}

func ConvertHackernewsResponsesToTFInsertAlgoHnQueryWithStoriesAndComments(query string, hackernewsStoriesResponse *hackernews.HackernewsStoriesResponse, hackernewsCommentsResponse *hackernews.HackernewsCommentsResponse) (*types.T_f_insert_algo_hn_query_with_stories_and_comments, error) {
	hnComments, err := ConvertHackernewsCommentsResponseTFInsertAlgoHnComment(hackernewsCommentsResponse)
	if err != nil {
		return nil, err
	}
	hnStories, err := ConvertHackernewsStoriesResponseToTFInsertAlgoHnStory(hackernewsStoriesResponse)
	if err != nil {
		return nil, err
	}
	return &types.T_f_insert_algo_hn_query_with_stories_and_comments{
		Algo_hn_comments: hnComments,
		Algo_hn_stories:  hnStories,
		Query:            pgtype.Text{String: query, Valid: true},
	}, nil

}

func ConvertAlogliaDataToTFInsertAlgoHnQueryWithStoriesAndComments(algoliaData *data.AlgoliaData) (*types.T_f_insert_algo_hn_query_with_stories_and_comments, error) {
	hnStories, err := ConvertHackernewsStoriesResponseToTFInsertAlgoHnStory(algoliaData.HackernewsStoriesPtr)
	if err != nil {
		return nil, err
	}
	hnComments, err := ConvertHackernewsCommentsResponseTFInsertAlgoHnComment(algoliaData.HackernewsCommentsPtr)
	if err != nil {
		return nil, err
	}
	return &types.T_f_insert_algo_hn_query_with_stories_and_comments{
		Algo_hn_comments: hnComments,
		Algo_hn_stories:  hnStories,
		Query:            pgtype.Text{String: algoliaData.Query, Valid: true},
	}, nil

}
