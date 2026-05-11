import { useState, useEffect, useRef } from 'react';
import '../styles/Services.css';
import { asset } from '../config';

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const PRODUCTS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="7" width="22" height="14" rx="2" stroke="#34A8C0" strokeWidth="1.2"/>
        <path d="M8 12h12M8 16h8" stroke="#34A8C0" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="21" cy="16" r="2" fill="#7EC3D1"/>
      </svg>
    ),
    title: 'Altai RFID',
    badge: 'Core',
    desc: 'End-to-end RFID infrastructure for warehouse management, inventory accuracy, and asset tracking — built on commercial-grade hardware.',
    stat: '99%+',
    statLabel: 'Inventory Accuracy',
    href: 'https://www.altai-rfid.com',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="9" stroke="#34A8C0" strokeWidth="1.2"/>
        <path d="M10 14c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4" stroke="#34A8C0" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="2" fill="#7EC3D1"/>
        <path d="M14 5v2M14 21v2M5 14h2M21 14h2" stroke="#34A8C0" strokeWidth="1.1" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Altai AI',
    badge: 'Intelligence',
    desc: 'AI-powered analytics layered on top of your RFID data — surfacing predictive insights, anomaly detection, and automated decision support.',
    stat: 'Real-time',
    statLabel: 'AI Insights',
    href: 'https://www.altai-rfid.com',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="5" width="22" height="14" rx="2" stroke="#34A8C0" strokeWidth="1.2"/>
        <path d="M10 19v4M18 19v4M7 23h14" stroke="#34A8C0" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M8 10h12M8 13h8" stroke="#7EC3D1" strokeWidth="1.1" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Digital Signage',
    badge: 'Display',
    desc: 'Smart display solutions that integrate with your RFID system — delivering live inventory status, alerts, and operational data to your floor.',
    stat: 'Live',
    statLabel: 'Data Display',
    href: 'https://www.altai-rfid.com',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="9" y="3" width="10" height="10" rx="2" stroke="#34A8C0" strokeWidth="1.2"/>
        <circle cx="14" cy="8" r="2" fill="#7EC3D1"/>
        <path d="M6 13h16v2a8 8 0 01-16 0v-2z" stroke="#34A8C0" strokeWidth="1.2"/>
        <path d="M4 20h20M10 23v2M18 23v2" stroke="#34A8C0" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Robots',
    badge: 'Automation',
    desc: 'Autonomous robotic systems integrated with RFID for automated scanning, stock movement, and warehouse floor operations.',
    stat: '24/7',
    statLabel: 'Operations',
    href: 'https://www.altai-rfid.com',
  },
];

const Services = () => {
  const [hovered, setHovered] = useState(null);
  const [heroRef, heroInView] = useInView(0.1);
  const [cardsRef, cardsInView] = useInView(0.1);

  return (
    <div className="services-page">
      <div className="about-grid-bg" />
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      {/* ── HERO ── */}
      <section className="services-hero" ref={heroRef}>
        <div className={`services-hero-inner ${heroInView ? 'visible' : ''}`}>
          <img src={asset('altai-RFID.png')} alt="Altai" className="about-logo" />
          <div className="section-eyebrow">
            <span className="dot-live" />
            Our Services
          </div>
          <h1 className="services-h1">
            Altai RFID<br />
            <span className="accent">Smart Solutions</span><br />
            For Enterprise
          </h1>
          <p className="services-lead">
            Altai's enterprise RFID platform powers end-to-end visibility
            across warehouses, logistics operations, and asset-heavy environments.
            Every service is built on commercial-grade hardware and engineered
            for the precision demands of modern supply chains.
          </p>
        </div>
        <div className="scan-line" />
      </section>

      {/* ── PRODUCT CARDS ── */}
      <section className="cards-section" ref={cardsRef}>
        <div className="cards-grid">
          {PRODUCTS.map((p, i) => (
            <div
              key={i}
              className={`product-card ${cardsInView ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="pc-img">
                <div className="pc-img-inner">{p.icon}</div>
                <div className="pc-img-overlay" />
                <div className="pc-shine" />
                <span className="pc-badge">{p.badge}</span>
              </div>
              <div className="pc-body">
                <h3 className="pc-title">{p.title}</h3>
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="pc-link">
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="cards-intro">
          <a
            href="https://www.altai-rfid.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cards-link-btn"
          >
            Visit Altai Website →
          </a>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="cta-grid" />
        <div className="cta-banner-inner">
          <div className="cta-text">
            <p className="cta-eyebrow">Ready to optimize your inventory flow?</p>
            <h2 className="cta-h2">Request a technical consultation.</h2>
          </div>
          <a href="/contact" className="cta-btn">
            Contact Our Team
            <span className="cta-btn-arrow">→</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;