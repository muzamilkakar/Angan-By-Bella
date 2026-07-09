import { useSearchParams, Link } from 'react-router-dom'
import { useDresses } from '../hooks/useDresses'
import { getDressSlug } from '../utils'
import DressCard from '../components/DressCard'
import type { Category, Season } from '../types'

const ALL_CATEGORIES: Category[] = ["Embroidered", "Printed", "Solids", "Silk", "Formals", "Kurtis", "Bottoms", "Other"]
const ALL_SEASONS: Season[] = ["Winter", "Summer", "All Season"]

export default function CategoryPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { dresses, loading, error } = useDresses()

  const activeType = searchParams.get('type')
  const activeSeason = searchParams.get('season')

  const filtered = dresses.filter(d => {
    if (activeType && d.category.toLowerCase() !== activeType.toLowerCase()) return false
    if (activeSeason && d.season !== activeSeason) return false
    return true
  })

  const setParam = (key: string, value: string) => {
    const next = new URLSearchParams(searchParams)
    if (next.get(key) === value) {
      next.delete(key)
    } else {
      next.set(key, value)
    }
    setSearchParams(next)
  }

  return (
    <section className="section category-page">
      <h1 className="section-title">Our Collection</h1>

      <div className="filter-tabs">
        <div className="filter-group">
          <span className="filter-label">Category</span>
          <div className="filter-buttons">
            {ALL_CATEGORIES.map(c => (
              <button
                key={c}
                className={`filter-btn ${activeType === c.toLowerCase() ? 'active' : ''}`}
                onClick={() => setParam('type', c.toLowerCase())}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <span className="filter-label">Season</span>
          <div className="filter-buttons">
            {ALL_SEASONS.map(s => (
              <button
                key={s}
                className={`filter-btn ${activeSeason === s ? 'active' : ''}`}
                onClick={() => setParam('season', s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {loading && <p className="placeholder-text">Loading dresses...</p>}
      {error && <p className="placeholder-text">Could not load dresses. Please try again later.</p>}

      {!loading && !error && filtered.length === 0 && (
        <div className="empty-state">
          <p>No dresses found for this selection.</p>
          <Link to="/" className="cta-button">Browse all categories</Link>
        </div>
      )}

      {!loading && !error && filtered.length > 0 && (
        <div className="dress-grid">
          {filtered.map((dress, i) => (
            <DressCard key={getDressSlug(dress, i)} dress={dress} index={i} />
          ))}
        </div>
      )}
    </section>
  )
}
