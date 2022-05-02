import React from "react";
import "./App.css";
import WelcomeBack from "./WelcomeBackFc";

function EncouragingWords() {
  return <p>Believe you can and you’re halfway there.</p>;
}

function DailyTip() {
  return <p>Highlight a whole paragraph by triple-clicking on it.</p>;
}

export default function ReturnWB() {
  return (
    <React.Fragment>
      <WelcomeBack name="Joe"/>
      <WelcomeBack name="Jane" adjective="amazing"/>
      <WelcomeBack />
      <EncouragingWords />
      <DailyTip />
    </React.Fragment>
  );
}
