import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { instagramCTAUrl } from '../config'

function LogoMark() {
  return (
    <svg
      width="200"
      height="58"
      viewBox="0 0 200 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Angan by Bella"
    >
      <defs>
        <linearGradient id="goldLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#B08D5B" stopOpacity="0" />
          <stop offset="50%" stopColor="#B08D5B" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#B08D5B" stopOpacity="0" />
        </linearGradient>
      </defs>

      <text
        x="100"
        y="26"
        textAnchor="middle"
        fontFamily="'Noto Nastaliq Urdu', serif"
        fontSize="24"
        fill="#4A2C1A"
        fontWeight="600"
        letterSpacing="1.5"
      >
        انگن
      </text>

      <line x1="60" y1="38" x2="140" y2="38" stroke="url(#goldLine)" strokeWidth="0.5" />
      <polygon points="60,35 63,38 60,41 57,38" fill="#B08D5B" opacity="0.3" />
      <polygon points="140,35 143,38 140,41 137,38" fill="#B08D5B" opacity="0.3" />

      <text
        x="100"
        y="52"
        textAnchor="middle"
        fontFamily="'Karla', sans-serif"
        fontSize="10"
        fill="#7A6A57"
        letterSpacing="5"
        fontWeight="400"
      >
        BY BELLA
      </text>
    </svg>
  )
}

function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <div className="header-left">
            <button
              className="hamburger-btn"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
            <Link to="/" className="header-center" aria-label="Home">
              <LogoMark />
            </Link>
          </div>

          <div className="header-right">
            <div className="nav-glass-pill">
              <Link
                to="/"
                className={`nav-pill-item ${location.pathname === '/' ? 'active' : ''}`}
              >
                Home
              </Link>
              <span className="nav-pill-sep" aria-hidden="true" />
              <Link
                to="/about"
                className={`nav-pill-item ${location.pathname === '/about' ? 'active' : ''}`}
              >
                About
              </Link>
              <span className="nav-pill-sep" aria-hidden="true" />
              <Link
                to="/category"
                className={`nav-pill-item ${location.pathname.startsWith('/category') ? 'active' : ''}`}
              >
                Category
              </Link>
              <a
                href={instagramCTAUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-pill-icon"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/category" className="nav-link" onClick={() => setMenuOpen(false)}>Category</Link>
        <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link>
        <a
          href={instagramCTAUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
          style={{ display: 'flex', alignItems: 'center', gap: 10 }}
        >
          <InstagramIcon size={20} />
          Instagram
        </a>
      </div>
    </>
  )
}
