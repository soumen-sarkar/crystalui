import React from 'react';
import { isPlaceholder } from '../../data/projects.js';
import { site } from '../../data/siteContent.js';

// Highlights "[To confirm] …" strings so unfinished copy is obvious during review.
export default function PlaceholderText({ text }) {
  if (isPlaceholder(text) && site.showDemoNotices) return <span className="placeholder-text">{text}</span>;
  return <>{text}</>;
}
