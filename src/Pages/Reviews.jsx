import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { default as axios } from 'axios';

const API = '70fc5b973179caa818ae6622551a44d1';

const Reviews = () => {
  const paramsRew = useParams();

  const [rewList, setRewList] = useState('');
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${paramsRew.movieId}/reviews?api_key=${API}&language=en-US&page=1`
      )
      .then(function (response) {
        // handle success
        setRewList(response.data);

        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [paramsRew.movieId]);
  console.log(rewList?.results);
  return (
    <div>
      <ul>
        {rewList?.results?.length ? (
          rewList.results?.map(rew => (
            <li key={rew.id}>
              <h3>Author: {rew.author}</h3>
              <p>{rew.content}</p>
            </li>
          ))
        ) : (
          <p>We don`t have reviews for this movie</p>
        )}
      </ul>
    </div>
  );
};
export default Reviews;
