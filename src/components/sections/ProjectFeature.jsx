import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal.jsx';
import Button from '../ui/Button.jsx';
import ProjectVisual from '../ui/ProjectVisual.jsx';

// Three different compositions (index % 3) so projects don't read as a repeated card grid.
export default function ProjectFeature({ project, index }) {
  const variant = index % 3;
  return (
    <div className={`feature feature--${variant}`}>
      <Reveal className="feature__visual">
        <Link to={`/work/${project.slug}`} className="feature__link" aria-label={`${project.name} case study`}>
          <ProjectVisual project={project} />
        </Link>
      </Reveal>
      <Reveal className="feature__body" delay={0.1}>
        <span className="feature__index">{String(index + 1).padStart(2, '0')} — {project.industry}</span>
        <h3 className="feature__name">{project.name}</h3>
        <p className="feature__type">{project.type}{project.platform && !project.platform.startsWith('[') ? ` · ${project.platform}` : ''}</p>
        <p className="feature__summary">{project.summary}</p>
        <div className="feature__links">
          <Button to={`/work/${project.slug}`} variant={variant === 1 ? 'primary' : 'dark'} size="sm">Read case study</Button>
          <a className="link-arrow" href={project.url} target="_blank" rel="noopener noreferrer">
            View project<span className="sr-only"> {project.name} (opens in a new tab)</span>
          </a>
        </div>
      </Reveal>
    </div>
  );
}
