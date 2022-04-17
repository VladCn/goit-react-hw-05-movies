import { default as axios } from 'axios';

export const getDayFilms = API => {
  return axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API}&language=en-US&page=1`
  );
};

export const getSearchFilms = (API, query) => {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${query}&language=en-US&page=1&include_adult=false`
  );
};

export const getMovieDetails = (paramsId, API) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${paramsId}?api_key=${API}&language=en-US&page=1`
  );
};

export const getCast = (paramsCastId, API) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${paramsCastId}/credits?api_key=${API}&language=en-US&page=1`
  );
};

export const getRew = (paramsRewId, API) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${paramsRewId}/reviews?api_key=${API}&language=en-US&page=1`
  );
};
