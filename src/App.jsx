import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Blog from "./pages/blog";
import WhatWeDo from "./pages/whatwedo";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">
            <img src="./src/images/logo.png" alt="Logo" />
          </div>
          <button className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            ☰
          </button>
          <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="dropdown">
              <Link to="#about" onClick={(e) => { e.stopPropagation(); setOpenDropdown(openDropdown === "about" ? null : "about"); }}>
                About <span className={`arrow ${openDropdown === "about" ? "open" : ""}`}>▼</span>
              </Link>
              {openDropdown === "about" && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/whatwedo">What We Do</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="dropdown">
              <Link to="#stories" onClick={(e) => { e.stopPropagation(); setOpenDropdown(openDropdown === "stories" ? null : "stories"); }}>
                Our Stories <span className={`arrow ${openDropdown === "stories" ? "open" : ""}`}>▼</span>
              </Link>
              {openDropdown === "stories" && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/blog">Blog Posts</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="content slide-in">
            <h1>Explore, Learn, and<br /> Discover with Inspector<br /> Turawa & Friends Tours</h1>
            <h2>Connecting You to Inspiring Destinations<br /> and Unforgettable Experiences</h2>
            <div className="newsletter">
              <p>Subscribe to our newsletter</p>
              <button onClick={() => alert(`Subscribed with: ${email}`)}>
                <span className="arrow">&gt;</span>
              </button>
            </div>
            <p className="disclaimer">
              <strong>
                <img src="./src/images/disclaimer.png" alt="Disclaimer" /> Disclaimer:
              </strong>{" "}
              Tour itineraries, schedules, and services may change due to unforeseen circumstances.
            </p>
          </div>
          <div className="image">
            <img src="./src/images/homei.png" alt="Tour Group" />
          </div>
        </section>

        {/* Show WhatWeDo only in mobile view */}
        {isMobileView && <WhatWeDo />}
      </main>
    </div>
  );
}

export default App;
