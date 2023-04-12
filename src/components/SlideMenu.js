import { useState, useEffect } from "react";
//import { CSSTransition } from "react-transition-group";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./SlideMenu.scss";

const SlideMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
    setShowMenu(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`slide-menu${showMenu ? " show" : ""}`}>
      <a
        href="/"
        className={isActive("/") ? "active" : ""}
        onClick={(e) => {
          e.preventDefault();
          handleNavigation("/");
        }}
      >
        Home Page
      </a>
      <a
        href="/movie-list"
        className={isActive("/movie-list") ? "active" : ""}
        onClick={(e) => {
          e.preventDefault();
          handleNavigation("/movie-list");
        }}
      >
        Movie List
      </a>
      <a
        href="/movie-list-liked"
        className={isActive("/movie-list-liked") ? "active" : ""}
        onClick={(e) => {
          e.preventDefault();
          handleNavigation("/movie-list-liked");
        }}
      >
        Movie List of Liked
      </a>
      <a
        href="/movie-list-blocked"
        className={isActive("/movie-list-blocked") ? "active" : ""}
        onClick={(e) => {
          e.preventDefault();
          handleNavigation("/movie-list-blocked");
        }}
      >
        Movie List of Blocked
      </a>
    </nav>
  );
};


export default SlideMenu;
