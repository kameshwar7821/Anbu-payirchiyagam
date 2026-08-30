import React from "react";
import "./Courses.css";

const courses = [
  {
    icon: "🧒",
    level: "01",
    title: "Primary Classes",
    classes: "1st – 5th Standard",
    description:
      "Build strong academic foundations with simple, engaging and activity-based learning.",
    subjects: ["Tamil", "English", "Mathematics", "Science"],
  },
  {
    icon: "📘",
    level: "02",
    title: "Middle School",
    classes: "6th – 8th Standard",
    description:
      "Strengthen concepts and develop better problem-solving and analytical skills.",
    subjects: ["Tamil", "English", "Mathematics", "Science", "Social"],
  },
  {
    icon: "🎓",
    level: "03",
    title: "High School",
    classes: "9th – 10th Standard",
    description:
      "Focused academic coaching with regular practice and examination preparation.",
    subjects: ["Tamil", "English", "Maths", "Science", "Social"],
  },
  {
    icon: "🏆",
    level: "04",
    title: "Higher Secondary",
    classes: "11th – 12th Standard",
    description:
      "Advanced subject coaching designed for board examinations and future goals.",
    subjects: ["Maths", "Physics", "Chemistry", "Biology"],
  },
  {
    icon: "💻",
    level: "05",
    title: "Online Classes",
    classes: "Learn From Anywhere",
    description:
      "Flexible online learning with live classes, study materials and doubt support.",
    subjects: ["Live Classes", "Study Materials", "Doubt Support", "Online Tests"],
  },
  {
    icon: "🧮",
    level: "06",
    title: "Abacus",
    classes: "Brain Development Program",
    description:
      "Enhance mental arithmetic skills, concentration, and cognitive abilities through structured Abacus training.",
    subjects: ["Mental Math", "Concentration", "Memory Power", "Speed & Accuracy"],
  },
];

function Courses() {
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
      <section className="course-intro">

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
              className={`course-card ${
                index === 2 ? "featured-course" : ""
              }`}
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

              <button className="course-btn">
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


      {/* CTA */}
      <section className="course-cta">

        <div>
          <span>START YOUR LEARNING JOURNEY</span>

          <h2>
            Ready to Learn,
            <strong> Grow & Succeed?</strong>
          </h2>

          <p>
            Choose the right course and take the next step towards
            academic success.
          </p>
        </div>

        <button>
          Join Now <span>→</span>
        </button>

      </section>

    </div>
  );
}

export default Courses;
