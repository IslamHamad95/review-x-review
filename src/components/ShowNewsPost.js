import React from "react";
import { connect } from "react-redux";
import ContactUs from "./ContactUs";

const ShowNewsPost = ({ postsArray, match, userName }) => {
  const post = postsArray.find((post) => post.id === match.params.id);

  return (
    <div className="show-post">
      <div className="title-border">
        <h2 id="post-title">{post.title}</h2>
        <img loading="lazy" id="post-image" alt="" src={post.photo} />
      </div>
      <h2 id="post-author">Written by {post.author}</h2>
      {userName === post.author ? (
        <div className="edit-delete-buttons">
          <button id="edit-button">EDIT</button>

          <button id="delete-button">DELETE</button>
        </div>
      ) : null}

      <p id="post-body">{post.body}</p>

      <ContactUs />
    </div>
  );
};
const mapStatetoProps = (state) => {
  return {
    postsArray: state.posts.postsArray,
    userName: state.user.userName,
  };
};

export default connect(mapStatetoProps)(ShowNewsPost);
