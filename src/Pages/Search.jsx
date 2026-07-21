import { useEffect, useState } from "react";
import guides from "../data/guides";

function Search({
  setCurrentPage,
  searchQuery,
  setSearchQuery,
  openGuide,
}) {
  const [localSearch, setLocalSearch] = useState(searchQuery || "");

  useEffect(() => {
    setLocalSearch(searchQuery || "");
  }, [searchQuery]);

  const filteredGuides = guides.filter((guide) => {
    const searchText = localSearch.trim().toLowerCase();

    if (!searchText) {
      return true;
    }

    const searchableGuideText = [
      guide.title,
      guide.description,
      guide.category,
      guide.device,
      guide.difficulty,
      guide.estimatedTime,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchableGuideText.includes(searchText);
  });

  function handleSearchSubmit(event) {
    event.preventDefault();
    setSearchQuery(localSearch);
  }

  function handleClearSearch() {
    setLocalSearch("");
    setSearchQuery("");
  }

  function handleDeviceFilter(device) {
    setLocalSearch(device);
    setSearchQuery(device);
  }

  return (
    <div className="page">
      {/* Top Navigation */}
      <header className="site-header">
        <button
          type="button"
          className="logo-button"
          onClick={() => setCurrentPage("home")}
        >
          🌉 TechBridge
        </button>

        <nav className="top-navigation" aria-label="Main navigation">
          <button
            type="button"
            onClick={() => setCurrentPage("home")}
          >
            Home
          </button>

          <button
            type="button"
            className="active-nav-button"
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
        {/* Page Heading */}
        <section className="page-title-section">
          <p className="eyebrow">Technology Help</p>

          <h1>Search Guides</h1>

          <p>
            Find simple, step-by-step instructions made for your
            iPhone, Android phone, or Windows computer.
          </p>
        </section>

        {/* Search Box */}
        <section className="search-panel">
          <form onSubmit={handleSearchSubmit}>
            <label htmlFor="guide-search">
              What do you need help with?
            </label>

            <div className="search-input-row">
              <input
                id="guide-search"
                type="text"
                value={localSearch}
                onChange={(event) =>
                  setLocalSearch(event.target.value)
                }
                placeholder="Try: iPhone Wi-Fi or Windows screenshot"
                aria-label="Search technology guides"
              />

              <button
                type="submit"
                className="primary-button"
              >
                Search
              </button>

              {localSearch && (
                <button
                  type="button"
                  className="secondary-button"
                  onClick={handleClearSearch}
                >
                  Clear
                </button>
              )}
            </div>
          </form>

          {/* Device Buttons */}
          <div className="device-filter-area">
            <p className="device-filter-label">
              Choose your device:
            </p>

            <div className="device-filter-buttons">
              <button
                type="button"
                className="secondary-button"
                onClick={() => handleDeviceFilter("iPhone")}
              >
                📱 iPhone
              </button>

              <button
                type="button"
                className="secondary-button"
                onClick={() => handleDeviceFilter("Android")}
              >
                🤖 Android
              </button>

              <button
                type="button"
                className="secondary-button"
                onClick={() => handleDeviceFilter("Windows")}
              >
                💻 Windows
              </button>

              <button
                type="button"
                className="text-button"
                onClick={handleClearSearch}
              >
                Show All
              </button>
            </div>
          </div>
        </section>

        {/* Search Results */}
        <section className="content-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Available Help</p>
              <h2>Guide Results</h2>
            </div>

            <p>
              {filteredGuides.length}{" "}
              {filteredGuides.length === 1
                ? "guide found"
                : "guides found"}
            </p>
          </div>

          {filteredGuides.length > 0 ? (
            <div className="search-results">
              {filteredGuides.map((guide) => (
                <article
                  className="search-result-card"
                  key={guide.id}
                >
                  <div>
                    <span className="guide-label">
                      {guide.icon}{" "}
                      {guide.device || guide.category}
                    </span>

                    <h3>{guide.title}</h3>

                    <p>{guide.description}</p>

                    <div className="guide-details">
                      <span>
                        Level: {guide.difficulty}
                      </span>

                      <span>
                        Time: {guide.estimatedTime}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="primary-button"
                    onClick={() => openGuide(guide)}
                  >
                    View Guide
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h2>No guides found</h2>

              <p>
                Try searching for a simpler word such as Wi-Fi,
                screenshot, printer, iPhone, Android, or Windows.
              </p>

              <button
                type="button"
                className="primary-button"
                onClick={handleClearSearch}
              >
                Show All Guides
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Search;