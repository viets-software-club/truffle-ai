package github

import (
	"github.com/jackc/pgx/v5/pgtype"
	"github.com/shurcooL/githubv4"
	"github.com/viets-software-club/truffle-ai/graphql-server/db/types"
)

func ConvertGithubLang(langs *struct {
	Edges []struct {
		Node struct {
			Color githubv4.String
			Name  githubv4.String
		}
	}
}) (*pgtype.FlatArray[types.T_ivals_gthb_lang], error) {
	var newLangs pgtype.FlatArray[types.T_ivals_gthb_lang]
	for _, entry := range langs.Edges {
		newLangs = append(newLangs, types.T_ivals_gthb_lang{
			Gthb_lang_name: pgtype.Text{String: string(entry.Node.Name), Valid: true},
			Color:          pgtype.Text{String: string(entry.Node.Color), Valid: true},
		})

	}
	return &newLangs, nil
}
