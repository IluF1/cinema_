package main

import (

	"github.com/cinema/server/internal/servers"

	"github.com/cinema/server/pkg/logger"
)

func main() {
	srv := servers.New(":8080")

	if err := srv.Run(); err != nil {
		logger.Logger.Error(err.Error())
	}

	logger.Init()

}
