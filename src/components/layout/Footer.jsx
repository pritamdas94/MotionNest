import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo">
             Motion<span className="footer-logo-accent">Nest</span>
            </Link>
            <p className="footer-tagline">
              Premium After Effects templates, plugins, scripts, and presets
              for professional motion designers.
            </p>
            <div className="footer-socials">
              
               <a href="https://twitter.com"
                className="footer-social-link"
                aria-label="Visit MotionNest on Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="footer-social-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 5.8c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1a4.1 4.1 0 0 0 3.3 4 4.2 4.2 0 0 1-1.8.1 4.1 4.1 0 0 0 3.8 2.9A8.3 8.3 0 0 1 2 18.4a11.6 11.6 0 0 0 6.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.2Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              
               <a href="https://instagram.com"
                className="footer-social-link"
                aria-label="Visit MotionNest on Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="footer-social-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              
              <a  href="https://youtube.com"
                className="footer-social-link"
                aria-label="Visit MotionNest on YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="footer-social-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 5 12 5 12 5s-6 0-7.7.3A2.7 2.7 0 0 0 2.4 7.2 28 28 0 0 0 2 12a28 28 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9C6 19 12 19 12 19s6 0 7.7-.3a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.8Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 9.7 14.5 12 10 14.3V9.7Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <nav className="footer-links-col" aria-labelledby="footer-heading-marketplace">
            <h3 id="footer-heading-marketplace" className="footer-heading">
              Marketplace
            </h3>
            <ul className="footer-link-list">
              <li>
                <Link to="/browse" className="footer-link">
                  Browse Assets
                </Link>
              </li>
              <li>
                <Link to="/categories" className="footer-link">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="footer-link">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="footer-link">
                  Portfolio
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="footer-links-col" aria-labelledby="footer-heading-company">
            <h3 id="footer-heading-company" className="footer-heading">
              Company
            </h3>
            <ul className="footer-link-list">
              <li>
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/become-a-seller" className="footer-link">
                  Become a Seller
                </Link>
              </li>
              <li>
                <Link to="/careers" className="footer-link">
                  Careers
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="footer-links-col" aria-labelledby="footer-heading-legal">
            <h3 id="footer-heading-legal" className="footer-heading">
              Legal
            </h3>
            <ul className="footer-link-list">
              <li>
                <Link to="/terms" className="footer-link">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/license" className="footer-link">
                  Licensing
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="footer-link">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} MotionNest. All rights reserved.
          </p>
          <p className="footer-credit">
            Built for motion designers, by motion designers.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;