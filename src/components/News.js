import React, { useState } from "react";
import { connect } from "react-redux";
import Pagination from "./pagination";
import { Link } from "react-router-dom";

const News = ({ postsArray }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = postsArray
    .filter((post) => post.category === "News")
    .slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (PageNumber) => {
    setCurrentPage(PageNumber);
  };

  return (
    <div>
      <section className="container">
        {currentPosts
          .reverse()
          .map((post) => (
          <Link key={post.id} to={`/news/${post.id}`}>
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
    postsArray: state.posts.postsArray,
  };
};

export default connect(mapStatetoProps)(News);
