import React from 'react';

// Neutral placeholder composition — NOT a screenshot. If project.image is set, the real asset is shown instead.
export default function ProjectVisual({ project, loading = 'lazy' }) {
  const { name, url, image, visual } = project;
  const host = url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  return (
    <div
      className={`pv pv--${visual.variant}`}
      style={{ '--pv-accent': visual.accent, '--pv-ground': visual.ground }}
      role="img"
      aria-label={image ? `${name} website` : `Placeholder artwork for the ${name} project`}
    >
      <div className="pv__bar" aria-hidden="true">
        <span /><span /><span />
        <em>{host}</em>
      </div>
      <div className="pv__stage">
        {image ? (
          <img className="pv__img" src={image} alt="" loading={loading} />
        ) : (
          <>
            <i className="pv__shape pv__shape--1" aria-hidden="true" />
            <i className="pv__shape pv__shape--2" aria-hidden="true" />
            <span className="pv__name" aria-hidden="true">{name}</span>
            <span className="pv__note" aria-hidden="true">Screenshot placeholder</span>
          </>
        )}
      </div>
    </div>
  );
}
