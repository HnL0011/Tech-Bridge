function Home({ setCurrentPage, openGuide }) {
  const guides = [
    {
      title: "Connect to Wi-Fi",
      description:
        "Learn how to connect a phone, tablet, or computer to Wi-Fi.",
      difficulty: "Easy",
      time: "3 minutes",
    },
    {
      title: "Print from an iPhone",
      description:
        "Use AirPrint to print photos and documents from your iPhone.",
      difficulty: "Easy",
      time: "5 minutes",
    },
  ];

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
            className="active-nav-button"
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

      <main className="page-content">
        <section className="hero-section">
          <p className="eyebrow">Technology made simpler</p>

          <h1>How can we help today?</h1>

          <p>
            Find easy, step-by-step guides for your phone,
            computer, Wi-Fi, printer, and smart devices.
          </p>

          <div className="home-search-bar">
            <input
              type="text"
              placeholder="Ask a technology question..."
              aria-label="Ask a technology question"
            />

            <button
              type="button"
              className="primary-button"
              onClick={() => setCurrentPage("search")}
            >
              Search
            </button>
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Explore help topics</p>
              <h2>Popular Categories</h2>
            </div>
          </div>

          <div className="category-grid">
            <button
              type="button"
              className="category-card"
              onClick={() => setCurrentPage("search")}
            >
              <span className="category-icon">📱</span>
              <span>Phones</span>
              <small>Calls, apps, and settings</small>
            </button>

            <button
              type="button"
              className="category-card"
              onClick={() => setCurrentPage("search")}
            >
              <span className="category-icon">💻</span>
              <span>Computers</span>
              <small>Windows and Mac help</small>
            </button>

            <button
              type="button"
              className="category-card"
              onClick={() => setCurrentPage("search")}
            >
              <span className="category-icon">🌐</span>
              <span>Wi-Fi</span>
              <small>Internet and connection help</small>
            </button>

            <button
              type="button"
              className="category-card"
              onClick={() => setCurrentPage("search")}
            >
              <span className="category-icon">🖨️</span>
              <span>Printers</span>
              <small>Printing and scanning</small>
            </button>

            <button
              type="button"
              className="category-card"
              onClick={() => setCurrentPage("search")}
            >
              <span className="category-icon">📺</span>
              <span>Smart Devices</span>
              <small>TVs and connected devices</small>
            </button>

            <button
              type="button"
              className="category-card"
              onClick={() => setCurrentPage("profile")}
            >
              <span className="category-icon">⭐</span>
              <span>Favorites</span>
              <small>Your saved guides</small>
            </button>
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Continue learning</p>
              <h2>Recent Guides</h2>
            </div>

            <button
              type="button"
              className="link-button"
              onClick={() => setCurrentPage("search")}
            >
              View all guides
            </button>
          </div>

          <div className="guide-grid">
            {guides.map((guide) => (
              <article
                className="guide-card"
                key={guide.title}
              >
                <div className="guide-card-icon">📘</div>

                <div className="guide-card-content">
                  <span className="guide-label">
                    Step-by-step guide
                  </span>

                  <h3>{guide.title}</h3>

                  <p>{guide.description}</p>

                  <div className="guide-details">
                    <span>Difficulty: {guide.difficulty}</span>
                    <span>{guide.time}</span>
                  </div>

                  <button
                    type="button"
                    className="primary-button"
                    onClick={() => openGuide(guide)}
                  >
                    Read Guide
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;