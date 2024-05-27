import React from "react";
import "../styles/navbar.css";

const NavButton = ({ text, selected, onClick }) => {
  return (
    <button
      className={`nav-button ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default NavButton;
