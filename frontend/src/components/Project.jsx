import { useState } from 'react';
import './Project.css';

const projects = [
  {
    title: 'CivicConnect',
    subtitle: 'AI-Based Complaint Management System',
    desc: 'Full-stack complaint management app with JWT auth, role-based access, and responsive React front end deployed on Vercel.',
    tech: ['Python', 'Django REST', 'MySQL', 'React.js', 'JWT'],
    featured: true,
    github: 'https://github.com/Muhammedjalalk',
    live: '#',
  },
  {
    title: 'Smart Café',
    subtitle: 'Cafe Discovery & Ordering Platform',
    desc: 'AI-driven sentiment-based recommendations and Haversine geolocation sorting for nearby cafes, full stack with Flutter client.',
    tech: ['Python', 'Django', 'MySQL', 'Flutter', 'AI/ML'],
    github: 'https://github.com/Muhammedjalalk',
    live: '#',
  },
  {
    title: 'Stock Manager',
    subtitle: 'Product Inventory & Stock Management',
    desc: 'Full-stack inventory system with REST API, PostgreSQL, pagination, filtering, and CORS-secured deployment on Render.',
    tech: ['Python', 'Django REST', 'PostgreSQL', 'Render', 'CORS'],
    github: 'https://github.com/Muhammedjalalk',
    live: '#',
  },
];

function Project() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-inner">
        <div className="section-header">
          <span className="eyebrow">Portfolio</span>
          <h2>Full-Stack Projects</h2>
          <div className="divider"></div>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={p.title} className="project-card" onClick={() => setActive(i)}>
              {p.featured && <span className="featured-badge">Featured</span>}
              <h3>{p.title}</h3>
              <p className="project-subtitle">{p.subtitle}</p>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {active !== null && (
        <div className="project-modal" onClick={() => setActive(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActive(null)}>✕</button>
            <span className="project-subtitle">{projects[active].subtitle}</span>
            <h3>{projects[active].title}</h3>
            <p className="project-desc">{projects[active].desc}</p>
            <div className="project-tags">
              {projects[active].tech.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
            <div className="modal-actions">
              <a href={projects[active].github} target="_blank" rel="noreferrer" className="btn btn-outline">Source Code</a>
              <a href={projects[active].live} target="_blank" rel="noreferrer" className="btn btn-primary">Live Demo</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Project;
