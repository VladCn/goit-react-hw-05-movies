import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { default as axios } from 'axios';

export const HomePage = () => {
  const [filmsList, setFilmsList] = useState([]);
  const API = '70fc5b973179caa818ae6622551a44d1';

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${API}&language=en-US&page=1`
      )
      .then(function (response) {
        // handle success
        setFilmsList(response);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div>
      <p>HomePage</p>
      {filmsList?.data?.results?.map(films => (
        <li key={films.id}>
          <Link to={`/movies/${films.id}`}>{films.title || films.name}</Link>
        </li>
      ))}
    </div>
  );
};
