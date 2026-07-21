import { useState } from "react";
import "./App.css";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Guide from "./pages/Guide";
import Profile from "./pages/Profile";

function App() {
  const [currentPage, setCurrentPage] = useState("login");

  const [selectedGuide, setSelectedGuide] = useState({
    title: "Connect to Wi-Fi",
    description:
      "Follow these simple steps to connect your device to a wireless network.",
    difficulty: "Easy",
    time: "3 minutes",
  });

  function openGuide(guide) {
    setSelectedGuide(guide);
    setCurrentPage("guide");
  }

  if (currentPage === "login") {
    return <Login setCurrentPage={setCurrentPage} />;
  }

  if (currentPage === "home") {
    return (
      <Home
        setCurrentPage={setCurrentPage}
        openGuide={openGuide}
      />
    );
  }

  if (currentPage === "search") {
    return (
      <Search
        setCurrentPage={setCurrentPage}
        openGuide={openGuide}
      />
    );
  }

  if (currentPage === "guide") {
    return (
      <Guide
        guide={selectedGuide}
        setCurrentPage={setCurrentPage}
      />
    );
  }

  if (currentPage === "profile") {
    return (
      <Profile
        setCurrentPage={setCurrentPage}
        openGuide={openGuide}
      />
    );
  }

  return (
    <div className="centered-page">
      <div className="message-card">
        <h1>Page Not Found</h1>

        <button
          type="button"
          className="primary-button"
          onClick={() => setCurrentPage("login")}
        >
          Return to Login
        </button>
      </div>
    </div>
  );
}

export default App;