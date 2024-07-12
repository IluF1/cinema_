package models

type User struct {
	Firstname string `db:"firstname"`
	Surname   string `db:"surname"`
	Lastname  string `db:"lastname"`
	Email     string `db:"email"`
	City      string `db:"city"`
	Password  string `db:"password"`
}
