import React from "react";


function Holiday(props) {
  return (
    // <React.Fragment> //because returning only 1 element
      <p>{props.name}: {props.month} {props.day}</p>
    // </React.Fragment>
  
  )
  
}

export default Holiday;
