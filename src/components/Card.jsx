import React from "react";
import "../styles/card.css";

const Card = ({ children, className, backgroundImage, ...props }) => {
  return (
    <div
      className={`card ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
