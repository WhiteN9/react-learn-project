import React from "react";

function Greeting({ language }) {
  return <h1>{language === "es" ? "Hola" : "Hello"}!</h1>;
}

export {Greeting} ;

//or if more than 2 options
/*
// Greeting.js
function Greeting({ language }) {
  switch (language) {
    case "es":
      return <h1>Hola!</h1>;
    case "fr":
      return <h1>Bonjour!</h1>;
    case "en":
    default:
      return <h1>Hello!</h1>;
  }
}
*/