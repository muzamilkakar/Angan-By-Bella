import { useState, useEffect } from 'react';
import type { Dress } from '../types';

export function useDresses() {
  const [dresses, setDresses] = useState<Dress[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/content/dresses.json')
      .then(res => res.json())
      .then(data => setDresses(data.dresses))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { dresses, loading, error };
}
