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

      {/* Urdu text "انگن" as vector paths — renders identically on iOS, Android, and Windows */}
      <path
        d="M93.7 17.0L93.4 16.7L93.3 16.0L93.3 15.4L93.3 14.8L93.5 14.2L93.9 13.8L94.4 13.4L94.9 12.9L95.3 12.4L95.7 12.0L96.2 11.7L96.8 11.6L97.3 11.2L97.8 10.9L98.3 10.8L98.8 10.5L99.2 10.0L99.7 9.6L100.2 9.4L100.8 9.2L101.2 8.8L101.8 8.6L102.3 8.4L102.8 8.1L103.3 7.8L103.9 7.7L104.3 7.2L104.9 7.0L105.5 7.2L105.7 7.6L105.8 8.2L105.7 8.8L105.7 9.5L105.7 10.2L105.8 10.8L105.7 11.3L105.2 11.7L104.6 11.8L104.1 12.1L103.6 12.4L103.1 12.6L102.6 12.9L102.1 13.2L101.5 13.3L100.9 13.3L100.4 13.6L99.9 13.9L99.3 14.1L98.8 14.3L98.3 14.7L97.8 14.8L97.3 15.1L96.8 15.5L96.2 15.6L95.7 15.9L95.2 16.2L94.7 16.4L94.1 16.7L93.7 17.0Z M120.8 19.4L120.1 19.4L119.6 18.9L119.0 18.3L118.4 17.9L117.8 17.8L117.2 17.4L116.4 17.1L115.9 16.8L116.2 16.3L116.6 15.6L116.9 15.0L117.2 14.4L117.4 13.7L117.9 13.0L118.4 12.7L118.9 12.8L119.6 13.2L120.2 13.5L120.8 13.8L121.5 14.1L122.1 14.5L122.6 15.0L122.8 15.7L122.5 16.3L122.0 16.9L121.9 17.6L121.4 18.1L121.3 18.8L120.8 19.4Z M83.6 45.0L81.6 45.0L79.7 45.0L77.7 45.0L75.7 44.9L74.0 44.3L72.4 43.5L70.8 42.3L70.0 40.7L69.3 39.0L69.3 37.0L70.1 35.4L70.3 33.5L71.2 31.9L72.1 30.2L72.9 28.6L74.3 27.2L75.3 28.6L73.9 30.0L73.2 31.7L72.3 33.3L72.4 35.3L72.4 37.3L73.5 38.8L75.2 39.6L77.0 40.0L78.9 40.4L80.8 40.4L82.8 40.4L84.5 39.6L86.1 38.7L87.5 37.3L88.4 35.6L87.8 34.1L87.8 32.2L87.0 30.5L86.4 28.8L86.9 27.0L87.2 25.2L88.7 25.5L89.5 27.1L90.3 28.8L90.3 30.7L91.8 31.9L93.8 31.8L95.8 31.9L97.5 31.2L98.8 29.7L97.7 28.1L96.4 27.7L95.0 26.9L93.5 25.5L93.3 23.6L93.3 21.6L94.1 19.9L95.1 18.7L96.7 17.9L98.4 17.1L100.0 16.3L101.7 15.4L103.4 14.8L105.1 13.9L105.7 15.5L105.8 17.5L104.7 18.6L103.0 19.4L101.4 20.2L99.5 20.6L97.9 21.5L97.9 22.9L99.3 24.3L100.7 25.7L102.1 27.1L103.5 28.5L105.1 29.5L106.6 30.8L108.2 31.6L110.1 31.9L112.1 31.8L114.1 31.9L116.0 31.8L118.0 31.9L119.8 31.4L120.3 29.7L119.4 28.1L118.9 26.3L119.6 24.6L120.6 23.2L122.0 24.5L122.3 26.4L122.8 28.2L122.8 30.2L122.8 32.1L122.8 34.1L122.8 36.1L121.8 37.3L119.8 37.3L117.8 37.3L115.8 37.3L113.8 37.3L111.8 37.3L109.8 37.3L107.8 37.3L106.4 36.0L104.7 35.2L103.4 33.8L102.0 32.3L100.5 32.8L99.7 34.4L98.3 35.8L96.6 36.5L95.0 37.3L93.0 37.3L91.1 37.6L90.2 39.2L89.5 40.9L88.5 42.5L87.0 43.4L85.3 44.3L83.6 45.0Z M128.7 38.1L127.8 38.0L127.4 37.2L127.5 36.3L127.5 35.4L127.4 34.6L127.4 33.7L127.5 32.8L127.5 31.9L127.4 31.0L127.4 30.1L127.5 29.2L127.5 28.3L127.3 27.5L126.8 26.8L126.6 26.0L126.7 25.1L126.7 24.2L126.7 23.3L126.7 22.4L126.2 21.7L125.9 21.0L125.9 20.1L125.9 19.2L125.9 18.3L125.9 17.4L125.8 16.5L126.1 15.7L126.6 15.0L126.8 14.3L127.3 13.5L128.0 13.3L128.2 14.0L128.3 14.9L128.7 15.6L129.1 16.4L129.0 17.3L128.9 18.2L129.2 19.0L129.7 19.7L129.8 20.5L129.8 21.4L129.8 22.3L129.8 23.2L129.8 24.1L129.7 25.0L129.8 25.8L130.3 26.5L130.6 27.3L130.6 28.2L130.5 29.1L130.6 30.0L130.5 30.8L130.6 31.8L130.6 32.7L130.2 33.4L129.8 34.1L129.8 35.0L129.4 35.7L129.1 36.4L128.9 37.3L128.7 38.1Z M81.3 24.8L80.8 24.4L80.1 24.1L79.5 23.8L78.9 23.4L78.2 23.2L77.6 22.8L77.1 22.2L77.1 21.5L77.5 20.9L77.8 20.3L78.1 19.6L78.5 19.0L78.6 18.3L79.2 17.9L79.9 18.0L80.4 18.5L80.9 19.1L81.6 19.4L82.2 19.6L82.8 20.1L83.6 20.3L83.9 20.6L83.5 21.2L83.2 21.9L82.9 22.5L82.5 23.1L82.3 23.7L81.9 24.4L81.3 24.8Z"
        fill="#4A2C1A"
      />

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
            <Link to="/" className="header-center logo-shimmer" aria-label="Home">
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
                to="/category"
                className={`nav-pill-item ${location.pathname.startsWith('/category') ? 'active' : ''}`}
              >
                Dresses
              </Link>
              <span className="nav-pill-sep" aria-hidden="true" />
              <Link
                to="/about"
                className={`nav-pill-item ${location.pathname === '/about' ? 'active' : ''}`}
              >
                About
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
        <Link to="/" className="mobile-nav-logo" onClick={() => setMenuOpen(false)} aria-label="Home">
          <LogoMark />
        </Link>
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/category" className={`nav-link ${location.pathname.startsWith('/category') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Dresses</Link>
        <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>About</Link>
        <a
          href={instagramCTAUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link insta-link"
          onClick={() => setMenuOpen(false)}
        >
          <InstagramIcon size={18} />
          <span>Instagram</span>
        </a>
      </div>
    </>
  )
}
