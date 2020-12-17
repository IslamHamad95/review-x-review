import React from "react";

const Pagination = (props) => {
  const PageNumbers = [];

  for (let i = 1; i < Math.round(props.totalPosts / props.postsPerPage); i++) {
    PageNumbers.push(i);
  }
 
  return (
    <div
      className="pagination"
      style={
        props.totalPosts >= 10
          ? { display: "block" }
          : { display: "none" }
      }
    >
      {PageNumbers.map((number) => (
        <button id="number"
          tabIndex="0"
          role="link"
          type="button"
          onClick={() => props.paginate(number)}
          key={number}
          href="#"
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
