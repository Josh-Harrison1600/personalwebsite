import React, { useEffect, useState, useRef } from 'react';
import bgIMG from "./components/images/bg1.png";

function App() {

  const [mousePos, setMousePos] = useState({ x: -175, y: -175 });
  const [showNavbar, setShowNavbar] = useState(false);
  const aboutSectionRef = useRef<HTMLDivElement | null>(null);


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
        <div className='container mx-auto px-4'>
          <h1 className='text-2xl font-bold'>navbar</h1>
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
          I'm a Computer Science Student.
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
