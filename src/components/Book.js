import React from "react";
import "../index.css";

const title = "Atomic Habits";
const author = "James Clear";
const img = "./images/book-2.jpg";

const Book = () => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

export default Book;
