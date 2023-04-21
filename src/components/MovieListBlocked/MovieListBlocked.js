import React, { useState } from "react";
import { connect } from "react-redux";
import BlockedMovieCard from "./MovieCardBlocked";
import MovieDetail from "../MovieDetail/MovieDetail";
import PropTypes from 'prop-types';

import "./BlockedMovieList.scss";

const MovieListBlocked = ({ blockedMovies }) => {
  const [expandMovie, setExpandMovie] = useState(null);

  const handleCloseMovieDetail = () => {
    setExpandMovie(null);
  };

  return (
    <div>
      <h1>Movie List of Blocked</h1>
      <div className="blocked-movie-list">
        {blockedMovies
          ? blockedMovies.map((movie, index) => (
              <BlockedMovieCard key={index} movie={movie} setExpandMovie={setExpandMovie} />
            ))
          : []}
        
        {expandMovie && (
          <MovieDetail movie={expandMovie} onClose={handleCloseMovieDetail} />
        )}
      </div>
    </div>
  );
};

MovieListBlocked.PropTypes = {
  blockedMovies:PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  blockedMovies: state.blockedMovies,
});
export default connect(mapStateToProps)(MovieListBlocked);
