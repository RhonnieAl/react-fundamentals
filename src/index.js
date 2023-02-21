import React from "react";
import ReactDom from "react-dom/client";
import Book from "./components/Book";
import "./index.css";

const firstBook = {
  author: "James Clear",
  title: "Atomic Habits",
  img: "./images/book-2.jpg",
};
const secondBook = {
  author: "Jordan Moore",
  title: "Interesting Facts For Curious Minds",
  img: "./images/book-1.jpg",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        title={firstBook.title}
        author={firstBook.author}
        img={firstBook.img}
      />
      <Book
        title={secondBook.title}
        author={secondBook.author}
        img={secondBook.img}
      />
    </section>
  );
};

export default BookList;

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<BookList />);
