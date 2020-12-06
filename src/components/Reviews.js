import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "./pagination";

const Posts = ({ postsArray }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = postsArray
    .filter((post) => post.category === "Review")
    .slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (PageNumber) => {
    setCurrentPage(PageNumber);
  };

  return (
    <div>
      <section className="container">
        {currentPosts.map((post) => (
          <Link key={post.id} to={`/blog/review/${post.id}`}>
            <div className="topic">
              <div id="title">{post.title}</div>
            </div>
          </Link>
        ))}
        <Pagination
          className="pagination"
          postsPerPage={postsPerPage}
          totalPosts={postsArray.length}
          paginate={paginate}
          currentPosts={currentPosts}
        />
      </section>
    </div>
  );
};

export const mapStatetoProps = (state) => {
  return {
    postsArray: state.postsArray,
  };
};

export default connect(mapStatetoProps)(Posts);
