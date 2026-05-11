import { useEffect, useRef, useState } from 'react'
import '../styles/About.css'

import { asset } from '../config'

const stats = [
  { value: '99%+', label: 'Inventory Accuracy' },
  { value: '< 1s', label: 'Real-Time Scan Speed' },
  { value: '100%', label: 'Industrial Grade Hardware' },
  { value: '24/7', label: 'System Uptime Target' },
]

const competencies = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="7" width="22" height="14" rx="2" stroke="#34A8C0" strokeWidth="1.2"/>
        <path d="M8 11h12M8 15h8" stroke="#34A8C0" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="21" cy="15" r="2" fill="#7EC3D1"/>
      </svg>
    ),
    title: 'Warehouse Management Systems',
    short: 'WMS',
    desc: 'Streamlining stock movement and improving picking accuracy through automated RFID identification — turning your warehouse floor into a live, data-rich environment.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="9" stroke="#34A8C0" strokeWidth="1.2"/>
        <circle cx="14" cy="14" r="4" stroke="#7EC3D1" strokeWidth="1.2"/>
        <circle cx="14" cy="14" r="1.5" fill="#34A8C0"/>
        <path d="M14 5v2M14 21v2M5 14h2M21 14h2" stroke="#34A8C0" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Asset Management',
    short: 'AMS',
    desc: 'Real-time tracking and full lifecycle management for critical infrastructure and high-value equipment. Know where every asset is — always.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="9" height="9" rx="1.5" stroke="#34A8C0" strokeWidth="1.2"/>
        <rect x="16" y="3" width="9" height="9" rx="1.5" stroke="#34A8C0" strokeWidth="1.2"/>
        <rect x="3" y="16" width="9" height="9" rx="1.5" stroke="#34A8C0" strokeWidth="1.2"/>
        <rect x="16" y="16" width="9" height="9" rx="1.5" stroke="#7EC3D1" strokeWidth="1.2"/>
        <path d="M12 7.5h4M12 20.5h4M20.5 12v4M7.5 12v4" stroke="#34A8C0" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Enterprise Integration',
    short: 'ERP / API',
    desc: 'Seamlessly interfacing with your existing ERP, WMS, or custom infrastructure — zero disruption, full data integrity, and uninterrupted operations from day one.',
  },
]

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

function StatCard({ value, label, delay }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`stat-card ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

function CompCard({ icon, title, short, desc, delay }) {
  const [ref, inView] = useInView()
  const [hovered, setHovered] = useState(false)
  return (
    <div
      ref={ref}
      className={`comp-card ${inView ? 'visible' : ''} ${hovered ? 'hovered' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="comp-top">
        <div className="comp-icon">{icon}</div>
        <span className="comp-badge">{short}</span>
      </div>
      <h3 className="comp-title">{title}</h3>
      <p className="comp-desc">{desc}</p>
      <div className="comp-line" />
    </div>
  )
}

export default function About() {
  const [heroRef, heroInView] = useInView(0.1)
  const [missionRef, missionInView] = useInView(0.1)

  return (
    <div className="about-page">

      {/* Grid bg */}
      <div className="about-grid-bg" />

      {/* Glow blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      {/* ── HERO STATEMENT ── */}
      <section className="about-hero" ref={heroRef}>
        <div className={`about-hero-inner ${heroInView ? 'visible' : ''}`}>
          <img src={asset('altai-tech.png')} alt="Altai" className="about-logo" />
          <div className="section-eyebrow">
            <span className="dot-live" />
            About Altai
          </div>
          <h1 className="about-h1">
            Altai Smart<br />
            <span className="accent">Inventory Management</span><br />
            System
          </h1>
          <p className="about-lead">
            Altai is a specialist RFID technology company delivering intelligent 
            inventory and asset management systems to enterprise operations. 
            Our Smart Inventory Management System gives businesses complete, 
            real-time visibility across their entire supply chain — from warehouse 
            floor to boardroom dashboard.
          </p>
        </div>

        {/* Decorative scan line */}
        <div className="scan-line" />
      </section>

      {/* ── STATS STRIP ── */}
      <section className="stats-strip">
        {stats.map((s, i) => (
          <StatCard key={s.label} value={s.value} label={s.label} delay={i * 80} />
        ))}
      </section>

      {/* ── MISSION ── */}
      <section className="mission-section" ref={missionRef}>
        <div className={`mission-inner ${missionInView ? 'visible' : ''}`}>
          <div className="mission-left">
            <div className="section-eyebrow">
              <span className="eyebrow-bar" />
              Our Mission
            </div>
            <h2 className="mission-h2">
              Eliminate the<br />guesswork from<br />your supply chain.
            </h2>
            <a href="#contact" className="cta-link">
              Talk to our team <span className="cta-arrow">→</span>
            </a>
          </div>
          <div className="mission-right">
            <p className="mission-body">
              By integrating robust, high-performance hardware with intuitive,
              scalable software architectures, we give enterprises the tools to
              optimize inventory accuracy, accelerate throughput, and secure
              valuable assets.
            </p>
            <p className="mission-body">
              We don't just track items — we provide the precision you need
              to scale with confidence. Our hardware-first integrity sets us
              apart: every solution is built on commercial-grade RFID
              infrastructure, not consumer alternatives.
            </p>
            <p className="mission-body">
              Founded on the principle that operational excellence starts with 
              absolute visibility, Altai brings enterprise-grade RFID expertise 
              to warehouses, logistics centres, and asset-heavy environments 
              across the region.
            </p>
            <div className="hardware-badge">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2l1.5 3 3.5.5-2.5 2.5.5 3.5L8 10l-3 1.5.5-3.5L3 5.5l3.5-.5L8 2z" fill="#34A8C0"/>
              </svg>
              Hardware-First Integrity — Commercial Grade Only
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPETENCIES ── */}
      <section className="comp-section">
        <div className="comp-header">
          <div className="section-eyebrow">
            <span className="eyebrow-bar" />
            Core Competencies
          </div>
          <h2 className="comp-h2">Built for enterprise.<br />Engineered for precision.</h2>
        </div>
        <div className="comp-grid">
          {competencies.map((c, i) => (
            <CompCard key={c.short} {...c} delay={i * 100} />
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="cta-banner-inner">
          <div className="cta-text">
            <p className="cta-eyebrow">Ready to optimize your inventory flow?</p>
            <h2 className="cta-h2">Let's build your RFID architecture.</h2>
          </div>
          <a href="#contact" className="cta-btn">
            Request a Technical Consultation
            <span className="cta-btn-arrow">→</span>
          </a>
        </div>
        <div className="cta-grid" />
      </section>

    </div>
  )
}