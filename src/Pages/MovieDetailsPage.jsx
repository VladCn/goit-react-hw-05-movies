import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { default as axios } from 'axios';

export const MovieDetailsPage = () => {
  const API = '70fc5b973179caa818ae6622551a44d1';
  const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
  const params = useParams();
  const [filmData, setFilmData] = useState([]);
  const [releaseData, setReleaseData] = useState([]);
  console.log(params.movieId);

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

  return (
    <div>
      <p>MovieDetailsPage</p>
      <button>Go back</button>
      <div className="container">
        <img
          width="150px"
          height="200px"
          src={`${IMG_URL}${filmData.poster_path}`}
        />
        <ul>
          <li>{`${filmData.original_title} (${releaseData})`}</li>
        </ul>
      </div>

      <Link to={`/movies/${params.movieId}/cast`}>Casts</Link>
      <Link to={`/movies/${params.movieId}/reviews`}>Reviews</Link>
    </div>
  );
};

// `${IMG_URL}${filmData.poster_path}`
