const panels = [
  {
    number: '01',
    heading: 'Where it began',
    text: 'A small courtyard in Quetta, where the light falls softly and the air carries the scent of jasmine.',
    urdu: 'جہاں سے آغاز ہوا',
  },
  {
    number: '02',
    heading: 'The art of selection',
    text: 'Every piece is handpicked from the finest ateliers, chosen for its cut, its drape, and its story.',
    urdu: 'انتخاب کا فن',
  },
  {
    number: '03',
    heading: 'Made to be worn',
    text: 'Not just for occasions, but for the everyday moments that deserve beauty too.',
    urdu: 'پہننے کے لیے بنایا گیا',
  },
]

export default function CourtyardStory() {
  return (
    <section className="courtyard-section reveal">
      <div className="section-header" style={{ marginBottom: 40, padding: '0 32px' }}>
        <h2 className="section-title">The Courtyard</h2>
      </div>
      <div className="courtyard-scroll">
        {panels.map((panel, i) => (
          <div key={i} className="courtyard-panel">
            <div className="courtyard-number">{panel.number}</div>
            <h3 className="courtyard-heading">{panel.heading}</h3>
            <p className="courtyard-text">{panel.text}</p>
            <span className="courtyard-urdu">{panel.urdu}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
