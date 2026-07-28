import './FeaturedCategories.css';

function FeaturedCategories() {
  return (
    <section className="featured-categories">
      <div className="featured-container">

        <div className="featured-heading">
          <span className="featured-tag">
            Marketplace
          </span>

          <h2>
            Browse by Category
          </h2>

          <p>
            Everything you need for After Effects in one place.
          </p>
        </div>

        <div className="category-grid">

          <div className="category-card">
            <div className="category-icon">🎬</div>
            <h3>Templates</h3>
            <p>Professional AE Templates</p>
          </div>

          <div className="category-card">
            <div className="category-icon">🧩</div>
            <h3>Plugins</h3>
            <p>Powerful Workflow Tools</p>
          </div>

          <div className="category-card">
            <div className="category-icon">⚙️</div>
            <h3>Scripts</h3>
            <p>Automation & Productivity</p>
          </div>

          <div className="category-card">
            <div className="category-icon">🎨</div>
            <h3>Presets</h3>
            <p>Animation Presets</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default FeaturedCategories;