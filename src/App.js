//import React from "react"; why do we need this
import "./App.css";

function App() {
  const name = "White";
  const url = "https://www.thinkful.com/";
  const linkText = "Thinkful";
  const element = (
    <p>
      {" "}
      Hello, {name}! Welcome to <a href={url}>{linkText}</a>.
    </p>
  );  
  return element;
}

export default App;