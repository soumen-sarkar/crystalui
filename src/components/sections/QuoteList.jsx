import React from 'react';
import Reveal from '../ui/Reveal.jsx';
import DemoBadge from '../ui/DemoBadge.jsx';

export default function QuoteList({ items }) {
  return (
    <div className="quotes">
      {items.map((t, i) => (
        <Reveal as="figure" key={t.id} className={`quote${i === 0 ? ' quote--large' : ''}`} delay={i * 0.08}>
          {t.demo && <div className="quote__demo"><DemoBadge>Demo testimonial — replace before launch</DemoBadge></div>}
          <span className="quote__mark" aria-hidden="true">“</span>
          <blockquote style={{ margin: 0 }}>
            <p className="quote__text">{t.quote}</p>
          </blockquote>
          <figcaption className="quote__who">
            <strong>{t.name}</strong>
            <span>{[t.title, t.company].filter(Boolean).join(', ')}</span>
            {t.context && <span>{t.context}</span>}
          </figcaption>
        </Reveal>
      ))}
    </div>
  );
}
