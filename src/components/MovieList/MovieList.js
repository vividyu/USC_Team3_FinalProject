import React, { useEffect } from "react";
import { useState } from "react";
import SortBar from "../SortBar/SortBar";
import MovieItem from "../MovieItem/MovieItem";
import Pagination from "../Pagination/Pagination";
import { connect } from "react-redux";
import { getMovies } from "../../actions/actionCreator";
import "./MovieList.css";

const MovieList = ({ movieData, blockedMovies, getMovies }) => {
  const [currPage, setCurrPage] = useState(1);

  // default to popularity
  const [sortWord, setSortWord] = useState("default");

  useEffect(() => {
    getMovies(currPage, sortWord);
  }, [currPage, getMovies, sortWord]);

  const totalPages =
    movieData && movieData[currPage] && movieData[currPage].totalPages
      ? movieData[currPage].totalPages
      : 1;
  let filteredMovies = [];

  if (movieData && movieData[currPage] && movieData[currPage].movies) {
    filteredMovies = movieData[currPage].movies.filter(
      (movie) =>
        !blockedMovies.some((blockedMovie) => blockedMovie.id === movie.id)
    );
  }

  return (
    <div>
      <h1>Our Most Popular Movies!</h1>
      <Pagination
        totalPages={totalPages}
        currentPage={currPage}
        setCurrentPage={setCurrPage}
      />
      <SortBar setSortWord={setSortWord} setCurrPage={setCurrPage} />
      <div className="list-of-movies">
        {filteredMovies?.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movieData: state.movieData,
  blockedMovies: state.blockedMovies,
});

const mapDispatchtoProps = (dispatch) => {
  return {
    getMovies: (page, sortWord) => dispatch(getMovies(page, sortWord)),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(MovieList);
