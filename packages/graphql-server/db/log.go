package db

import (
	"context"
	"log"

	"github.com/jackc/pgx/v5/tracelog"
)

type Log struct{}

func (l Log) Log(ctx context.Context, level tracelog.LogLevel, msg string, data map[string]any) {
	log.Println(msg, data, "\n")

}
