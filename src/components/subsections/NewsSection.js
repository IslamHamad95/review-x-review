import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
  }, [postsArray]);

  if (gamingNews.length) {
    return (
      <div>
        {" "}
        <Link
          to={`/news/${gamingNews[0].id}`}
          className="landing-page-header"
        >
          <h1 id="landing-page-header-title">{gamingNews[0].title}</h1>
          <img
            id="landing-page-header-image"
            alt=""
            src={gamingNews[gamingNews.length -4].photo}
          />
        </Link>

        <h1 id="latest-news">LATEST NEWS</h1>
        <section className="latest-posts">
          {gamingNews.map((post) => (
            <div className="post-box" key={post.id}>
              <Link to={`/news/${post.id}`} key={post.id}>
                <img id="post-image" alt="postimg" src={post.photo} />
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
    postsArray: state.posts.postsArray,
  };
};

export default connect(mapStatetoProps)(NewsSection);
