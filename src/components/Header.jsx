import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex flex-col md:flex-row justify-between items-center">
      <h1 className="text-3xl font-bold">My Portfolio</h1>
      <nav className="flex space-x-4 mt-2 md:mt-0">
        <a href="#about" className="hover:text-gray-400">About</a>
        <a href="#experiences" className="hover:text-gray-400">Experience</a>

        <a href="#projects" className="hover:text-gray-400">Projects</a>
        <a href="#skills" className="hover:text-gray-400">Skills</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </nav>
      <div className="flex space-x-4 mt-2 md:mt-0">
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
    </header>
  );
};

export default Header;
