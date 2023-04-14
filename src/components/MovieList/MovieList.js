import React, { useEffect } from "react";
import { useState } from "react";
import {POPULARITY_API_URL,
        TITLE_API_URL,
        VOTE_COUNT_API_URL,
        RELEASE_DATE_API_URL,
        VOTE_AVERAGE_API_URL} from '../../constants'

const MovieList = () => {

  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // default to popularity
  const [sortWord, setSortWord] = useState('default');

  function handleSort(str) {
    if (str === 'release date') {
      return RELEASE_DATE_API_URL;
    } else if (str === 'title') {
      return TITLE_API_URL;
    } else if (str === 'vote count') {
      return VOTE_COUNT_API_URL;
    } else if (str === 'vote average') {
      return VOTE_AVERAGE_API_URL;
    } else {
      return POPULARITY_API_URL;
    }
  }

  useEffect(() => {
    getMovies(currPage);
  }, [currPage, sortWord])

  const getMovies = async (page) => {
    const response = await axios.get(handleSort(sortWord) + `&page=${page}`);
    setMovies(response.data.results);
    setTotalPages(response.data.total_pages);
  };


  return (
    <div>
      <h1>Movie List</h1>
      <p>{movies}</p>
    </div>
  );
};

export default MovieList;
