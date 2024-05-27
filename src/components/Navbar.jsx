import React, { useState } from "react";
import NavButton from "../subcomponents/NavButton";
import Logo from "../assets/logo.png";
import "../styles/navbar.css";
import { FaLinkedin, FaGithub, FaBars } from "react-icons/fa";

export default function Navbar() {
  {
    const [activePage, setActivePage] = useState("Home");
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
      setMenuOpen(!menuOpen);
    };

    return (
      <nav className="nav-list">
        <div className="logo-container">
          <img src={Logo} alt="Logo" id="logo" />
        </div>
        <ul className="nav-buttons">
          <NavButton
            text="Home"
            selected={activePage === "Home"}
            onClick={() => setActivePage("Home")}
          />
          <NavButton
            text="About"
            selected={activePage === "About"}
            onClick={() => setActivePage("About")}
          />
          <NavButton
            text="Projects"
            selected={activePage === "Projects"}
            onClick={() => setActivePage("Projects")}
          />
          <NavButton
            text="Contact"
            selected={activePage === "Contact"}
            onClick={() => setActivePage("Contact")}
          />
        </ul>
        <div className="menu-icon" onClick={handleMenuToggle}>
          <FaBars size={24} />
        </div>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/ronankerv/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} className="social-icon" />
          </a>
          <a
            href="https://github.com/RonanKer29"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} className="social-icon" />
          </a>
        </div>
      </nav>
    );
  }
}
