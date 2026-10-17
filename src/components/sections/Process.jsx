import React from 'react';
import Reveal from '../ui/Reveal.jsx';
import { site } from '../../data/siteContent.js';

export default function Process() {
  return (
    <ol className="process">
      {site.process.map((s, i) => (
        <Reveal as="li" key={s.n} className="process__step" delay={i * 0.07}>
          <span className="process__n">{s.n}</span>
          <h3 className="process__title">{s.title}</h3>
          <p>{s.text}</p>
        </Reveal>
      ))}
    </ol>
  );
}
