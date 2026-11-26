import React from 'react';
import { clients } from '../../data/clients.js';

// Each half of the loop needs enough items to be wider than the strip, otherwise a gap shows.
const MIN_ITEMS = 8;
const repeats = Math.max(1, Math.ceil(MIN_ITEMS / Math.max(clients.length, 1)));

function Half({ hidden = false }) {
  const items = [];
  for (let r = 0; r < repeats; r += 1) {
    clients.forEach((c) => {
      // Only the very first copy is exposed to assistive tech; the rest are visual repeats.
      const decorative = hidden || r > 0;
      items.push(
        <li key={`${r}-${c.name}`} className="marquee__item" aria-hidden={decorative || undefined}>
          {c.logo ? (
            <img src={c.logo} alt={decorative ? '' : c.name} height="36" loading="lazy" />
          ) : (
            <span>{c.name}</span>
          )}
        </li>
      );
    });
  }
  return <ul className="marquee__half" aria-hidden={hidden || undefined}>{items}</ul>;
}

// Auto-scrolling logo strip with faded edges. The second half is a duplicate that makes the loop seamless.
export default function ClientMarquee() {
  if (!clients.length) return null;
  return (
    <div className="marquee" role="group" aria-label="Clients and collaborations">
      <div className="marquee__track">
        <Half />
        <Half hidden />
      </div>
    </div>
  );
}
