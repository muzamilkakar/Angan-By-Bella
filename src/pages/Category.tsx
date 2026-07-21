import { useSearchParams, Link } from 'react-router-dom'
import { useDresses } from '../hooks/useDresses'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { getDressSlug, normalizeCategoryList } from '../utils'
import DressCard from '../components/DressCard'
import type { Category, Season } from '../types'

const ALL_CATEGORIES: Category[] = ["Embroidered", "Printed", "Solids", "Silk", "Formals", "Kurtis", "Bottoms", "Other"]
const ALL_SEASONS: Season[] = ["Winter", "Summer", "All Season"]

export default function CategoryPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { dresses, loading, error } = useDresses()
  useScrollReveal([loading])

  const activeType = searchParams.get('type')
  const activeSeason = searchParams.get('season')

  const filtered = dresses.filter(d => {
    if (activeType && !normalizeCategoryList(d.category).some(c => c.toLowerCase() === activeType)) return false
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
    <section className="section" style={{ paddingTop: 104 }}>
      <h2 className="section-title reveal">Our Collection</h2>

      <div className="filter-tabs reveal reveal-delay-1">
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
      {error && <p className="placeholder-text">Could not load dresses.</p>}

      {!loading && !error && filtered.length === 0 && (
        <div className="empty-state">
          <p>No dresses found for this selection.</p>
          <Link to="/" className="cta-button">Browse all categories</Link>
        </div>
      )}

      {!loading && !error && filtered.length > 0 && (
        <div className="dress-grid">
          {filtered.map((dress) => {
            const fullIndex = dresses.indexOf(dress)
            return <DressCard key={getDressSlug(dress, fullIndex)} dress={dress} index={fullIndex} />
          })}
        </div>
      )}
    </section>
  )
}
