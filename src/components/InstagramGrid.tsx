const posts = [
  { id: 1, handle: 'angan_by_bellaa' },
  { id: 2, handle: 'angan_by_bellaa' },
  { id: 3, handle: 'angan_by_bellaa' },
  { id: 4, handle: 'angan_by_bellaa' },
  { id: 5, handle: 'angan_by_bellaa' },
  { id: 6, handle: 'angan_by_bellaa' },
  { id: 7, handle: 'angan_by_bellaa' },
  { id: 8, handle: 'angan_by_bellaa' },
]

const PROFILE_URL = 'https://instagram.com/angan_by_bellaa'

export default function InstagramGrid() {
  return (
    <section className="instagram-grid-section reveal">
      <div className="section-header" style={{ marginBottom: 32 }}>
        <h2 className="section-title">From Our Courtyard</h2>
        <p className="section-subtitle">Follow along @angan_by_bellaa</p>
      </div>
      <div className="instagram-grid">
        {posts.map((post) => (
          <a
            key={post.id}
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-post"
          >
            <div className="instagram-post-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            <span className="instagram-post-handle">@{post.handle}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
