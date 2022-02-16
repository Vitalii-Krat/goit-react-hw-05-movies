import axios from 'axios';

const API_KEY = 'api_key=420bed62ddaa3595adaa74e668147d82';
const MAIN_URL = 'https://api.themoviedb.org/';

export function fetchMoviesAPI() {
  const fetchMovies = axios
    .get(`${MAIN_URL}3/trending/all/day?${API_KEY}&append_to_response=images`)
    .then(response => response.data);
  return fetchMovies;
}
