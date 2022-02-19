import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { GiReturnArrow } from 'react-icons/gi';
import toast from 'react-hot-toast';
import * as MoviesAPI from '../../services/apiService';
import MoviesList from '../../components/MoviesList';
import {
  SearchStyled,
  FormStyled,
  ButtonStyled,
  ReturnStyled,
} from './MoviesPage.styled';
import Loader from '../../components/Loader';

export default function MoviesPageSearch() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query');

  const handlerSubmitUser = event => {
    event.preventDefault();
    const userQuery = event.currentTarget.elements.query.value.trim();
    setSearchParams({ query: userQuery });
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    setLoading(true);
    setMovies([]);
    try {
      async function fetchMoviesQ() {
        const fetchMovies = await MoviesAPI.fetchMoviesQuery(query);
        if (fetchMovies.total_results === 0) {
          toast.error(`No any movies on query ${query}!`);
          setLoading(false);
          return;
        }
        setMovies(fetchMovies.results);
        setLoading(false);
      }
      fetchMoviesQ();
    } catch (error) {
      toast.error(`Error something went wrong!`);
      setLoading(false);
    }
  }, [query]);

  return (
    <>
      <Link to={location?.state?.from ?? '/'} state={{ from: location }}>
        <ReturnStyled>
          <GiReturnArrow /> Return
        </ReturnStyled>
      </Link>
      <FormStyled onSubmit={handlerSubmitUser}>
        <SearchStyled
          name="query"
          required
          id="film-name"
          type="text"
          aria-label="search"
          minLength="2"
          autoComplete="off"
          autoFocus
          placeholder="Enter movie name"
        />
        <ButtonStyled type="submit">
          <span>Search movies</span>
        </ButtonStyled>
      </FormStyled>
      {loading && <Loader />}
      {movies && <MoviesList items={movies}></MoviesList>}
    </>
  );
}
