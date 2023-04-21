import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  likeMovie,
  blockMovie,
  deleteLikedMovie,
} from "../../actions/actionCreator";
import "./MovieItem.css";

function MovieItem({ movie }) {
  // console.log(movie);
  const dispatch = useDispatch();
  const likedMovies = useSelector((state) => state.likedMovies);

  const handleLike = () => {
    dispatch(likeMovie(movie));
  };

  const isMovieLiked = () => {
    return likedMovies.some((likedMovie) => likedMovie.id === movie.id);
  };
  // console.log(likedMovies);

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
      <div className="movie-btns">
        <button
          className="btn like"
          disabled={isMovieLiked()}
          onClick={handleLike}
        >
          {isMovieLiked() ? "Liked" : "Like"}
        </button>
        <button className="btn block" onClick={handleBlock}>
          Block
        </button>
      </div>
      <div className="movie-title">{movie.title}</div>
      <div className="release">Release Date: {movie.release_date}</div>
      <div className="vote-score">
        <span>Vote count: {movie.vote_count} </span> |{" "}
        <span>Average score: {movie.vote_average}</span>
      </div>
      <div className="movie-item-overview">{movie.overview}</div>
    </div>
  );
}

export default MovieItem;
