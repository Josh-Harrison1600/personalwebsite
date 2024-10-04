import React, { useEffect, useState } from 'react';
import bgIMG from "./components/images/bg1.png";

function App() {

  // Create state to hold the cursor position
  const [mousePos, setMousePos] = useState({ x: -175, y: -175 });

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

  // Create the illuminated background based on cursor position
  const backgroundStyle = {
    backgroundImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 1) 250px), url(${bgIMG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'black',
  };

  return (
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
        <button className="mt-8 px-6 py-3 border-2 border-red-500 text-red-500 text-xl hover:bg-red-500 hover:text-white transition duration-300">
          View my work ↓
        </button>
      </div>
    </div>
  );
}

export default App;
