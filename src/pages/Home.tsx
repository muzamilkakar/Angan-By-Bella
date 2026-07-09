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
        <div className="hero-content">
          <h1>Angan by Bella</h1>
          <p>Handpicked women's clothing in Quetta — timeless elegance, curated for you.</p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Shop by Category</h2>
        <div className="category-grid">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/category?type=${cat.slug}`}
              className="category-card"
            >
              <span className="category-name">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Shop the Season</h2>
        <div className="season-grid">
          {seasons.map((s) => (
            <Link
              key={s.season}
              to={`/category?season=${s.season}`}
              className="season-card"
            >
              <span className="season-name">{s.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Featured Dresses</h2>
        {loading ? (
          <div className="featured-placeholder">
            <p className="placeholder-text">Loading featured dresses...</p>
          </div>
        ) : display.length > 0 ? (
          <div className="dress-grid">
            {display.map((dress, i) => (
              <DressCard key={getDressSlug(dress, i)} dress={dress} index={i} />
            ))}
          </div>
        ) : (
          <div className="featured-placeholder">
            <p className="placeholder-text">Featured dresses will appear here.</p>
          </div>
        )}
      </section>

      <section className="instagram-cta section">
        <div className="cta-content">
          <h2>Have a question about any dress?</h2>
          <InstagramCTA label="Ask us on Instagram" />
        </div>
      </section>
    </>
  )
}
