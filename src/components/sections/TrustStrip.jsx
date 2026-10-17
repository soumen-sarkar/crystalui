import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects.js';
import { site } from '../../data/siteContent.js';

export default function TrustStrip() {
  return (
    <section className="trust" aria-label={site.trust.heading}>
      <div className="container trust__inner">
        <p className="trust__label">{site.trust.heading}</p>
        <p className="trust__names">
          {projects.map((p) => (
            <Link key={p.slug} to={`/work/${p.slug}`}>{p.name}</Link>
          ))}
        </p>
        <ul className="trust__platforms" aria-label="Platforms and technologies">
          {site.trust.platforms.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </div>
    </section>
  );
}
