import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Purchase from "./Buying.js";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Purchase />
  </React.StrictMode>,
  document.getElementById("root")
);