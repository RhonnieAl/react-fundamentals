import React from "react";
import ReactDom from "react-dom/client";
import Book from "./components/Book";
import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

export default BookList;

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<BookList />);
