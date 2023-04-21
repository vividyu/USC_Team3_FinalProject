import React, { useState } from "react";
import { connect } from "react-redux";
import LikedMovieCard from "./MovieCardLiked";
import "./LikedMovieList.scss";
import MovieDetail from "../MovieDetail/MovieDetail";
import PropTypes from 'prop-types';

const MovieListLiked = ({ likedMovies }) => {
  const [expandedMovie, setExpandedMovie] = useState(null);

  const handleCloseMovieDetail = () => {
    setExpandedMovie(null);
  };

  return (
    <div>
      <h1>Movie List of Liked</h1>
      <div className="liked-movie-list">
        {likedMovies
          ? likedMovies.map((movie, index) => (
            <LikedMovieCard key={index} movie={movie} setExpandedMovie={setExpandedMovie} />
          ))
          : []}

        {expandedMovie && (
          <MovieDetail movie={expandedMovie} onClose={handleCloseMovieDetail} />
        )}

      </div>
    </div>
  );
};

MovieListLiked.propTypes = {
  likedMovies: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  likedMovies: state.likedMovies,
});
export default connect(mapStateToProps)(MovieListLiked);
