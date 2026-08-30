import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Decorative background */}
      <div className="footer-glow footer-glow-1"></div>
      <div className="footer-glow footer-glow-2"></div>

      <div className="footer-container">

        {/* ================= BRAND ================= */}
        <div className="footer-brand">

          <img
            src="/logo.png"
            alt="Anbu Payirchiyagam"
            className="footer-logo"
          />

          <h3>
            Learn Better <span>•</span> Score Higher <span>•</span> Build Your Future
          </h3>



        </div>


        {/* ================= QUICK LINKS ================= */}
        <div className="footer-column">

          <h2>Quick Links</h2>
          <div className="title-line"></div>

          <a href="/">› <span>Home</span></a>
          <a href="/courses">› <span>Courses</span></a>
          <a href="/about">› <span>About Us</span></a>
          <a href="/contact">› <span>Contact</span></a>

        </div>


        {/* ================= CONTACT ================= */}
        <div className="footer-column contact-column">

          <h2>Get In Touch</h2>
          <div className="title-line"></div>

          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <p>
              <a href="https://maps.app.goo.gl/D1XqPCjcEbFEqXRH8?g_st=aw" target="_blank" rel="noreferrer" style={{color: "inherit", textDecoration: "none"}}>
                Salem, Tamil Nadu, India
              </a>
            </p>
          </div>

          <div className="contact-item">
            <span className="contact-icon">☎</span>
            <p>
              <a href="tel:+917010205599" style={{color: "inherit", textDecoration: "none"}}>
                +91 70102 05599
              </a>
            </p>
          </div>

          <div className="contact-item">
            <span className="contact-icon">✉</span>
            <p>anbupayirchiyagam@gmail.com</p>
          </div>

          <div className="contact-item">
            <span className="contact-icon">◷</span>
            <p>Mon - Sat: 6:00 PM - 9:00 PM</p>
          </div>



        </div>

      </div>




      {/* ================= BOTTOM ================= */}
      <div className="footer-bottom">

        <p>
          © 2026 Anbu Payirchiyagam. All Rights Reserved.
        </p>

        <div className="social-links">
          <a href="https://wa.me/917010205599" target="_blank" rel="noreferrer" aria-label="WhatsApp">💬</a>
          <a href="https://www.facebook.com/share/1GYiQ3RCPi/" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
          <a href="https://www.instagram.com/anbupayirchiyagam" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a>
        </div>

        <p className="made-with">
          💙 Made with passion for education
        </p>

      </div>

    </footer>
  );
};

export default Footer;
