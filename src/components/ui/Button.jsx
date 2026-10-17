import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

// Renders a router Link (to), an external anchor (href) or a <button>.
export default function Button({ to, href, variant = 'primary', size, children, icon = true, className = '', ...rest }) {
  const cls = `btn btn--${variant}${size ? ` btn--${size}` : ''} ${className}`.trim();
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
        {icon && <ArrowRight className="btn__icon" size={18} aria-hidden="true" />}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
        {icon && <ArrowUpRight className="btn__icon" size={18} aria-hidden="true" />}
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
      {icon && <ArrowRight className="btn__icon" size={18} aria-hidden="true" />}
    </button>
  );
}
