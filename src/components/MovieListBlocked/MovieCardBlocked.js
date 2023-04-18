import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { likeMovie, unblockMovie, expandMovieData } from '../../actions/actionCreator'

const BlockedMovieCard = ({ movie }) => {
  const [isMouseOver, setIsMouseOver] =useState(false);
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseOut = () => {
    setIsMouseOver(false);
  };

  const handleLike = (movie) => {
    dispatch(likeMovie(movie))
  };

  const handleRemove = (movie) => {
    dispatch(unblockMovie(movie))
  };

  const handleExpand = (movie) => {
    dispatch(expandMovieData(movie))
  };

  return (
    <div
    className="blocked-movie-card"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseOut}>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.Title} />
      {isMouseOver && (
        <div className="blocked-card-button">
          <button onClick={() => {handleLike(movie)}}>like</button>
          <button onClick={() => {handleRemove(movie)}}>remove</button>
          <button onClick={() => {handleExpand(movie)}}>...</button>
        </div>
      )}
    </div>
  )
};

export default BlockedMovieCard;