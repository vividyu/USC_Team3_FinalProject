import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { deleteLikedMovie, blockMovie, expandMovieData } from '../../actions/actionCreator'

const BlockedMovieCard = ({ movie }) => {
  const [isMouseOver, setIsMouseOver] =useState(false);
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseOut = () => {
    setIsMouseOver(false);
  };

  const handleRemoveLiked = (movie) => {
    dispatch(deleteLikedMovie(movie))
  };

  const handleBlockLiked = (movie) => {
    dispatch(blockMovie(movie))
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
          <button onClick={() => {handleRemoveLiked(movie)}}>like</button>
          <button onClick={() => {handleBlockLiked(movie)}}>remove</button>
          <button onClick={() => {handleExpand(movie)}}>...</button>
        </div>
      )}
    </div>
  )
};

export default BlockedMovieCard;