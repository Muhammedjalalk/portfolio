import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="brand-badge">MJ</span>
          <span>© 2025 Muhammed Jalal K. All rights reserved.</span>
        </div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="https://github.com/Muhammedjalalk" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
