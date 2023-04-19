import {
  LIKE_MOVIE,
  BLOCK_MOVIE,
  DELETE_LIKED_MOVIE,
  UNBLOCK_MOVIE,
  STROE_MOVIE_DATA,
  EXPAND_MOVIE_DATA,
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

export const getMovies = (page, sortWord) => {
  return async (dispatch, getState) => {

    const movieData = getState().movieData;

    if (movieData[page]) {
      return;
    }

    const response = await axios.get(
      handleSort(sortWord) + `&page=${page}` + `&api_key=${API_KEY_V3}`
    );
    dispatch(
      storeMovieData(page, response.data.results, response.data.total_pages)
    );
  };
};
