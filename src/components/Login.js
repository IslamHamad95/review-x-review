import React, { useState } from "react";

const Login = ({popUpFun}) => {
  const [user, setUser]=useState({
    email: "",
    password:""
  })

  const userData=(e)=>{
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
  }
  const loginUser=(e)=>{
    e.preventDefault()
    console.log(user)
    popUpFun()

  }


  return (
    <div className="login-signup-box">
    <div onClick={popUpFun} id="close-window">X</div>
      <section className="login">
        <h1>WELCOME BACK!</h1>
        <form className="login-form" onSubmit={loginUser}>
          <label>Email: </label>
          <input name="email" id="email" type="email" required onChange={userData} value={user.email}/>
          <label>Password:</label>
          <input name="password" id="password" type="password" onChange={userData} required value={user.password} />
          <div></div>
          <input  id="sign-in-button" type="submit" value="Login"  />
        </form>
       
       
        <div className="signup">
          <button>Can't remember password</button>
          <br />
          <button>Create new account</button>
        </div>
      </section>
    </div>
  );
};


export default (Login);
