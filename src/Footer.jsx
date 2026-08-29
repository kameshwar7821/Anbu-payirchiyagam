import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src="/logo.png" alt="Anbu Payirchiyagam" />
          <p>Learn Better • Score Higher • Build Your Future</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/about">About Us</Link>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>📍 Your Location</p>
          <p>📞 +91 99999 99999</p>
          <p>✉️ info@anbupayirchiyagam.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 Anbu Payirchiyagam. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
