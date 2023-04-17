import React from "react";
import BlockedMovieCard from "./MovieCardBlocked";

const MovieListBlocked = ({movies}) => {
  return (
    <div>
      <h1>Movie List of Blocked</h1>
      <div className="blocked-movie-list">
        {movies ? movies.map((movie, index) => (
        <BlockedMovieCard key={index} movie={movie} />
        )) : []}
      </div>
      
    </div>
  );
};

export default MovieListBlocked;
