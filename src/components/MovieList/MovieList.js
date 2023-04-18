import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import {
  POPULARITY_API_URL,
  TITLE_API_URL,
  VOTE_COUNT_API_URL,
  RELEASE_DATE_API_URL,
  VOTE_AVERAGE_API_URL,
  API_KEY_V3,
} from "../../constants";
import SortBar from "../SortBar/SortBar";

import MovieItem from "../MovieItem/MovieItem";
import Pagination from "../Pagination/Pagination";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // default to popularity
  const [sortWord, setSortWord] = useState("default");

  function handleSort(str) {
    if (str === "release date") {
      return RELEASE_DATE_API_URL;
    } else if (str === "title") {
      return TITLE_API_URL;
    } else if (str === "vote count") {
      return VOTE_COUNT_API_URL;
    } else if (str === "vote average") {
      return VOTE_AVERAGE_API_URL;
    } else {
      return POPULARITY_API_URL;
    }
  }

  useEffect(() => {
    getMovies(currPage);
    console.log(movies);
  }, [currPage, sortWord]);

  const getMovies = async (page) => {
    const response = await axios.get(
      handleSort(sortWord) + `&page=${page}` + `&api_key=${API_KEY_V3}`
    );
    setMovies(response.data.results);
    setTotalPages(response.data.total_pages);
  };

  return (
    <div>
      <h1>Movie List</h1>
      <SortBar setSortWord={setSortWord} setCurrPage={setCurrPage} />
      <Pagination totalPages={totalPages} setCurrentPage={setCurrPage} />
      <MovieItem />
    </div>
  );
};

export default MovieList;
