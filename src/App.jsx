// App.jsx
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SoftAurora from './components/SoftAurora';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';
import { asset } from './config';

const HomeContent = () => (
  <main className="hero-center">
    <div className="hero-caption">
      <h1>EMPOWERING<br /><span className="accent">SMARTER</span><br />ICT SOLUTIONS</h1>
      <p className="desc">
        Enterprise-grade RFID solutions for warehouse management,
        asset tracking, and intelligent inventory control.
      </p>
      <div className="btns">
        <Link to="/about" className="btn-primary">Learn More</Link>
        <Link to="/contact" className="btn-ghost">Get in Touch →</Link>
      </div>
    </div>
  </main>
);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">

      {/* SoftAurora background */}
      <div className="hyperspeed-bg">
        <SoftAurora
          speed={1.6}
          scale={2.2}
          brightness={1.6}
          color1="#f7f7f7"
          color2="#2a8fa6"
          noiseFrequency={2.5}
          noiseAmplitude={4}
          bandHeight={0.5}
          bandSpread={1}
          octaveDecay={0.1}
          layerOffset={0}
          colorSpeed={1}
          enableMouseInteraction
          mouseInfluence={0.25}
        />
      </div>

      {/* NAV */}
      <nav className="nav">
        <img src={asset('logo.png')} alt="Maxxtech System" className="nav-logo" />

        {/* Desktop links */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Hamburger — mobile only */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`ham-line ${menuOpen ? 'open' : ''}`} />
          <span className={`ham-line ${menuOpen ? 'open' : ''}`} />
          <span className={`ham-line ${menuOpen ? 'open' : ''}`} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div className={`mobile-menu ${menuOpen ? 'visible' : ''}`}>
        <Link to="/"         onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about"    onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>Products</Link>
        <Link to="/contact"  onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>

      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

      <div className="grid-overlay" />
    </div>
  );
}

export default App;