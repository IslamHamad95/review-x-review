import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import { addPost } from "../redux/posts/Actions";

function AddPost({ addPost }) {
  const [isPostSubmitted, setIsPostSubmitted] = useState(false);
  const [newPost, setNewPost] = useState({
    id: 0,
    title: "",
    body: "",
    photo: "",
    category: "Review",
    date: new Date().toDateString(),
  });

  const UpdatingNewPost = (e) => {
    setNewPost({
      ...newPost,
      id: uuidV4(),
      [e.target.name]: e.target.value,
      author: "Islam Hamad",
    });
  };
  const saveImage = (e) => {
    setNewPost({
      ...newPost,
      photo: e.target.files[0].name,
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
      photo: "",
    });
  };
  const postSubmitted = () => {
    setIsPostSubmitted(true);
  };

  return (
    <div>
      <form className="add-post-form" onSubmit={submitNewPost}>
        <label id="title-label">TITLE:</label>
        <br />
        <input
          id="title-input"
          placeholder="ADD TITLE"
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
        <label for="upload-path">Browse...</label>
        <input id="upload-path" type="file"  onChange={saveImage} />
        <br />
        <label htmlFor="category">Category:</label>
        <select name="category" onChange={saveCategory}>
          <option value="Review">Review</option>
          <option value="News">News</option>
        </select>
        <input id="submit-button" type="submit" value="ADD POST" />
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => dispatch(addPost(post)),
  };
};

export default connect(null, mapDispatchToProps)(AddPost);
