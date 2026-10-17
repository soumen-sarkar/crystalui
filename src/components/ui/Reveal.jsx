import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Gentle scroll-reveal. Does nothing when the visitor prefers reduced motion.
export default function Reveal({ as = 'div', delay = 0, y = 24, children, ...rest }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
