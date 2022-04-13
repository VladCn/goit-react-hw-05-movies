import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { default as axios } from 'axios';
import styled from 'styled-components';

const Ul = styled.ul`
  margin-left: 5px;
`;
const Li = styled.li`
  font-size: 14px;
`;

const HomePage = () => {
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
      <h1>Trending today</h1>
      {filmsList?.data?.results?.map(films => (
        <Ul key={films.id}>
          <Li>
            <Link to={`/movies/${films.id}`}>{films.title || films.name}</Link>
          </Li>
        </Ul>
      ))}
    </div>
  );
};
export default HomePage;
