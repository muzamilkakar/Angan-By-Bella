import { Link } from 'react-router-dom'
import { getDressSlug, formatPrice } from '../utils'
import type { Dress } from '../types'

interface DressCardProps {
  dress: Dress;
  index: number;
}

export default function DressCard({ dress, index }: DressCardProps) {
  return (
    <Link to={`/product?slug=${getDressSlug(dress, index)}`} className="dress-card">
      <div className="dress-card-image">
        <img src={dress.mainImage} alt={dress.name} />
      </div>
      <div className="dress-card-info">
        <h3 className="dress-card-name">{dress.name}</h3>
        <span className="dress-card-price">{formatPrice(dress.price)}</span>
      </div>
    </Link>
  )
}
