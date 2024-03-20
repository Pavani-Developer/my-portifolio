// Footer.js

import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Styles/Footer.css';

library.add(fab);

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>&copy; 2024 Pavani Pampana</p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'github']} />
        </a>
        <a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'hackerrank']} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </a>
        <a href="https://www.codewars.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'codewars']} />
        </a>
      </div>
      <div className="contact-email">
        <p>Email: <a href="mailto:pavani65108@gmail.com">pavani65108gmail.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;
