import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import MovieList from "./components/MovieList/MovieList";
import MovieListLiked from "./components/MovieListLiked/MovieListLiked";
import MovieListBlocked from "./components/MovieListBlocked/MovieListBlocked";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie-list" element={<MovieList key="movie-list" />} />
          <Route
            path="/movie-list-liked"
            element={<MovieListLiked key="movie-list-liked" />}
          />
          <Route
            path="/movie-list-blocked"
            element={<MovieListBlocked key="movie-list-blocked" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
