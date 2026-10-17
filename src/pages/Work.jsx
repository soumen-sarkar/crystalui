import React from 'react';
import Seo from '../components/ui/Seo.jsx';
import PageHero from '../components/sections/PageHero.jsx';
import ProjectFeature from '../components/sections/ProjectFeature.jsx';
import CtaBand from '../components/sections/CtaBand.jsx';
import DemoBadge from '../components/ui/DemoBadge.jsx';
import { projects } from '../data/projects.js';
import { seo } from '../data/siteContent.js';

export default function Work() {
  return (
    <>
      <Seo {...seo.work} />
      <PageHero
        eyebrow="Work"
        lines={['Selected projects,', 'honestly described.']}
        lead="These projects were delivered through development collaborations. Each case study states the studio's own contribution — the brands belong to their owners."
      />
      <div className="container" style={{ paddingBottom: 32 }}>
        <DemoBadge>Project details need your approval</DemoBadge>
      </div>
      <div className="work-stack">
        {projects.map((p, i) => {
          const tone = ['white', 'deep', 'paper'][i % 3];
          return (
            <section key={p.slug} className={`work-block section--${tone}`} aria-label={p.name}>
              <div className="container"><ProjectFeature project={p} index={i} /></div>
            </section>
          );
        })}
      </div>
      <CtaBand />
    </>
  );
}
