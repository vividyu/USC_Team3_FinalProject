const API_KEY_V3 = "2f39ac8abf607fbbc583ce393c0f56f3";
const BASE_URL = "https://api.themoviedb.org/3";
const POPULARITY_API_URL =
  BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY_V3;
const CONFIG_URL = `https://api.themoviedb.org/3/configuration?api_key=${API_KEY_V3}`;

const LIKE_MOVIE = "LIKE_MOVIE";
const BLOCK_MOVIE = "BLOCK_MOVIE";

export default {
  API_KEY_V3,
  BASE_URL,
  POPULARITY_API_URL,
  CONFIG_URL,
  LIKE_MOVIE,
  BLOCK_MOVIE,
};
