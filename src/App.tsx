import React, { useEffect, useState, useRef } from 'react';
import bgIMG from "./components/images/bg1.png";
import shiruIMG from "./components/images/shiruImg.png";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTypingEffect } from './hooks/useTypingEffect';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function App() {
  const [mousePos, setMousePos] = useState({ x: -175, y: -175 });
  const [showNavbar, setShowNavbar] = useState(false);
  const aboutSectionRef = useRef<HTMLDivElement | null>(null);
  const projectsSectionRef = useRef<HTMLDivElement | null>(null);
  const contactSectionRef = useRef<HTMLDivElement | null>(null);
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [contactText, setContactText] = useState(''); // Contact typing state
  const [hasTypedContact, setHasTypedContact] = useState(false); // Prevent re-typing
  const [hasTypedAbout, setHasTypedAbout] = useState(false);
  const [hasTypedProjects, setHasTypedProjects] = useState(false);
  const [aboutText, setAboutText] = useState('');
  const [projectsText, setProjectsText] = useState('');
  const typingSpeed = 70;
  const deletingSpeed = 55;
  const delayAfterTyping = 2000;

  // Array of texts to display in typing effect
  const texts = ["Computer Science Student.", "Java Developer.", "React Developer.", "Network Administration Graduate.", "Cybersecurity Graduate."];

  //use effect for AOS library
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  // Typing effect logic
  useEffect(() => {
    const handleTyping = () => {
      const current = texts[textIndex];
      setIsPaused(false);

      if (!isDeleting) {
        setCurrentText(current.substring(0, currentText.length + 1));

        if (currentText === current) {
          setIsPaused(true);
          setTimeout(() => setIsDeleting(true), delayAfterTyping);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length - 1));

        if (currentText === '') {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const timeoutId = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting]);

  // Mouse movement effect
  useEffect(() => {
    const handleMouseMovement = (event: MouseEvent) => {
      setMousePos({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMovement);

    return () => {
      window.removeEventListener('mousemove', handleMouseMovement);
    };
  }, []);

  // Use the typing effect hook for different sections
  useTypingEffect("Contact Me", setContactText, typingSpeed, hasTypedContact);
  useTypingEffect("About Me", setAboutText, typingSpeed, hasTypedAbout);
  useTypingEffect("Projects", setProjectsText, typingSpeed, hasTypedProjects);

  // Handle the "View my work" button click and show the navbar
  const handleScrollToSection = (sectionRef: React.RefObject<HTMLDivElement>, offset: number = 0) => {
    if (sectionRef.current) {
      const sectionPosition = sectionRef.current.offsetTop - offset;
      window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
      setShowNavbar(true);
    }
  };

  // Typing effect for different sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === contactSectionRef.current && !hasTypedContact) {
              setHasTypedContact(true); // Start "Contact Me" typing effect
            } else if (entry.target === aboutSectionRef.current && !hasTypedAbout) {
              setHasTypedAbout(true); // Start "About Me" typing effect
            } else if (entry.target === projectsSectionRef.current && !hasTypedProjects) {
              setHasTypedProjects(true); // Start "Projects" typing effect
            }
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (contactSectionRef.current) observer.observe(contactSectionRef.current);
    if (aboutSectionRef.current) observer.observe(aboutSectionRef.current);
    if (projectsSectionRef.current) observer.observe(projectsSectionRef.current);

    return () => {
      if (contactSectionRef.current) observer.unobserve(contactSectionRef.current);
      if (aboutSectionRef.current) observer.unobserve(aboutSectionRef.current);
      if (projectsSectionRef.current) observer.unobserve(projectsSectionRef.current);
    };
  }, [hasTypedContact, hasTypedAbout, hasTypedProjects]);

  // Background style for the main section
  const backgroundStyle = {
    backgroundImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 1) 250px), url(${bgIMG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'black',
  };

  return (
    <>
      {showNavbar && (
        <nav className='fixed top-0 left-0 w-full bg-black text-white py-4 z-50'>
          {/* z-50 ensures the navbar stays on top */}
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
      )}

      <div className="h-screen bg-cover bg-center flex items-center justify-center pt-16" style={backgroundStyle}>
        <div className="text-center">
          <h1 className="text-white text-5xl md:text-6xl font-semibold">
            Hello, I'm <span className="text-red-500">Josh</span>.
          </h1>
          <h2 className="text-white text-3xl md:text-4xl mt-4">
            I'm a {currentText}
            <span className={isPaused ? 'blinking-cursor' : 'solid-cursor'}>|</span>
          </h2>
          <button
            onClick={() => handleScrollToSection(aboutSectionRef, 64)}
            className="mt-8 px-6 py-3 border-2 border-red-500 text-red-500 text-xl hover:bg-red-500 hover:text-white transition duration-300">
            View my work ↓
          </button>
        </div>
      </div>

      <div ref={aboutSectionRef} className='min-h-screen flex items-center justify-center bg-gray-800 text-white pt-16'>
        <div data-aos="fade-up" className='max-w-4xl mx-auto text-center p-8'>
          <h2 className='text-4xl mb-4'>{aboutText}</h2>
          <p className='text-xl'>
            Description goes here. Description goes here. Description goes here.
          </p>
        </div>
      </div>

      <div ref={projectsSectionRef} className='min-h-screen bg-gray-900 text-white p-8 pt-16'>
        <div data-aos="fade-up">
          <h2 className="text-4xl text-center mb-8">{projectsText}</h2>

          {/* Shiru */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-16">
            <div className="md:w-[43%] mb-4 md:mb-0 text-center">
              <a href="https://github.com/Josh-Harrison1600/Shiru-Scraper" target="_blank">
                <h3 className="inline-block text-2xl font-bold hover:text-red-500 transition-all duration-300 transform hover:scale-110 text-center mb-4">Shiru</h3>
              </a>
              <p className="text-xl">Shiru is a JSoup based web scraper that extracts Japanese manga from retail stores and uses batch OpenAI API requests to determine the correct reading difficulty,
                making it useful for people learning Japanese. The frontend site uses React and Tailwind.
              </p>
            </div>
              <div data-aos="flip-down" className="md:w-[55%] hover:scale-105 duration-300">          
              <a href="https://github.com/Josh-Harrison1600/Shiru-Scraper" target="_blank" className='block'>
                <img src={shiruIMG} alt="Project One" className="w-full border-2 border-transparent hover:border-red-500 hover:scale-105 transition-all duration-300" />
              </a>
            </div>
          </div>


        {/* Song Battle */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
        <div className="md:w-[43%] mb-4 md:mb-0 text-center">
          <a href="https://github.com/YourUsername/New-Project" target="_blank">
            <h3 className="inline-block text-2xl font-bold hover:text-green-600 transition-all duration-300 transform hover:scale-110 text-center mb-4">Song Battle</h3>
          </a>
          <p className="text-xl">Song Battle is my unfinised app that allows a user to connect their Spotify account and choose one of their playlists and the site will
            randomly choose 8 songs for the user to decide which is the best
          </p>
        </div>
        <div data-aos="flip-down" className="md:w-[55%] hover:scale-105 duration-300">          
          <a href="https://github.com/YourUsername/New-Project" target="_blank" className='block'>
            <img src="path/to/your/project-image.png" alt="New Project Image" className="w-full border-2 border-transparent hover:border-green-600 hover:scale-105 transition-all duration-300" />
          </a>
        </div>
      </div>

      {/* This Website :) */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-16">
        <div className="md:w-[43%] mb-4 md:mb-0 text-center">
          <a href="https://github.com/Josh-Harrison1600/personalwebsite" target="_blank">
            <h3 className="inline-block text-2xl font-bold hover:text-blue-600 transition-all duration-300 transform hover:scale-110 text-center mb-4">This Website :D</h3>
          </a>
          <p className="text-xl mb-4">My portfolio website was made using:
          </p>
            <ul className='list-disc list-inside text-lg ml-4'>
              <li>
                <a href="https://react.dev/" target="_blank" className='inline-block hover:text-blue-600 transition-all duration-300 transform hover:scale-105 mb-2'>
                  React
                </a>
              </li>
              <li>
              <a href="https://www.typescriptlang.org/" target="_blank" className='inline-block hover:text-blue-600 transition-all duration-300 transform hover:scale-105 mb-2'>
                  TypeScript
                </a>
              </li>
              <li>
              <a href="https://tailwindcss.com/" target="_blank" className='inline-block hover:text-blue-600 transition-all duration-300 transform hover:scale-105 mb-2'>
                  Tailwind
                </a>
              </li>
            </ul>
        </div>
        <div data-aos="flip-down" className="md:w-[55%] hover:scale-105 duration-300">          
          <a href="https://github.com/YourUsername/New-Project" target="_blank" className='block'>
            <img src="path/to/your/project-image.png" alt="New Project Image" className="w-full border-2 border-transparent hover:border-red-500 hover:scale-105 transition-all duration-300" />
          </a>
        </div>
      </div>
    </div>
  </div>

      {/* Contact Section */}
      <div id="contact" ref={contactSectionRef} className='min-h-screen bg-gray-950 text-white p-8 pt-16'>
        <div data-aos="fade-up">
          <h2 className="text-4xl text-center mb-8 mt-6">{contactText}</h2>
          <p className="text-xl text-center mb-8">Feel free to reach out by filling out the form below!</p>

          <div className='max-w-lg mx-auto'>
            <form className='space-y-6'>
              <div>
                <label htmlFor='name' className='block text-sm font-medium text-gray-300'>
                  Your Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  required
                  className='mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 bg-gray-800 text-white'
                />
              </div>

              <div>
                <label htmlFor='email' className='block text-sm font-medium text-gray-300'>
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 bg-gray-800 text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 bg-gray-800 text-white"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
