import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-8">
      <div className="flex justify-center space-x-4 mb-4">
        <a href="https://www.linkedin.com/in/fauziesalman/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a href="https://github.com/FauzieSlmn" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a href="mailto:fauziesalman@upi.edu" className="hover:text-gray-400">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </a>
      </div>
      <p>© 2024 My Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
