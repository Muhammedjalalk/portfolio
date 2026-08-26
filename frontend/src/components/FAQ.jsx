import { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    q: 'Are you available for full-time or part-time work?',
    a: "I'm available for full-time positions immediately. I'm also open to part-time freelance projects or internships that offer good learning opportunities.",
  },
  {
    q: "What's your tech stack preference?",
    a: 'My strongest stack is Python/Django + React.js for full-stack web apps. I\'m also comfortable with Node.js/Express and I\'m actively learning PHP and Java to expand my versatility.',
  },
  {
    q: 'Can you work remotely?',
    a: 'Absolutely. I have experience with Git/GitHub workflows, remote deployment (Render, Vercel), and I\'m comfortable with asynchronous communication and progress reporting.',
  },
  {
    q: 'Do you have experience with production deployments?',
    a: "Yes! I've deployed Django backends on Render and React front ends on Vercel. I've handled CORS configuration, environment variables, and cross-origin issues in production environments.",
  },
  {
    q: 'Are you willing to relocate?',
    a: "I'm based in Malappuram, Kerala, but I'm open to relocation for the right opportunity. Remote work is also a great option for me.",
  },
  {
    q: 'How do you handle learning new technologies?',
    a: 'I follow a hands-on approach — I learn best by building. During my OJT, I picked up React.js, Django REST Framework, and MongoDB by directly implementing them in projects.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(i) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section id="faq" className="faq-section">
      <div className="faq-inner">
        <div className="section-header">
          <span className="eyebrow">Common Questions</span>
          <h2>FAQ</h2>
          <div className="divider"></div>
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <div key={item.q} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
              <button className="faq-toggle" onClick={() => toggle(i)}>
                <span>{item.q}</span>
                <span className="chevron">▾</span>
              </button>
              {openIndex === i && <div className="faq-answer">{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
