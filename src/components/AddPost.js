import React, { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidV4 } from "uuid";
import { addPost } from "../redux/posts/Actions";
import newImage from "../storage/loba.png";

function AddPost({ userName, addPost }) {
  const [newPost, setNewPost] = useState({
    id: 0,
    title: "",
    body: "",
    photo: newImage,
    category: "Review",
    date: new Date().toDateString(),
  });

  const UpdatingNewPost = (e) => {
    setNewPost({
      ...newPost,
      id: uuidV4(),
      [e.target.name]: e.target.value,
      author: userName,
    });
  };

  const saveCategory = (e) => {
    setNewPost({
      ...newPost,
      category: e.target.value,
    });
  };

  const submitNewPost = (e) => {
    e.preventDefault();
    addPost(newPost);
    setNewPost({
      ...newPost,
      title: "",
      body: "",
      category: "Review",
    });
  };

  return (
    <div>
      <form className="add-post-form" onSubmit={submitNewPost}>
        <label id="title-label">TITLE:</label>
        <br />
        <input
          id="title-input"
          name="title"
          required
          value={newPost.title}
          onChange={UpdatingNewPost}
        />
        <br />
        <label id="body-label">BODY:</label>
        <br />
        <textarea
          id="body-input"
          name="body"
          required
          value={newPost.body}
          onChange={UpdatingNewPost}
        ></textarea>
        <br />
        <br />
        <label htmlFor="category">Category:</label>
        <select name="category" onChange={saveCategory}>
          <option value="Review">Review</option>
          <option value="News">News</option>
        </select>
        <br />

        <input id="submit-button" type="submit" value="ADD POST" />
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userName: state.user.userName,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => dispatch(addPost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
