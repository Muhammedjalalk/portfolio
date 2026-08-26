import './Skills.css';

const categories = [
  {
    title: 'Front End',
    items: ['JavaScript (ES6+)', 'HTML5 & CSS3', 'React.js', 'Responsive Design'],
  },
  {
    title: 'Back End',
    items: ['Python', 'Django & DRF', 'Node.js & Express', 'REST API Design'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Schema & Migrations'],
  },
  {
    title: 'Tools & Deploy',
    items: ['Git & GitHub', 'Render & Vercel', 'Postman', 'Linux CLI'],
  },
];

const skillBars = [
  { label: 'JavaScript (ES6+) / React.js', pct: 85 },
  { label: 'Python / Django / DRF', pct: 88 },
  { label: 'HTML5 / CSS3 / Responsive Design', pct: 90 },
  { label: 'MySQL / PostgreSQL / MongoDB', pct: 80 },
  { label: 'Node.js / Express.js', pct: 70 },
  { label: 'Git / Deployment (Render, Vercel)', pct: 82 },
];

const learning = ['PHP', 'Java', 'Apache / Nginx', 'Advanced Routing', 'Caching Workflows'];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-inner">
        <div className="section-header">
          <span className="eyebrow">Technical Arsenal</span>
          <h2>Skills & Technologies</h2>
          <div className="divider"></div>
        </div>

        <div className="skills-grid">
          {categories.map((cat) => (
            <div key={cat.title} className="skill-card">
              <h3>{cat.title}</h3>
              <ul>
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="skill-bars">
          {skillBars.map((bar) => (
            <div key={bar.label} className="skill-bar-row">
              <div className="skill-bar-label">
                <span>{bar.label}</span>
                <span className="pct">{bar.pct}%</span>
              </div>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: `${bar.pct}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="learning-box">
          <h4>Currently Learning</h4>
          <div className="learning-tags">
            {learning.map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
