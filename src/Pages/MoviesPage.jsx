import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { getSearchFilms } from '../services';

const MoviesPage = () => {
  const [searchFilms, setSearchFilms] = useState('');
  const [films, setFilms] = useState([]);
  const API = '70fc5b973179caa818ae6622551a44d1';
  const navigate = useNavigate();
  const goHome = () => navigate('/', { replace: true });

  const [searchParams, setSearchParams] = useSearchParams();

  const handleSetFilms = e => {
    setSearchFilms(e.target.value.trim());
  };

  const handleSearchFilm = e => {
    e.preventDefault();
    if (searchFilms) {
      setSearchParams({ query: searchFilms });
    }
  };

  useEffect(() => {
    if (
      films?.data?.results &&
      films?.data?.results?.length !== 0 &&
      searchFilms
    ) {
      goHome();
    }

    let query = searchParams.get('query');
    if (query) {
      getSearchFilms(API, query)
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
        {films?.data?.results?.length !== 0 &&
          films.data?.results?.map(films => (
            <li key={films.id}>
              <Link to={`/movies/${films.id}`}>
                {films.title || films.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default MoviesPage;
