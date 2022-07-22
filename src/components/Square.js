import React from "react";

const Square = (props) => {
  return (
    <button className="square-styles" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Square;
