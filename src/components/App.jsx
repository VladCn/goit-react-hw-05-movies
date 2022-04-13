import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { HomePage } from '../Pages/HomePage';
import { Layout } from '../Pages/Layout';
import { MoviesPage } from '../Pages/MoviesPage';
import { MovieDetailsPage } from '../Pages/MovieDetailsPage';
import { Cast } from '../Pages/Cast';
import { Reviews } from '../Pages/Reviews';

export const App = () => {
  return (
    <>
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
    </>
  );
};
