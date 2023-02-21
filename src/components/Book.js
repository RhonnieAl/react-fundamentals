import React from "react";
import { Image } from "./Image";
import { Title } from "./Image";
import { Author } from "./Image";
import "../index.css";

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

export default Book;
