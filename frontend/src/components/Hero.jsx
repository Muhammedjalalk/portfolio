import { useEffect, useState } from 'react';
import './Hero.css';

const titles = [
  'Software Developer',
  'Python/Django Developer',
  'React.js Developer',
  'Fast Learner',
  'Problem Solver',
];

function Hero() {
  const [text, setText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = current.substring(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        const next = current.substring(0, text.length - 1);
        setText(next);
        if (next === '') {
          setIsDeleting(false);
          setTitleIndex((titleIndex + 1) % titles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, titleIndex]);

  return (
    <section className="hero-section">
      <div className="hero-inner">
        <div className="hero-text">
          <span className="hero-badge">
            <span className="badge-dot"></span>
            Open to Opportunities
          </span>

          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Jalal</span>
            <br />
            <span className="hero-typing">{text}</span>
            <span className="cursor"></span>
          </h1>

          <p className="hero-desc">
            Fresher Software Developer with hands-on training building
            full-stack web applications using Python/Django and React.js.
            Strong fundamentals in JavaScript, REST APIs, and database design.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View Projects →</a>
            <a href="#contact" className="btn btn-outline">Let's Talk</a>
            <a href="/resume.pdf" download className="btn btn-accent">⬇ Resume</a>
          </div>

          <div className="hero-social">
            <span className="social-label">Connect</span>
            <span className="social-divider"></span>
            <a href="https://github.com/Muhammedjalalk" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/muhammed-jalal-k-40b7b631a" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-top">
            <div className="card-avatar">MJ</div>
            <div>
              <h3>Muhammed Jalal K</h3>
              <p>Software Developer</p>
            </div>
          </div>
          <div className="card-stats">
            <div className="stat"><span className="stat-num">3</span><span className="stat-label">Projects</span></div>
            <div className="stat"><span className="stat-num">5+</span><span className="stat-label">DBs Used</span></div>
            <div className="stat"><span className="stat-num">2</span><span className="stat-label">Platforms</span></div>
          </div>
          <div className="card-tags">
            {['React', 'Django', 'Python', 'MySQL', 'Node.js'].map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
