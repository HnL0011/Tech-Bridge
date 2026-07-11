function Profile({ setCurrentPage }) {
  return (
    <main className="app">
      {/* Profile Header */}
      <header className="profile-header">
        <h1>Profile</h1>
        <p>Manage your devices, saved guides, and settings.</p>
      </header>

      {/* User Information */}
      <section className="profile-card">
        <div className="profile-picture">HL</div>

        <div>
          <h2>Hunter</h2>
          <p>TechBridge User</p>
        </div>
      </section>

      {/* Profile Options */}
      <section className="profile-options">
        <button type="button">
          <span>📱</span>
          My Devices
        </button>

        <button type="button">
          <span>⭐</span>
          Saved Guides
        </button>

        <button type="button">
          <span>⚙️</span>
          Settings
        </button>

        <button
          type="button"
          onClick={() => setCurrentPage("login")}
        >
          <span>🚪</span>
          Log Out
        </button>
      </section>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button
          type="button"
          onClick={() => setCurrentPage("home")}
        >
          Home
        </button>

        <button type="button" disabled>
          Search
        </button>

        <button type="button">
          Profile
        </button>
      </nav>
    </main>
  );
}

export default Profile;