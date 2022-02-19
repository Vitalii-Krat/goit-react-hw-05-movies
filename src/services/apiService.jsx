import axios from 'axios';

const API_KEY = 'api_key=420bed62ddaa3595adaa74e668147d82';
const MAIN_URL = 'https://api.themoviedb.org/';
const LANGUAGE = 'language=en-US';

export function fetchMoviesAPI() {
  const fetchMovies = axios
    .get(`${MAIN_URL}3/trending/all/day?${API_KEY}&append_to_response=images`)
    .then(response => response.data);
  return fetchMovies;
}

export function fetchMoviesQuery(query) {
  const fetchMoviesQuery = axios
    .get(
      `${MAIN_URL}3/search/movie?${API_KEY}&${LANGUAGE}&page=1&include_adult=false&query=${query}`
    )
    .then(response => response.data);
  return fetchMoviesQuery;
}

export function fetchMoviesById(id) {
  const fetchMoviesId = axios
    .get(`${MAIN_URL}3/movie/${id}?${API_KEY}&append_to_response=images`)
    .then(response => response.data);
  return fetchMoviesId;
}

export function fetchMoviesCast(id) {
  const fetchMoviesCast = axios
    .get(`${MAIN_URL}3/movie/${id}/credits?${API_KEY}&${LANGUAGE}`)
    .then(response => response.data);
  return fetchMoviesCast;
}

export function fetchMoviesReviews(id) {
  const fetchMoviesReviews = axios
    .get(`${MAIN_URL}3/movie/${id}/reviews?${API_KEY}&${LANGUAGE}&page=1`)
    .then(response => response.data);
  return fetchMoviesReviews;
}
