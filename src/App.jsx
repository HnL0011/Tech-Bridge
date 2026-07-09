import { useState } from "react";

import "./App.css";

import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {

  const [currentPage, setCurrentPage] = useState("login");

  if (currentPage === "login") {
    return <Login setCurrentPage={setCurrentPage} />;
  }

  if (currentPage === "home") {
    return <Home setCurrentPage={setCurrentPage} />;
  }

}

export default App;import { useState } from "react";

import "./App.css";

import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {

  const [currentPage, setCurrentPage] = useState("login");

  if (currentPage === "login") {
    return <Login setCurrentPage={setCurrentPage} />;
  }

  if (currentPage === "home") {
    return <Home setCurrentPage={setCurrentPage} />;
  }

}

export default App;