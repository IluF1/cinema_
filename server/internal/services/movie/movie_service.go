package movie
// package movie

// import (
// 	"encoding/json"
// 	"io"
// 	"net/http"

// 	"github.com/cinema/server/internal/storage"
// 	"github.com/cinema/server/pkg/logger"
// )

// func Movie(w http.ResponseWriter, r *http.Request) {
// 	switch r.Method {
// 	case "GET":
// 		getMovie()
// 	case "POST":
// 		w.Write([]byte("not use method post"))
// 	}
// }

// func getMovie() {
// 	store, err := storage.New()
// 	if err != nil {
// 		logger.Logger.Panic(err.Error())
// 	}

	
// }
