import React from "react";
import ReactDom from "react-dom/client";

const Greetings = () => {
  return <h1>This is not really my first component</h1>;
};

export default Greetings;

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<Greetings />);
