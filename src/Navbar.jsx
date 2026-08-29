import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Anbu Payirchiyagam" />
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <Link to="/contact" className="nav-button cta-button">
          Join Now
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
