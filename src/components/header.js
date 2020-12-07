import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../storage/logo.png";
import Login from "./Login";

const Header = () => {
  const [popUp, setPopUp] = useState(false);
  const togglePopUp = () => {
    setPopUp(popUp=>popUp=!popUp);
  };
  console.log(popUp);
  return (
    <div>
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
          <a
            href="https://anchor.fm/checkpod"
            rel="noreferrer"
            target="_blank"
            id="podcast"
          >
            PODCAST
          </a>
        </div>

        <div className="auth">
          <button id="login-signup" onClick={togglePopUp}>
            Login/Sign Up
          </button>
        </div>
      </header>
      {
        popUp? <Login popUpFun={togglePopUp}/>:null
        
      }
      
    </div>
  );
};

export default Header;
