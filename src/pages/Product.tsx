import { useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { useDresses } from '../hooks/useDresses'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { getDressSlug, formatPrice } from '../utils'
import InstagramCTA from '../components/InstagramCTA'

function CornerTL() {
  return (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
      <line x1="0" y1="72" x2="0" y2="0" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="0" x2="72" y2="0" stroke="currentColor" strokeWidth="1" />
      <polygon points="28,28 36,20 44,28 36,36" stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.5" />
      <polygon points="20,28 28,20 36,28 28,36" stroke="currentColor" strokeWidth="0.25" fill="none" opacity="0.35" />
      <circle cx="36" cy="28" r="1.5" fill="currentColor" opacity="0.15" />
    </svg>
  )
}

function CornerBR() {
  return (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMax meet">
      <line x1="72" y1="0" x2="72" y2="72" stroke="currentColor" strokeWidth="1" />
      <line x1="72" y1="72" x2="0" y2="72" stroke="currentColor" strokeWidth="1" />
      <polygon points="44,44 36,52 28,44 36,36" stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.5" />
      <polygon points="52,44 44,52 36,44 44,36" stroke="currentColor" strokeWidth="0.25" fill="none" opacity="0.35" />
      <circle cx="36" cy="44" r="1.5" fill="currentColor" opacity="0.15" />
    </svg>
  )
}

export default function ProductPage() {
  useScrollReveal()
  const [searchParams] = useSearchParams()
  const { dresses, loading, error } = useDresses()
  const slug = searchParams.get('slug')

  const matchIndex = slug !== null
    ? dresses.findIndex((d, i) => getDressSlug(d, i) === slug)
    : -1

  const dress = matchIndex !== -1 ? dresses[matchIndex] : null

  const [activeImage, setActiveImage] = useState<string | null>(null)

  if (loading) {
    return (
      <section className="section" style={{ paddingTop: 120 }}>
        <p className="placeholder-text">Loading dress...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="section" style={{ paddingTop: 120 }}>
        <p className="placeholder-text">Could not load dress information.</p>
      </section>
    )
  }

  if (!dress) {
    return (
      <section className="product-not-found">
        <p>Dress not found.</p>
        <Link to="/" className="cta-button">Back to home</Link>
      </section>
    )
  }

  const images = [dress.mainImage, ...dress.galleryImages]
  const currentImage = activeImage ?? dress.mainImage

  return (
    <section className="product-page">
      <div className="product-layout">
        <div className="product-images reveal">
          <div style={{ position: 'relative' }}>
            <div className="jali-corner jali-corner-tl" aria-hidden="true">
              <CornerTL />
            </div>
            <div className="product-main-image">
              <img src={currentImage} alt={dress.name} />
            </div>
            <div className="jali-corner jali-corner-br" aria-hidden="true">
              <CornerBR />
            </div>
          </div>

          {images.length > 1 && (
            <div className="product-thumbnails">
              {images.map((img, i) => (
                <button
                  key={i}
                  className={`thumb-btn ${img === currentImage ? 'active' : ''}`}
                  onClick={() => setActiveImage(img)}
                  aria-label={`View ${dress.name} image ${i + 1}`}
                >
                  <img src={img} alt={`${dress.name} view ${i + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="product-info reveal">
          <h1 className="product-name reveal reveal-delay-1">{dress.name}</h1>

          <div className="product-price-row reveal reveal-delay-2">
            <span className="product-price-ornament" aria-hidden="true" />
            <span className="product-price-tag">{formatPrice(dress.price)}</span>
          </div>

          <p className="product-description">{dress.description}</p>

          {dress.highlights.length > 0 && (
            <div className="detail-highlights">
              {dress.highlights.slice(0, 4).map((h, i) => (
                <div key={i} className="highlight-card" tabIndex={0}>
                  <img src={h.image} alt="" aria-hidden="true" />
                  <span className="highlight-label">{h.label}</span>
                </div>
              ))}
            </div>
          )}

          <InstagramCTA label="Ask About This Dress on Instagram" />
        </div>
      </div>
    </section>
  )
}
