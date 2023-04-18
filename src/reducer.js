import Actions from "./actions/actionConstants";
import initialState from "./store";

function reducer(state = initialState, action) {
  switch (action.type) {
    case Actions.LIKE_MOVIE:
      return { ...state, likedMovies: [...state.likedMovies, action.payload] };

    case Actions.BLOCK_MOVIE:
      return {
        ...state,
        blockedMovies: [...state.blockedMovies, action.payload],
      };

    case Actions.DELETE_LIKED_MOVIE:
      return {
        ...state,
        likedMovies: state.likedMovies.filter(
          (movie) => movie.id !== action.payload
        ),
      };

    case Actions.UNBLOCK_MOVIE:
      return {
        ...state,
        blockedMovies: state.blockedMovies.filter(
          (movie) => movie.id !== action.payload
        ),
      };

    case Actions.STROE_MOVIE_DATA:
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
