import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReactComponent as Icon } from '../no_image_available.svg';
import styled from 'styled-components';
import { getCast } from '../services';

const Character = styled.li`
  list-style-type: none;
  margin-bottom: 10px;
`;
const Pic = styled.img`
  margin-bottom: 10px;
`;
const Actor = styled.li`
  margin-bottom: 10px;
`;

const API = '70fc5b973179caa818ae6622551a44d1';
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

const Cast = () => {
  const paramsCast = useParams();
  const paramsCastId = paramsCast.movieId;

  const [castList, setCastList] = useState('');
  useEffect(() => {
    getCast(paramsCastId, API)
      .then(function (response) {
        // handle success
        setCastList(response.data);

        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [paramsCastId]);
  console.log(castList);
  return (
    <div>
      <ul>
        {castList?.cast?.map(actor => {
          console.log(actor.profile_path);
          return (
            <ul key={actor.id}>
              {actor.profile_path ? (
                <Pic
                  width="65px"
                  height="90px"
                  src={`${IMG_URL}${actor.profile_path}`}
                />
              ) : (
                <Icon
                  width="65px"
                  height="90px"
                  src="../no_image_available.svg"
                />
              )}
              <Actor>{actor.name}</Actor>
              <Character>Character: {actor.character}</Character>
            </ul>
          );
        })}
      </ul>
    </div>
  );
};
export default Cast;
