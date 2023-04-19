import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getMovieDetails } from "../../actions/actionCreator";
import "./MovieDetail.css";

function MovieDetail({ movie, onClose, movieDetails, getMovieDetails }) {
  useEffect(() => {
    getMovieDetails(movie.id);
  }, [getMovieDetails, movie.id]);

  if (!movieDetails) {
    return null;
  }

  //console.log(movieDetails);

  return (
    <div className="movie-detail-container">
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <img
        src={`http://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`}
        alt={movieDetails.title}
      />
      <div className="movie-overview">{movieDetails.overview}</div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  movieDetails: state.movieDetails,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getMovieDetails }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
