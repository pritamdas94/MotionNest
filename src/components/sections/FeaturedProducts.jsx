import "./FeaturedProducts.css";

const products = [
  {
    id: 1,
    title: "Cinematic Logo Reveal",
    category: "Template",
    author: "MotionNest",
    price: "$19",
    rating: "4.9",
    downloads: "12.4k",
  },
  {
    id: 2,
    title: "Modern Titles Pack",
    category: "Template",
    author: "Pixel Studio",
    price: "$24",
    rating: "4.8",
    downloads: "9.2k",
  },
  {
    id: 3,
    title: "Flow Animation Plugin",
    category: "Plugin",
    author: "CreativeLab",
    price: "$39",
    rating: "5.0",
    downloads: "6.8k",
  },
  {
    id: 4,
    title: "Instagram Reel Pack",
    category: "Preset",
    author: "DesignX",
    price: "$15",
    rating: "4.7",
    downloads: "18k",
  },
  {
    id: 5,
    title: "HUD Elements",
    category: "Template",
    author: "MotionPro",
    price: "$29",
    rating: "4.9",
    downloads: "7.6k",
  },
  {
    id: 6,
    title: "Camera Transitions",
    category: "Preset",
    author: "Creator Hub",
    price: "$17",
    rating: "4.8",
    downloads: "11k",
  },
  {
    id: 7,
    title: "UI Animation Kit",
    category: "Plugin",
    author: "Studio Max",
    price: "$34",
    rating: "5.0",
    downloads: "5.4k",
  },
  {
    id: 8,
    title: "Corporate Intro",
    category: "Template",
    author: "Motion Studio",
    price: "$22",
    rating: "4.9",
    downloads: "14k",
  },
];

function FeaturedProducts() {
  return (
    <section className="featured-products">
      <div className="container">

        <div className="section-heading">
          <span>Marketplace</span>
          <h2>Featured Products</h2>
          <p>
            Hand-picked premium assets for professional motion designers.
          </p>
        </div>

        <div className="products-grid">

          {products.map((product) => (

            <div className="product-card" key={product.id}>

              <div className="product-image">
                <span className="badge">{product.category}</span>
              </div>

              <div className="product-content">

                <h3>{product.title}</h3>

                <p className="author">
                  by {product.author}
                </p>

                <div className="product-meta">

                  <span>⭐ {product.rating}</span>

                  <span>⬇ {product.downloads}</span>

                </div>

                <div className="product-footer">

                  <strong>{product.price}</strong>

                  <button>Preview</button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;