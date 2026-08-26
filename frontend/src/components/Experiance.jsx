import './Experiance.css';

function Experiance() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-inner">
        <div className="section-header">
          <span className="eyebrow">Journey</span>
          <h2>Experience & Education</h2>
          <div className="divider"></div>
        </div>

        <div className="experience-grid">
          <div>
            <h3 className="col-heading">Training & Experience</h3>
            <div className="timeline-item">
              <span className="timeline-date">Feb 2025 — Dec 2025</span>
              <h4>OJT Trainee — Full Stack Python/Django with React</h4>
              <p className="org">OneTeam Calicut</p>
              <ul>
                <li>Built full-stack features end-to-end using React.js and Django: designed database schemas, built REST APIs with DRF.</li>
                <li>Worked across MySQL, PostgreSQL, and MongoDB — schema design, SQL queries, ORM migrations.</li>
                <li>Tested API endpoints with Postman, wrote unit tests, documented issues and resolutions.</li>
                <li>Built responsive front-end UI matching approved designs, communicated progress regularly.</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="col-heading">Education</h3>
            <div className="timeline-item">
              <span className="timeline-date">Jun 2022 — Mar 2025</span>
              <h4>BSc Computer Science</h4>
              <p className="org">Blossom Arts and Science College, University of Calicut</p>
              <p className="desc">Programming fundamentals, data structures, OOP, and web development.</p>
            </div>
            <div className="timeline-item">
              <span className="timeline-date muted">Feb 2025 — Dec 2025</span>
              <h4>Full Stack Python Django with React — Certification</h4>
              <p className="org">OneTeam Calicut</p>
              <p className="desc">Intensive OJT program covering full-stack development with Python, DRF, React.js, and multiple databases.</p>
            </div>

            <h3 className="col-heading" style={{ marginTop: '2rem' }}>Core Competencies</h3>
            <div className="tags">
              {['OOP', 'Data Structures', 'Fast Learner', 'Client Reporting', 'Design-to-Code', 'Team Communication', 'Problem Solving'].map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiance;
