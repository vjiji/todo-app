import React from "react";

const ActionButton = ({ className, id, onClick, text }) => {
  return (
    <button className={`action-button ${className}`} id={id} onClick={onClick}>
      {text}
    </button>
  );
};

export default ActionButton;
