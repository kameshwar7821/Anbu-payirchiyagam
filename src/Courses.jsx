import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Courses.css";

const courses = [
  {
    icon: "🧒",
    level: "01",
    title: "Primary Classes",
    classes: "1st – 5th Standard",
    tag: "FOUNDATION",
    description:
      "Build strong academic foundations with simple, engaging and activity-based learning.",
    subjects: ["Tamil", "English", "Mathematics", "Science"],
    learn: ["Basic literacy", "Number skills", "Environmental awareness", "Creative thinking", "Reading habits", "Handwriting"],
  },
  {
    icon: "📘",
    level: "02",
    title: "Middle School",
    classes: "6th – 8th Standard",
    tag: "INTERMEDIATE",
    description:
      "Strengthen concepts and develop better problem-solving and analytical skills.",
    subjects: ["Tamil", "English", "Mathematics", "Science", "Social"],
    learn: ["Analytical thinking", "Problem solving", "Scientific temper", "Language fluency", "General knowledge", "Study skills"],
  },
  {
    icon: "🎓",
    level: "03",
    title: "High School",
    classes: "9th – 10th Standard",
    tag: "BOARD EXAM PREP",
    description:
      "Focused academic coaching with regular practice and examination preparation.",
    subjects: ["Tamil", "English", "Maths", "Science", "Social"],
    learn: ["Exam strategies", "Time management", "Concept clarity", "Scoring techniques", "Mock tests", "Revision planning"],
  },
  {
    icon: "🏆",
    level: "04",
    title: "Higher Secondary",
    classes: "11th – 12th Standard",
    tag: "ADVANCED",
    description:
      "Advanced subject coaching designed for board examinations and future goals.",
    subjects: ["Maths", "Physics", "Chemistry", "Biology"],
    learn: ["In-depth subject knowledge", "Competitive exam basics", "Laboratory skills", "Career guidance", "Stress management", "High-scoring focus"],
  },
  {
    icon: "💻",
    level: "05",
    title: "Online Classes",
    classes: "Learn From Anywhere",
    tag: "FLEXIBLE",
    description:
      "Flexible online learning with live classes, study materials and doubt support.",
    subjects: ["Live Classes", "Study Materials", "Doubt Support", "Online Tests"],
    learn: ["Digital literacy", "Self-paced learning", "Interactive sessions", "E-study materials", "Regular assessments", "Instant doubt clearing"],
  },
  {
    icon: "🧮",
    level: "06",
    title: "Abacus",
    classes: "Brain Development Program",
    tag: "SKILL DEVELOPMENT",
    description:
      "Enhance mental arithmetic skills, concentration, and cognitive abilities through structured Abacus training.",
    subjects: ["Mental Math", "Concentration", "Memory Power", "Speed & Accuracy"],
    learn: ["Fast calculations", "Enhanced memory", "Improved focus", "Visualizing numbers", "Brain coordination", "Confidence building"],
  },
];

