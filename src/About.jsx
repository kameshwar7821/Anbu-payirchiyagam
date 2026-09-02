import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="hero-content">
          <span className="hero-tag">WELCOME TO ANBU PAYIRCHIYAGAM</span>

          <h1>
            Learning Today,
            <span> Leading Tomorrow.</span>
          </h1>

          <p>
            A trusted learning centre providing quality tuition and
            personalized academic support for students from
            <strong> 1st to 12th Standard.</strong>
          </p>

          <button className="about-btn">
            Explore Our Classes →
          </button>
        </div>

        <div className="hero-card">
          <div className="book-icon">📚</div>
          <h3>1st – 12th Standard</h3>
          <p>Learn • Understand • Achieve</p>
        </div>
      </section>


      {/* ABOUT */}
      <section className="about-intro">

        <div className="about-image-box">
          <div className="image-placeholder">
            📖
          </div>

          <div className="experience-card">
            <strong>1–12</strong>
            <span>Standard Classes</span>
          </div>
        </div>

        <div className="about-text">

          <span className="section-label">ABOUT US</span>

          <h2>
            Where Every Student Gets
            <span> the Attention They Deserve.</span>
          </h2>

          <p>
            At <strong>Anbu Payirchiyagam</strong>, we believe every student
            has the ability to succeed. Our goal is to make learning simple,
            interesting and effective for students of all learning levels.
          </p>

          <p>
            We provide a friendly and disciplined learning environment where
            students can understand concepts clearly, improve their academic
            performance and build confidence for their examinations.
          </p>

          <div className="about-points">
            <div>
              <span>✓</span>
              <p>Concept-based learning</p>
            </div>

            <div>
              <span>✓</span>
              <p>Individual attention</p>
            </div>

            <div>
              <span>✓</span>
              <p>Regular tests & assessments</p>
            </div>

            <div>
              <span>✓</span>
              <p>Exam-focused preparation</p>
            </div>
          </div>

        </div>
      </section>


      {/* MISSION / VISION */}
      <section className="mission-section">

        <div className="section-heading">
          <span className="section-label">OUR PURPOSE</span>

          <h2>
            Helping Students
            <span> Grow With Confidence.</span>
          </h2>

          <p>
            We focus on academic excellence while developing the confidence
            and skills students need for their future.
          </p>
        </div>

        <div className="purpose-grid">

          <div className="purpose-card">
            <div className="purpose-icon">🎯</div>

            <h3>Our Mission</h3>

            <p>
              To provide quality education through simple teaching methods,
              personal attention and continuous academic support.
            </p>
          </div>


          <div className="purpose-card">
            <div className="purpose-icon">🌱</div>

            <h3>Our Vision</h3>

            <p>
              To create a trusted learning environment where every student
              can discover their potential and achieve their goals.
            </p>
          </div>


          <div className="purpose-card">
            <div className="purpose-icon">💡</div>

            <h3>Our Approach</h3>

            <p>
              We make learning easier through concept clarity, regular
              practice, interactive teaching and student-focused guidance.
            </p>
          </div>

        </div>
      </section>


      {/* WHY CHOOSE US */}
      <section className="why-section">

        <div className="section-heading">
          <span className="section-label">WHY ANBU PAYIRCHIYAGAM?</span>

          <h2>
            More Than Tuition,
            <span> A Better Way to Learn.</span>
          </h2>
        </div>

        <div className="features-grid">

          <div className="feature-card">
            <div>👨🏫</div>

            <h3>Experienced Teaching</h3>

            <p>
              Clear and easy-to-understand teaching methods
              for every student.
            </p>
          </div>


          <div className="feature-card">
            <div>👤</div>

            <h3>Personal Attention</h3>

            <p>
              Understanding each student's strengths and
              areas for improvement.
            </p>
          </div>


          <div className="feature-card">
            <div>📝</div>

            <h3>Regular Assessments</h3>

            <p>
              Frequent tests and practice sessions to track
              academic progress.
            </p>
          </div>


          <div className="feature-card">
            <div>🏆</div>

            <h3>Result Oriented</h3>

            <p>
              Focused preparation to help students perform
              confidently in exams.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="about-cta">

        <div>
          <span>READY TO START LEARNING?</span>

          <h2>
            Give Your Child the
            <strong> Right Learning Environment.</strong>
          </h2>

          <p>
            Join Anbu Payirchiyagam and take the next step towards
            academic success.
          </p>
        </div>

        <button className="cta-btn">
          Join Now →
        </button>

      </section>

    </div>
  );
}

export default About;
