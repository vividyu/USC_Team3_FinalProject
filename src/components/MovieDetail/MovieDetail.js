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

  console.log(movieDetails);
  const genreArr = movieDetails.genres;

  return (
    <div className="movie-detail-container">
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <div className="movie-detail-backdrop-container">
        <div className="overlay"></div>
        <img className="movie-detail-backdrop"
          src={`http://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`}
        />

        <img className="movie-detail-poster"
          src={`http://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        />
        <div className="movie-detail-text-container">
          <div className="movie-detail-original-title">{movieDetails.original_title}</div>
          <ul className="movie-detail-genre">
            {genreArr.map((genre, index) => (
              <li key={index}>{genre.name}</li>
            ))}
          </ul>
          <div className="movie-overview">{movieDetails.overview}</div>
        </div>

      </div>

    </div>
  );
}

const mapStateToProps = (state) => ({
  movieDetails: state.movieDetails,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getMovieDetails }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
