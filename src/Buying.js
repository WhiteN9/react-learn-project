import React from "react";
import ReactDOM from "react-dom";

const shirts = 4;
const pants = 6;
const website = "https://www.thinkful.com/";

const element = <p className='paragraph'>Purchased {shirts} shirts and {pants} pants for a total of {shirts+pants} items</p>

function Purchase(){
  const output = (

     <main>
      {element}
      <a href={website}>Website</a>
     </main>

  )
  return output;
}

export default Purchase
;