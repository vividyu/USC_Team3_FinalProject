import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import axios from "axios";
import KEY_URLS from "../../constants";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  const fetchMovies = async (page) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=${page}&api_key=2f39ac8abf607fbbc583ce393c0f56f3`
    );
    console.log(response);
    setMovies(response.data.results);
    setTotalPages(response.data.total_pages);
  };

  return (
    <div>
      <h1>Movie List</h1>
      <div className="movie-list"></div>
    </div>
  );
};

export default MovieList;
