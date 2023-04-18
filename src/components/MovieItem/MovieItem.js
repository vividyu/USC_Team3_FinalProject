import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  likeMovie,
  blockMovie,
  deleteLikedMovie,
} from "../../actions/actionCreator";

function MovieItem({ movie }) {
  console.log(movie);
  const dispatch = useDispatch();
  const likedMovies = useSelector((state) => state.likedMovies);

  const handleLike = () => {
    dispatch(likeMovie(movie));
  };

  const isMovieLiked = () => {
    return likedMovies.some((likedMovie) => likedMovie.id === movie.id);
  };

  const handleBlock = () => {
    dispatch(blockMovie(movie));
    if (isMovieLiked()) {
      dispatch(deleteLikedMovie(movie.id));
    }
  };

  return (
    <div className="movie-item-container">
      <img
        src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-ttile">{movie.title}</div>
      <div className="movie-btns">
        <button disabled={isMovieLiked()} onClick={handleLike}>
          {isMovieLiked() ? "Liked" : "Like"}
        </button>
        <button onClick={handleBlock}>Block</button>
      </div>
      <div className="vote-score">
        <span>Vote count: </span> | <span>Average score:</span>
      </div>
      <div className="movie-summary">movie-summary</div>
    </div>
  );
}

export default MovieItem;
