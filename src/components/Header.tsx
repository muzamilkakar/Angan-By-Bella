import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { instagramCTAUrl } from '../config'

function LogoMark() {
  return (
    <svg
      width="168"
      height="46"
      viewBox="0 0 168 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Angan by Bella"
    >
      <text
        x="0"
        y="24"
        fontFamily="'Noto Nastaliq Urdu', serif"
        fontSize="20"
        fill="#4A2C1A"
        fontWeight="600"
        letterSpacing="1.2"
      >
        انگن
      </text>
      <text
        x="0"
        y="41"
        fontFamily="'Karla', sans-serif"
        fontSize="8"
        fill="#7A6A57"
        letterSpacing="4.5"
        fontWeight="400"
      >
        BY BELLA
      </text>
    </svg>
  )
}

function InstagramIcon({ size = 16 }: { size?: number }) {
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
          <button
            className={`hamburger-btn ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className="desktop-nav" style={{ justifyContent: 'flex-start' }}>
            <Link
              to="/"
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About
            </Link>
          </nav>

          <Link to="/" className="header-center" aria-label="Home">
            <LogoMark />
            <span className="header-label">By Bella</span>
          </Link>

          <nav className="desktop-nav" style={{ justifyContent: 'flex-end' }}>
            <Link
              to="/category"
              className={`nav-link ${location.pathname === '/category' ? 'active' : ''}`}
            >
              Category
            </Link>
            <a
              href={instagramCTAUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon-link"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </nav>
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
