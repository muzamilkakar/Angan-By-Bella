import { Link } from 'react-router-dom'

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
        <div className="featured-placeholder">
          <p className="placeholder-text">Featured dresses will appear here.</p>
        </div>
      </section>

      <section className="instagram-cta section">
        <div className="cta-content">
          <h2>Have a question about any dress?</h2>
          <a href="#" className="cta-button">Ask us on Instagram</a>
        </div>
      </section>
    </>
  )
}
