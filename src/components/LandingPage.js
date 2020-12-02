import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ContactUs from "./ContactUs"
import postImg from "../storage/loba.png"
import landingImg from "../storage/landingPhoto.png"
function LandingPage({ postsArray }) {
  const [latestPosts, setLatestposts] = useState(postsArray);

  useEffect(() => {
    setLatestposts((latestPosts) => latestPosts.slice(latestPosts.length - 4).reverse());

  }, []);

  return (
    <div className="landing-page-container">
    <section className="landing-page-header">
    <h1 id="landing-page-header-title">GAMING WEBSITE FOR GAMERS</h1>
    <img id="landing-page-header-image" src={landingImg}/>
    </section>
    <h1 id="latest-news">LATEST NEWS</h1>
      <section className="latest-posts">
        {latestPosts.map((post) => (
          <div  className="post-box">
          <Link to={`/blog/post/${post.id}`} key={post.id}>
            <img id="post-image" src={post.photo} />
            <h1 id="post-title"> {post.title}</h1>
          </Link>
          <div className="post-info">
          <h2 id="category">{post.category}</h2>
          <h2 id="author">{post.author}</h2>
          <h4 id="date">{post.date}</h4>          
          </div>
          </div>
          
        ))}
      </section>
      <br/>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    postsArray: state.postsArray,
  };
};

export default connect(mapStatetoProps)(LandingPage);
