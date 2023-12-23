package types

import "github.com/jackc/pgx/v5/pgtype"

type T_ivals_algo_hn_tag struct {
	Title pgtype.Text
}

type T_ivals_algo_hn_query struct {
	Query pgtype.Text
}

type T_ivals_algo_hn_comment struct {
	Author              pgtype.Text
	AlgoHnStoryObjectId pgtype.Int8
	CommentText         pgtype.Text
	Story_id            pgtype.Int8
	Story_title         pgtype.Text
	Story_url           pgtype.Text
	Created_at          pgtype.Timestamptz
	Updated_at          pgtype.Timestamptz
}

type T_ivals_algo_hn_story struct {
	Author                  pgtype.Text
	Created_at              pgtype.Timestamptz
	Algo_hn_story_url       pgtype.Text
	Algo_hn_story_object_id pgtype.Int8
	Points                  pgtype.Int8
	Story_text              pgtype.Text
	Title                   pgtype.Text
	Updated_at              pgtype.Timestamptz
}

type T_f_insert_algo_hn_story struct {
	Algo_hn_story_object_id pgtype.Int8
	Algo_hn_story_url       pgtype.Text
	Algo_hn_tags            pgtype.FlatArray[T_ivals_algo_hn_tag]
	Author                  pgtype.Text
	Created_at              pgtype.Timestamptz
	Points                  pgtype.Int8
	Story_text              pgtype.Text
	Title                   pgtype.Text
	Updated_at              pgtype.Timestamptz
}

type T_f_insert_algo_hn_comment struct {
	Algo_hn_comment_object_id pgtype.Int8
	Algo_hn_tags              pgtype.FlatArray[T_ivals_algo_hn_tag]
	Author                    pgtype.Text
	Comment_text              pgtype.Text
	Created_at                pgtype.Timestamptz
	Story_id                  pgtype.Int8
	Story_title               pgtype.Text
	Story_url                 pgtype.Text
	Updated_at                pgtype.Timestamptz
}

type T_f_insert_algo_hn_query_with_stories_and_comments struct {
	Algo_hn_comments pgtype.FlatArray[T_f_insert_algo_hn_comment]
	Algo_hn_stories  pgtype.FlatArray[T_f_insert_algo_hn_story]
	Query            pgtype.Text
}

var AlgoHnTypes = []string{
	"t_ivals_algo_hn_tag",
	"_t_ivals_algo_hn_tag",
	"t_ivals_algo_hn_query",
	"t_ivals_algo_hn_comment",
	"t_ivals_algo_hn_story",
	"t_f_insert_algo_hn_story",
	"_t_f_insert_algo_hn_story",
	"t_f_insert_algo_hn_comment",
	"_t_f_insert_algo_hn_comment",
	"t_f_insert_algo_hn_query_with_stories_and_comments",
	"_t_f_insert_algo_hn_query_with_stories_and_comments",
}
