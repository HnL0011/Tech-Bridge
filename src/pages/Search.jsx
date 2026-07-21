import { useState } from "react";

function Search({ setCurrentPage, openGuide }) {
  const [searchText, setSearchText] = useState("");

  const guides = [
    {
      title: "Connect to Wi-Fi",
      description:
        "Connect your phone, tablet, or computer to a wireless network.",
      difficulty: "Easy",
      time: "3 minutes",
    },
    {
      title: "Print from an iPhone",
      description:
        "Print photos and documents with an AirPrint-compatible printer.",
      difficulty: "Easy",
      time: "5 minutes",
    },
    {
      title: "Reset a Forgotten Password",
      description:
        "Follow safe steps to recover access to an online account.",
      difficulty: "Medium",
      time: "8 minutes",
    },
    {
      title: "Make Text Larger",
      description:
        "Increase text size on a phone or computer for easier reading.",
      difficulty: "Easy",
      time: "4 minutes",
    },
  ];

  const filteredGuides = guides.filter((guide) => {
    const searchableText =
      `${guide.title} ${guide.description}`.toLowerCase();

    return searchableText.includes(searchText.toLowerCase());
  });

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
            className="active-nav-button"
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
        <section className="page-title-section">
          <p className="eyebrow">Technology help library</p>
          <h1>Search Guides</h1>

          <p>
            Search for clear instructions using a topic,
            device, or problem.
          </p>
        </section>

        <section className="search-panel">
          <label htmlFor="guide-search">
            What do you need help with?
          </label>

          <div className="search-input-row">
            <input
              id="guide-search"
              type="search"
              placeholder="Example: connect my laptop to Wi-Fi"
              value={searchText}
              onChange={(event) =>
                setSearchText(event.target.value)
              }
            />

            <button type="button" className="primary-button">
              Search
            </button>
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                {filteredGuides.length} guides found
              </p>
              <h2>Search Results</h2>
            </div>
          </div>

          <div className="search-results">
            {filteredGuides.length > 0 ? (
              filteredGuides.map((guide) => (
                <article
                  className="search-result-card"
                  key={guide.title}
                >
                  <div>
                    <span className="guide-label">
                      Technology Guide
                    </span>

                    <h3>{guide.title}</h3>
                    <p>{guide.description}</p>

                    <div className="guide-details">
                      <span>
                        Difficulty: {guide.difficulty}
                      </span>
                      <span>{guide.time}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="primary-button"
                    onClick={() => openGuide(guide)}
                  >
                    Open Guide
                  </button>
                </article>
              ))
            ) : (
              <div className="empty-state">
                <h3>No guides found</h3>

                <p>
                  Try using a shorter search, such as
                  Wi-Fi, printer, phone, or password.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Search;