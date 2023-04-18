import React, { useEffect } from "react";
import { useState } from "react";
import SortBar from "../SortBar/SortBar";
import { connect } from "react-redux";
import MovieItem from "../MovieItem/MovieItem";
import * as actions from "../../actions/actionCreator";
import { useSelector } from "react-redux";
import "./MovieList.css";

const MovieList = ({ getMovies, movieData }) => {
  const [currPage, setCurrPage] = useState(1);

  // default to popularity
  const [sortWord, setSortWord] = useState("default");

  useEffect(() => {
    getMovies(currPage);
  }, [currPage, getMovies, sortWord]);

  const blockedMovies = useSelector((state) => state.blockedMovies);
  const filteredMovies = movieData?.[currPage]?.movies.filter(
    (movie) =>
      !blockedMovies.some((blockedMovie) => blockedMovie.id === movie.id)
  );
  return (
    <div className="movie-list-content">
      <h1>Our Most Popular Movies !</h1>
      {/* <Pagination /> */}
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
});

const mapDispatchtoProps = (dispatch) => {
  return {
    getMovies: (page, sortWord) => dispatch(actions.getMovies(page, sortWord)),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(MovieList);
