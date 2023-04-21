import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteLikedMovie,
  blockMovie,
  expandMovieData,
} from "../../actions/actionCreator";
import "./LikedMovieCard.scss";
import PropTypes from 'prop-types';

const LikedMovieCard = ({ movie, setExpandedMovie }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseOut = () => {
    setIsMouseOver(false);
  };

  const handleRemoveLiked = (movie) => {
    dispatch(deleteLikedMovie(movie));
  };

  const handleBlockLiked = (movie) => {
    dispatch(blockMovie(movie));
  };

  const handleExpand = (movie) => {
    //dispatch(expandMovieData(movie));
    setExpandedMovie(movie);
  };

  return (
    <div
      className="liked-movie-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseOut}
    >
      <img
        src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.Title}
      />
      {isMouseOver && (
        <div className="liked-card-button">
          <button
            onClick={() => {
              handleRemoveLiked(movie);
            }}
          >
            unlike
          </button>
          <button
            onClick={() => {
              handleBlockLiked(movie);
            }}
          >
            block
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


LikedMovieCard.propTypes = {
  movie:PropTypes.object.isRequired,
  setExpandedMovie:PropTypes.func.isRequired,
};

export default LikedMovieCard;
