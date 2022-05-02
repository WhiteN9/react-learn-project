import React from "react";


function Holiday(props) {
  return (
    <React.Fragment>
      <p>{props.name}: {props.month} {props.day}</p>
    </React.Fragment>
  
  )
  
}

export default Holiday;
