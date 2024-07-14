package movie

import (
	"encoding/json"
	"net/http"

	"github.com/cinema/server/internal/storage"
	"github.com/cinema/server/pkg/logger"
)

func GetMovies(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
	store, err := storage.New()
	if err != nil {
		http.Error(w, "Failed to connect to storage", http.StatusInternalServerError)
		logger.Logger.Error("Error creating storage:" + err.Error())
	}

	movies, err := store.GetMoviesFromDatabase()
	if err != nil {
		http.Error(w, "Failed to get movies", http.StatusInternalServerError)
		logger.Logger.Error("Error getting movies:" + err.Error())
	}

	encoder := json.NewEncoder(w)
	err = encoder.Encode(movies)
	if err != nil {
		http.Error(w, "Failed to encode movies", http.StatusInternalServerError)
		logger.Logger.Error("Error encoding movies:" + err.Error())
	}
}
