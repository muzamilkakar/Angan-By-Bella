export function slugify(name: string): string {
  return name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function getDressSlug(dress: { name: string }, index: number): string {
  return `${slugify(dress.name)}-${index}`;
}

export function formatPrice(price: number): string {
  return `PKR ${price.toLocaleString('en-PK')}`;
}
