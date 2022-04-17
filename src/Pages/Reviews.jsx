import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getRew } from '../services';

const API = '70fc5b973179caa818ae6622551a44d1';

const Reviews = () => {
  const paramsRew = useParams();
  const paramsRewId = paramsRew.movieId;

  const [rewList, setRewList] = useState('');
  useEffect(() => {
    getRew(paramsRewId, API)
      .then(function (response) {
        // handle success
        setRewList(response.data);

        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [paramsRewId]);
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
