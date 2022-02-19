import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import * as MoviesAPI from '../../services/apiService';
import NoImage from '../../images/NoImage.png';
import { ListCastStyled } from '../Cast/Cast.styled';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function fetchCast() {
      try {
        if (!movieId) {
          return;
        }
        const fetchCast = await MoviesAPI.fetchMoviesCast(movieId).then(
          item => item.cast
        );
        if (fetchCast.length === 0) {
          return setCast(null);
        }
        setCast(fetchCast);
      } catch (error) {
        toast.error('No cast of actors!');
      }
    }
    fetchCast();
  }, [movieId]);

  return (
    <ListCastStyled>
      {cast &&
        cast.map(({ name, character, profile_path, id }) => (
          <li key={id}>
            <div>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w342/${profile_path}`
                    : NoImage
                }
                alt={name}
              />
            </div>
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
    </ListCastStyled>
  );
}
