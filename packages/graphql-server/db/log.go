package db

import (
	"context"
	"log"
	"os"

	"github.com/jackc/pgx/v5/tracelog"
)

type Log struct{}

var IS_DEV = os.Getenv("GO_ENV") != "production"

func (l Log) Log(ctx context.Context, level tracelog.LogLevel, msg string, data map[string]any) {

	if IS_DEV {
		log.Println(msg, data)
	}

}
