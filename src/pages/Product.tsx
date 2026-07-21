import { useState, useEffect, useRef } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { useDresses } from '../hooks/useDresses'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { getDressSlug, formatPrice } from '../utils'
import DressCard from '../components/DressCard'
import InstagramCTA from '../components/InstagramCTA'

export default function ProductPage() {
  const [searchParams] = useSearchParams()
  const { dresses, loading, error } = useDresses()
  useScrollReveal([loading])
  const slug = searchParams.get('slug')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  const matchIndex = slug !== null
    ? dresses.findIndex((d, i) => getDressSlug(d, i) === slug)
    : -1

  const dress = matchIndex !== -1 ? dresses[matchIndex] : null

  const [activeImage, setActiveImage] = useState<string | null>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: React.MouseEvent) {
    const el = imageRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    el.style.setProperty('--zoom-x', `${x}%`)
    el.style.setProperty('--zoom-y', `${y}%`)
  }

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
    <section className="product-page-new">
      <div className="product-content">
        <div className="product-image-section reveal">
          <div
            className="product-main-image-new product-zoom"
            ref={imageRef}
            onMouseMove={handleMouseMove}
          >
            <img src={currentImage} alt={dress.name} />
          </div>
          {images.length > 1 && (
            <div className="product-thumbnails-new">
              {images.map((img, i) => (
                <button
                  key={i}
                  className={`thumb-new ${img === currentImage ? 'thumb-active' : ''}`}
                  onClick={() => setActiveImage(img)}
                  aria-label={`View ${dress.name} image ${i + 1}`}
                >
                  <img src={img} alt={`${dress.name} view ${i + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="product-info-new reveal">
          <span className="product-meta">
            {dress.category.join(' / ')}{dress.season ? ` · ${dress.season}` : ''}
          </span>

          <h1 className="product-name-new">{dress.name}</h1>

          <div className="product-price-new">{formatPrice(dress.price)}</div>

          <div className="product-divider-new" aria-hidden="true" />

          <p className="product-description-new" style={{ whiteSpace: 'pre-line' }}>{dress.description}</p>

          {dress.highlights.length > 0 && (
            <div className="detail-highlights-new">
              {dress.highlights.slice(0, 4).map((h, i) => (
                <div key={i} className="highlight-card-new">
                  <img src={h.image} alt="" aria-hidden="true" />
                  <span className="highlight-label-new">{h.label}</span>
                </div>
              ))}
            </div>
          )}

          <InstagramCTA
            label="Ask About This Dress"
            className="cta-soft"
          />
        </div>
      </div>

      {dresses.length > 1 && (
        <section className="related-section-new">
          <h2 className="section-title">You May Also Like</h2>
          <div className="dress-grid related-grid">
            {dresses
              .filter(d => d.name !== dress.name)
              .slice(0, 3)
              .map((related) => {
                const idx = dresses.indexOf(related)
                return <DressCard key={getDressSlug(related, idx)} dress={related} index={idx} />
              })}
          </div>
        </section>
      )}
    </section>
  )
}
