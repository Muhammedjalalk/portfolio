import { useState } from 'react';
import './Navbar.css';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-brand">
          <span className="brand-badge">MJ</span>
          <span className="brand-name">Muhammed Jalal</span>
        </a>

        <div className="navbar-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="navbar-link">
              {l.label}
            </a>
          ))}
        </div>

        <div className="navbar-actions">
          <a href="#contact" className="hire-btn">Hire Me</a>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <button
            className="menu-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
