import { useState } from "react";
import "./App.css";

import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  // Controls which screen is currently displayed
  const [currentPage, setCurrentPage] = useState("login");

  // Login screen
  if (currentPage === "login") {
    return <Login setCurrentPage={setCurrentPage} />;
  }

  // Home screen
  if (currentPage === "home") {
    return <Home setCurrentPage={setCurrentPage} />;
  }

  // Backup screen in case the page name is incorrect
  return (
    <div className="app">
      <h1>Page not found</h1>

      <button onClick={() => setCurrentPage("login")}>
        Return to Login
      </button>
    </div>
  );
}

export default App;