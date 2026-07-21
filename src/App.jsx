import { useState } from "react";
import "./App.css";

import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Guide from "./Pages/Guide";
import Profile from "./Pages/Profile";

import guides from "./data/guides";

function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [favoriteGuideIds, setFavoriteGuideIds] = useState([]);

  function openSearch(query = "") {
    setSearchQuery(query);
    setCurrentPage("search");
  }

  function openGuide(guide) {
    setSelectedGuide(guide);
    setCurrentPage("guide");
  }

  function toggleFavorite(guideId) {
    setFavoriteGuideIds((currentFavorites) => {
      const guideIsFavorite = currentFavorites.includes(guideId);

      if (guideIsFavorite) {
        return currentFavorites.filter((id) => id !== guideId);
      }

      return [...currentFavorites, guideId];
    });
  }

  const favoriteGuides = guides.filter((guide) =>
    favoriteGuideIds.includes(guide.id),
  );

  function renderCurrentPage() {
    switch (currentPage) {
      case "login":
        return <Login setCurrentPage={setCurrentPage} />;

      case "home":
        return (
          <Home
            setCurrentPage={setCurrentPage}
            openSearch={openSearch}
            openGuide={openGuide}
            guides={guides}
          />
        );

      case "search":
        return (
          <Search
            setCurrentPage={setCurrentPage}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            openGuide={openGuide}
          />
        );

      case "guide":
        if (!selectedGuide) {
          return (
            <main className="centered-page">
              <section className="message-card">
                <h1>No Guide Selected</h1>
                <p>Please return to Search and choose a guide.</p>

                <button
                  type="button"
                  className="primary-button"
                  onClick={() => setCurrentPage("search")}
                >
                  Go to Search
                </button>
              </section>
            </main>
          );
        }

        return (
          <Guide
            guide={selectedGuide}
            setCurrentPage={setCurrentPage}
            favoriteGuideIds={favoriteGuideIds}
            toggleFavorite={toggleFavorite}
          />
        );

      case "profile":
        return (
          <Profile
            setCurrentPage={setCurrentPage}
            favoriteGuides={favoriteGuides}
            openGuide={openGuide}
            toggleFavorite={toggleFavorite}
          />
        );

      default:
        return (
          <main className="centered-page">
            <section className="message-card">
              <h1>Page Not Found</h1>
              <p>The page you requested could not be found.</p>

              <button
                type="button"
                className="primary-button"
                onClick={() => setCurrentPage("home")}
              >
                Return Home
              </button>
            </section>
          </main>
        );
    }
  }

  return renderCurrentPage();
}

export default App;