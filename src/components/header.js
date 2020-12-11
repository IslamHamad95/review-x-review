import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../storage/logo.png";
import Login from "./Login";

const Header = ({ userName }) => {
  const [popUp, setPopUp] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const togglePopUp = () => {
    setPopUp((popUp) => (popUp = !popUp));
  };

  const displaySideBar = () => {
    setSidebar(sidebar=>(sidebar = !sidebar));
  };

  return (
    <div>
    <span className="open-slide" onClick={displaySideBar}>
    
      <svg width="50" height="40">
        <path d="M0,10 50,10" stroke="#fff" strokeWidth="7" />
        <path d="M0,25 50,25" stroke="#fff" strokeWidth="7" />
        <path d="M0,40 50,40" stroke="#fff" strokeWidth="7" />
      </svg>
  </span>
      
        {sidebar ? (
          <nav className="navbar">
          <ul className="nav-tabs">
          <li>
          <NavLink to="/">Home</NavLink>
          </li>
            <li id="news-nav">
              <NavLink to="/news">News</NavLink>
            </li>
            <li id="reviews-nav">
              <NavLink to="/reviews">REVIEWS</NavLink>
            </li>
            <li id="podcast-nav">
              <a href="https://anchor.fm/checkpod">PODCAST</a>
            </li>
          
              <button id="login-nav" onClick={togglePopUp}>
                SIGN IN
              </button>

              
           
          </ul>
          </nav>
        ) : null}
      
      <header>
        <NavLink to="/">
          <img id="logo" alt="logo" src={logo}></img>
        </NavLink>

        <div className="tabs">
          <NavLink to="/news" id="blog">
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
          {userName ? (
            <div className="logged-in">
              <NavLink to="/addpost" id="login-signup">
                ADD POST
              </NavLink>
            </div>
          ) : null}
        </div>

        <div className="auth">
          {userName ? (
            <div className="logged-in">
              <a href="/" id="login-signup">
                SIGN OUT
              </a>
            </div>
          ) : (
            <button id="login-signup" onClick={togglePopUp}>
              SIGN IN
            </button>
          )}
        </div>
      </header>
      {popUp ? <Login popUpFun={togglePopUp} /> : null}
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    userName: state.user.userName,
  };
};

export default connect(mapStatetoProps)(Header);
