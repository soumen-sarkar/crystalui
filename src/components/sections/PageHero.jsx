import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function PageHero({ eyebrow, lines, lead, tone = 'paper' }) {
  const reduce = useReducedMotion();
  return (
    <section className={`page-hero section--${tone}`} style={{ position: 'relative' }}>
      <div className="container">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="display" style={{ fontSize: 'clamp(2.6rem, 7.4vw, 6.4rem)' }}>
          {lines.map((l, i) => (
            <motion.span
              key={i}
              style={{ display: 'block' }}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
            >
              {l}
            </motion.span>
          ))}
        </h1>
        {lead && <p className="lead page-hero__lead muted">{lead}</p>}
      </div>
    </section>
  );
}
