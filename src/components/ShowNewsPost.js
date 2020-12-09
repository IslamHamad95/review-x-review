import React from "react";
import { connect } from "react-redux";
import ContactUs from "./ContactUs"

const ShowNewsPost = ({ postsArray, match,userEmail }) => {
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
      {
        userEmail?(
          <div className="edit-delete-buttons">
          <a><button id="edit-button">EDIT</button></a>
          <button id="delete-button">DELETE</button>
          </div>
        ):null
      }

      <p id="post-body">{post.body}</p>
      <ContactUs />
    </div>
  );
};
const mapStatetoProps = (state) => {
  return {
    postsArray: state.posts.postsArray,
    userEmail: state.user.email
  };
};



export default connect(mapStatetoProps)(ShowNewsPost);
