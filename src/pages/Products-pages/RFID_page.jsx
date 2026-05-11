import './ProductPage.css';

const Altai_AI_page = () => {
  return (
    <section className="product-page">

      <div className="product-hero">
        <div className="product-content">

          <span className="product-label">ALTAI PRODUCT</span>

          <h1>ALTAI AI</h1>

          <p>
            Placeholder description for Altai AI.
            This section can later include detailed product information,
            features, technical specifications, use cases, and benefits.
          </p>

          <div className="product-buttons">
            <button>Learn More</button>
            <button className="secondary-btn">Request Demo</button>
          </div>

        </div>

        <div className="product-image">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Altai AI"
          />
        </div>
      </div>

      <div className="product-features">

        <div className="feature-box">
          <h3>Feature 01</h3>
          <p>Placeholder feature description.</p>
        </div>

        <div className="feature-box">
          <h3>Feature 02</h3>
          <p>Placeholder feature description.</p>
        </div>

        <div className="feature-box">
          <h3>Feature 03</h3>
          <p>Placeholder feature description.</p>
        </div>

      </div>

    </section>
  );
};

export default Altai_AI_page;