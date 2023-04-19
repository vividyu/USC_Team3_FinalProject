import React from "react";
import { connect } from "react-redux";
import BlockedMovieCard from "./MovieCardBlocked";
import "./BlockedMovieList.scss";

const MovieListBlocked = ({ blockedMovies }) => {
  return (
    <div>
      <h1>Movie List of Blocked</h1>
      <div className="blocked-movie-list">
        {blockedMovies
          ? blockedMovies.map((movie, index) => (
              <BlockedMovieCard key={index} movie={movie} />
            ))
          : []}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  blockedMovies: state.blockedMovies,
});
export default connect(mapStateToProps)(MovieListBlocked);
