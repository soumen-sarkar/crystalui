import React from 'react';
import Seo from '../components/ui/Seo.jsx';
import PageHero from '../components/sections/PageHero.jsx';
import QuoteList from '../components/sections/QuoteList.jsx';
import CtaBand from '../components/sections/CtaBand.jsx';
import { testimonials } from '../data/testimonials.js';
import { seo } from '../data/siteContent.js';

export default function Testimonials() {
  return (
    <>
      <Seo {...seo.testimonials} />
      <PageHero eyebrow="Client feedback" lines={['What clients say', 'about working together.']} />
      <section className="section" style={{ paddingTop: 0 }} aria-label="Testimonials">
        <div className="container"><QuoteList items={testimonials} /></div>
      </section>
      <CtaBand />
    </>
  );
}
