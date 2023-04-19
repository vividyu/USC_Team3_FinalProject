import React from "react";
import { connect } from "react-redux";
import LikedMovieCard from "./MovieCardLiked";
import "./LikedMovieList.scss";

const MovieListLiked = ({ likedMovies }) => {
  return (
    <div>
      <h1>Movie List of Liked</h1>
      <div className="liked-movie-list">
        {likedMovies
          ? likedMovies.map((movie, index) => (
              <LikedMovieCard key={index} movie={movie} />
            ))
          : []}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  likedMovies: state.likedMovies,
});
export default connect(mapStateToProps)(MovieListLiked);
