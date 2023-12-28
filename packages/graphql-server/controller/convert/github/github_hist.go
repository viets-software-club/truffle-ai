package github

import (
	"errors"

	"github.com/jackc/pgx/v5/pgtype"
	"github.com/viets-software-club/truffle-ai/graphql-server/api/github"
	"github.com/viets-software-club/truffle-ai/graphql-server/controller/convert/helper"
	"github.com/viets-software-club/truffle-ai/graphql-server/db/types"
)

func ConvertForkHistMapPtrToTIvalsGthbForkHistFlatArrayPtr(hist *github.ForkHistMap) (pgtype.FlatArray[types.T_ivals_gthb_fork_hist], error) {
	var forks pgtype.FlatArray[types.T_ivals_gthb_fork_hist]
	if hist == nil {
		return nil, errors.New("hist can not be nil")
	}
	for _, entry := range *hist {
		forks = append(forks, types.T_ivals_gthb_fork_hist{
			Amount:              helper.IntToPgInt8(entry.Amount),
			Gthb_fork_hist_date: helper.TimeToNoDefaultPgTimestampz(entry.Date.Time),
		})
	}
	return forks, nil
}

func ConvertStarHistMapPtrToTIvalsGthbStarHistFlatArrayPtr(hist *github.StarHistMap) (pgtype.FlatArray[types.T_ivals_gthb_star_hist], error) {
	var stars pgtype.FlatArray[types.T_ivals_gthb_star_hist]
	if hist == nil {
		return nil, errors.New("hist can not be nil")
	}
	for _, entry := range *hist {
		stars = append(stars, types.T_ivals_gthb_star_hist{
			Amount:              helper.IntToPgInt8(entry.Amount),
			Gthb_star_hist_date: helper.TimeToNoDefaultPgTimestampz(entry.Date.Time),
		})
	}
	return stars, nil
}

func ConvertIssueHistMapPtrToTIvalsGthbIssueHistFlatArrayPtr(hist *github.IssueHistMap) (pgtype.FlatArray[types.T_ivals_gthb_issue_hist], error) {
	var issues pgtype.FlatArray[types.T_ivals_gthb_issue_hist]
	if hist == nil {
		return nil, errors.New("hist can not be nil")
	}
	for _, entry := range *hist {
		issues = append(issues, types.T_ivals_gthb_issue_hist{
			Amount:               helper.IntToPgInt8(entry.Amount),
			Gthb_issue_hist_date: helper.TimeToNoDefaultPgTimestampz(entry.Date.Time),
		})
	}
	return issues, nil
}
