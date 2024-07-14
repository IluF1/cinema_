package main

import (

	// "github.com/cinema/server/internal/servers"
	"fmt"

	"github.com/cinema/server/internal/servers"
	"github.com/cinema/server/internal/storage"

	// "github.com/cinema/server/internal/storage"
	"github.com/cinema/server/pkg/logger"
)

func main() {
	srv := servers.New(":8080")

	if err := srv.Run(); err != nil {
		logger.Logger.Error(err.Error())
	}

	logger.Init()
	srv.SetupRouter()

	store, err := storage.New()
	if err != nil {
		logger.Logger.Error(err.Error())
	}

	defer store.Close()
	fmt.Println(store.GetMovies())
	// store.GetUserByEmail("asdfasfasdf")
}
