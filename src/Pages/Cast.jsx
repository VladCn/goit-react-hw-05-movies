import { useEffect, useState } from 'react';
import { Link, useParams, Outlet, useNavigate } from 'react-router-dom';
import { default as axios } from 'axios';

const API = '70fc5b973179caa818ae6622551a44d1';
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

export const Cast = () => {
  const paramsCast = useParams();

  const [castList, setCastList] = useState('');
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${paramsCast.movieId}/credits?api_key=${API}&language=en-US&page=1`
      )
      .then(function (response) {
        // handle success
        setCastList(response.data);

        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [paramsCast.movieId]);
  console.log(castList);
  return (
    <div>
      <p>Cast</p>
      <ul>
        {castList?.cast?.map(actor => (
          <ul key={actor.id}>
            <img
              width="65px"
              height="90px"
              src={`${IMG_URL}${actor.profile_path}`}
            />
            <li>{actor.name}</li>
            <li>Character: {actor.character}</li>
          </ul>
        ))}
      </ul>
    </div>
  );
};
