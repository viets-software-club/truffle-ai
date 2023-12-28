package github

import (
	"errors"

	"github.com/jackc/pgx/v5/pgtype"
	"github.com/viets-software-club/truffle-ai/graphql-server/api/github"
	"github.com/viets-software-club/truffle-ai/graphql-server/db/types"
)

func ConvertGetRepositoryLanguagesPtrToTIvalsGthbLangFlatArrayPtr(langs *github.GetRepositoryLanguages) (pgtype.FlatArray[types.T_ivals_gthb_lang], error) {
	var newLangs pgtype.FlatArray[types.T_ivals_gthb_lang]
	if langs == nil {
		return nil, errors.New("langs can not be nil")
	}
	for _, entry := range langs.Edges {
		newLangs = append(newLangs, types.T_ivals_gthb_lang{
			Gthb_lang_name: Githubv4StringToNoEmptyPgText(entry.Node.Name),
			Color:          Githubv4StringToNoEmptyPgText(entry.Node.Color),
		})

	}
	return newLangs, nil
}
