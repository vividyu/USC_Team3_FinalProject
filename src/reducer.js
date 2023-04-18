import {
  LIKE_MOVIE,
  BLOCK_MOVIE,
  DELETE_LIKED_MOVIE,
  UNBLOCK_MOVIE,
  STROE_MOVIE_DATA,
} from "./actions/actionConstants";
import initialState from "./store";

function reducer(state = initialState, action) {
  switch (action.type) {
    case LIKE_MOVIE:
      return { ...state, likedMovies: [...state.likedMovies, action.payload] };

    case BLOCK_MOVIE:
      return {
        ...state,
        blockedMovies: [...state.blockedMovies, action.payload],
      };

    case DELETE_LIKED_MOVIE:
      return {
        ...state,
        likedMovies: state.likedMovies.filter(
          (movie) => movie.id !== action.payload
        ),
      };

    case UNBLOCK_MOVIE:
      return {
        ...state,
        blockedMovies: state.blockedMovies.filter(
          (movie) => movie.id !== action.payload
        ),
      };

    case STROE_MOVIE_DATA:
      return {
        ...state,
        movieData: {
          ...state.movieData,
          [action.payload.page]: {
            movies: action.payload.movies,
            totalPages: action.payload.totalPages,
          },
        },
      };
    default:
      return state;
  }
}

export default reducer;
