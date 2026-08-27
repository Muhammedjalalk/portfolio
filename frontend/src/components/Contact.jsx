import { useState } from 'react';
import './Contact.css';

// Point this at your Django backend.
// Uses VITE_API_URL from environment if set (production/Vercel),
// otherwise falls back to localhost for local development.
const API_URL = `${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/api/contact/`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // status can be: 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        // Backend sends { success: false, errors: {...} } on validation failure
        const firstError = data.errors
          ? Object.values(data.errors)[0]
          : 'Something went wrong. Please try again.';
        throw new Error(Array.isArray(firstError) ? firstError[0] : firstError);
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset back to idle after a few seconds so the form is reusable
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Failed to send message. Please try again.');
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <span className="eyebrow">Get In Touch</span>
        <h2>Let's Work Together</h2>
        <p>
          Looking for a motivated developer who learns fast and delivers?
          I'd love to hear about your project or opportunity.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              disabled={status === 'sending'}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              disabled={status === 'sending'}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="Job opportunity / Project inquiry"
            value={formData.subject}
            onChange={handleChange}
            disabled={status === 'sending'}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            placeholder="Tell me about the opportunity or project..."
            value={formData.message}
            onChange={handleChange}
            disabled={status === 'sending'}
          />
        </div>

        <button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className="form-message success">
            ✓ Message sent! I'll get back to you soon.
          </p>
        )}
        {status === 'error' && (
          <p className="form-message error">✗ {errorMsg}</p>
        )}
      </form>
    </section>
  );
}

export default Contact;
