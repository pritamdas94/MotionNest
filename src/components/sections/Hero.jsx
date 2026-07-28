import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-container">
        <h1 className="hero-heading">
          Premium After Effects Templates &amp; Creative Assets
        </h1>

        <p className="hero-description">
          Discover handpicked templates, plugins, scripts, and presets built
          for motion designers who demand professional, production-ready
          quality.
        </p>

        <div className="hero-cta-group">
          <button type="button" className="hero-btn hero-btn-primary">
            Explore Assets
          </button>
          <button type="button" className="hero-btn hero-btn-secondary">
            Become a Seller
          </button>
        </div>

        <form className="hero-search" role="search">
          <svg
            className="hero-search-icon"
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
          <input
            type="text"
            className="hero-search-input"
            placeholder="Search templates, plugins, presets..."
            aria-label="Search assets"
          />
          <button type="submit" className="hero-search-btn">
            Search
          </button>
        </form>

        <div className="hero-floating-cards">
          <div className="hero-card hero-card-one">
            <span className="hero-card-icon">🎬</span>
            <p className="hero-card-label">AE Templates</p>
          </div>
          <div className="hero-card hero-card-two">
            <span className="hero-card-icon">🧩</span>
            <p className="hero-card-label">Plugins</p>
          </div>
          <div className="hero-card hero-card-three">
            <span className="hero-card-icon">⚙️</span>
            <p className="hero-card-label">Scripts</p>
          </div>
          <div className="hero-card hero-card-four">
            <span className="hero-card-icon">🎨</span>
            <p className="hero-card-label">Presets</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;