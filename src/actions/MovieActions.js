import { LIKE, BLOCK, DELETE, EXPAND } from './TypesOfActions';

export const createLikeMovie = (movie) => ({
  type: LIKE,
  payload: movie,
});

export const createBlockMovie = (movie) => ({
  type: BLOCK,
  payload: movie,
});

export const createDeleteMovie = (movie) => ({
  type: DELETE,
  payload: movie,
});

export const createExpandMovie = (movie) => ({
  type: EXPAND,
  payload: movie,
});
