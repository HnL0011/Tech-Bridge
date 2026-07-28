import techBridgeSupport from "../data/support";

function Support({ setCurrentPage }) {
  return (
    <main className="app">
      {/* Header */}
      <header className="home-header">
        <button
          className="logo-button"
          onClick={() => setCurrentPage("home")}
        >
          🌉 TechBridge
        </button>

        <nav className="top-nav">
          <button onClick={() => setCurrentPage("home")}>Home</button>
          <button onClick={() => setCurrentPage("search")}>Search</button>
          <button className="active">Support</button>
          <button onClick={() => setCurrentPage("profile")}>Profile</button>
          <button onClick={() => setCurrentPage("login")}>Log Out</button>
        </nav>
      </header>

      {/* Support Card */}
      <section className="support-card">
        <h1>📞 {techBridgeSupport.company}</h1>

        <p>{techBridgeSupport.description}</p>

        <div className="support-info">
          <h3>Contact Information</h3>

          <p>
            <strong>📞 Phone:</strong> {techBridgeSupport.phone}
          </p>

          <p>
            <strong>📧 Email:</strong> {techBridgeSupport.email}
          </p>

          <p>
            <strong>💬 Live Chat:</strong> {techBridgeSupport.liveChat}
          </p>

          <p>
            <strong>🕒 Hours:</strong>
            <br />
            {techBridgeSupport.hours.weekdays}
            <br />
            {techBridgeSupport.hours.time}
            <br />
            {techBridgeSupport.hours.timezone}
          </p>

          <p>
            <strong>⏱ Response Time:</strong>{" "}
            {techBridgeSupport.responseTime}
          </p>
        </div>

        {/* FAQ */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>

          {techBridgeSupport.faq.map((item, index) => (
            <div key={index} className="faq-item">
              <h4>{item.question}</h4>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="support-disclaimer">
          <p>{techBridgeSupport.disclaimer}</p>
        </div>

        {/* Buttons */}
        <div className="support-buttons">
          <button onClick={() => setCurrentPage("home")}>
            🏠 Return Home
          </button>

          <button onClick={() => setCurrentPage("search")}>
            🔍 Search Guides
          </button>

          <button onClick={() => setCurrentPage("profile")}>
            👤 Profile
          </button>
        </div>
      </section>
    </main>
  );
}

export default Support;