package helper

import (
	"strings"
	"time"

	"github.com/jackc/pgx/v5/pgtype"
)

var NO_TIME time.Time

func StringToNoEmptyPgText(s string) pgtype.Text {
	if strings.TrimSpace(s) == "" {
		return pgtype.Text{String: s, Valid: false}
	}
	return pgtype.Text{String: s, Valid: true}
}

func StringToPgText(s string) pgtype.Text {
	return pgtype.Text{String: s, Valid: true}
}

func IntToPgInt8(i int) pgtype.Int8 {
	return pgtype.Int8{Int64: int64(i), Valid: true}
}
func TimeToNoDefaultPgTimestampz(t time.Time) pgtype.Timestamptz {
	if t == NO_TIME {
		return pgtype.Timestamptz{Time: t, Valid: false}
	}
	return pgtype.Timestamptz{Time: t, Valid: true}
}
