import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import * as MoviesAPI from '../../services/apiService';
import toast from 'react-hot-toast';
import { GiReturnArrow } from 'react-icons/gi';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import Loader from '../../components/Loader';

export default function MovieDetailsPage() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function fetchMoviesId() {
      setLoading(true);
      try {
        const fetchMovies = await MoviesAPI.fetchMoviesById(movieId);
        setMovies(fetchMovies);
      } catch (error) {
        toast.error("Something went wrong. Try again!");
      } finally {
        setLoading(false);
      }
    }
    fetchMoviesId();
  }, [movieId]);

  return (
    <div>
      <Link to={location?.state?.from ?? '/movies'} state={{ from: location }}>
        <GiReturnArrow /> Return
      </Link>
      {loading && <Loader />}
      {movies && (
        <MovieDetails item={movies} location={location}></MovieDetails>
      )}
    </div>
  );
}
