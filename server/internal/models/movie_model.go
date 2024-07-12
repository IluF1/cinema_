package models

type Movie struct {
	Name        string  `db:"name"`
	Description string  `db:"description"`
	Rating      float64 `db:"rating"`
}
