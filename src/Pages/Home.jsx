function Home({ setCurrentPage }) {
  return (
    <main className="app">
      {/* Header */}
      <header className="home-header">
        <h1>TechBridge</h1>
        <p>Your trusted technology assistant</p>
      </header>

      {/* Search Bar */}
      <section className="search-section">
        <input
          type="text"
          placeholder="Ask a technology question..."
          aria-label="Search technology help"
        />
      </section>

      {/* Categories */}
      <section className="categories-section">
        <h2>Categories</h2>

        <div className="category-grid">
          <button type="button">📱 Phones</button>
          <button type="button">💻 Computers</button>
          <button type="button">🌐 Wi-Fi</button>
          <button type="button">🖨️ Printers</button>
          <button type="button">📺 Smart Devices</button>
          <button type="button">⭐ Favorites</button>
        </div>
      </section>

      {/* Recent Guides */}
      <section className="recent-section">
        <h2>Recent Guides</h2>

        <article className="guide-card">
          <h3>Connect to Wi-Fi</h3>
          <p>Simple, step-by-step connection instructions.</p>
        </article>

        <article className="guide-card">
          <h3>Print from an iPhone</h3>
          <p>Learn how to print using AirPrint.</p>
        </article>
      </section>

      {/* Temporary Navigation */}
      <nav className="bottom-nav">
        <button type="button">Home</button>

        <button type="button" disabled>
          Search
        </button>

        <button
          type="button"
          onClick={() => setCurrentPage("login")}
        >
          Log Out
        </button>
      </nav>
    </main>
  );
}

export default Home;