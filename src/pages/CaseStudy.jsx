import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Seo from '../components/ui/Seo.jsx';
import Button from '../components/ui/Button.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import ProjectVisual from '../components/ui/ProjectVisual.jsx';
import PlaceholderText from '../components/ui/PlaceholderText.jsx';
import DemoBadge from '../components/ui/DemoBadge.jsx';
import CtaBand from '../components/sections/CtaBand.jsx';
import NotFound from './NotFound.jsx';
import { projects } from '../data/projects.js';

export default function CaseStudy() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return <NotFound />;
  const p = projects[index];
  const next = projects[(index + 1) % projects.length];

  const blocks = [
    ['Business context', p.context],
    ['The challenge', p.challenge],
    ['Role and contribution', p.role],
    ['Technical implementation', p.implementation],
    ['Key UI/UX decisions', p.uiDecisions],
  ];

  return (
    <>
      <Seo
        title={`${p.name} case study | CRYSTAL UI`}
        description={`${p.name}: ${p.summary}`}
        path={`/work/${p.slug}`}
      />
      <section className="case__head">
        <div className="container">
          <Link to="/work" className="case__back"><ArrowLeft size={18} aria-hidden="true" /> All work</Link>
          <p className="eyebrow">{p.type}</p>
          <h1 className="display" style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)' }}>{p.name}</h1>
          <p className="lead muted" style={{ marginTop: 24 }}>{p.summary}</p>
          <div style={{ marginTop: 32, display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
            <Button href={p.url} variant="dark">View project</Button>
            <DemoBadge>Draft — details need your approval</DemoBadge>
          </div>
          <dl className="case__facts">
            <div><dt>Client / industry</dt><dd>{p.industry}</dd></div>
            <div><dt>Project type</dt><dd>{p.type}</dd></div>
            <div><dt>Platform</dt><dd><PlaceholderText text={p.platform} /></dd></div>
            <div><dt>Live site</dt><dd><a href={p.url} target="_blank" rel="noopener noreferrer">{p.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}<span className="sr-only"> (opens in a new tab)</span></a></dd></div>
          </dl>
        </div>
      </section>

      <section className="container" aria-label={`${p.name} visual`}>
        <Reveal><ProjectVisual project={p} loading="eager" /></Reveal>
      </section>

      <section className="section" aria-label="Case study details">
        <div className="container case__body">
          {blocks.map(([heading, text]) => (
            <Reveal key={heading} className="case__block">
              <h2>{heading}</h2>
              <p><PlaceholderText text={text} /></p>
            </Reveal>
          ))}
          {p.outcomes.length > 0 && (
            <Reveal className="case__block">
              <h2>Verified outcomes</h2>
              <ul style={{ display: 'grid', gap: 10 }}>
                {p.outcomes.map((o) => <li key={o}>{o}</li>)}
              </ul>
            </Reveal>
          )}
          <Reveal className="case__block">
            <h2>Technologies</h2>
            <ul className="case__tech">
              {p.tech.map((t) => <li key={t} className="chip"><PlaceholderText text={t} /></li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section--white" aria-label="Next project">
        <div className="container">
          <Link to={`/work/${next.slug}`} className="case__next">
            <span className="eyebrow">Next project</span>
            <span className="title">{next.name}</span>
          </Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
