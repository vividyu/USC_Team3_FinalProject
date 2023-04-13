import React from "react";

function MovieItem() {
  const likeMovie = () => {};

  const blockedMovie = () => {};

  return (
    <div className="movie-item-container">
      <img className="movie-img" src="" alt="movie-title"></img>
      <button className="btn-like" onClick={likeMovie}>
        Like
      </button>
      <button className="btn-block" onClick={blockedMovie}>
        Block
      </button>
      <div className="movie-title">title</div>
      <div className="movie-release-date">release-date</div>
      <div className="count-and-score">
        <span>Vote count:</span> | <span>Avergae Score: </span>
      </div>
      <p className="movie-overview">Overview</p>
    </div>
  );
}

export default MovieItem;
