package github

import (
	"github.com/jackc/pgx/v5/pgtype"
	"github.com/viets-software-club/truffle-ai/graphql-server/api/github"
	"github.com/viets-software-club/truffle-ai/graphql-server/db/types"
)

func ConvertForkHist(hist *[]github.Hist) (*pgtype.FlatArray[types.T_ivals_gthb_fork_hist], error) {
	var forks pgtype.FlatArray[types.T_ivals_gthb_fork_hist]
	for _, entry := range *hist {
		forks = append(forks, types.T_ivals_gthb_fork_hist{
			Amount:              pgtype.Int8{Int64: int64(entry.Amount), Valid: true},
			Gthb_fork_hist_date: pgtype.Timestamptz{Time: entry.Date.Time, Valid: true},
		})
	}
	return &forks, nil
}

func ConvertStarHist(hist *[]github.Hist) (*pgtype.FlatArray[types.T_ivals_gthb_star_hist], error) {
	var stars pgtype.FlatArray[types.T_ivals_gthb_star_hist]
	for _, entry := range *hist {
		stars = append(stars, types.T_ivals_gthb_star_hist{
			Amount:              pgtype.Int8{Int64: int64(entry.Amount), Valid: true},
			Gthb_star_hist_date: pgtype.Timestamptz{Time: entry.Date.Time, Valid: true},
		})
	}
	return &stars, nil
}

func ConvertIssueHist(hist *[]github.Hist) (*pgtype.FlatArray[types.T_ivals_gthb_issue_hist], error) {
	var issues pgtype.FlatArray[types.T_ivals_gthb_issue_hist]
	for _, entry := range *hist {
		issues = append(issues, types.T_ivals_gthb_issue_hist{
			Amount:               pgtype.Int8{Int64: int64(entry.Amount), Valid: true},
			Gthb_issue_hist_date: pgtype.Timestamptz{Time: entry.Date.Time, Valid: true},
		})
	}
	return &issues, nil
}
