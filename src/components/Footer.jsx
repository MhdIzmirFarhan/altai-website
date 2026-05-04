import { Link } from 'react-router-dom'
import './Footer.css'
import { asset } from '../config'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Left — brand */}
        <div className="footer-brand">
          <img src={asset('logo.png')} alt="Maxxtech System" className="nav-logo" />
          <p className="footer-tagline">
            Precision RFID solutions for enterprise inventory and asset management.
          </p>
        </div>

        {/* Middle — nav links */}
        <div className="footer-col">
          <p className="footer-col-title">Company</p>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Products</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Right — contact info */}
        <div className="footer-col">
          <p className="footer-col-title">Contact</p>
          <a href="mailto:hello@altai-rfid.com">hello@altai-rfid.com</a>
          <a href="tel:+12345678910">+1 (234) 567-891</a>
          <p className="footer-address">
            B-10-09 Menara B, Dataran Prima<br />
            Petaling Jaya, 47301 Selangor
          </p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Maxxtech System. All rights reserved.</p>
        <p>Built with precision.</p>
      </div>
    </footer>
  )
}

export default Footer