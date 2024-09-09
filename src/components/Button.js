import React from "react";
import "./Button.css";

import { Link } from "react-router-dom";
const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  // Determine the button style
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  // Determine the button size
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/Signup" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`} // Fixed template literals syntax
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
}



export default Button;