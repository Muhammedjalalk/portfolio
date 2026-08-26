import './About.css';

const stats = [
  { label: 'CS Degree', value: 'BSc' },
  { label: 'Projects', value: '3' },
  { label: 'Databases', value: '3' },
  { label: 'Platforms', value: '2' },
];

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <div>
          <span className="eyebrow">About Me</span>
          <h2>Turning ideas into <span className="highlight">full-stack solutions</span></h2>
          <div className="divider"></div>

          <p>
            I'm a Fresher Software Developer from Malappuram, Kerala, with
            hands-on OJT training at OneTeam Calicut building full-stack web
            applications. I have strong fundamentals in JavaScript (ES6+),
            HTML5, and CSS3, with production experience using Python/Django
            and Django REST Framework.
          </p>
          <p>
            I'm comfortable working across MySQL, PostgreSQL, and MongoDB —
            from schema design and query writing to ORM migrations. I've
            deployed applications on Render and Vercel, and I'm experienced
            with Git/GitHub workflows, Postman API testing, and Linux
            command-line environments.
          </p>
          <p>
            Currently expanding my skillset into PHP, Java, and advanced
            server configuration. I'm a fast learner who matches
            implementation precisely to approved designs and communicates
            progress reliably.
          </p>

          <div className="stat-grid">
            {stats.map((s) => (
              <div key={s.label} className="stat-box">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
