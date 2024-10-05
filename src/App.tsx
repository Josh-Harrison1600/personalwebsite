import React, { useEffect, useState, useRef } from 'react';
import bgIMG from "./components/images/bg1.png";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {

  const [mousePos, setMousePos] = useState({ x: -175, y: -175 });
  const [showNavbar, setShowNavbar] = useState(false);
  const aboutSectionRef = useRef<HTMLDivElement | null>(null);
  const [currentText, setCurrentText] = useState('');  
  const [textIndex, setTextIndex] = useState(0);       
  const [isDeleting, setIsDeleting] = useState(false); 
  const [isPaused, setIsPaused] = useState(false);
  const typingSpeed = 70;                             
  const deletingSpeed = 95;                           
  const delayAfterTyping = 2000;                       

  // Array of texts to display in typing effect
  const texts = ["Computer Science Student.", "Java Developer.", "React Developer."];

  //typing effect logic
  useEffect(() => {
    const handleTyping = () => {
      const current = texts[textIndex];
      setIsPaused(false);

      if(!isDeleting) {
        setCurrentText((prev) => current.substring(0, prev.length + 1));

        if(currentText === current){
          setIsPaused(true);
          setTimeout(() => setIsDeleting(true), delayAfterTyping);
        }
      }else{
        //deleting character
        setCurrentText((prev) => current.substring(0, prev.length - 1));

        if (currentText === '') {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length); // Move to next text
        }
      }
    };

    const timeoutId = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeoutId);  // Cleanup timeout
  }, [currentText, isDeleting]);

  // Add event listener to track the mouse movement
  useEffect(() => {
    const handleMouseMovement = (event: MouseEvent) => {
      setMousePos({
        x: event.clientX,
        y: event.clientY,
      });
    };

    // Attach event listener when the component is mounted
    window.addEventListener('mousemove', handleMouseMovement);

    // Cleanup event listener when the component is unmounted
    return () => {
      window.removeEventListener('mousemove', handleMouseMovement);
    };
  }, []);

  //handle scrolling to section
  const handleScrollToSection = () => {
    aboutSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  //track scroll position to toggle navbar visibiltiy
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > window.innerHeight - 100) {
        setShowNavbar(true);
      } else{
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);


    // Cleanup event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Create the illuminated background based on cursor position
  const backgroundStyle = {
    backgroundImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 1) 250px), url(${bgIMG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'black',
  };

  return (
    <>
    {/* NavBar */}
    {showNavbar && (
      <nav className='fixed top-0 left-0 w-full bg-black text-white py-4'>
        <div className='container mx-auto px-4 flex justify-between items-center'>
          <h1 className='text-2xl font-bold text-red-500'><span className="inline-block hover:text-green-600 duration-300 transition-transform transform hover:scale-110">Josh's</span> <span className="inline-block hover:text-blue-600 duration-300 transition-transform transform hover:scale-110">Website</span></h1>
            <div className='flex space-x-8 items-center'>
              <a href="#home" className="font-semibold text-white hover:text-red-500 transition duration-300">Home</a>
              <a href="#about" className="font-semibold text-white hover:text-red-500 transition duration-300">About</a>
              <a href="#projects" className="font-semibold text-white hover:text-red-500 transition duration-300">Projects</a>
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
    <div className="h-screen bg-cover bg-center flex items-center justify-center"
      style={backgroundStyle}
    >
      <div className="text-center">
        <h1 className="text-white text-5xl md:text-6xl font-semibold">
          Hello, I'm <span className="text-red-500">Josh</span>.
        </h1>
        <h2 className="text-white text-3xl md:text-4xl mt-4">
          I'm a {currentText}
          <span className={isPaused ? 'blinking-cursor' : 'solid-cursor'}>|</span>
        </h2>
        <button 
          onClick={handleScrollToSection}
          className="mt-8 px-6 py-3 border-2 border-red-500 text-red-500 text-xl hover:bg-red-500 hover:text-white transition duration-300">
          View my work ↓
        </button>
      </div>
    </div>

    {/* About me section */}
    <div
      ref={aboutSectionRef}//reference to scroll into view
      className='min-h-screen flex items-center justify-center bg-gray-800 text-white'
    >
      <div className='max-w-4xl mx-auto text-center p-8'>
        <h2 className='text-4xl mb-4'>About Me</h2>
        <p className='text-xl'> example text example text example text example text example text example text example text example text 
        example text example text example text example text example text example text example text example text example text example text 
        example text example text example text example text example text example text example text example text example text.
        </p>
      </div>
    </div>
  </>
  );
}

export default App;
