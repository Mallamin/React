//creating functional component

import React from "react";

const person = (props) => {
  //Outputting Dynamic Content as part of JSX content
  return (
    //<p>I'm a person and I am {Math.floor(Math.random() * 30)} years old!</p>
  //);
  //<p>I'm {props.name} and I am {props.age} years old!</p>
  //);
  //Understanding the "Children"
  <div><p>I'm {props.name} and I am {props.age} years old!</p>
  <p>{props.children}</p>
  </div>
  
  
  );
};
export default person;
