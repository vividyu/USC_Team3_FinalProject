import {
  LIKE_MOVIE,
  BLOCK_MOVIE,
  DELETE_LIKED_MOVIE,
  UNBLOCK_MOVIE,
  STROE_MOVIE_DATA,
} from "./actionConstants";

const likeMovie = (movie) => ({
  type: LIKE_MOVIE,
  payload: movie,
});

const blockMoive = (movie) => ({
  type: BLOCK_MOVIE,
  payload: movie,
});

const deleteLikedMovie = (movieId) => ({
  type: DELETE_LIKED_MOVIE,
  payload: movieId,
});

const unblockMovie = (movieId) => ({
  type: UNBLOCK_MOVIE,
  payload: movieId,
});

const storeMovieData = (page, movies, totalPages) => ({
  type: STROE_MOVIE_DATA,
  payload: { page, movies, totalPages },
});

export const actions = {
  likeMovie,
  blockMoive,
  deleteLikedMovie,
  unblockMovie,
  storeMovieData,
};
