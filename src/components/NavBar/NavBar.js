import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link className="nav-link" to="/">Home Page</Link>
      <Link className="nav-link" to="/movie-list">Movie List</Link>
      <Link className="nav-link" to="/movie-list-liked">Movie List of Liked</Link>
      <Link className="nav-link" to="/movie-list-blocked">Movie List of Blocked</Link>
    </nav>
  );
};

export default NavBar;
