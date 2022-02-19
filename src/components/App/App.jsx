import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { AppStyled } from './App.styled';
import { Toaster } from 'react-hot-toast';
import Loader from '../Loader/Loader';
import Navigation from '../Navigation';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const MoviesPageSearch = lazy(() =>
  import('../../pages/MoviesPage/MoviesPage')
);
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage'));
const Cast = lazy(() => import('../Cast'));
const Reviews = lazy(() => import('../Reviews'));

export default function App() {
  return (
    <AppStyled>
      <Suspense fallback={<Loader />}>
        <Toaster position="top-right" reverseOrder={false} />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPageSearch />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </AppStyled>
  );
}
