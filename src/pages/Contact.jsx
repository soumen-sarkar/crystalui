import React from 'react';
import Seo from '../components/ui/Seo.jsx';
import PageHero from '../components/sections/PageHero.jsx';
import ContactForm from '../components/ui/ContactForm.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import { site, seo } from '../data/siteContent.js';

export default function Contact() {
  const { email } = site.contact;
  const { linkedin, github } = site.social;
  return (
    <>
      <Seo {...seo.contact} />
      <PageHero eyebrow="Contact" lines={site.contactPage.title} lead={site.contactPage.lead} />
      <section className="section" style={{ paddingTop: 0 }} aria-label="Enquiry form">
        <div className="container contact-grid">
          <Reveal><ContactForm /></Reveal>
          <Reveal delay={0.1} className="contact-aside">
            <div>
              <h2>What happens next</h2>
              <ol className="muted" style={{ listStyle: 'decimal', paddingLeft: 20, display: 'grid', gap: 8 }}>
                <li>You describe the project.</li>
                <li>We review the requirements and reply by email.</li>
                <li>We agree the scope and an estimate before any work starts.</li>
              </ol>
            </div>
            {(email || linkedin || github) && (
              <div>
                <h2>Prefer to write directly?</h2>
                <ul>
                  {email && <li><a href={`mailto:${email}`}>{email}</a></li>}
                  {linkedin && <li><a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<span className="sr-only"> (opens in a new tab)</span></a></li>}
                  {github && <li><a href={github} target="_blank" rel="noopener noreferrer">GitHub<span className="sr-only"> (opens in a new tab)</span></a></li>}
                </ul>
              </div>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
