package storage

import (
	"database/sql"

	"github.com/cinema/server/internal/models"
	"github.com/cinema/server/pkg/logger"
	_ "github.com/lib/pq"
)

type Storage struct {
	db *sql.DB
}

func New() (*Storage, error) {
	connStr := "postgresql://postgres:12345@localhost:5432/cinema?sslmode=disable"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		logger.Logger.Error(err.Error())
	}

	if err = db.Ping(); err != nil {
		logger.Logger.Error(err.Error())
	}
	return &Storage{db: db}, nil
}

func (s *Storage) Close() {
	if err := s.db.Close(); err != nil {
		logger.Logger.Error(err.Error())
	}
}

func (s *Storage) GetUserByEmailFromDatabase(email string) (*models.User, error) {
	var user models.User
	sqlStatement := `SELECT firstname, lastname, surname, email, city FROM users`
	row := s.db.QueryRow(sqlStatement, email)

	err := row.Scan(&user.Firstname, &user.Lastname, &user.Surname, &user.Email, &user.City)
	if err != nil {
		logger.Logger.Error(err.Error())
	}

	return &user, nil
}

func (s *Storage) GetMoviesFromDatabase() ([]models.Movie, error) {
	sqlStatement := `SELECT name, description, rating, image, id FROM movies`
	rows, err := s.db.Query(sqlStatement)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	movies := make([]models.Movie, 0)

	for rows.Next() {
		var movie models.Movie
		err := rows.Scan(&movie.Name, &movie.Description, &movie.Rating, &movie.Image, &movie.Id)
		if err != nil {
			logger.Logger.Error("Error scanning row:"+ err.Error())
			continue
		}
		movies = append(movies, movie)
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}

	return movies, nil
}