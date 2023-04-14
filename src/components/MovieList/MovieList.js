import React from "react";
import { useState } from "react";

const MovieList = () => {

  // default to popularity
  const [sort, currSort] = useState('default');

  return (
    <div>
      <h1>Movie List</h1>
    </div>
  );
};

export default MovieList;
