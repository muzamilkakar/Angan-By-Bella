import JaliPattern from '../components/JaliPattern'
import InstagramCTA from '../components/InstagramCTA'

export default function About() {
  return (
    <section className="section about-page">
      <h1>About Angan by Bella</h1>

      <p className="about-story">
        <em>Angan</em> — the Urdu word for courtyard, that open,的中心 space where
        a South Asian home breathes. It is where families gather, where stories are
        told, and where everyday life meets quiet beauty. This is the feeling we
        bring to every piece we curate.
      </p>

      <p className="about-story">
        Based in Quetta, Angan by Bella is a women's clothing brand built on a
        love for timeless design and honest quality. Each dress is handpicked —
        from embroidered kurtis to flowing silks — with an eye for what endures
        beyond a season.
      </p>

      <p className="about-story">
        We believe elegance isn't about following trends. It's about finding
        pieces that feel like they were always meant to be yours.
      </p>

      <div className="about-cta">
        <InstagramCTA label="Follow us on Instagram" />
      </div>

      <div style={{ marginTop: 48, opacity: 0.08 }} aria-hidden="true">
        <JaliPattern />
      </div>
    </section>
  )
}
