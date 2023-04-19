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
  const [totalPages, setTotalPages] = useState(0);
  const [movies, setMovies] = useState([]);
  const [sortedMovies, setSortedMovies] = useState([]);
  // const [filteredMovies, setFilteredMovies] = useState([]);


  useEffect(() => {
    getMovies(currPage);
    setMovies(movieData && movieData[currPage] && movieData[currPage].movies ? movieData[currPage].movies: []);
    setTotalPages(movieData && movieData[currPage] && movieData[currPage].totalPages
              ? movieData[currPage].totalPages
              : 1);
    setSortedMovies(movies);
  }, [currPage, movies]);


  const handleSort = (sortType) => {
    const sortedMovies = [...movies].sort((a, b) => {
      let aValue = a[sortType];
      let bValue = b[sortType];

      if (typeof aValue === "string") {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (aValue < bValue) {
        return 1;
      }

      if (aValue > bValue) {
        return -1;
      }

      return 0;
    });
    setSortedMovies(sortedMovies);
  };

  // function handleFilter(movies) {
  //   let storeFilteredMovies = [];
  //   if (movies) {
  //     storeFilteredMovies = movies.filter(
  //       (movie) =>
  //         !blockedMovies.some((blockedMovie) => blockedMovie.id === movie.id)
  //     );
  //   }
  //   setFilteredMovies(storeFilteredMovies);
  // }


  return (
    <div>
      <h1>Our Most Popular Movies!</h1>
      <Pagination
        totalPages={totalPages}
        currentPage={currPage}
        setCurrentPage={setCurrPage}
      />
      <SortBar handleSort={handleSort} />
      <div className="list-of-movies">
        {sortedMovies?.filter(
        (movie) =>
          !blockedMovies.some((blockedMovie) => blockedMovie.id === movie.id)
        ).map((movie) => (
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
    getMovies: (page) => dispatch(getMovies(page)),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(MovieList);
