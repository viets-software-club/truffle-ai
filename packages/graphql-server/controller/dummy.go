package controller

import (
	"time"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v5/pgtype"
	"github.com/viets-software-club/truffle-ai/graphql-server/db/types"
)

var dummyTime = pgtype.Timestamptz{Time: time.Now().UTC(), Valid: true}
var dummyText = pgtype.Text{String: "author1", Valid: true}
var dummyInt = pgtype.Int8{Int64: 1234, Valid: true}
var dummyUuid = pgtype.UUID{Bytes: [16]byte{
	153, 124, 209, 240, 167, 183, 78, 235, 151, 2, 15, 131, 158, 167, 250, 34,
}, Valid: true}

var dummyAlgoHnComments = pgtype.FlatArray[types.T_f_insert_algo_hn_comment]{
	{
		Author:                    dummyText,
		Comment_text:              dummyText,
		Created_at:                dummyTime,
		Story_id:                  dummyInt,
		Story_title:               dummyText,
		Story_url:                 dummyText,
		Updated_at:                dummyTime,
		Algo_hn_comment_object_id: dummyInt,
		Algo_hn_tags: pgtype.FlatArray[types.T_ivals_algo_hn_tag]{
			{
				Title: pgtype.Text{String: "tag1", Valid: true},
			},
			{
				Title: pgtype.Text{String: "tag2", Valid: true},
			},
		},
	},
}

var dummyAlgoHnStories = pgtype.FlatArray[types.T_f_insert_algo_hn_story]{
	{
		Author:                  dummyText,
		Created_at:              dummyTime,
		Points:                  dummyInt,
		Title:                   dummyText,
		Updated_at:              dummyTime,
		Algo_hn_story_object_id: dummyInt,
		Algo_hn_story_url:       dummyText,
		Algo_hn_tags: pgtype.FlatArray[types.T_ivals_algo_hn_tag]{
			{
				Title: pgtype.Text{String: "tag1", Valid: true},
			},
			{
				Title: pgtype.Text{String: "tag2", Valid: true},
			},
		},
	},
}

var dummyGthbRepo = types.T_f_insert_gthb_repo{
	Created_at: dummyTime,
	Fork_count: dummyInt,
	Gthb_fork_hists: pgtype.FlatArray[types.T_ivals_gthb_fork_hist]{
		{
			Amount:              dummyInt,
			Gthb_fork_hist_date: dummyTime,
		},
	},
	Gthb_issue_hists: pgtype.FlatArray[types.T_ivals_gthb_issue_hist]{

		{
			Amount:               dummyInt,
			Gthb_issue_hist_date: dummyTime,
		},
	},
	Gthb_langs: pgtype.FlatArray[types.T_ivals_gthb_lang]{

		{
			Gthb_lang_name: dummyText,
			Color:          dummyText,
		},
	},
	Gthb_owner: types.T_f_insert_gthb_owner{
		Avatar_url: pgtype.Text{String: "avatar_url4", Valid: true},
		Gthb_org: types.T_ivals_gthb_org{
			Created_at:           dummyTime,
			Description_html:     dummyText,
			Email:                dummyText,
			Gthb_org_description: dummyText,
			Gthb_org_name:        dummyText,
			Twitter_username:     dummyText,
			Website_url:          dummyText,
		},
		Gthb_owner_type:          pgtype.Text{String: "Organization", Valid: true},
		Gthb_owner_login:         dummyText,
		Gthb_owner_url:           dummyText,
		Gthb_user:                types.T_ivals_gthb_user{},
		Repositories_total_count: dummyInt,
	},
	Gthb_repo_contrs: pgtype.FlatArray[types.T_f_insert_gthb_contr]{

		{
			Contributions: dummyInt,
			Gthb_owner: types.T_f_insert_gthb_contr_owner{
				Avatar_url:       dummyText,
				Gthb_owner_login: dummyText,
				Gthb_owner_url:   dummyText,
				Gthb_user: types.T_ivals_gthb_user{
					Bio:                   dummyText,
					Bio_html:              dummyText,
					Company:               dummyText,
					Company_html:          dummyText,
					Created_at:            dummyTime,
					Email:                 dummyText,
					Followers_total_count: dummyInt,
					Gthb_user_name:        dummyText,
					Twitter_username:      dummyText,
					Website_url:           dummyText,
				},
				Repositories_total_count: dummyInt,
			},
		},
	},
	Gthb_repo_description: dummyText,
	Gthb_repo_name:        dummyText,
	Gthb_repo_url:         dummyText,
	Gthb_star_hists: pgtype.FlatArray[types.T_ivals_gthb_star_hist]{
		{
			Amount:              dummyInt,
			Gthb_star_hist_date: dummyTime,
		},
	},
	Homepage_url:              dummyText,
	Is_in_organization:        pgtype.Bool{Bool: true, Valid: true},
	Issues_total_count:        dummyInt,
	Pull_requests_total_count: dummyInt,
	Stargazer_count:           dummyInt,
}

var dummySbotLinCompany = types.T_ivals_sbot_lin_company{
	About:                        dummyText,
	Employees_amount_in_linkedin: dummyInt,
	Followers:                    dummyInt,
	Headquarters:                 dummyText,
	Logo:                         dummyText,
	Sbot_lin_company_image:       dummyText,
	Sbot_lin_company_name:        dummyText,
	Sbot_lin_company_type:        dummyText,
	Sbot_lin_company_url:         dummyText,
	Sphere:                       dummyText,
	Website:                      dummyText,
}

var DummyOwner = types.T_f_insert_gthb_owner{
	Avatar_url: pgtype.Text{String: "avatar_url4", Valid: true},
	Gthb_org: types.T_ivals_gthb_org{
		Created_at:           dummyTime,
		Description_html:     dummyText,
		Email:                dummyText,
		Gthb_org_description: dummyText,
		Gthb_org_name:        dummyText,
		Twitter_username:     dummyText,
		Website_url:          dummyText,
	},
	Gthb_owner_type:          pgtype.Text{String: "Organization", Valid: true},
	Gthb_owner_login:         dummyText,
	Gthb_owner_url:           dummyText,
	Gthb_user:                types.T_ivals_gthb_user{},
	Repositories_total_count: dummyInt,
}

func getDummyObject(authUserId string) (types.T_f_insert_proj_bookmark_w_cats, error) {
	var user_id_arr [16]byte
	copy(user_id_arr[:], []byte(authUserId))
	uuid, err := uuid.Parse(authUserId)
	if err != nil {
		return types.T_f_insert_proj_bookmark_w_cats{}, err
	}
	return types.T_f_insert_proj_bookmark_w_cats{
		Auth_users_id: pgtype.UUID{Bytes: uuid, Valid: true},
		Proj_cats: pgtype.FlatArray[pgtype.Text]{
			dummyText,
		},
		Proj_repo: types.T_f_insert_proj_repo{
			Algo_hn_queries: pgtype.FlatArray[types.T_f_insert_algo_hn_query_with_stories_and_comments]{
				{
					Algo_hn_comments: dummyAlgoHnComments,
					Algo_hn_stories:  dummyAlgoHnStories,
					Query:            dummyText,
				},
			},
			Gthb_repo: dummyGthbRepo,
			Note:      dummyText,
			Proj_repo_metadata: types.T_f_insert_proj_repo_metadata{
				Algo_hn_eli5: dummyText,
				Repo_eli5:    dummyText,
			},
			Sbot_lin_companies: pgtype.FlatArray[types.T_ivals_sbot_lin_company]{dummySbotLinCompany},
			Sbot_lin_profiles:  nil,
		},
	}, nil

}
