import React from 'react';
import Reveal from '../ui/Reveal.jsx';
import { services, deliveryLabels } from '../../data/services.js';

export default function ServiceList({ compact = false }) {
  return (
    <ol className="service-list">
      {services.map((s, i) => (
        <Reveal as="li" key={s.id} className="service" id={s.id}>
          <div>
            <span className="service__num">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="service__title">{s.title}</h3>
            <p className="service__summary">{s.summary}</p>
          </div>
          {!compact && (
            <ul className="service__points">
              {s.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          )}
          {compact && <div />}
          <div className="service__meta" aria-label="Details">
            <span className={`chip chip--${s.delivery}`}>{deliveryLabels[s.delivery]}</span>
            {s.tags.map((t) => <span key={t} className="chip">{t}</span>)}
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
