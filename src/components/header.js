import React from "react"
import {NavLink} from "react-router-dom"
import logo from "../storage/logo.png"

const Header=()=>{
    return (
        <header>
        <a href="/"><img id="logo" alt ="logo" src={logo}></img></a>
        
        <div className="tabs">
        <NavLink to="/Blog" id="blog">BLOG</NavLink>
        <NavLink to="/addpost" id="add-post">ADD POST</NavLink>
        </div>

        <div className="auth">
        <NavLink to="/login" id="login-signup">Login/Sign Up</NavLink>
        </div>

        </header>
    )

}

export default Header;