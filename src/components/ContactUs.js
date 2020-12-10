import React, { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidV4 } from "uuid";

const ContactUs = ({userName}) => {
  const [commentsArray, setCommentsArray] = useState([{
      id:"23232",
      name:"Islam",
      comment:"first Comment"
  }]);
  const [newComment, setNewComment] = useState({
    id: "",
    name: "",
    comment: "",
  });

  const addNewComment = (e) => {
    setNewComment({
      ...newComment,
      id: uuidV4(),
      [e.target.name]: e.target.value,
    });
  };

  const submitNewComment = (e) => {
    e.preventDefault();
    setCommentsArray([...commentsArray, { ...newComment }]);
    setNewComment({
      ...newComment,
      id: "",
      name: "",
      comment: "",
    });
  };

  return (
    <div className="contact-us-section">
    <h1>POST A COMMENT</h1>
    <div className="comments">
      {commentsArray.map((comment) => (
        <div key={comment.id} id="comment">
        <div id="date" style={{float:"right"}}>{new Date().toDateString()}</div>
          <h2> {comment.name}</h2>
          <p>{comment.comment}</p>
        </div>
      ))}
      </div>

      <form className="contact-us-form" onSubmit={submitNewComment}>
        <label id="email-label">NAME:</label>
        <br />
        <input
          id="email-input"
          value={userName? userName:newComment.name}
          name="name"
          required
          onChange={addNewComment}
        />
        <br />
        <label id="message-label">COMMENT:</label>
        <br />
        <textarea
          id="message-input"
          name="comment"
          required
          value={newComment.comment}
          onChange={addNewComment}
        />
        <br />

        <input id="submit-button" type="submit" value="Send" />
      </form>
    </div>
  );
};

const mapStateToProps = state=>{
  return{
    userName: state.user.userName
  }
}

export default connect(mapStateToProps) (ContactUs);
