import React, { useEffect } from "react";
import { useState } from "react";
import SortBar from "../SortBar/SortBar";
import MovieItem from "../MovieItem/MovieItem";
import Pagination from "../Pagination/Pagination";
import { connect } from "react-redux";
import { getMovies } from "../../actions/actionCreator";

const MovieList = ({ movieData, blockedMovies, getMovies }) => {
  const [currPage, setCurrPage] = useState(1);

  // default to popularity
  const [sortWord, setSortWord] = useState("default");

  useEffect(() => {
    getMovies(currPage, sortWord);
  }, [currPage, getMovies, sortWord]);

  const totalPages = movieData?.[currPage]?.totalPages || 1;
  const filteredMovies = movieData?.[currPage]?.movies.filter(
    (movie) =>
      !blockedMovies.some((blockedMovie) => blockedMovie.id === movie.id)
  );

  return (
    <div>
      <h1>Movie List</h1>
      <Pagination
        totalPages={totalPages}
        currentPage={currPage}
        setCurrentPage={setCurrPage}
      />
      <SortBar setSortWord={setSortWord} setCurrPage={setCurrPage} />
      {filteredMovies?.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
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
