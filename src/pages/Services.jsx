import React from 'react';
import Seo from '../components/ui/Seo.jsx';
import PageHero from '../components/sections/PageHero.jsx';
import ServiceList from '../components/sections/ServiceList.jsx';
import Process from '../components/sections/Process.jsx';
import CtaBand from '../components/sections/CtaBand.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import DemoBadge from '../components/ui/DemoBadge.jsx';
import { seo } from '../data/siteContent.js';

export default function Services() {
  return (
    <>
      <Seo {...seo.services} />
      <PageHero
        eyebrow="Services"
        lines={['Specialists in Shopify', 'and WordPress.', 'Fluent in frontend.']}
        lead="Shopify and WordPress are where most client work lives. Behind them sits deep frontend engineering with React, Angular and Svelte. Each service shows whether it is led directly by the studio lead or delivered with team support."
      />
      <section className="section" style={{ paddingTop: 0 }} aria-label="Services">
        <div className="container">
          <p style={{ marginBottom: 24 }}><DemoBadge>Service list and delivery labels need your approval</DemoBadge></p>
          <ServiceList />
        </div>
      </section>
      <section className="section section--deep" aria-labelledby="proc-title">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Process</p>
            <h2 id="proc-title" className="title" style={{ marginBottom: 'clamp(40px,6vw,80px)' }}>
              A clear path from<br />first call to launch.
            </h2>
          </Reveal>
          <Process />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
