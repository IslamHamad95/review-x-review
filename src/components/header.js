import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../storage/logo.png";

const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <img id="logo" alt="logo" src={logo}></img>
      </NavLink>

      <div className="tabs">
        <NavLink to="/Blog" id="blog">
          NEWS
        </NavLink>
        <NavLink to="/reviews" id="reviews">
        REVIEWS
      </NavLink>
      <a href="https://anchor.fm/checkpod" rel="noreferrer" target="_blank" id="podcast">
      PODCAST
    </a>
      </div>

      <div className="auth">
        <NavLink to="/login" id="login-signup">
          Login/Sign Up
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
