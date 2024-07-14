import axios from 'axios';
import { useEffect, useState } from 'react';
interface IMovies {
  id: number;
  name: string;
  description: string;
  rating: number;
  image: string;
}

export const Home = () => {
  const [moviesList, setMoviesList] = useState<IMovies[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await axios.get('http://localhost:8080/api/movies');

        setMoviesList(data.data);
      } catch (err) {
        setError('An error occurred while fetching movies.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {moviesList.map(movie => (
        <div key={movie.id}>
          <img src={movie.image} alt={movie.name} />
          <h1>{movie.name}</h1>
          <h3>{movie.description}</h3>
          <p>{movie.rating}</p>
        </div>
      ))}
    </div>
  );
};
