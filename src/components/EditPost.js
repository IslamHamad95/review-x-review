import React, { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidV4 } from "uuid";
import { getPost } from "../redux/posts/Actions";
import { mapStatetoProps } from "./posts";

function EditPost() {


  return (
    <div>
      <form className="add-post-form" >
        <label id="title-label">TITLE:</label>
        <br />
        <input
          id="title-input"
          name="title"
          required
        />
        <br />
        <label id="body-label">BODY:</label>
        <br />
        <textarea
          id="body-input"
          name="body"
          required

        ></textarea>
        <br />
        <input id="upload-path" type="file"   />
        <label htmlFor="category">Category:</label>
        <select name="category" >
          <option value="Review">Review</option>
          <option value="News">News</option>
        </select><br/>
        <input id="submit-button" type="submit" value="ADD POST" />
      </form>
    </div>
  );
}




export default (EditPost);
