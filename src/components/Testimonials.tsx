const testimonials = [
  {
    text: 'The quality of the fabric is unlike anything I have found in Quetta. Every piece feels thoughtfully made.',
    author: 'Amina S.',
  },
  {
    text: 'I wore the ZAYA to my sister\'s wedding and received compliments all night. Truly timeless elegance.',
    author: 'Fatima R.',
  },
  {
    text: 'Finally, a brand that understands understated luxury. Angan has become my go-to for every special occasion.',
    author: 'Zara H.',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials-section reveal">
      <div className="section-header" style={{ marginBottom: 40 }}>
        <h2 className="section-title">What Our Customers Say</h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card reveal">
            <p className="testimonial-text">{t.text}</p>
            <span className="testimonial-author">{t.author}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
