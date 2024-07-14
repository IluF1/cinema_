package user

import "net/http"

func User(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:
		getUser(w, r)
	default:
		w.Write([]byte("доступен только get"))
	}
}

func getUser(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("hello world"))
	
}
