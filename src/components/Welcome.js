import React from "react";
function welcome(props) {
  const name = props.name;
  return (
    <div>
      <h1>Hey {name}</h1>
      <h2> Welcome to Newton School.</h2>
    </div>
  );
}
export default welcome;
