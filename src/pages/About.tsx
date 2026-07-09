import InstagramCTA from '../components/InstagramCTA'

export default function About() {
  return (
    <section className="section about-page">
      <h1>About Angan by Bella</h1>
      <p className="about-story">
        Angan by Bella is a Quetta-based women's clothing brand offering handpicked
        embroidered, printed, solid, and formal wear. We believe in bringing you
        elegance that tells a story — each piece curated with care.
      </p>
      <p className="about-story">
        Our journey began with a love for timeless design and a commitment to quality.
        From casual kurtis to sophisticated silks, every dress in our collection is
        chosen to make you feel beautiful and confident.
      </p>
      <p className="about-story">
        Visit us on Instagram to see our latest arrivals and behind-the-scenes stories.
      </p>
      <div className="about-cta">
        <InstagramCTA />
      </div>
    </section>
  )
}
