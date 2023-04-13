import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./SlideMenu.scss";

const SlideMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.clientX < 50 && !showMenu) {
        setShowMenu(true);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [showMenu]);

  const handleNavigation = (path) => {
    navigate(path);
    setShowMenu(false);
  };

  const isActive = (path) => location.pathname === path;

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav
      className={`slide-menu${showMenu ? " show" : ""}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering && (
        <div className="close-button" onClick={handleCloseMenu}>
          &times;
        </div>
      )}
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
