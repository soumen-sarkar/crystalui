import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Custom geometric crystal: crown + pavilion facets. Pure SVG, no raster assets.
const L = [30, 160], R = [450, 160], T1 = [165, 30], T2 = [315, 30];
const M1 = [135, 160], M2 = [240, 160], M3 = [345, 160], C = [240, 455];
const pts = (...p) => p.map((q) => q.join(',')).join(' ');

const facets = [
  { p: pts(L, T1, M1), f: '#C9F5AE' },
  { p: pts(T1, M1, M2), f: '#F8F9F5' },
  { p: pts(T1, T2, M2), f: '#163D2A' },
  { p: pts(T2, M2, M3), f: '#F8F9F5' },
  { p: pts(T2, R, M3), f: '#C9F5AE' },
  { p: pts(L, M1, C), f: '#163D2A' },
  { p: pts(M1, M2, C), f: '#17231D' },
  { p: pts(M2, M3, C), f: '#163D2A' },
  { p: pts(M3, R, C), f: '#17231D' },
];

export default function CrystalGraphic({ className = '', label = 'Geometric crystal illustration' }) {
  const reduce = useReducedMotion();
  return (
    <svg className={`crystal ${className}`} viewBox="0 0 480 480" role="img" aria-label={label}>
      {facets.map((facet, i) => (
        <motion.polygon
          key={i}
          points={facet.p}
          fill={facet.f}
          stroke="#9FE870"
          strokeWidth="1.5"
          strokeLinejoin="round"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </svg>
  );
}
