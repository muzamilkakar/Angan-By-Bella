import { useState, useEffect } from 'react';
import type { Category, Dress } from '../types';

function normalizeDress(raw: Record<string, unknown>): Dress {
  let category: Category[] = [];
  const rawCat = raw.category;
  if (Array.isArray(rawCat)) {
    category = rawCat.filter((c): c is Category => typeof c === 'string');
  } else if (typeof rawCat === 'string') {
    const c = rawCat as Category;
    category = [c];
  }

  let galleryImages: string[] = [];
  const rawGI = raw.galleryImages;
  if (Array.isArray(rawGI)) {
    galleryImages = rawGI.filter((g): g is string => typeof g === 'string');
  }

  let highlights: Dress['highlights'] = [];
  const rawHL = raw.highlights;
  if (Array.isArray(rawHL)) {
    highlights = rawHL.filter((h): h is { label: string; image: string } =>
      typeof h === 'object' && h !== null && typeof (h as Record<string, unknown>).label === 'string'
    ) as Dress['highlights'];
  }

  const mainImage = typeof raw.mainImage === 'string' ? raw.mainImage : '';

  return {
    name: typeof raw.name === 'string' ? raw.name : '',
    price: typeof raw.price === 'number' ? raw.price : 0,
    category,
    season: typeof raw.season === 'string' ? (raw.season as Dress['season']) : 'All Season',
    mainImage,
    galleryImages,
    description: typeof raw.description === 'string' ? raw.description : '',
    highlights,
    featured: typeof raw.featured === 'boolean' ? raw.featured : false,
  };
}

export function useDresses() {
  const [dresses, setDresses] = useState<Dress[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/content/dresses.json')
      .then(res => res.json())
      .then(data => {
        const rawList: unknown[] = Array.isArray(data?.dresses) ? data.dresses : [];
        setDresses(rawList.map(d => normalizeDress(d as Record<string, unknown>)));
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { dresses, loading, error };
}
