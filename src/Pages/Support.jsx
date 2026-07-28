import techBridgeSupport from "../data/support";

function Support({ setCurrentPage }) {
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
            className="active-nav-button"
          >
            Support
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

      <main className="page-content">
        <section className="hero-section">
          <p className="eyebrow">We are here to help</p>

          <h1>How can we help today?</h1>

          <p>
            Choose a support option, review common questions, or search our
            step-by-step technology guides.
          </p>

          <button
            type="button"
            className="primary-button"
            onClick={() => setCurrentPage("search")}
          >
            Search Guides
          </button>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Contact options</p>
              <h2>TechBridge Support</h2>
            </div>
          </div>

          <div className="category-grid">
            <article className="category-card support-contact-card">
              <span className="category-icon">📞</span>

              <span>Call Support</span>

              <small>
                Speak with a TechBridge support representative.
              </small>

              <strong>{techBridgeSupport.phone}</strong>

              <small>{techBridgeSupport.hours.weekdays}</small>
              <small>{techBridgeSupport.hours.time}</small>
            </article>

            <article className="category-card support-contact-card">
              <span className="category-icon">✉️</span>

              <span>Email Support</span>

              <small>
                Send us a message about your technology question.
              </small>

              <strong>{techBridgeSupport.email}</strong>

              <small>{techBridgeSupport.responseTime}</small>
            </article>

            <article className="category-card support-contact-card">
              <span className="category-icon">💬</span>

              <span>Live Chat</span>

              <small>
                Chat with TechBridge directly inside the application.
              </small>

              <strong>{techBridgeSupport.liveChat}</strong>

              <button
                type="button"
                className="primary-button support-card-button"
                onClick={() =>
                  alert(
                    "Live chat is coming soon in this demonstration.",
                  )
                }
              >
                Start Chat
              </button>
            </article>

            <article className="category-card support-contact-card">
              <span className="category-icon">📚</span>

              <span>Browse Guides</span>

              <small>
                Search our beginner-friendly guide library for answers.
              </small>

              <button
                type="button"
                className="primary-button support-card-button"
                onClick={() => setCurrentPage("search")}
              >
                View Guides
              </button>
            </article>
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Common questions</p>
              <h2>Frequently Asked Questions</h2>
            </div>
          </div>

          <div className="guide-grid">
            {techBridgeSupport.faq.map((item) => (
              <article
                key={item.question}
                className="guide-card support-faq-card"
              >
                <div className="guide-card-icon">❓</div>

                <div className="guide-card-content">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <article className="support-notice-card">
            <span className="category-icon">ℹ️</span>

            <div>
              <p className="eyebrow">Student project</p>
              <h2>Demonstration Notice</h2>
              <p>{techBridgeSupport.disclaimer}</p>
            </div>
          </article>
        </section>

        <section className="content-section">
          <div className="support-bottom-actions">
            <button
              type="button"
              className="link-button"
              onClick={() => setCurrentPage("home")}
            >
              ← Return Home
            </button>

            <button
              type="button"
              className="primary-button"
              onClick={() => setCurrentPage("profile")}
            >
              Go to Profile
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Support;