import { useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { useDresses } from '../hooks/useDresses'
import { getDressSlug, formatPrice } from '../utils'

export default function ProductPage() {
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
      <section className="section">
        <p className="placeholder-text">Loading dress...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="section">
        <p className="placeholder-text">Could not load dress information. Please try again later.</p>
      </section>
    )
  }

  if (!dress) {
    return (
      <section className="section product-not-found">
        <p>Dress not found.</p>
        <Link to="/" className="cta-button">Back to home</Link>
      </section>
    )
  }

  const images = [dress.mainImage, ...dress.galleryImages]
  const currentImage = activeImage ?? dress.mainImage

  return (
    <section className="section product-page">
      <div className="product-layout">
        <div className="product-images">
          <div className="product-main-image">
            <img src={currentImage} alt={dress.name} />
          </div>
          {images.length > 1 && (
            <div className="product-thumbnails">
              {images.map((img, i) => (
                <button
                  key={i}
                  className={`thumb-btn ${img === currentImage ? 'active' : ''}`}
                  onClick={() => setActiveImage(img)}
                >
                  <img src={img} alt={`${dress.name} view ${i + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="product-info">
          <h1 className="product-name">{dress.name}</h1>
          <p className="product-price">{formatPrice(dress.price)}</p>
          <p className="product-description">{dress.description}</p>

          {dress.highlights.length > 0 && (
            <div className="detail-highlights">
              {dress.highlights.slice(0, 4).map((h, i) => (
                <div key={i} className="highlight-card">
                  <img src={h.image} alt={h.label} />
                  <span>{h.label}</span>
                </div>
              ))}
            </div>
          )}

          <a href="#" className="cta-button instagram-ask-btn">Ask About This Dress on Instagram</a>
        </div>
      </div>
    </section>
  )
}
