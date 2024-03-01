import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

import "./styles/App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home-link");

  return (
    <AnimatePresence>
      <Router>
        <nav className="navbar">
          <Link to="/" className={currentPage}>
            Home
          </Link>
          <Link to="/projects" className={currentPage}>
            Projects
          </Link>
          <Link to="/experience" className={currentPage}>
            Experience
          </Link>
          <Link to="/contact" className={currentPage}>
            Contact
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home setCurrentPage={setCurrentPage} />} />
          <Route
            path="/projects"
            element={<Projects setCurrentPage={setCurrentPage} />}
          />
          <Route
            path="/experience"
            element={<Experience setCurrentPage={setCurrentPage} />}
          />
          <Route
            path="/contact"
            element={<Contact setCurrentPage={setCurrentPage} />}
          />
        </Routes>
      </Router>
    </AnimatePresence>
  );
}

export default App;
