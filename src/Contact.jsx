import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      {/* ================= HERO ================= */}
      <section className="contact-hero">

        <div className="contact-hero-content">

          <span className="contact-tag">CONTACT US</span>

          <h1>
            Let's Start Your
            <span> Learning Journey.</span>
          </h1>

          <p>
            Have questions about classes, timings, subjects, fees or
            online courses? We're here to help.
          </p>

          <div className="hero-contact-buttons">
            <a href="tel:+919999999999" className="call-btn">
              📞 Call Us
            </a>

            <a
              href="https://wa.me/919999999999"
              className="whatsapp-btn"
              target="_blank"
              rel="noreferrer"
            >
              💬 WhatsApp Us
            </a>
          </div>

        </div>

        <div className="contact-hero-card">

          <div className="contact-card-icon">
            📚
          </div>

          <span>ANBU PAYIRCHIYAGAM</span>

          <h3>
            We're Here
            <br />
            To Help You.
          </h3>

          <p>
            Ask us anything about our tuition programs.
          </p>

          <div className="card-arrow">
            →
          </div>

        </div>

      </section>


      {/* ================= CONTACT INFO ================= */}
      <section className="contact-info-section">

        <div className="contact-info-card">

          <div className="info-icon">📍</div>

          <div>
            <span>VISIT US</span>
            <h3>Our Centre</h3>
            <p>
              [Your Tuition Centre Address]
            </p>
          </div>

        </div>


        <div className="contact-info-card">

          <div className="info-icon">📞</div>

          <div>
            <span>CALL US</span>
            <h3>Phone</h3>
            <p>
              +91 99999 99999
            </p>
          </div>

        </div>


        <div className="contact-info-card">

          <div className="info-icon">✉️</div>

          <div>
            <span>EMAIL US</span>
            <h3>Email</h3>
            <p>
              info@anbupayirchiyagam.com
            </p>
          </div>

        </div>


        <div className="contact-info-card">

          <div className="info-icon">🕒</div>

          <div>
            <span>WORKING HOURS</span>
            <h3>Mon – Sat</h3>
            <p>
              8:00 AM – 8:00 PM
            </p>
          </div>

        </div>

      </section>


      {/* ================= MAIN CONTACT ================= */}
      <section className="main-contact">

        {/* LEFT CONTENT */}
        <div className="contact-left">

          <span className="section-label">
            HAVE A QUESTION?
          </span>

          <h2>
            We'd Love to
            <span> Hear From You.</span>
          </h2>

          <p>
            Whether you're a parent looking for the right tuition
            program or a student who needs academic support, feel
            free to reach out to us.
          </p>


          <div className="contact-benefits">

            <div>
              <span>✓</span>
              <p>Quick response to enquiries</p>
            </div>

            <div>
              <span>✓</span>
              <p>Course and fee information</p>
            </div>

            <div>
              <span>✓</span>
              <p>Guidance for choosing the right class</p>
            </div>

            <div>
              <span>✓</span>
              <p>Online & regular class support</p>
            </div>

          </div>


          {/* SOCIAL */}
          <div className="social-area">

            <span>FOLLOW US</span>

            <div className="social-icons">

              <a href="#" aria-label="Instagram">
                ◎
              </a>

              <a href="#" aria-label="Facebook">
                f
              </a>

              <a href="#" aria-label="YouTube">
                ▶
              </a>

            </div>

          </div>

        </div>


        {/* RIGHT FORM */}
        <div className="contact-form-box">

          <div className="form-heading">
            <span>ENQUIRY FORM</span>

            <h3>
              Send Us a Message
            </h3>

            <p>
              Fill in the details and we'll get back to you.
            </p>
          </div>


          <form>

            <div className="form-row">

              <div className="form-group">
                <label>Student Name</label>

                <input
                  type="text"
                  placeholder="Enter student's name"
                />
              </div>


              <div className="form-group">
                <label>Parent / Guardian</label>

                <input
                  type="text"
                  placeholder="Enter parent name"
                />
              </div>

            </div>


            <div className="form-row">

              <div className="form-group">
                <label>Phone Number</label>

                <input
                  type="tel"
                  placeholder="Enter mobile number"
                />
              </div>


              <div className="form-group">
                <label>Standard</label>

                <select defaultValue="">
                  <option value="" disabled>
                    Select standard
                  </option>

                  <option>1st Standard</option>
                  <option>2nd Standard</option>
                  <option>3rd Standard</option>
                  <option>4th Standard</option>
                  <option>5th Standard</option>
                  <option>6th Standard</option>
                  <option>7th Standard</option>
                  <option>8th Standard</option>
                  <option>9th Standard</option>
                  <option>10th Standard</option>
                  <option>11th Standard</option>
                  <option>12th Standard</option>
                </select>

              </div>

            </div>


            <div className="form-group">

              <label>Choose Course</label>

              <select defaultValue="">
                <option value="" disabled>
                  Select a course
                </option>

                <option>
                  Regular Tuition
                </option>

                <option>
                  Online Classes
                </option>

                <option>
                  Exam Preparation
                </option>

                <option>
                  Subject-Specific Coaching
                </option>

              </select>

            </div>


            <div className="form-group">

              <label>Your Message</label>

              <textarea
                rows="4"
                placeholder="Tell us how we can help you..."
              ></textarea>

            </div>


            <button
              type="submit"
              className="submit-btn"
            >
              Send Enquiry
              <span>→</span>
            </button>

          </form>

        </div>

      </section>


      {/* ================= MAP ================= */}
      <section className="location-section">

        <div className="location-heading">

          <span className="section-label">
            FIND US
          </span>

          <h2>
            Visit Our
            <span> Learning Centre.</span>
          </h2>

          <p>
            Come visit us and know more about our tuition programs.
          </p>

        </div>


        <div className="map-box">

          <div className="map-placeholder">

            <div className="map-pin">
              📍
            </div>

            <h3>
              Anbu Payirchiyagam
            </h3>

            <p>
              Your Tuition Centre Location
            </p>

            <a
              href="#"
              className="direction-btn"
            >
              Get Directions →
            </a>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="contact-cta">

        <div>

          <span>
            READY TO GET STARTED?
          </span>

          <h2>
            Give Your Child the
            <strong> Right Guidance.</strong>
          </h2>

          <p>
            Contact Anbu Payirchiyagam today and take the
            first step towards better learning.
          </p>

        </div>

        <a href="tel:+919999999999">
          Call Now →
        </a>

      </section>

    </div>
  );
}

export default Contact;
