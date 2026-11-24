import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import Seo from '../components/ui/Seo.jsx';
import Button from '../components/ui/Button.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import CrystalGraphic from '../components/ui/CrystalGraphic.jsx';
import TrustStrip from '../components/sections/TrustStrip.jsx';
import ServiceList from '../components/sections/ServiceList.jsx';
import ProjectFeature from '../components/sections/ProjectFeature.jsx';
import Process from '../components/sections/Process.jsx';
import QuoteList from '../components/sections/QuoteList.jsx';
import CtaBand from '../components/sections/CtaBand.jsx';
import { site, seo } from '../data/siteContent.js';
import { projects } from '../data/projects.js';
import { testimonials } from '../data/testimonials.js';

export default function Home() {
  const reduce = useReducedMotion();
  const { hero } = site;
  return (
    <>
      <Seo {...seo.home} />

      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div>
            <motion.p
              className="eyebrow"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {hero.eyebrow}
            </motion.p>
            <h1 id="hero-title" className="display">
              {hero.lines.map((line, i) => (
                <span className="hero__line" key={line}>
                  <motion.span
                    initial={reduce ? false : { y: '105%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
            <motion.p
              className="lead hero__lead"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {hero.lead}
            </motion.p>
            <motion.div
              className="hero__actions"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.62 }}
            >
              <Button to="/contact" variant="dark">{hero.primaryCta}</Button>
              <Button to="/work" variant="outline">{hero.secondaryCta}</Button>
            </motion.div>
            <p className="hero__trust">
              <ShieldCheck size={20} aria-hidden="true" /> {hero.trust}
            </p>
          </div>
          <CrystalGraphic className="hero__graphic" />
        </div>
      </section>

      <TrustStrip />

      <section className="section" aria-labelledby="services-title">
        <div className="container">
          <div className="section-head">
            <Reveal>
              <p className="eyebrow">Services</p>
              <h2 id="services-title" className="title">
                Built on the platforms<br />your business runs on.
              </h2>
            </Reveal>
            <Reveal delay={0.1}><Button to="/services" variant="outline" size="sm">All services</Button></Reveal>
          </div>
          <ServiceList compact />
        </div>
      </section>

      <section className="section section--white" aria-labelledby="work-title" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <Reveal>
              <p className="eyebrow">Selected work</p>
              <h2 id="work-title" className="title">Real storefronts.<br />Real websites.</h2>
            </Reveal>
            <Reveal delay={0.1}><Button to="/work" variant="outline" size="sm">All work</Button></Reveal>
          </div>
        </div>
      </section>
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

      <section className="section" aria-labelledby="process-title">
        <div className="container">
          <Reveal>
            <p className="eyebrow">How we work</p>
            <h2 id="process-title" className="title" style={{ marginBottom: 'clamp(40px,6vw,80px)' }}>
              Requirements first.<br />Estimate second.<br />Then we build.
            </h2>
          </Reveal>
          <Process />
        </div>
      </section>

      <section className="section section--ink" aria-labelledby="why-title">
        <div className="container">
          <Reveal>
            <p className="eyebrow" style={{ color: 'var(--green)' }}>Why CRYSTAL UI</p>
            <h2 id="why-title" className="title" style={{ marginBottom: 'clamp(40px,6vw,72px)' }}>
              Direct access.<br />Careful engineering.
            </h2>
          </Reveal>
          <ul className="why">
            {site.why.map((w, i) => (
              <Reveal as="li" key={w.title} className="why__item" delay={(i % 3) * 0.06}>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="clients-title">
        <div className="container">
          <div className="section-head">
            <Reveal>
              <p className="eyebrow">Client feedback</p>
              <h2 id="clients-title" className="title">In their words.</h2>
            </Reveal>
            <Reveal delay={0.1}><Button to="/testimonials" variant="outline" size="sm">More feedback</Button></Reveal>
          </div>
          <QuoteList items={testimonials.slice(0, 2)} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
