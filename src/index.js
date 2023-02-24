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
const thirdBook = {
  author: "Dr. Mark Hyman MD ",
  title: "Young Forever: The Secrets to Living Your Longest, Healthiest Life",
  img: "https://images-na.ssl-images-amazon.com/images/I/81dL13NFc3L._AC_UL600_SR600,400_.jpg",
};
const fourthBook = {
  author: "Colleen Hoover ",
  title: "It Starts with Us: A Novel",
  img: "https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL600_SR600,400_.jpg",
};
const fifthBook = {
  author: "Gloria Mark ",
  title: "Barbara Kingsolver",
  img: "https://images-na.ssl-images-amazon.com/images/I/91mP0HKLEwL._AC_UL300_SR300,200_.jpg",
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
      <Book
        title={thirdBook.title}
        author={thirdBook.author}
        img={thirdBook.img}
      />
      <Book
        title={fourthBook.title}
        author={fourthBook.author}
        img={fourthBook.img}
      />
      <Book
        title={fifthBook.title}
        author={fifthBook.author}
        img={fifthBook.img}
      />
    </section>
  );
};

export default BookList;

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<BookList />);
