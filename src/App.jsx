// App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import HeroCard from './components/HeroCard'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import './App.css'

import { asset } from './config'

// We create this to hold your main landing page content
const HomeContent = () => (
  <main className="hero-center">
    <HeroCard />
    <div className="hero-caption">
      <h1>BUILD THE<br /><span className="accent">FUTURE</span></h1>
      <p className="desc">
        Cutting-edge digital experiences that push boundaries
        and scale your vision into reality.
      </p>
      <div className="btns">
        <Link to="/about" className="btn-primary">Learn More</Link>
        <Link to="/contact" className="btn-ghost">Get in Touch →</Link>
      </div>
    </div>
  </main>
);

function App() {
  return (
    <div className="app">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={asset('hero-bg.mp4')} type="video/mp4" />

      </video>

      {/* NAV */}
      <nav className="nav">
        <img src={asset('logo.png')} alt="Maxxtech System" className="nav-logo" />

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

      {/* Background stays on all pages */}
      <div className="grid-overlay" />
    </div>
  )
}

export default App