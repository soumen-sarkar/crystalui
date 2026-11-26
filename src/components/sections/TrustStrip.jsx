import React from 'react';
import ClientMarquee from './ClientMarquee.jsx';
import { site } from '../../data/siteContent.js';

export default function TrustStrip() {
  return (
    <section className="trust" aria-label={site.trust.heading}>
      <div className="container trust__inner">
        <p className="trust__label">{site.trust.heading}</p>
        <ClientMarquee />
        <ul className="trust__platforms" aria-label="Platforms and technologies">
          {site.trust.platforms.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </div>
    </section>
  );
}
