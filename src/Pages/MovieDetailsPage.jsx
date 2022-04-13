import { Link, useParams, Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { default as axios } from 'axios';

export const MovieDetailsPage = () => {
  const API = '70fc5b973179caa818ae6622551a44d1';
  const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
  const params = useParams();
  const [filmData, setFilmData] = useState([]);
  const [releaseData, setReleaseData] = useState([]);
  console.log(params.movieId);

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${API}&language=en-US&page=1`
      )
      .then(function (response) {
        // handle success
        setFilmData(response.data);
        setReleaseData(response.data.release_date.split('-')[0]);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const reit = () => {
    if (filmData.vote_average) {
      return filmData.vote_average * 10;
    }
  };

  return (
    <div>
      <p>MovieDetailsPage</p>
      <button onClick={goBack}>Go back</button>
      <div className="container">
        <img
          width="150px"
          height="200px"
          src={`${IMG_URL}${filmData.poster_path}`}
        />
        <ul>
          <li>
            <h1>{`${filmData.original_title} (${releaseData})`}</h1>
          </li>
          <li>{`User Score: ${reit()}%`}</li>
          <li>
            <h2>Overview</h2>
            <p>{filmData.overview}</p>
          </li>
          <li>
            <h2>Genres</h2>
            {filmData?.genres?.map(genre => (
              <ul key={genre.id}>
                <li>{genre.name}</li>
              </ul>
            ))}
          </li>
        </ul>
      </div>
      <h3>Additional information</h3>

      <ul>
        <li>
          <Link to={`/movies/${params.movieId}/cast`}>Casts</Link>
        </li>
        <li>
          <Link to={`/movies/${params.movieId}/reviews`}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
