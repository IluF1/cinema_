package servers

import (
	"net/http"

	"github.com/cinema/server/internal/services/movie"
	"github.com/gorilla/mux"
)

type server struct {
	addr   string
	router *mux.Router
}

func New(addr string) *server {
	s := &server{
		addr:   addr,
		router: mux.NewRouter(),
	}

	s.SetupRouter()

	return s
}

func (s *server) Run() error {
	return http.ListenAndServe(s.addr, s.router)
}

func (s *server) SetupRouter() {
	s.router.HandleFunc("/api/movies", movie.GetMovies).Methods(http.MethodGet)
}
