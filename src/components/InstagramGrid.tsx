const posts = [
  { id: 1, likes: 134, caption: 'A quiet moment in cream silk', handle: 'angan_by_bellaa' },
  { id: 2, likes: 89, caption: 'Mornings in the courtyard', handle: 'angan_by_bellaa' },
  { id: 3, likes: 212, caption: 'Gold embroidery on ivory', handle: 'angan_by_bellaa' },
  { id: 4, likes: 67, caption: 'Summer breeze chiffon', handle: 'angan_by_bellaa' },
  { id: 5, likes: 156, caption: 'The edit: warm tones', handle: 'angan_by_bellaa' },
  { id: 6, likes: 98, caption: 'Draped in tradition', handle: 'angan_by_bellaa' },
  { id: 7, likes: 178, caption: 'Evening in Quetta', handle: 'angan_by_bellaa' },
  { id: 8, likes: 45, caption: 'Handwoven details', handle: 'angan_by_bellaa' },
]

const PROFILE_URL = 'https://instagram.com/angan_by_bellaa'

function HeartIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  )
}

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
            <div className="instagram-post-bg">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <pattern id={`ig-jali-${post.id}`} x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                    <rect width="32" height="32" fill="none" />
                    <polygon points="16,0 32,12 24,20 16,12 8,20 0,12" fill="none" stroke="currentColor" strokeWidth="0.3" />
                    <circle cx="16" cy="10" r="1.2" fill="currentColor" opacity="0.15" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#ig-jali-${post.id})`} />
              </svg>
            </div>
            <div className="instagram-post-overlay">
              <span className="instagram-post-likes">
                <HeartIcon /> {post.likes}
              </span>
              <span className="instagram-post-handle">@{post.handle}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
