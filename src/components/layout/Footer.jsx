import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo.jsx';
import { site } from '../../data/siteContent.js';

export default function Footer() {
  const { email } = site.contact;
  const { linkedin, github } = site.social;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Logo light className="footer__logo" />
            <p className="footer__statement">{site.footer.statement}</p>
          </div>
          <nav aria-label="Footer">
            <h2 className="footer__heading">Explore</h2>
            <ul className="footer__list">
              <li><Link to="/">Home</Link></li>
              {site.nav.map((item) => (
                <li key={item.to}><Link to={item.to}>{item.label === 'Clients' ? 'Client feedback' : item.label}</Link></li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="footer__heading">Get in touch</h2>
            <ul className="footer__list">
              <li><Link to="/contact">Start a project</Link></li>
              {email && <li><a href={`mailto:${email}`}>{email}</a></li>}
              {linkedin && <li><a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<span className="sr-only"> (opens in a new tab)</span></a></li>}
              {github && <li><a href={github} target="_blank" rel="noopener noreferrer">GitHub<span className="sr-only"> (opens in a new tab)</span></a></li>}
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} CRYSTAL UI. All rights reserved.</span>
          <span>Built with React.</span>
        </div>
      </div>
    </footer>
  );
}
