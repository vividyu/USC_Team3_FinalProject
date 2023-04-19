import React from "react";
import "./MovieDetail.css";

function MovieDetail({ movie, onClose }) {
    return (
        <div className="movie-detail-container">
            <button className="close-button" onClick={onClose}>X</button>
            <img
                src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
            />
            <div className="movie-overview">{movie.overview}</div>
        </div>
    );
}

export default MovieDetail;