function Courses() {
  const location = useLocation();
  const [selectedCourse, setSelectedCourse] = useState(null);

  const closeCourse = () => {
    setSelectedCourse(null);
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="courses-page">

      {/* HERO */}
      <section className="courses-hero">

        <div className="hero-decoration circle-one"></div>
        <div className="hero-decoration circle-two"></div>

        <div className="courses-hero-content">
          <div className="mini-title">
            <span></span>
            OUR COURSES
            <span></span>
          </div>

          <h1>
            Learn Better.
            <br />
            <span>Achieve More.</span>
          </h1>

          <p>
            Structured learning programs for students from
            <strong> 1st to 12th Standard</strong>, designed to make
            every subject easier and every goal closer.
          </p>

          <div className="hero-stats">
            <div>
              <strong>1–12</strong>
              <span>Standards</span>
            </div>

            <div>
              <strong>5+</strong>
              <span>Learning Areas</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Student Focus</span>
            </div>
          </div>
        </div>

        <div className="hero-learning-card">

          <div className="floating-book">📚</div>

          <div className="learning-top">
            <span>LEARNING PATH</span>
            <span>✦</span>
          </div>

          <h3>
            Your Journey
            <br />
            Starts Here
          </h3>

          <div className="learning-line">
            <div className="line-dot active">1</div>
            <div className="line-text">
              <strong>Build Foundation</strong>
              <span>1st – 5th</span>
            </div>
          </div>

          <div className="learning-line">
            <div className="line-dot">2</div>
            <div className="line-text">
              <strong>Strengthen Concepts</strong>
              <span>6th – 8th</span>
            </div>
          </div>

          <div className="learning-line">
            <div className="line-dot">3</div>
            <div className="line-text">
              <strong>Prepare for Success</strong>
              <span>9th – 12th</span>
            </div>
          </div>

        </div>
      </section>


      {/* COURSE INTRO */}
      <section className="course-intro" id="programs">

        <div>
          <span className="section-tag">CHOOSE YOUR PROGRAM</span>

          <h2>
            A Course for
            <span> Every Learning Stage.</span>
          </h2>
        </div>

        <p>
          Whether your child is starting school or preparing for board
          examinations, choose a learning program that matches their
          academic stage and learning needs.
        </p>

      </section>


      {/* COURSE CARDS */}
      <section className="course-grid-section">

        <div className="course-grid">

          {courses.map((course, index) => (
            <div
              className="course-card"
              key={course.level}
            >

              <div className="card-top">
                <div className="course-icon">
                  {course.icon}
                </div>

                <span className="course-number">
                  {course.level}
                </span>
              </div>

              <span className="course-classes">
                {course.classes}
              </span>

              <h3>{course.title}</h3>

              <p>{course.description}</p>

              <div className="subjects-title">
                What You'll Learn
              </div>

              <div className="subjects">
                {course.subjects.map((subject) => (
                  <span key={subject}>
                    ✓ {subject}
                  </span>
                ))}
              </div>

              <button className="course-btn" onClick={() => setSelectedCourse(course)}>
                Explore Course <span>→</span>
              </button>

            </div>
          ))}

        </div>

      </section>


      {/* ONLINE LEARNING */}
      <section className="online-section">

        <div className="online-content">

          <span className="section-tag">ONLINE LEARNING</span>

          <h2>
            Learn From
            <span> Anywhere.</span>
          </h2>

          <p>
            Can't attend regular classes? Our online learning option helps
            students continue their studies from home with convenient,
            interactive and structured sessions.
          </p>

          <div className="online-features">

            <div>
              <span>🎥</span>
              <strong>Live Classes</strong>
              <small>Interactive sessions</small>
            </div>

            <div>
              <span>📚</span>
              <strong>Study Materials</strong>
              <small>Easy revision</small>
            </div>

            <div>
              <span>💬</span>
              <strong>Doubt Support</strong>
              <small>Get your questions answered</small>
            </div>

          </div>

          <button className="online-btn">
            Join Online Classes →
          </button>

        </div>

        <div className="online-visual">

          <div className="screen-card">
            <div className="screen-header">
              <span>●</span>
              <span>●</span>
              <span>●</span>
            </div>

            <div className="screen-content">
              <div className="teacher-avatar">👨🏫</div>

              <div className="screen-text">
                <span>LIVE CLASS</span>
                <strong>Mathematics</strong>
                <small>Interactive Learning</small>
              </div>
            </div>

            <div className="progress-bar">
              <span></span>
            </div>

            <small className="lesson-text">
              Today's Lesson • 75% completed
            </small>
          </div>

        </div>

      </section>



      {selectedCourse && (
        <div
          className="course-modal-overlay"
          onClick={closeCourse}
        >
          <div
            className="course-modal"
            onClick={(e) => e.stopPropagation()}
          >
      
            {/* Close Button */}
            <button
              className="modal-close"
              onClick={closeCourse}
              aria-label="Close"
            >
              ×
            </button>
      
            {/* Header */}
            <div className="modal-header">
      
              <div className="modal-icon">
                {selectedCourse.icon}
              </div>
      
              <div>
                <div className="modal-tag">
                  {selectedCourse.tag}
                </div>
      
                <h2>{selectedCourse.title}</h2>
              </div>
      
            </div>
      
            {/* Description */}
            <p className="modal-description">
              {selectedCourse.description}
            </p>
      
            {/* Subjects */}
            <div className="modal-section">
      
              <h3>📚 Subjects</h3>
      
              <div className="modal-subjects">
                {selectedCourse.subjects.map((subject, index) => (
                  <span key={index}>
                    ✓ {subject}
                  </span>
                ))}
              </div>
      
            </div>
      
            {/* What You'll Learn */}
            <div className="modal-section">
      
              <h3>🎯 What You'll Learn</h3>
      
              <div className="modal-learning">
      
                {selectedCourse.learn.map((item, index) => (
                  <div key={index}>
                    <span>✓</span>
                    {item}
                  </div>
                ))}
      
              </div>
      
            </div>
      
            {/* Bottom */}
            <div className="modal-footer">
      
              <div>
                <strong>Ready to start learning?</strong>
                <p>Contact us for more details.</p>
              </div>
      
              <button 
                className="modal-contact"
                onClick={() => window.open('https://wa.me/917010205599', '_blank')}
              >
                Contact Us →
              </button>
      
            </div>
      
          </div>
        </div>
      )}

    </div>
  );
}

export default Courses;
