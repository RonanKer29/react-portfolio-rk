import React from "react";

const NavButton = ({ text, onClick }) => {
  return (
    <li>
      <button onClick={onClick} className="nav-button">
        {text}
      </button>
    </li>
  );
};

export default NavButton;
