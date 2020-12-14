import React, { useState, useEffect } from "react";
import { connect } from "react-redux";


const ReviewsSection = ({postsArray}) => {
    const [gamingReviews, setGamingReviews] = useState([]);

    useEffect(() => {
        setGamingReviews(
          (gamingReviews) =>
            (gamingReviews = postsArray
              .filter((post) => post.category === "Review")
              .slice(gamingReviews.length - 4)
              .reverse())
        );
      }, [postsArray]);
    
      if (gamingReviews.length) {
        console.log(gamingReviews[0].id);
        return (
          <div>
            <h1 id="latest-news">LATEST REVIEWS</h1>
            <section className="latest-posts">
              {gamingReviews
                .map((post) => (
                  <div className="post-box" key={post.id}>
                    <a href={`/review/${post.id}`} key={post.id}>
                      <img loading="lazy" id="post-image" src={post.photo} alt={post.title} />
                      <h1 id="post-title"> {post.title}</h1>
                    </a>
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
  

export default connect(mapStatetoProps)(ReviewsSection);
