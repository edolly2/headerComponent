import "../styles/HeaderComponent.css";
import { useState } from "react";

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="/">YourLogo</a>
        </div>

        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="menu-icon" onClick={toggleMenu}>
          &#9776; {/* Hamburger Menu Icon */}
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
