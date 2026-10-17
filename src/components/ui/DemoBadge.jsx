import React from 'react';
import { site } from '../../data/siteContent.js';

// Visible flag for content that still needs approval. Hidden when site.showDemoNotices is false.
export default function DemoBadge({ children = 'Demo content' }) {
  if (!site.showDemoNotices) return null;
  return <span className="demo-badge">{children}</span>;
}
