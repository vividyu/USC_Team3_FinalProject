import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  likeMovie,
  unblockMovie,
  expandMovieData,
} from "../../actions/actionCreator";
import "./BlockedMovieCard.scss";
import PropTypes from 'prop-types';

const BlockedMovieCard = ({ movie, setExpandMovie }) => {
  
  const [isMouseOver, setIsMouseOver] = useState(false);
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseOut = () => {
    setIsMouseOver(false);
  };

  const handleLike = (movie) => {
    dispatch(likeMovie(movie));
    dispatch(unblockMovie(movie));
  };

  const handleUnblock = (movie) => {
    dispatch(unblockMovie(movie));
  };

  const handleExpand = (movie) => {
    // dispatch(expandMovieData(movie));
    setExpandMovie(movie);
  };

  return (
    <div
      className="blocked-movie-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseOut}
    >
      <img
        src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.Title}
      />
      {isMouseOver && (
        <div className="blocked-card-button">
          <button
            onClick={() => {
              handleLike(movie);
            }}
          >
            like
          </button>
          <button
            onClick={() => {
              handleUnblock(movie);
            }}
          >
            remove
          </button>
          <button
            onClick={() => {
              handleExpand(movie);
            }}
          >
            ...
          </button>
        </div>
      )}
    </div>
  );
};

BlockedMovieCard.propTypes = {
  movie:PropTypes.object.isRequired,
  setExpandMovie:PropTypes.func.isRequired,
};

export default BlockedMovieCard;
