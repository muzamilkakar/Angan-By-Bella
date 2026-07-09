import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <div className="header-inner">
        <Link to="/" className="logo-link">
          <img src="/images/logo.png" alt="Angan by Bella" className="logo" />
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/category" className="nav-link">Category</Link>
          <Link to="/about" className="nav-link">About</Link>
        </nav>
      </div>
    </header>
  )
}
