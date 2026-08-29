import React from "react";
import "./Process.css";

const steps = [
  {
    icon: "💻",
    title: "Your React Website",
    text: "Build your complete Anbu Payirchiyagam website."
  },
  {
    icon: "⚙️",
    title: "Build",
    text: "Create an optimized production build."
  },
  {
    icon: "🚀",
    title: "Hosting",
    text: "Deploy your website to a reliable hosting platform."
  },
  {
    icon: "🌐",
    title: "anbupayirchiyagam.in",
    text: "Connect your custom domain."
  },
  {
    icon: "🔍",
    title: "Google Search Console",
    text: "Submit and verify your website with Google."
  },
  {
    icon: "🤖",
    title: "Google Indexes Your Website",
    text: "Google discovers and indexes your website."
  },
  {
    icon: "🔎",
    title: 'Search: "Anbu Payirchiyagam"',
    text: "Parents and students search for your tuition centre."
  },
  {
    icon: "🎯",
    title: "Your Website Appears",
    text: "Students can discover your website online."
  }
];

function Process() {
  return (
    <section className="process-section">

      <div className="process-heading">
        <span>HOW IT WORKS</span>

        <h2>
          From <strong>Code</strong> to
          <br />
          <strong>Google Search.</strong>
        </h2>

        <p>
          See how your Anbu Payirchiyagam website goes from a React
          project to a searchable online presence.
        </p>
      </div>


      <div className="process-flow">

        {steps.map((step, index) => (
          <React.Fragment key={step.title}>

            <div className="process-card">

              <div className="process-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="process-icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>

            </div>

            {index !== steps.length - 1 && (
              <div className="process-arrow">
                ↓
              </div>
            )}

          </React.Fragment>
        ))}

      </div>


      <div className="search-result">

        <div className="google-logo">
          Google
        </div>

        <div className="search-box">
          <span>🔍</span>
          <span>Anbu Payirchiyagam</span>
          <span className="search-btn">⌕</span>
        </div>

        <div className="google-result">

          <span className="result-url">
            https://anbupayirchiyagam.in
          </span>

          <h3>
            Anbu Payirchiyagam
          </h3>

          <p>
            Quality tuition classes for students from 1st to 12th
            Standard with regular and online learning programs.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Process;
