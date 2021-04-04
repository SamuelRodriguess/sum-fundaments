import "./Card.css";
import React from "react";

const getColor = (props) => {
  if (props.Red) return "Red";
  if (props.Green) return "Green";
  if (props.Blue) return "Blue";
  if (props.Purple) return "Purple";
  return "";
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <div className={`Card ${getColor(props)}`}>
      <div className="Header">
        <span className="title">{props.Title}</span>
      </div>
      <div className="Content">{props.children}</div>
    </div>
  );
};
