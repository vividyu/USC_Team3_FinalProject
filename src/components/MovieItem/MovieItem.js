import React from "react";

function MovieItem() {
  return (
    <div className="movie-item-container">
      <img src="#" alt="movie-title" />
      <div className="movie-ttile">movie-title</div>
      <div className="movie-btns">
        <button>Like</button>
        <button>Block</button>
      </div>
      <div className="vote-score">
        <span>Vote count: </span> | <span>Average score:</span>
      </div>
      <div className="movie-summary">movie-summary</div>
    </div>
  );
}

export default MovieItem;
