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
    <span className="hamburger" onClick={displaySideBar}>
    <div className="line"></div>
    <div className="line"></div>
    <div className="line"></div>
  </span>
      
        {sidebar ? (
          <nav className="navbar">
        
          <ul className="nav-tabs">
          <li>
          <NavLink  to="/" onClick={displaySideBar}>HOME</NavLink>
          </li>
            <li id="news-nav">
              <NavLink to="/news" onClick={displaySideBar}>NEWS</NavLink>
            </li>
            <li id="reviews-nav">
              <NavLink to="/reviews" onClick={displaySideBar}>REVIEWS</NavLink>
            </li>
            <li id="podcast-nav">
              <a href="https://anchor.fm/checkpod">PODCAST</a>
            </li>

            {userName ? (
              <div className="logged-in">
                <a href="/" id="login-signup">
                  SIGN OUT
                </a>
              </div>
            ) : (
          
              <button style={{display:"none"}} id="login-nav" onClick={togglePopUp}>
                SIGN IN
              </button>)}

              {userName ? (
                <div className="logged-in">
                  <NavLink to="/addpost" id="login-signup">
                    ADD POST
                  </NavLink>
                </div>
              ) : null}
              
           
          </ul>
          </nav>
        ) : null}
      
      <header>
        <NavLink to="/">
          <img id="logo" alt="logo" src={logo}></img>
        </NavLink>

        <div className="tabs">
          <NavLink activeClassName="selected" to="/news" id="blog">
            NEWS
          </NavLink>
          <NavLink activeClassName="selected" to="/reviews" id="reviews">
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
            <button style={{display:"none"}} id="login-signup" onClick={togglePopUp}>
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
