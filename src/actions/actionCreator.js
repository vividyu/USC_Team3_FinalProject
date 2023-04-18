import {
  LIKE_MOVIE,
  BLOCK_MOVIE,
  DELETE_LIKED_MOVIE,
  UNBLOCK_MOVIE,
  STROE_MOVIE_DATA,
  EXPAND_MOVIE_DATA,
} from "./actionConstants";

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
})


