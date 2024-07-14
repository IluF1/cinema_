package models

type User struct {
	Firstname string `json:"firstname"`
	Surname   string `json:"surname"`
	Lastname  string `json:"lastname"`
	Email     string `json:"email"`
	City      string `json:"city"`
}
