import React from "react";
function MessageByHour({hour}) {
  switch(true) { //the value we give to the switch is used as the basis to compare against.
    case (hour < 12):
      return <h1>Good Morning!</h1>;
    case (hour < 19):
      return <h1>Good Afternoon!</h1>;
    case (hour < 25):
      return <h1>Good Evening!</h1>;
    default:
      return <h1>???</h1>;
  }
}
// If like if else
// function MessageByHour({ hour }) {
//   if (hour < 12) {
//     return <h1>Good Morning!</h1>;
//   } else if (hour < 19) {
//     return <h1>Good Afternoon!</h1>;
//   } else if (hour < 25) {
//     return <h1>Good Evening!</h1>;
//   } else return <h1>{hour}</h1>;
// }

function Clock() {
  let currentHour = new Date().getHours();

  return <MessageByHour hour={currentHour} />;
}

export default Clock;
