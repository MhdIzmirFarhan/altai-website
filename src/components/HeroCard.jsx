import { useState } from 'react'
import './HeroCard.css'

function HeroCard() {
  const [active, setActive] = useState(false)

  return (
    <div
      className={`card-outer ${active ? 'active' : ''}`}
      onClick={() => setActive(prev => !prev)}
    >
      {/* Rotating rings */}
      <div className="ring ring-1">
        <div className="ring-dot" />
      </div>
      <div className="ring ring-2" />
      <div className="ring ring-3" />

      {/* Glass inner */}
      <div className="card-inner">
        <span className="card-title">MAXX<br />TECH</span>
        <span className="card-sub">sdn bhd.</span>
        <span className="card-badge">&#9679; Est. 2024</span>
      </div>
    </div>
  )
}

export default HeroCard