import { Link } from 'react-router-dom'
import { useDresses } from '../hooks/useDresses'
import { getDressSlug } from '../utils'
import DressCard from '../components/DressCard'
import InstagramCTA from '../components/InstagramCTA'

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

  const featured = dresses.filter(d => d.featured)
  const display = featured.length > 0 ? featured : dresses.slice(0, 3)

  return (
    <>
      <section className="hero">
        <h1>Timeless Elegance</h1>
        <p>
          Handpicked women's clothing in Quetta — curated for the woman who
          values grace, quality, and tradition.
        </p>
        <div className="hero-ornament" aria-hidden="true">
          <div className="hero-ornament-diamond" />
        </div>
      </section>

      <div className="shop-strip">
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

      <section className="section">
        <h2 className="section-title">Featured Dresses</h2>
        {loading ? (
          <div className="featured-placeholder">
            <p className="placeholder-text">Loading featured dresses...</p>
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

      <section className="instagram-cta">
        <div className="cta-content">
          <h2>Have a question about any dress?</h2>
          <InstagramCTA label="Ask us on Instagram" />
        </div>
      </section>
    </>
  )
}
