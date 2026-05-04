import { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();  

    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      company: e.target[2].value,
      message: e.target[3].value,
    };  

    try {
      const res = await fetch("https://altai-website-production.up.railway.app/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });  

      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="contact-page">
      <div className="about-grid-bg" />
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      {/* ── HERO ── */}
      <section className="contact-hero">
        <div className="section-eyebrow">
          <span className="dot-live" />
          Get In Touch
        </div>
        <h1 className="contact-h1">
          Let's Build Your<br />
          <span className="accent">RFID Architecture</span>
        </h1>
        <p className="contact-lead">
          Ready to optimize your inventory flow? Our engineering team is available
          for technical consultations, system scoping, and deployment planning.
        </p>
      </section>

      {/* ── CARD ── */}
      <div className="contact-container">
        <div className="contact-card">

          {/* LEFT: Info */}
          <div className="contact-info">

            <div className="info-block">
              <div className="info-icon-wrap">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 3h12v10a1 1 0 01-1 1H4a1 1 0 01-1-1V3z" stroke="#34A8C0" strokeWidth="1.1"/>
                  <path d="M3 3l6 6 6-6" stroke="#34A8C0" strokeWidth="1.1" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <p className="info-label">Email Us</p>
                <p className="info-value">hello@altai-rfid.com</p>
                <p className="info-value">support@altai-rfid.com</p>
              </div>
            </div>

            <div className="info-divider" />

            <div className="info-block">
              <div className="info-icon-wrap">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3.5 3a1 1 0 011-1h2.2l1.1 3-1.4 1a9 9 0 004.6 4.6l1-1.4 3 1.1v2.2a1 1 0 01-1 1C6.6 13.5 3.5 9 3.5 3z" stroke="#34A8C0" strokeWidth="1.1" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="info-label">Call Us</p>
                <p className="info-value">+1 (234) 567-891</p>
                <p className="info-value">+1 (234) 987-654</p>
              </div>
            </div>

            <div className="info-divider" />

            <div className="info-block">
              <div className="info-icon-wrap">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2a5 5 0 015 5c0 3.5-5 9-5 9S4 10.5 4 7a5 5 0 015-5z" stroke="#34A8C0" strokeWidth="1.1"/>
                  <circle cx="9" cy="7" r="1.8" stroke="#34A8C0" strokeWidth="1.1"/>
                </svg>
              </div>
              <div>
                <p className="info-label">Location</p>
                <p className="info-value">B-10-09 Menara B Manara Prima, Jalan PJU 1/39, Dataran Prima, 47301 Petaling Jaya</p>
                <p className="info-value">Selangor Petaling Jaya, 47301 Selangor</p>
              </div>
            </div>

            <div className="info-divider" />

            <div className="info-block">
              <div className="info-icon-wrap">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="6.5" stroke="#34A8C0" strokeWidth="1.1"/>
                  <path d="M9 5v4l2.5 2.5" stroke="#34A8C0" strokeWidth="1.1" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <p className="info-label">Business Hours</p>
                <p className="info-value">Mon – Fri &nbsp; 9 am – 6 pm</p>
                <p className="info-value info-closed">Sat, Sun &nbsp; Closed</p>
              </div>
            </div>

            {/* Map */}
            <div className="map-wrap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9137350213305!2d101.59482570000002!3d3.1175207000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4f3723d455a1%3A0x336ca53f47f560fd!2sUltra%20View%20Innovation%20Sdn%20Bhd!5e0!3m2!1sen!2smy!4v1776822852282!5m2!1sen!2smy"
                width="100%"
                height="140" 
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>

          </div>

          {/* RIGHT: Form */}
          <div className="contact-form-section">

            <div className="form-header">
              <div className="section-eyebrow" style={{ marginBottom: '12px' }}>
                <span className="eyebrow-bar" />
                Technical Consultation
              </div>
              <h2 className="form-h2">Send Us a Message</h2>
              <p className="form-sub">
                We'll respond within one business day with a tailored scoping proposal.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className={`field-group ${focused === 'name' ? 'focused' : ''}`}>
                <label className="field-label">Full Name</label>
                <input
                  type="text"
                  placeholder="John Smith"
                  required
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <div className={`field-group ${focused === 'email' ? 'focused' : ''}`}>
                <label className="field-label">Email Address</label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  required
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <div className={`field-group ${focused === 'company' ? 'focused' : ''}`}>
                <label className="field-label">Company / Organisation</label>
                <input
                  type="text"
                  placeholder="Acme Logistics Pte Ltd"
                  onFocus={() => setFocused('company')}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <div className={`field-group ${focused === 'msg' ? 'focused' : ''}`}>
                <label className="field-label">Message</label>
                <textarea
                  placeholder="Describe your project, environment, or requirements..."
                  rows="4"
                  required
                  onFocus={() => setFocused('msg')}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <button type="submit" className={`submit-btn ${submitted ? 'sent' : ''}`}>
                {submitted ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Message Sent
                  </>
                ) : (
                  <>
                    Request Consultation
                    <span className="btn-arrow">→</span>
                  </>
                )}
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;