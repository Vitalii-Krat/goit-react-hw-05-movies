import { useLocation } from 'react-router-dom';
import {
  ListMoviesStyled,
  CardMoviesStyled,
  MovieTitleStyled,
} from './MoviesList.styled';
import PropTypes from 'prop-types';
import NoImage from '../../images/NoImage.png';

export default function MoviesList({ items }) {
  const location = useLocation();
  return (
    <ListMoviesStyled>
      {items &&
        items.map(
          ({ id, title, original_title, name, backdrop_path, poster_path }) => (
            <CardMoviesStyled
              state={{ from: location }}
              to={`/movies/${id}`}
              key={id}
            >
              <div>
                <img
                  src={
                    poster_path ?? backdrop_path
                      ? `https://image.tmdb.org/t/p/w500/${
                          poster_path ?? backdrop_path
                        }`
                      : NoImage
                  }
                  alt={title ?? name}
                />
                <MovieTitleStyled>
                  {title ?? original_title ?? name}
                </MovieTitleStyled>
              </div>
            </CardMoviesStyled>
          )
        )}
    </ListMoviesStyled>
  );
}

MoviesList.propTypes = {
  items: PropTypes.array.isRequired,
};
