import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="page-not-found">
      <div className="page-not-found-code">404</div>
      <div className="page-not-found-urdu">انگن</div>
      <p className="page-not-found-text">
        What you seek is not here. Perhaps it never was.
      </p>
      <Link to="/" className="cta-button">Return to the courtyard</Link>
    </section>
  )
}
