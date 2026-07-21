function Guide({ guide, setCurrentPage }) {
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
              Step-by-step guide
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
            <section className="step-card">
              <div className="step-number">1</div>

              <div>
                <h2>Open your device settings</h2>

                <p>
                  Find and open the Settings application on
                  your phone, tablet, or computer.
                </p>
              </div>
            </section>

            <section className="step-card">
              <div className="step-number">2</div>

              <div>
                <h2>Find the Wi-Fi settings</h2>

                <p>
                  Select Wi-Fi, Network, or Internet from the
                  available settings.
                </p>
              </div>
            </section>

            <section className="step-card">
              <div className="step-number">3</div>

              <div>
                <h2>Select your network</h2>

                <p>
                  Choose your Wi-Fi network name from the list
                  of available networks.
                </p>
              </div>
            </section>

            <section className="step-card">
              <div className="step-number">4</div>

              <div>
                <h2>Enter the password</h2>

                <p>
                  Type the Wi-Fi password and select Connect.
                  Your device should confirm that it is
                  connected.
                </p>
              </div>
            </section>
          </div>

          <section className="helpful-section">
            <h2>Was this guide helpful?</h2>

            <div>
              <button type="button" className="secondary-button">
                👍 Yes
              </button>

              <button type="button" className="secondary-button">
                👎 Not Yet
              </button>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}

export default Guide;