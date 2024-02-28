import React from "react";

const Button = ({ onClick, label }) => {
    return(
  <button className="button" onClick={() => onClick(label)}>{label}</button>
    )
};

export default Button;
