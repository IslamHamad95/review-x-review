import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

const Login = () => {
  const [isLoggdIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    id: "",
    name: "",
  });

  let fbContent;

  const componentClicked = () => {
    console.log("clicked");
  };

  const responseFacebook = (response) => {
    setIsLoggedIn({ isLoggdIn: true });
    setUser({
      ...user,
      id: response.id,
      name: response.name,
    });
  };

  if (isLoggdIn) {
    fbContent = <h2 style={{ background: "inherit" }}>Welcome {user.name}</h2>;
  } else {
    fbContent = (
      <FacebookLogin
        appId="401647564370425"
        autoLoad={true}
        fields="name"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    );
  }

  return (
    <div className="login-signup-box">
      <section className="login">
        <h1>WELCOME BACK!</h1>
        <div className="login-form">
          <label>Email: </label>
          <input id="email" type="email" />
          <label>Password:</label>
          <input id="password" type="password" />
        </div>
        <input id="sign-in-button" style={isLoggdIn? {display:"none"}:{display:"block"}} type="submit" value="Login" />
       <a href="/"> <input id="sign-in-button" style={isLoggdIn? {display:"block"}:{display:"none"}} type="submit" value="Continue" />
       </a> 
       <div className="fb-login">{fbContent}</div>
        <div className="signup">
          <a href="#">Can't remember password</a>
          <br />
          <a href="#">Create new account</a>
        </div>
      </section>
    </div>
  );
};

export default Login;
