import InstagramCTA from '../components/InstagramCTA'

export default function About() {
  return (
    <section className="about-page">
      <h1>About Angan by Bella</h1>

      <p className="about-story">
        <em>Angan</em> — the Urdu word for courtyard. That open space at the
        heart of a South Asian home where families gather, stories are told,
        and everyday life meets quiet beauty. This is the feeling we bring
        to every piece we curate.
      </p>

      <p className="about-story">
        Based in Quetta, Angan by Bella is a women's clothing brand built on
        a love for timeless design and honest quality. Each dress is handpicked
        — from embroidered kurtis to flowing silks — with an eye for what
        endures beyond a single season.
      </p>

      <p className="about-story">
        We believe elegance is not about following trends. It is about finding
        pieces that feel like they were always meant to be yours.
      </p>

      <div className="about-cta">
        <InstagramCTA label="Follow us on Instagram" />
      </div>
    </section>
  )
}
