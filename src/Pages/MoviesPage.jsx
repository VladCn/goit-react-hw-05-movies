import React from 'react';
import { useEffect, useState } from 'react';
import { default as axios } from 'axios';
import { Link, useSearchParams } from 'react-router-dom';

export const MoviesPage = () => {
  const [searchFilms, setSearchFilms] = useState('');
  const [films, setFilms] = useState([]);
  const API = '70fc5b973179caa818ae6622551a44d1';

  const [searchParams, setSearchParams] = useSearchParams();

  const handleSetFilms = e => {
    setSearchFilms(e.target.value);
  };

  const handleSearchFilm = e => {
    e.preventDefault();
    if (searchFilms) {
      setSearchParams({ query: searchFilms });
    }
  };

  useEffect(() => {
    let query = searchParams.get('query');
    if (query) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${query}&language=en-US&page=1&include_adult=false`
        )
        .then(function (response) {
          // handle success
          setFilms(response);
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  }, [searchParams]);

  return (
    <div>
      <form onSubmit={handleSearchFilm}>
        <p>MoviesPage</p>
        <input onChange={handleSetFilms} />
        <button>search</button>
      </form>
      <ul>
        {films?.data?.results?.map(films => (
          <li key={films.id}>
            <Link to={`/movies/${films.id}`}>{films.title || films.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
