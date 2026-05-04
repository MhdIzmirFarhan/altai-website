import { useState, useEffect, useRef } from 'react';
import '../styles/Services.css';

import { asset } from '../config'

const SERVICES_DATA = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="6" width="18" height="10" rx="1.5" stroke="#34A8C0" strokeWidth="1.1"/>
        <path d="M6 10h10M6 13h6" stroke="#34A8C0" strokeWidth="1.1" strokeLinecap="round"/>
        <circle cx="17" cy="13" r="1.5" fill="#7EC3D1"/>
      </svg>
    ),
    title: 'Warehouse Management',
    description: 'Streamline stock movement and picking accuracy through automated RFID identification. Turn your warehouse floor into a live, data-rich environment.',
    badge: 'WMS',
    stat: '99%+',
    statLabel: 'Inventory Accuracy',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="7" stroke="#34A8C0" strokeWidth="1.1"/>
        <circle cx="11" cy="11" r="3" stroke="#7EC3D1" strokeWidth="1.1"/>
        <circle cx="11" cy="11" r="1.2" fill="#34A8C0"/>
        <path d="M11 4v2M11 16v2M4 11h2M16 11h2" stroke="#34A8C0" strokeWidth="1.1" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Asset Tracking',
    description: 'Real-time lifecycle management for critical infrastructure and high-value equipment. Know where every asset is — always.',
    badge: 'AMS',
    stat: '< 1s',
    statLabel: 'Scan Response',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="7" height="7" rx="1.2" stroke="#34A8C0" strokeWidth="1.1"/>
        <rect x="13" y="2" width="7" height="7" rx="1.2" stroke="#34A8C0" strokeWidth="1.1"/>
        <rect x="2" y="13" width="7" height="7" rx="1.2" stroke="#34A8C0" strokeWidth="1.1"/>
        <rect x="13" y="13" width="7" height="7" rx="1.2" stroke="#7EC3D1" strokeWidth="1.1"/>
        <path d="M9 5.5h4M9 16.5h4M16.5 9v4M5.5 9v4" stroke="#34A8C0" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Enterprise Integration',
    description: 'Seamless ERP and API interfacing with zero disruption and full data integrity. Designed to slot into your existing stack on day one.',
    badge: 'ERP / API',
    stat: '100%',
    statLabel: 'Uptime Target',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 16l4-5 3 3 4-6 5 5" stroke="#34A8C0" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="2" width="18" height="18" rx="2" stroke="#34A8C0" strokeWidth="1.1"/>
        <circle cx="17" cy="6" r="1.5" fill="#7EC3D1"/>
      </svg>
    ),
    title: 'Analytics & Reporting',
    description: 'Live dashboards and historical reporting to surface actionable insights from your RFID data stream. Decisions backed by real numbers.',
    badge: 'Insights',
    stat: 'Live',
    statLabel: 'Data Feed',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V5l7-3z" stroke="#34A8C0" strokeWidth="1.1" strokeLinejoin="round"/>
        <path d="M8 11l2 2 4-4" stroke="#7EC3D1" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Security & Compliance',
    description: 'Audit trails, access control, and compliance frameworks built into every deployment. Industrial-grade protection for your data and assets.',
    badge: 'Security',
    stat: 'ISO',
    statLabel: 'Grade Standards',
  },
];


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

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [heroRef, heroInView] = useInView(0.1);
  const [gridRef, gridInView] = useInView(0.1);
  const [expandedCard, setExpandedCard] = useState(null)

  const ITEM_WIDTH = 280;
  const GAP = 14;

  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const offset = (containerWidth / 2) - (ITEM_WIDTH / 2);
  const translate = currentIndex * (ITEM_WIDTH + GAP) - offset;
  
  useEffect(() => {
    const timer = setInterval(() => {
    setCurrentIndex(prev => (prev + 1) % SERVICES_DATA.length);   
  }, 3500);
    return () => clearInterval(timer);
  }, []);

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

        {/* scan line */}
        <div className="scan-line" />
      </section>

      {/* ── SERVICE CARDS ── */}
      <section className="cards-section">
        <div className="cards-grid">
          {SERVICES_DATA.map((s, i) => (
            <div
              key={i}
              className={`service-card ${expandedCard === i ? 'expanded' : ''}`}
              onClick={() => setExpandedCard(expandedCard === i ? null : i)}
            >
              <div className="sc-header">
                <div className="ci-icon">{s.icon}</div>
                <div className="sc-header-right">
                  <span className="ci-badge">{s.badge}</span>
                  <span className="sc-arrow">{expandedCard === i ? '↑' : '↓'}</span>
                </div>
              </div>
      
              <div className="sc-title">{s.title}</div>
      
              <div className="sc-expandable">
                <p className="ci-desc">{s.description}</p>
                <div className="ci-footer">
                  <span className="ci-stat">{s.stat}</span>
                  <span className="ci-stat-label">{s.statLabel}</span>
                </div>
              </div>
      
              {expandedCard !== i && (
                <p className="ci-hint">Click to learn more</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── FULL GRID ── */}
      <section className="services-grid-section" ref={gridRef}>
        <div className="services-grid-header">
          <div className="section-eyebrow">
            <span className="eyebrow-bar" />
            All Capabilities
          </div>
          <h2 className="services-grid-h2">
            Every layer of your<br />operation, covered.
          </h2>
        </div>

        <div className="services-grid">
          {SERVICES_DATA.map((s, i) => (
            <div
              key={i}
              className={`sg-card ${gridInView ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 90}ms` }}
              onMouseEnter={() => setHovered(`g${i}`)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="sg-top">
                <div className="sg-icon">{s.icon}</div>
                <span className="sg-badge">{s.badge}</span>
              </div>
              <h3 className="sg-title">{s.title}</h3>
              <p className="sg-desc">{s.description}</p>
              <div className="sg-stat-row">
                <span className="sg-stat">{s.stat}</span>
                <span className="sg-stat-label">{s.statLabel}</span>
              </div>
              <div className={`sg-glow ${hovered === `g${i}` ? 'on' : ''}`} />
            </div>
          ))}
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
          <a href="#contact" className="cta-btn">
            Contact Our Team
            <span className="cta-btn-arrow">→</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;