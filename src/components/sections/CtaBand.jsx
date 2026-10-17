import React from 'react';
import Button from '../ui/Button.jsx';
import Reveal from '../ui/Reveal.jsx';

export default function CtaBand({ title = ['Have a project in mind?', "Let's make it happen."], lead = 'Tell us what you are building or what needs improving. You will get a clear scope and estimate before any work begins.' }) {
  return (
    <section className="section section--green cta-band" aria-labelledby="cta-title">
      <div className="container cta-band__inner">
        <Reveal>
          <h2 id="cta-title" className="title">
            {title.map((l, i) => <span key={i} style={{ display: 'block' }}>{l}</span>)}
          </h2>
          <p className="lead" style={{ marginTop: 24 }}>{lead}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <Button to="/contact" variant="dark">Discuss your project</Button>
        </Reveal>
      </div>
    </section>
  );
}
