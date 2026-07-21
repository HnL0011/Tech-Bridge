import { useState } from "react";

function Guide({ guide, setCurrentPage }) {
  const [helpfulResponse, setHelpfulResponse] =
    useState("");

  function handleHelpfulResponse(response) {
    setHelpfulResponse(response);
  }

  return (
    <div className="page">
      <header className="site-header">
        <button
          type="button"
          className="logo-button"
          onClick={() => setCurrentPage("home")}
        >
          TechBridge
        </button>

        <nav className="top-navigation">
          <button
            type="button"
            onClick={() => setCurrentPage("home")}
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => setCurrentPage("search")}
          >
            Search
          </button>

          <button
            type="button"
            onClick={() => setCurrentPage("profile")}
          >
            Profile
          </button>

          <button
            type="button"
            className="logout-button"
            onClick={() => setCurrentPage("login")}
          >
            Log Out
          </button>
        </nav>
      </header>

      <main className="guide-page-content">
        <button
          type="button"
          className="back-button"
          onClick={() => setCurrentPage("search")}
        >
          ← Back to Search
        </button>

        <article className="guide-detail-card">
          <div className="guide-detail-header">
            <span className="guide-label">
              {guide.category} Step-by-Step Guide
            </span>

            <h1>{guide.title}</h1>

            <p>{guide.description}</p>

            <div className="guide-information">
              <div>
                <strong>Difficulty</strong>
                <span>{guide.difficulty}</span>
              </div>

              <div>
                <strong>Estimated Time</strong>
                <span>{guide.time}</span>
              </div>
            </div>
          </div>

          <div className="steps-list">
            {guide.steps.map((step, index) => (
              <section
                className="step-card"
                key={`${guide.id}-${index}`}
              >
                <div className="step-number">
                  {index + 1}
                </div>

                <div>
                  <h2>{step.title}</h2>

                  <p>{step.description}</p>
                </div>
              </section>
            ))}
          </div>

          <section className="helpful-section">
            <h2>Was this guide helpful?</h2>

            {!helpfulResponse ? (
              <div>
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() =>
                    handleHelpfulResponse("yes")
                  }
                >
                  👍 Yes
                </button>

                <button
                  type="button"
                  className="secondary-button"
                  onClick={() =>
                    handleHelpfulResponse("no")
                  }
                >
                  👎 Not Yet
                </button>
              </div>
            ) : (
              <div className="feedback-message">
                {helpfulResponse === "yes" ? (
                  <p>
                    Thank you! We are glad this guide helped.
                  </p>
                ) : (
                  <p>
                    Thank you for your feedback. We will work
                    to improve this guide.
                  </p>
                )}

                <button
                  type="button"
                  className="text-button"
                  onClick={() => setHelpfulResponse("")}
                >
                  Change Response
                </button>
              </div>
            )}
          </section>
        </article>
      </main>
    </div>
  );
}

export default Guide;