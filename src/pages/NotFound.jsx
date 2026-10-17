import React from 'react';
import Seo from '../components/ui/Seo.jsx';
import Button from '../components/ui/Button.jsx';
import { seo } from '../data/siteContent.js';

export default function NotFound() {
  return (
    <>
      <Seo {...seo.notFound} />
      <section className="not-found">
        <div className="container">
          <p className="eyebrow">Error 404</p>
          <h1 className="display" style={{ fontSize: 'clamp(2.6rem, 7.4vw, 6.4rem)' }}>That page<br />isn’t here.</h1>
          <p className="lead muted" style={{ margin: '24px 0 36px' }}>The link may be broken, or the page may have moved.</p>
          <Button to="/" variant="dark">Back to home</Button>
        </div>
      </section>
    </>
  );
}
