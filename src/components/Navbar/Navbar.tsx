import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/fitness.jpeg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`navbar-container ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar container">
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo" />
          <div className="logo-text">
            <p>Fitness</p>
            <p>Club</p>
          </div>
        </div>
        <div className={`links ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Team</li>
            <li>Testimonial</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={`auth-container ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="auth-links">
            <li>Login</li>
            <li>Register</li>
          </ul>
        </div>
        <div
          className={`menu-icon ${isMobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
