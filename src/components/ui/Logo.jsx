import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'url:../../assets/crystal-ui-logo.svg';
import logoLight from 'url:../../assets/crystal-ui-logo-light.svg';

export default function Logo({ light = false, className = '' }) {
  return (
    <Link to="/" className={className} aria-label="CRYSTAL UI — home">
      <img src={light ? logoLight : logo} alt="CRYSTAL UI" width="145" height="36" />
    </Link>
  );
}
