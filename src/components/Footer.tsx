import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Ensure proper imports for icons

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0 px-4">
        <span className="text-sm">&copy; {new Date().getFullYear()} Josh Harrison</span>
        <div className="flex space-x-6">

          {/* Github Icon */}
          <a
            href="https://github.com/Josh-Harrison1600"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition duration-300"
          >
            <FaGithub size={28} />
          </a>

          {/* Linkedin Icon */}
          <a
            href="https://www.linkedin.com/in/josh-harrison2283/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition duration-300"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
