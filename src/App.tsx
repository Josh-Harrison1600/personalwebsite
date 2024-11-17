import React, { useEffect, useState, useRef } from 'react';
import bgIMG from "./components/images/bg1.png";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTypingEffect } from './hooks/useTypingEffect';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Contact from './components/Contact'; 
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [mousePos, setMousePos] = useState({ x: -175, y: -175 });
  const [showNavbar, setShowNavbar] = useState(false);
  const aboutSectionRef = useRef<HTMLDivElement | null>(null); // Ref for About section
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

  // Use AOS library
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
      { threshold: 0.2 } // Trigger when 50% of the section is visible
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
    <div className="flex flex-col min-h-screen bg-gray-900">
      <header>
        {showNavbar && (
          <Navbar
            handleScrollToSection={handleScrollToSection}
            aboutSectionRef={aboutSectionRef}
            projectsSectionRef={projectsSectionRef}
            contactSectionRef={contactSectionRef}
          />
        )}
      </header>

      <main className="flex-grow">
        <div
          className="h-screen bg-cover bg-center flex items-center justify-center pt-16"
          style={backgroundStyle}
        >
          <div className="text-center">
            <h1 className="text-white text-5xl md:text-6xl font-semibold">
              <span data-aos="fade-left">Hello, I'm</span>
              <span data-aos="fade-right" className="text-red-500"> Josh.</span>
            </h1>
            <h2 className="text-white text-3xl md:text-4xl mt-4">
              I'm a {currentText}
              <span className={isPaused ? 'blinking-cursor' : 'solid-cursor'}>|</span>
            </h2>
            <button
              onClick={() => handleScrollToSection(aboutSectionRef, 64)}
              className="mt-8 px-6 py-3 border-2 border-red-500 text-red-500 text-xl hover:bg-red-500 hover:text-white transition duration-300"
            >
              View my work ↓
            </button>
          </div>
        </div>

        {/* About Section */}
        <About aboutText={aboutText} ref={aboutSectionRef} />

        {/* Projects Section */}
        <Projects projectsText={projectsText} ref={projectsSectionRef} />

        {/* Contact Section */}
        <Contact ref={contactSectionRef} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}


export default App;
