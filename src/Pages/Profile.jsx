function Profile({
  setCurrentPage,
  openGuide,
  favoriteGuides,
  toggleFavorite,
  largeText,
  setLargeText,
  highContrast,
  setHighContrast,
  currentUser,
}) {
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
          <div className="profile-avatar">
  {currentUser?.name
    ? currentUser.name.charAt(0).toUpperCase()
    : "G"}
</div>

<div>
  <p className="eyebrow">
    Your TechBridge account
  </p>

  <h1>{currentUser?.name || "Guest User"}</h1>

  <p>
    {currentUser?.email || "Guest account"}
  </p>
</div>
        </section>

        <div className="profile-grid">
          <section className="profile-card">
            <h2>Favorite Guides</h2>

            {favoriteGuides.length === 0 ? (
              <div className="empty-favorites">
                <p>
                  You have not saved any guides yet.
                </p>

                <button
                  type="button"
                  className="primary-button"
                  onClick={() => setCurrentPage("search")}
                >
                  Browse Guides
                </button>
              </div>
            ) : (
              <div className="favorite-guides-list">
                {favoriteGuides.map((guide) => (
                  <article
                    className="favorite-guide"
                    key={guide.id}
                  >
                    <div>
                      <span className="guide-label">
                        Saved Guide
                      </span>

                      <h3>{guide.title}</h3>

                      <p>{guide.description}</p>
                    </div>

                    <div className="favorite-guide-actions">
                      <button
                        type="button"
                        className="primary-button"
                        onClick={() => openGuide(guide)}
                      >
                        Read Guide
                      </button>

                      <button
                        type="button"
                        className="secondary-button"
                        onClick={() =>
                          toggleFavorite(guide.id)
                        }
                      >
                        Remove
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
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
                  Increase contrast to make text and buttons
                  easier to see.
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