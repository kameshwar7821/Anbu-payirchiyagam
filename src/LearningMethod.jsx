import React from "react";
import "./LearningMethod.css";

const learningSteps = [
  {
    number: "01",
    icon: "📖",
    title: "Understand",
    description:
      "Learn every concept clearly with simple explanations and practical examples."
  },
  {
    number: "02",
    icon: "✍️",
    title: "Practice",
    description:
      "Strengthen your knowledge by solving questions and applying what you learn."
  },
  {
    number: "03",
    icon: "📝",
    title: "Test",
    description:
      "Take regular tests to identify your strengths and improve your weak areas."
  },
  {
    number: "04",
    icon: "🏆",
    title: "Achieve",
    description:
      "Build confidence, improve your results, and move closer to your academic goals."
  }
];

function LearningMethod() {
  return (
    <section className="learning-section" id="learning-method">

      <div className="learning-container">

        {/* Heading */}
        <div className="learning-heading">

          <span className="learning-tag">
            OUR LEARNING METHOD
          </span>

          <h2>
            Learn. Practice.{" "}
            <span>Achieve.</span>
          </h2>

          <p>
            At Anbu Payirchiyagam, we follow a simple and effective
            learning process designed to help every student succeed.
          </p>

        </div>

        {/* Learning Steps */}
        <div className="learning-steps">

          <div className="progress-line"></div>

          {learningSteps.map((step, index) => (
            <div
              className="learning-step"
              key={index}
            >

              <div className="step-number">
                {step.number}
              </div>

              <div className="step-icon">
                {step.icon}
              </div>

              <div className="step-content">

                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Message */}
        <div className="learning-bottom">

          <div className="bottom-icon">
            🎓
          </div>

          <div>
            <h3>
              Your Success Is Our Mission
            </h3>

            <p>
              Every lesson brings you one step closer to your goal.
            </p>
          </div>

          <button>
            Join Us →
          </button>

        </div>

      </div>

    </section>
  );
}

export default LearningMethod;
