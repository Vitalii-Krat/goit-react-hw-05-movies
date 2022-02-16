import { useEffect, useState } from 'react';
import * as MoviesAPI from '../../services/fetch-api';
import MoviesList from '../../components/MoviesList/MoviesList';
import { TitleStyled } from './HomePage.styled';
import Loader from '../../components/Loader/Loader';

const useFetchTrendMovies = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchTrendMovies() {
      setLoading(true);
      try {
        const items = await MoviesAPI.fetchMoviesAPI().then(
          data => data.results
        );
        setItems(items);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
    fetchTrendMovies();
  }, []);
  return { items, loading };
};

export default function HomePage() {
  const { items, loading } = useFetchTrendMovies();

  return (
    <div>
      <TitleStyled>Trending today</TitleStyled>
      {loading && <Loader />}
      {items && <MoviesList items={items}></MoviesList>}
    </div>
  );
}
