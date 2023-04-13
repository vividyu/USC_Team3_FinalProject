import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SlideMenu from "./components/SlideMenu/SlideMenu";
import HomePage from "./components/HomePage/HomePage";
import MovieList from "./components/MovieList/MovieList";
import MovieListLiked from "./components/MovieListLiked/MovieListLiked";
import MovieListBlocked from "./components/MovieListBlocked/MovieListBlocked";



function App() {

  let preLoadimageList;

  return (
    <Router>
      <div className="App">
        <SlideMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie-list" element={<MovieList />} />
          <Route path="/movie-list-liked" element={<MovieListLiked />} />
          <Route path="/movie-list-blocked" element={<MovieListBlocked />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

