import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/photo-ronan.jpg";
import "../styles/navbar.css";
import { FaLinkedin, FaGithub, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav-list" id="home">
      <div className="logo-container">
        <a href="/">
          <img src={Logo} alt="Logo" id="logo" />
        </a>
      </div>
      <ul className={`nav-buttons ${menuOpen ? "open" : ""}`}>
        <li>
          <a
            href="#about"
            className="nav-button"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="nav-button"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="nav-button"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="nav-button"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </li>
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
