import React, { useState } from "react";
import {connect} from "react-redux"
import {getUser} from "../redux/user/userActions"

const Login = ({popUpFun,getUserData}) => {
  const [user, setUser]=useState({
    userName: "",
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
    getUserData(user)
    popUpFun()

  }


  return (
    <div className="login-signup-box">
    <div onClick={popUpFun} id="close-window">X</div>
      <section className="login">
        <h1>WELCOME BACK!</h1>
        <form className="login-form" onSubmit={loginUser}>
          <label>UserName: </label>
          <input name="userName" id="email" required onChange={userData} value={user.userName}/>
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

const mapDispatchToProps=(dispatch)=>{
  const dispatchFunction=
  (user)=>dispatch(getUser(user))
  return{
    getUserData:dispatchFunction
  }
}


export default connect(null,mapDispatchToProps)(Login);
