import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          Motion<span className="navbar-logo-accent">Nest</span>
        </Link>

        <nav className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="navbar-link" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/browse" className="navbar-link" onClick={closeMenu}>
            Browse
          </Link>
          <Link to="/categories" className="navbar-link" onClick={closeMenu}>
            Categories
          </Link>
          <Link to="/pricing" className="navbar-link" onClick={closeMenu}>
            Pricing
          </Link>
          <Link to="/portfolio" className="navbar-link" onClick={closeMenu}>
            Portfolio
          </Link>
          <Link to="/contact" className="navbar-link" onClick={closeMenu}>
            Contact
          </Link>

          <div className="navbar-actions-mobile">
            <button type="button" className="navbar-btn navbar-btn-search">
              Search
            </button>
            <button type="button" className="navbar-btn navbar-btn-login">
              Login
            </button>
            <button type="button" className="navbar-btn navbar-btn-signup">
              Sign Up
            </button>
          </div>
        </nav>

        <div className="navbar-actions-desktop">
          <button
            type="button"
            className="navbar-icon-btn"
            aria-label="Search"
          >
            <svg
              className="navbar-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M21 21L16.65 16.65"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button type="button" className="navbar-btn navbar-btn-login">
            Login
          </button>
          <button type="button" className="navbar-btn navbar-btn-signup">
            Sign Up
          </button>
        </div>

        <button
          type="button"
          className={`navbar-hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;