import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../storage/logo.png";
import Login from "./Login";

const Header = ({ userEmail }) => {
  const [popUp, setPopUp] = useState(false);
  const togglePopUp = () => {
    setPopUp((popUp) => (popUp = !popUp));
  };

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
          {userEmail ? (
            <div className="logged-in">
              <NavLink to="/addpost" id="login-signup">
                ADD POST
              </NavLink>
            </div>
          ) : null}
        </div>

        <div className="auth">
          {userEmail ? (
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
    userEmail: state.user.email,
  };
};

export default connect(mapStatetoProps)(Header);
