import React from 'react';

function App() {
  return (
    <div className="h-screen bg-black flex items-center justify-center">
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
