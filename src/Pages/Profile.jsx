import guides from "../data/guides";

function Profile({
  setCurrentPage,
  openGuide,
  largeText,
  setLargeText,
  highContrast,
  setHighContrast,
}) {
  const favoriteGuide = guides[0];

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
            onClick={() => setCurrentPage("support")}
          >
            Support
          </button>

          <button
            type="button"
            className="active-nav-button"
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
        <section className="profile-header-card">
          <div className="profile-avatar">H</div>

          <div>
            <p className="eyebrow">
              Your TechBridge account
            </p>

            <h1>Hunter</h1>

            <p>hunter@example.com</p>
          </div>
        </section>

        <div className="profile-grid">
          <section className="profile-card">
            <h2>Favorite Guides</h2>

            <article className="favorite-guide">
              <div>
                <span className="guide-label">
                  Saved Guide
                </span>

                <h3>{favoriteGuide.title}</h3>

                <p>{favoriteGuide.description}</p>
              </div>

              <button
                type="button"
                className="primary-button"
                onClick={() => openGuide(favoriteGuide)}
              >
                Read Guide
              </button>
            </article>
          </section>

          <section className="profile-card">
            <h2>Settings</h2>

            <label className="setting-row">
              <div>
                <strong>Larger Text</strong>

                <p>
                  Make the application easier to read.
                </p>
              </div>

              <span className="toggle-switch">
                <input
                  type="checkbox"
                  checked={largeText}
                  onChange={(event) =>
                    setLargeText(event.target.checked)
                  }
                  aria-label="Enable larger text"
                />

                <span className="toggle-slider" />
              </span>
            </label>

            <label className="setting-row">
              <div>
                <strong>High Contrast</strong>

                <p>
                  Increase contrast to make text and buttons easier to see.
                </p>
              </div>

              <span className="toggle-switch">
                <input
                  type="checkbox"
                  checked={highContrast}
                  onChange={(event) =>
                    setHighContrast(event.target.checked)
                  }
                  aria-label="Enable high contrast mode"
                />

                <span className="toggle-slider" />
              </span>
            </label>

            

            

            <button
              type="button"
              className="logout-profile-button"
              onClick={() => setCurrentPage("login")}
            >
              Log Out
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Profile;