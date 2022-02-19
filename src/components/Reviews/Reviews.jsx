import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import * as MoviesAPI from '../../services/apiService';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        if (!movieId) {
          return;
        }
        const fetchReview = await MoviesAPI.fetchMoviesReviews(movieId).then(
          item => item.results
        );
        if (fetchReview.length === 0) {
          return setReviews(null);
        }
        setReviews(fetchReview);
      } catch (error) {
        toast.error('No any reviews for this movie!');
      }
    }
    fetchReviews();
  }, [movieId]);

  return (
    <ul>
      {!reviews && <p>No any reviews find for this movie!</p>}
      {reviews &&
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h3>{author}</h3>
            <p>{content}</p>
          </li>
        ))}
    </ul>
  );
}
