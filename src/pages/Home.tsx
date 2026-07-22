import { Link } from 'react-router-dom'
import { useDresses } from '../hooks/useDresses'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { getDressSlug } from '../utils'
import DressCard from '../components/DressCard'
import SkeletonCard from '../components/SkeletonCard'
import InstagramCTA from '../components/InstagramCTA'
import MoodSpotlight from '../components/MoodSpotlight'

import Testimonials from '../components/Testimonials'
import SeasonalBanner from '../components/SeasonalBanner'
import CourtyardStory from '../components/CourtyardStory'

const categories = [
  { name: 'Embroidered', slug: 'embroidered' },
  { name: 'Printed', slug: 'printed' },
  { name: 'Solids', slug: 'solids' },
  { name: 'Silk', slug: 'silk' },
  { name: 'Formals', slug: 'formals' },
  { name: 'Kurtis', slug: 'kurtis' },
  { name: 'Bottoms', slug: 'bottoms' },
]

const seasons = [
  { name: 'Winter Collection', season: 'Winter' },
  { name: 'Summer Collection', season: 'Summer' },
]

export default function Home() {
  const { dresses, loading } = useDresses()
  useScrollReveal([loading])

  const featured = dresses.filter(d => d.featured)
  const display = featured.length > 0 ? featured : dresses.slice(0, 3)

  return (
    <>
      <section className="editorial-hero reveal">
        <div className="hero-dots" aria-hidden="true" />
        <div className="editorial-hero-text">
          <h1>
            Timeless <em>Elegance</em>
          </h1>
          <p>
            Handpicked women's clothing in Quetta curated for the woman who
            values grace, quality, and tradition.
          </p>
          <div className="hero-ornament" aria-hidden="true">
            <div className="hero-ornament-diamond" />
          </div>
        </div>
        <div className="editorial-hero-visual">
          <div className="editorial-hero-gradient" />
          <div className="editorial-hero-jali">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <defs>
                <pattern id="hero-jali" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect width="20" height="20" fill="none" />
                  <polygon points="10,0 20,6 15,12 10,6 5,12 0,6" fill="none" stroke="currentColor" strokeWidth="0.3" />
                  <circle cx="10" cy="6" r="0.8" fill="currentColor" opacity="0.15" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-jali)" />
            </svg>
          </div>
          <div className="editorial-hero-gold" />
        </div>
      </section>

      <div className="shop-strip reveal reveal-delay-1">
        <div className="shop-strip-inner">
          <div className="category-strip">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category?type=${cat.slug}`}
                className="category-chip"
              >
                {cat.name}
              </Link>
            ))}
          </div>
          <div className="season-strip">
            {seasons.map((s) => (
              <Link
                key={s.season}
                to={`/category?season=${s.season}`}
                className="season-chip"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <section className="section reveal reveal-delay-2">
        <h2 className="section-title">Featured Dresses</h2>
        {loading ? (
          <div className="skeleton-grid">
            {[1, 2, 3].map(i => <SkeletonCard key={i} />)}
          </div>
        ) : display.length > 0 ? (
          <div className="dress-grid">
            {display.map((dress) => {
              const fullIndex = dresses.indexOf(dress)
              return <DressCard key={getDressSlug(dress, fullIndex)} dress={dress} index={fullIndex} />
            })}
          </div>
        ) : (
          <div className="featured-placeholder">
            <p className="placeholder-text">Featured dresses will appear here.</p>
          </div>
        )}
      </section>

      <CourtyardStory />

      <Testimonials />

      <SeasonalBanner />

      <MoodSpotlight />

      <section className="instagram-cta reveal reveal-delay-3">
        <div className="cta-content">
          <h2>Have a question about any dress?</h2>
          <InstagramCTA label="Ask us on Instagram" />
        </div>
      </section>
    </>
  )
}
