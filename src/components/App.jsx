import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const Layout = lazy(() => import('../Pages/Layout'));
const HomePage = lazy(() => import('../Pages/HomePage'));
const MoviesPage = lazy(() => import('../Pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../Pages/MovieDetailsPage'));
const Cast = lazy(() => import('../Pages/Cast'));
const Reviews = lazy(() => import('../Pages/Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
