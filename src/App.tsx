import React, { useEffect, useState, useRef } from 'react';
import bgIMG from "./components/images/bg1.png";
import testimg from "./components/images/testimg.jpg";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {
  const [mousePos, setMousePos] = useState({ x: -175, y: -175 });
  const [showNavbar, setShowNavbar] = useState(false); // Navbar starts hidden
  const aboutSectionRef = useRef<HTMLDivElement | null>(null);
  const projectsSectionRef = useRef<HTMLDivElement | null>(null);
  const [currentText, setCurrentText] = useState('');  
  const [textIndex, setTextIndex] = useState(0);       
  const [isDeleting, setIsDeleting] = useState(false); 
  const [isPaused, setIsPaused] = useState(false);
  const typingSpeed = 70;                             
  const deletingSpeed = 95;                           
  const delayAfterTyping = 2000; 

  // Array of texts to display in typing effect
  const texts = ["Computer Science Student.", "Java Developer.", "React Developer."];

  // Typing effect logic
  useEffect(() => {
    const handleTyping = () => {
      const current = texts[textIndex];
      setIsPaused(false);

      if (!isDeleting) {
        setCurrentText((prev) => current.substring(0, prev.length + 1));

        if (currentText === current) {
          setIsPaused(true);
          setTimeout(() => setIsDeleting(true), delayAfterTyping);
        }
      } else {
        setCurrentText((prev) => current.substring(0, prev.length - 1));

        if (currentText === '') {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length); // Move to next text
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

  // Handle the "View my work" button click and show the navbar
  const handleScrollToSection = (sectionRef: React.RefObject<HTMLDivElement>, offset: number = 0) => {
    if (sectionRef.current) {
      const sectionPosition = sectionRef.current.offsetTop - offset;
      window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
      setShowNavbar(true); // Show the navbar when "View my work" is clicked
    }
  };

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
      {/* Navbar only shows after clicking "View my work" */}
      {showNavbar && (
        <nav className='fixed top-0 left-0 w-full bg-black text-white py-4'>
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
              <a href="#contact" className="font-semibold text-white hover:text-red-500 transition duration-300">Contact</a>
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

      {/* Main Section */}
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

      {/* About me section */}
      <div ref={aboutSectionRef} className='min-h-screen flex items-center justify-center bg-gray-800 text-white pt-16'>
        <div className='max-w-4xl mx-auto text-center p-8'>
          <h2 className='text-4xl mb-4'>About Me</h2>
          <p className='text-xl'>
            Description goes here. Description goes here. Description goes here.
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div ref={projectsSectionRef} className='min-h-screen bg-gray-900 text-white p-8 pt-16'>
        <h2 className="text-4xl text-center mb-8">Projects</h2>

        {/* Project 1 */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-1/2 text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Project One</h3>
            <p className="text-xl">Description of Project One goes here. It involves technology X, Y, and Z.</p>
          </div>
          <div className="md:w-1/2">
            <img src={testimg} alt="Project One" className="w-full" />
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-1/2 text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Project Two</h3>
            <p className="text-xl">Description of Project Two goes here. It involves technology A, B, and C.</p>
          </div>
          <div className="md:w-1/2">
            <img src="/path/to/project2.png" alt="Project Two" className="w-full" />
          </div>
        </div>

        {/* Project 3 */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-1/2 text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Project Three</h3>
            <p className="text-xl">Description of Project Three goes here. It involves technology D, E, and F.</p>
          </div>
          <div className="md:w-1/2">
            <img src="/path/to/project3.png" alt="Project Three" className="w-full" />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className='min-h-screen bg-gray-950 text-white p-8 pt-16'>
        <div className="text-4xl text-center mb-8">
        <h2 className="text-4xl text-center mb-8">Contact Me</h2>
          </div>
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

            {/* Submit Button */}
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
    </>
  );
}

export default App;
