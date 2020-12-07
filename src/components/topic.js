import React from "react";
import { connect } from "react-redux";
import ContactUs from "./ContactUs"

const Topic = ({ postsArray, match }) => {
  const post = postsArray.find((post) => {
    if (post.id === match.params.id) {
      return post;
    }
  });

  return (
    <div className="show-post">
      <div className="title-border">
        <h2 id="post-title">{post.title}</h2>
      </div>

      <p id="post-body">{post.body}</p>
      <ContactUs />
    </div>
  );
};
const mapStatetoProps = (state) => {
  return {
    postsArray: state.posts.postsArray,
  };
};

export default connect(mapStatetoProps)(Topic);
