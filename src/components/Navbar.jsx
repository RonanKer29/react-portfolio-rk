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
    <nav className="nav-list">
      <div className="logo-container">
        <img src={Logo} alt="Logo" id="logo" />
      </div>
      <ul className={`nav-buttons ${menuOpen ? "open" : ""}`}>
        <li>
          <Link
            to="/"
            className={`nav-button ${
              location.pathname === "/" ? "selected" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`nav-button ${
              location.pathname === "/about" ? "selected" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={`nav-button ${
              location.pathname === "/projects" ? "selected" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`nav-button ${
              location.pathname === "/contact" ? "selected" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
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
