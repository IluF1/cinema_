package servers

import (
	"net/http"

	"github.com/gorilla/mux"
)

type server struct {
	addr   string
	router *mux.Router
}

func New(addr string) *server {
	return &server{
		addr:   addr,
		router: mux.NewRouter(),
	}
}

func (s *server) Run() error {
	return http.ListenAndServe(s.addr, s.router)
}

func (s *server) SetupRouter() {
}