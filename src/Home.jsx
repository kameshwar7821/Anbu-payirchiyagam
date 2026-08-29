import React, { useState } from "react";
import Process from "./Process";
import { Link } from "react-router-dom";
import "./App.css";

function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const courses = [
    {
      icon: "🖍️",
      title: "Classes 1–5",
      text: "Lay a strong foundation in early education with interactive and fun learning."
    },
    {
      icon: "📘",
      title: "Classes 6–8",
      text: "Build strong fundamentals and develop better learning habits."
    },
    {
      icon: "📕",
      title: "Classes 9–10",
      text: "Strengthen concepts and prepare confidently for examinations."
    },
    {
      icon: "📗",
      title: "Classes 11–12",
      text: "Focused subject training, exam preparation and higher-score strategies."
    }
  ];

  const features = [
    {
      icon: "👨\u200d🏫",
      title: "Expert Tutors",
      text: "Experienced teachers who focus on individual student needs."
    },
    {
      icon: "🎯",
      title: "Personal Attention",
      text: "Small batches for better interaction and doubt clearing."
    },
    {
      icon: "📖",
      title: "Concept-Based Learning",
      text: "Understand concepts clearly instead of simply memorizing."
    },
    {
      icon: "📝",
      title: "Regular Tests",
      text: "Frequent assessments to track student progress."
    },
    {
      icon: "💡",
      title: "Doubt Clearing",
      text: "Dedicated support to clear difficult concepts."
    },
    {
      icon: "📈",
      title: "Progress Tracking",
      text: "Parents can understand their child's academic improvement."
    }
  ];

  const steps = [
    {
      number: "01",
      icon: "📖",
      title: "Understand",
      text: "Learn concepts clearly with simple explanations."
    },
    {
      number: "02",
      icon: "✍️",
      title: "Practice",
      text: "Strengthen your knowledge by solving questions."
    },
    {
      number: "03",
      icon: "📝",
      title: "Test",
      text: "Regular tests help identify strengths and weak areas."
    },
    {
      number: "04",
      icon: "🏆",
      title: "Achieve",
      text: "Build confidence and move closer to your goals."
    }
  ];

  const testimonials = [
    {
      text: "The teachers explain every concept clearly and patiently. My confidence in Mathematics has improved a lot.",
      name: "Student",
      role: "Class 10"
    },
    {
      text: "Regular tests and personal attention helped my child improve academically and become more confident.",
      name: "Parent",
      role: "Parent of Class 9 Student"
    },
    {
      text: "The learning environment is very friendly. I can ask doubts without hesitation and understand topics better.",
      name: "Student",
      role: "Class 12"
    }
  ];

  const faqs = [
    {
      question: "Which classes do you teach?",
      answer:
        "We provide tuition and academic guidance for students across different school grades."
    },
    {
      question: "What subjects are available?",
      answer:
        "Subject availability depends on the class and batch. Contact us to know the current subjects and batches."
    },
    {
      question: "Do you conduct regular tests?",
      answer:
        "Yes. Regular assessments and tests are conducted to monitor student progress."
    },
    {
      question: "Do you provide doubt-clearing sessions?",
      answer:
        "Yes. Students receive dedicated support to clarify difficult concepts and questions."
    },
    {
      question: "How can I join Anbu Payirchiyagam?",
      answer:
        "Click the Join Now button or contact us directly to enquire about available batches."
    }
  ];

  return (
    <div className="home-page">


      {/* ================= MOVING TEXT ================= */}

      <div className="marquee">
        <div className="marquee-track">
          <div className="marquee-content">
            <span>ANBU PAYIRCHIYAGAM</span><span>✦</span>
            <span>QUALITY EDUCATION</span><span>✦</span>
            <span>BETTER RESULTS</span><span>✦</span>
            <span>BUILD YOUR FUTURE</span><span>✦</span>
            <span>ANBU PAYIRCHIYAGAM</span><span>✦</span>
            <span>QUALITY EDUCATION</span><span>✦</span>
            <span>BETTER RESULTS</span><span>✦</span>
            <span>BUILD YOUR FUTURE</span><span>✦</span>
            <span>ANBU PAYIRCHIYAGAM</span><span>✦</span>
            <span>QUALITY EDUCATION</span><span>✦</span>
            <span>BETTER RESULTS</span><span>✦</span>
            <span>BUILD YOUR FUTURE</span><span>✦</span>
          </div>
          <div className="marquee-content">
            <span>ANBU PAYIRCHIYAGAM</span><span>✦</span>
            <span>QUALITY EDUCATION</span><span>✦</span>
            <span>BETTER RESULTS</span><span>✦</span>
            <span>BUILD YOUR FUTURE</span><span>✦</span>
            <span>ANBU PAYIRCHIYAGAM</span><span>✦</span>
            <span>QUALITY EDUCATION</span><span>✦</span>
            <span>BETTER RESULTS</span><span>✦</span>
            <span>BUILD YOUR FUTURE</span><span>✦</span>
            <span>ANBU PAYIRCHIYAGAM</span><span>✦</span>
            <span>QUALITY EDUCATION</span><span>✦</span>
            <span>BETTER RESULTS</span><span>✦</span>
            <span>BUILD YOUR FUTURE</span><span>✦</span>
          </div>
        </div>
      </div>


      {/* ================= HERO ================= */}

      <section className="hero-section" id="home">

        <div className="hero-container">

          <div className="hero-content">

            <span className="hero-tag">
              🎓 QUALITY EDUCATION • PERSONAL ATTENTION
            </span>

            <h1>
              Learn Better.
              <br />
              <span>Score Higher.</span>
              <br />
              Build Your Future.
            </h1>

            <p>
              Personalized tuition and expert guidance designed to
              help students understand concepts clearly, build
              confidence, and achieve better academic results.
            </p>

            <div className="hero-buttons">

              <a href="#contact" className="btn-primary">
                Join Now →
              </a>

              <a href="#courses" className="btn-secondary">
                Explore Courses
              </a>

            </div>

          </div>


          <div className="hero-image">

            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
              alt="Students learning"
            />

            <div className="hero-floating-card">

              <span>⭐</span>

              <div>
                <strong>Better Learning</strong>
                <small>Learn with confidence</small>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= STATS ================= */}

      <section className="stats">

        <div className="stats-container">

          <div className="stat">
            <h3>50+</h3>
            <p>Students</p>
          </div>

          <div className="stat">
            <h3>10+</h3>
            <p>Expert Tutors</p>
          </div>

          <div className="stat">
            <h3>95%</h3>
            <p>Success Rate</p>
          </div>

          <div className="stat">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>

        </div>

      </section>


      {/* ================= COURSES ================= */}

      <section className="section courses" id="courses">

        <div className="section-heading">

          <span>OUR COURSES</span>

          <h2>
            Learning Programs Designed for <strong>Success</strong>
          </h2>

          <p>
            Structured learning programs designed to help students
            understand concepts, practice effectively and perform better.
          </p>

        </div>


        <div className="course-grid">

          {courses.map((course, index) => (

            <div className="course-card" key={index}>

              <div className="course-icon">
                {course.icon}
              </div>

              <h3>{course.title}</h3>

              <p>{course.text}</p>

              <a href="#contact">
                View Course →
              </a>

            </div>

          ))}

        </div>

      </section>


      {/* ================= LEARNING METHOD ================= */}

      <section className="section learning" id="learning">

        <div className="section-heading">

          <span>OUR LEARNING METHOD</span>

          <h2>
            Learn. Practice. <strong>Achieve.</strong>
          </h2>

          <p>
            Our simple and effective learning process helps students
            grow step by step.
          </p>

        </div>


        <div className="steps">

          {steps.map((step, index) => (

            <div className="step" key={index}>

              <div className="step-number">
                {step.number}
              </div>

              <div className="step-icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>

            </div>

          ))}

        </div>

      </section>


      {/* ================= WHY CHOOSE US ================= */}

      <section className="section why-us" id="why-us">

        <div className="section-heading">

          <span>WHY CHOOSE US</span>

          <h2>
            Why Choose <strong>Anbu Payirchiyagam?</strong>
          </h2>

          <p>
            We provide the right guidance, personal attention and
            learning environment for every student.
          </p>

        </div>


        <div className="feature-grid">

          {features.map((feature, index) => (

            <div className="feature-card" key={index}>

              <div className="feature-icon">
                {feature.icon}
              </div>

              <div>

                <h3>{feature.title}</h3>

                <p>{feature.text}</p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= RESULTS ================= */}

      <section className="results" id="results">

        <div className="results-container">

          <div className="results-content">

            <span>OUR STUDENTS • OUR PRIDE</span>

            <h2>
              Helping Students Turn
              <strong> Effort Into Achievement.</strong>
            </h2>

            <p>
              With consistent practice, personal attention and
              proper guidance, students can build stronger
              academic foundations and greater confidence.
            </p>

            <a href="#contact" className="results-button cta-button">
              Start Your Journey →
            </a>

          </div>


          <div className="achievement-grid">

            <div className="achievement">
              <span>🏆</span>
              <h3>Academic Growth</h3>
              <p>Focused learning and regular practice.</p>
            </div>

            <div className="achievement">
              <span>📈</span>
              <h3>Progress Tracking</h3>
              <p>Monitor learning and improvement.</p>
            </div>

            <div className="achievement">
              <span>🎯</span>
              <h3>Goal Focused</h3>
              <p>Clear targets for better performance.</p>
            </div>

            <div className="achievement">
              <span>🌟</span>
              <h3>Confidence</h3>
              <p>Learn without fear and ask questions freely.</p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= TUTORS ================= */}

      <section className="section tutors">

        <div className="section-heading">

          <span>OUR TUTORS</span>

          <h2>
            Learn From <strong>Experienced Tutors</strong>
          </h2>

          <p>
            Dedicated educators who help students understand,
            practice and achieve.
          </p>

        </div>


        <div className="tutor-grid">

          <div className="tutor-card">

            <img
              src="/saraswathi.jpeg"
              alt="Tutor"
            />

            <h3>Expert Tutor</h3>

            <p>Mathematics Specialist</p>

            <span>Experienced Educator</span>

          </div>

          <div className="tutor-card">

            <img
              src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=800&q=80"
              alt="Tutor"
            />

            <h3>Expert Tutor</h3>

            <p>Mathematics Specialist</p>

            <span>Experienced Educator</span>

          </div>

          <div className="tutor-card">

            <img
              src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=800&q=80"
              alt="Tutor"
            />

            <h3>Expert Tutor</h3>

            <p>Mathematics Specialist</p>

            <span>Experienced Educator</span>

          </div>

          <div className="tutor-card">

            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
              alt="Tutor"
            />

            <h3>Expert Tutor</h3>

            <p>Science Specialist</p>

            <span>Experienced Educator</span>

          </div>


          <div className="tutor-card">

            <img
              src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80"
              alt="Tutor"
            />

            <h3>Expert Tutor</h3>

            <p>English Specialist</p>

            <span>Experienced Educator</span>

          </div>

        </div>

      </section>


      <Process />

      {/* ================= ENVIRONMENT ================= */}

      <section className="environment">

        <div className="environment-container">

          <div className="environment-image">

            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
              alt="Anbu Payirchiyagam classroom"
            />

          </div>


          <div className="environment-content">

            <span>OUR LEARNING ENVIRONMENT</span>

            <h2>
              A Better Place
              <strong> To Learn.</strong>
            </h2>

            <p>
              We believe students learn best in a positive,
              focused and friendly environment where they can
              freely ask questions and improve their knowledge.
            </p>

            <div className="environment-points">

              <div>✓ Comfortable Learning Environment</div>
              <div>✓ Friendly Teacher Support</div>
              <div>✓ Individual Attention</div>
              <div>✓ Regular Practice & Tests</div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= TESTIMONIALS ================= */}

      <section className="section testimonials">

        <div className="section-heading">

          <span>WHAT THEY SAY</span>

          <h2>
            Trusted by <strong>Students & Parents</strong>
          </h2>

        </div>


        <div className="testimonial-grid">

          {testimonials.map((testimonial, index) => (

            <div className="testimonial-card" key={index}>

              <div className="stars">
                ★★★★★
              </div>

              <p>
                "{testimonial.text}"
              </p>

              <h3>{testimonial.name}</h3>

              <span>{testimonial.role}</span>

            </div>

          ))}

        </div>

      </section>


      {/* ================= FAQ ================= */}

      <section className="section faq">

        <div className="section-heading">

          <span>FAQ</span>

          <h2>
            Frequently Asked <strong>Questions</strong>
          </h2>

        </div>


        <div className="faq-container">

          {faqs.map((faq, index) => (

            <div
              className={`faq-item ${openFaq === index ? "active" : ""
                }`}
              key={index}
            >

              <button
                onClick={() =>
                  setOpenFaq(
                    openFaq === index ? null : index
                  )
                }
              >

                <span>{faq.question}</span>

                <span>
                  {openFaq === index ? "−" : "+"}
                </span>

              </button>


              {openFaq === index && (

                <div className="faq-answer">

                  <p>
                    {faq.answer}
                  </p>

                </div>

              )}

            </div>

          ))}

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="final-cta" id="contact">

        <div className="cta-container">

          <span>START YOUR JOURNEY TODAY</span>

          <h2>
            Ready to Learn,
            <strong> Grow & Achieve?</strong>
          </h2>

          <p>
            Join Anbu Payirchiyagam and take the next step
            towards better learning and better results.
          </p>

          <a href="tel:+919999999999">
            Join Anbu Payirchiyagam →
          </a>

        </div>

      </section>



    </div>
  );
}

export default Home;
