import React from "react";
import LikedMovieCard from "./MovieCardLiked";

const MovieListLiked = ({movies}) => {
  return (
    <div>
      <h1>Movie List of Blocked</h1>
      <div className="blocked-movie-list">
        {movies ? movies.map((movie, index) => (
        <LikedMovieCard key={index} movie={movie} />
        )) : []}
      </div>
      
    </div>
  );
};

export default MovieListLiked;
