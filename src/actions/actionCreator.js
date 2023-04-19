import {
  LIKE_MOVIE,
  BLOCK_MOVIE,
  DELETE_LIKED_MOVIE,
  UNBLOCK_MOVIE,
  STROE_MOVIE_DATA,
  EXPAND_MOVIE_DATA,
  STORE_MOVIE_DETAILS,
} from "./actionConstants";

import axios from "axios";
import { API_KEY_V3 } from "../constants";
import { handleSort } from "../helpers";

export const likeMovie = (movie) => ({
  type: LIKE_MOVIE,
  payload: movie,
});

export const blockMovie = (movie) => ({
  type: BLOCK_MOVIE,
  payload: movie,
});

export const deleteLikedMovie = (movieId) => ({
  type: DELETE_LIKED_MOVIE,
  payload: movieId,
});

export const unblockMovie = (movieId) => ({
  type: UNBLOCK_MOVIE,
  payload: movieId,
});

export const storeMovieData = (page, movies, totalPages) => ({
  type: STROE_MOVIE_DATA,
  payload: { page, movies, totalPages },
});

export const expandMovieData = (movieId) => ({
  type: EXPAND_MOVIE_DATA,
  payload: movieId,
});

export const storeMovieDetails = (movieDetails) => ({
  type: STORE_MOVIE_DETAILS,
  payload: movieDetails,
});

export const getMovies = (page, sortWord) => {
  return async (dispatch, getState) => {

    const movieData = getState().movieData;

    if (movieData[page]) {
      return;
    }

    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&` + `&page=${page}` + `&api_key=${API_KEY_V3}`
    );

    dispatch(
      storeMovieData(page, response.data.results, response.data.total_pages)
    );
  };
};

export const getMovieDetails = (movie_id) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY_V3}&language=en-US`
    );
    dispatch(storeMovieDetails(response.data));
  };
};
