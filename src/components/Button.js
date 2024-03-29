import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  //   const onClick = () => {
  //     console.log("click");
  //   };

  //   //pass event object
  //   const onClick = (e) => {
  //     console.log(e);
  //   };

  return (
    <button
      onClick={onClick}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.prototype = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
