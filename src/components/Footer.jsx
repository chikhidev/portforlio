import React from 'react';
import './Footer.css';

/**
 * Footer - Navigation and contact information
 */
const Footer = React.memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link">
            GitHub
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">
            Twitter
          </a>
          <a href="mailto:contact@example.com" className="footer-link">
            Email
          </a>
          <a href="#" className="footer-link">
            Resume
          </a>
        </div>

        <div className="footer-info">
          <p className="footer-text">
            Crafted with attention to performance and engineering discipline.
          </p>
          <p className="footer-copyright">
            © {currentYear} Software Engineer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
