import React from "react"; //why do we need this, for React.fragment
import "./App.css";

function App() {
  const name = "White";
  const url = "https://www.thinkful.com/";
  const linkText = "Thinkful";
  const element = (
    <React.Fragment>
      <h1>Hello World!</h1>
      <h2>Have a good day.</h2>
      <p>
        {" "}
        Hello, {name}! Welcome to <a href={url}>{linkText}</a>.
      </p>
    </React.Fragment>
  );
  return element;
}

export default App;
