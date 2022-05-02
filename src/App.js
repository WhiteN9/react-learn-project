import React from "react"; //why do we need this? for React.fragment
import "./App.css";
import Header from "./Header.js";
import Purchase from "./Buying.js";
import WelcomeWB from "./WelcomeBack.js";
import Holiday from "./Holiday";
import Clock from "./Clock";
import Footer from "./Footer.js";

function Notifications({ notifications }) {
  if (notifications.length > 0) {
    return <p>You have {notifications.length} notifications today!</p>;
  }
  return null;
}
//or when the condition is relatively short
// function Notifications({ notifications }) {
//   return (
//     notifications.length > 0 && (
//       <p>You have {notifications.length} notifications today!</p>
//     )
//   );
// }

function AppNotif() {
  const notifications = ["You received a package", "The weather is sunny"];
  return <Notifications notifications={notifications} />;
}

function App({ loggedIn }) {
  if (loggedIn) {
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
        <Holiday name="Valentine's Day" day="14" month="February" />
        <Holiday name="Christmas" day="25" month="December" />
        <Footer />
        <AppNotif />
        <Clock />
      </React.Fragment>
    );
    return element;
  }
  return null;
}
//or return (loggedIn) ? EVERYTHING /> : null;
export default App;
