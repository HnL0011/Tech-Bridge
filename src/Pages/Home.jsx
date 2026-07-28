import guides from "../data/guides";

function Home({
  setCurrentPage,
  openGuide,
  searchQuery,
  setSearchQuery,
  openSearch,
}) {
  const recentGuides = guides.slice(0, 2);

  function handleSearch(event) {
    event.preventDefault();
    openSearch(searchQuery);
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
            className="active-nav-button"
            onClick={() => setCurrentPage("home")}
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => openSearch("")}
          >
            Search
          </button>

          <button
            type="button"
            onClick={() => setCurrentPage("support")}
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
          <p className="eyebrow">Technology made simpler</p>

          <h1>How can we help today?</h1>

          <p>
            Find easy, step-by-step guides for your phone,
            computer, Wi-Fi, printer, and smart devices.
          </p>

          <form
            className="home-search-bar"
            onSubmit={handleSearch}
          >
            <input
              type="search"
              placeholder="Ask a technology question..."
              aria-label="Ask a technology question"
              value={searchQuery}
              onChange={(event) =>
                setSearchQuery(event.target.value)
              }
            />

            <button
              type="submit"
              className="primary-button"
            >
              Search
            </button>
          </form>
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
              onClick={() => openSearch("phone")}
            >
              <span className="category-icon">📱</span>
              <span>Phones</span>
              <small>Calls, apps, and settings</small>
            </button>

            <button
              type="button"
              className="category-card"
              onClick={() => openSearch("computer")}
            >
              <span className="category-icon">💻</span>
              <span>Computers</span>
              <small>Windows and Mac help</small>
            </button>

            <button
              type="button"
              className="category-card"
              onClick={() => openSearch("Wi-Fi")}
            >
              <span className="category-icon">🌐</span>
              <span>Wi-Fi</span>
              <small>Internet and connection help</small>
            </button>

            <button
              type="button"
              className="category-card"
              onClick={() => openSearch("printer")}
            >
              <span className="category-icon">🖨️</span>
              <span>Printers</span>
              <small>Printing and scanning</small>
            </button>

            <button
              type="button"
              className="category-card"
              onClick={() => openSearch("smart")}
            >
              <span className="category-icon">📺</span>
              <span>Smart Devices</span>
              <small>TVs and connected devices</small>
            </button>

            <button
              type="button"
              className="category-card"
              onClick={() => openSearch("security")}
            >
              <span className="category-icon">🛡️</span>
              <span>Online Safety</span>
              <small>Scams, passwords, and security</small>
            </button>

            <button
              type="button"
              className="category-card"
              onClick={() => setCurrentPage("support")}
            >
              <span className="category-icon">🎧</span>
              <span>Support</span>
              <small>Contact the TechBridge team</small>
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
              onClick={() => openSearch("")}
            >
              View all guides
            </button>
          </div>

          <div className="guide-grid">
            {recentGuides.map((guide) => (
              <article
                className="guide-card"
                key={guide.id}
              >
                <div className="guide-card-icon">
                  {guide.icon}
                </div>

                <div className="guide-card-content">
                  <span className="guide-label">
                    Step-by-step guide
                  </span>

                  <h3>{guide.title}</h3>

                  <p>{guide.description}</p>

                  <div className="guide-details">
                    <span>
                      Difficulty: {guide.difficulty}
                    </span>

                    <span>
                      {guide.estimatedTime || guide.time}
                    </span>
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