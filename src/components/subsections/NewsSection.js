import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import postImg from "../../storage/loba.png";
import background from "../../storage/background.png"

const NewsSection = ({ postsArray }) => {
  const [gamingNews, setGamingNews] = useState([]);

  useEffect(() => {
    setGamingNews(
      (gamingNews) =>
        (gamingNews = postsArray
          .filter((post) => post.category === "News")
          .slice(gamingNews.length - 4)
          .reverse())
    );
  }, []);

  if (gamingNews.length) {
    return (
      <div>
        {" "}
        <Link
          to={`/blog/post/${gamingNews[0].id}`}
          className="landing-page-header"
        >
          <h1 id="landing-page-header-title">{gamingNews[0].title}</h1>
          <img
            id="landing-page-header-image"
            src={gamingNews[gamingNews.length - 1].photo}
          />
        </Link>

        <h1 id="latest-news">LATEST NEWS</h1>
        <section className="latest-posts">
          {gamingNews.map((post) => (
            <div className="post-box" key={post.id}>
              <Link to={`/blog/post/${post.id}`} key={post.id}>
                <img id="post-image" src={postImg} />
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
        <br />
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

const mapStatetoProps = (state) => {
  return {
    postsArray: state.postsArray,
  };
};

export default connect(mapStatetoProps)(NewsSection);
