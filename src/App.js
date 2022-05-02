import React from "react"; //why do we need this, for React.fragment
import "./App.css";
import Header from "./Header.js";
import Purchase from "./Buying.js";
import WelcomeWB from "./WelcomeBack.js";
import Footer from "./Footer.js";

function App() {
  const name = "White";
  const url = "https://www.thinkful.com/";
  const linkText = "Thinkful";
  const element = (
    <React.Fragment>
      <Header />
      <h1>Hello World!</h1>
      <h2>Have a good day.</h2>
      <p>
        {" "}
        Hello, {name}! Welcome to <a href={url}>{linkText}</a>.
      </p>
      <Purchase />
      <WelcomeWB />
      <Footer />
    </React.Fragment>
  );
  return element;
}

export default App;
