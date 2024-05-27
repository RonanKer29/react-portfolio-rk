import NavButton from "../subcomponents/NavButton";
import Logo from "../assets/logo.png";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="nav-list">
      <div className="logo-container">
        <img src={Logo} alt="Logo" id="logo" />
      </div>
      <ul className="nav-buttons">
        <NavButton selected={true} text="Home" />
        <NavButton text="About" />
        <NavButton text="Projects" />
        <NavButton text="Contact" />
      </ul>
    </nav>
  );
}
