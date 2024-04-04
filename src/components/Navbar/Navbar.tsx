import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/fitness.jpeg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page has been scrolled more than 10px
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <div className="links">
          <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Team</li>
            <li>Testimonial</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="auth-container">
          <ul className="auth-links">
            <li>Login</li>
            <li>Register</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
