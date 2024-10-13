import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface NavbarProps {
  handleScrollToSection: (sectionRef: React.RefObject<HTMLDivElement>, offset?: number) => void;
  aboutSectionRef: React.RefObject<HTMLDivElement>;
  projectsSectionRef: React.RefObject<HTMLDivElement>;
  contactSectionRef: React.RefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = ({ handleScrollToSection, aboutSectionRef, projectsSectionRef, contactSectionRef }) => {
  return (
    <nav className='fixed top-0 left-0 w-full bg-black text-white py-4 z-50'>
      <div className='container mx-auto px-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-red-500'>
          <span className="inline-block hover:text-green-600 duration-300 transition-transform transform hover:scale-110">
            Josh's
          </span> 
          <span className="inline-block hover:text-blue-600 duration-300 transition-transform transform hover:scale-110">
            Website
          </span>
        </h1>
        <div className='flex space-x-8 items-center'>
          <button onClick={() => handleScrollToSection(aboutSectionRef, 64)} className="font-semibold text-white hover:text-red-500 transition duration-300">About</button>
          <button onClick={() => handleScrollToSection(projectsSectionRef, 64)} className="font-semibold text-white hover:text-red-500 transition duration-300">Projects</button>
          <button onClick={() => handleScrollToSection(contactSectionRef, 64)} className="font-semibold text-white hover:text-red-500 transition duration-300">Contact</button>
          <a href="https://github.com/Josh-Harrison1600" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition duration-300">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/josh-harrison2283/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition duration-300">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
