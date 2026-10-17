import React from 'react';
import Seo from '../components/ui/Seo.jsx';
import PageHero from '../components/sections/PageHero.jsx';
import CtaBand from '../components/sections/CtaBand.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import CrystalGraphic from '../components/ui/CrystalGraphic.jsx';
import { site, seo } from '../data/siteContent.js';

export default function About() {
  const a = site.about;
  return (
    <>
      <Seo {...seo.about} />
      <PageHero eyebrow="About" lines={a.title} lead={a.intro} />

      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="model-title">
        <div className="container about-grid">
          <Reveal>
            <h2 id="model-title" className="title">One developer.<br />A team behind the work.</h2>
            <div className="identity" style={{ marginTop: 40 }}>
              <CrystalGraphic label="CRYSTAL UI crystal mark" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="model">
            {a.model.map((m) => (
              <div className="model__item" key={m.title}>
                <h3>{m.title}</h3>
                <p className="muted">{m.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--deep" aria-labelledby="principles-title">
        <div className="container">
          <Reveal>
            <p className="eyebrow" style={{ color: 'var(--green)' }}>Principles</p>
            <h2 id="principles-title" className="title" style={{ marginBottom: 'clamp(32px,5vw,56px)' }}>What you can expect.</h2>
          </Reveal>
          <ul className="principles">
            {a.principles.map((p) => <Reveal as="li" key={p}>{p}</Reveal>)}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="cap-title">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Capabilities</p>
            <h2 id="cap-title" className="title" style={{ marginBottom: 'clamp(32px,5vw,56px)' }}>Tools of the trade.</h2>
          </Reveal>
          <ul className="capabilities">
            {a.capabilities.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
