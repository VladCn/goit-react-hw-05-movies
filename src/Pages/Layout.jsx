import { NavLink, Outlet } from 'react-router-dom';
import React from 'react';

export const Layout = () => {
  return (
    <div>
      <header>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/movies">Movies</NavLink>
      </header>
      <main className="container">
        <Outlet />
      </main>

      <footer>2022</footer>
    </div>
  );
};
