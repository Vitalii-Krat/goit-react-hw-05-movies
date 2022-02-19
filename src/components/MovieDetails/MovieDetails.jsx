import { Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  DetailsContainerStyled,
  ConteinerImagesMovies,
  LinkStyled,
  TitleStyled,
  ListAdditionalStyled,
} from './MovieDetails.styled';
import NoImage from '../../images/NoImage.png';

export default function MovieDetails({
  item: {
    title,
    name,
    poster_path,
    overview,
    genres,
    backdrop_path,
    vote_average,
  },
}) {
  const { movieId } = useParams();
  const locationCast = useLocation();

  return (
    <>
      <DetailsContainerStyled>
        <ConteinerImagesMovies>
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
        </ConteinerImagesMovies>
        <ul>
          <li>
            <h2>{title ?? name}</h2>
          </li>
          <li>
            <p>User Score: {vote_average * 10}%</p>
          </li>
          <li>
            <h3>Overview</h3>
          </li>
          <li>
            <p>{overview}</p>
          </li>
          <li>
            <h3>Genres</h3>
          </li>
          <li>
            <p>{genres.map(genre => genre.name).join(', ')}</p>
          </li>
        </ul>
      </DetailsContainerStyled>
      <div>
        <TitleStyled>Additional information</TitleStyled>

        <ListAdditionalStyled>
          <li>
            <LinkStyled
              to={`/movies/${movieId}/cast`}
              state={{ from: locationCast?.state?.from ?? '/' }}
            >
              Cast
            </LinkStyled>
          </li>
          <li>
            <LinkStyled
              to={`/movies/${movieId}/reviews`}
              state={{ from: locationCast?.state?.from ?? '/' }}
            >
              Reviews
            </LinkStyled>
          </li>
        </ListAdditionalStyled>

        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}

MovieDetails.propTypes = {
  item: PropTypes.object.isRequired,
};
