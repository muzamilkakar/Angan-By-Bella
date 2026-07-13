import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { instagramCTAUrl } from '../config'
import JaliPattern from './JaliPattern'
import Logo from './Logo'

function InstagramIcon({ size = 18 }: { size?: number }) {
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

          <nav className="desktop-nav">
            <div className="desktop-nav-left">
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
            </div>
          </nav>

          <div className="header-center">
            <Logo />
          </div>

          <nav className="desktop-nav">
            <div className="desktop-nav-right">
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
                aria-label="Visit us on Instagram"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </nav>
        </div>

        <div className="jali-divider" aria-hidden="true">
          <JaliPattern />
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
          style={{ display: 'flex', alignItems: 'center', gap: 8 }}
        >
          <InstagramIcon size={20} />
          Instagram
        </a>
      </div>
    </>
  )
}
