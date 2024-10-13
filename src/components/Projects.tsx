import React, { forwardRef } from 'react';

interface ProjectsProps {
  projectsText: string;
}

const Projects = forwardRef<HTMLDivElement, ProjectsProps>(({ projectsText }, ref) => {
  return (
    <div ref={ref} className='min-h-screen bg-gray-900 text-white p-8 pt-16'>
      <div data-aos="fade-up">
        <h2 className="text-4xl text-center mb-8">{projectsText}</h2>

        {/* Shiru */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-[43%] mb-4 md:mb-0 text-center">
            <a href="https://github.com/Josh-Harrison1600/Shiru-Scraper" target="_blank">
              <h3 className="inline-block text-2xl font-bold hover:text-red-500 transition-all duration-300 transform hover:scale-110 text-center mb-4">Shiru</h3>
            </a>
            <p className="text-xl">
              Shiru is a JSoup based web scraper that extracts Japanese manga from retail stores and uses batch OpenAI API requests to determine the correct reading difficulty,
              making it useful for people learning Japanese. The frontend site uses React and Tailwind.
            </p>
          </div>
          <div data-aos="flip-down" className="md:w-[55%] hover:scale-105 duration-300">
            <a href="https://github.com/Josh-Harrison1600/Shiru-Scraper" target="_blank" className='block'>
              <img src={require('./images/shiruImg.png')} alt="Project One" className="w-full border-2 border-transparent hover:border-red-500 hover:scale-105 transition-all duration-300" />
            </a>
          </div>
        </div>

        {/* Song Battle */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-[43%] mb-4 md:mb-0 text-center">
            <a href="https://github.com/YourUsername/New-Project" target="_blank">
              <h3 className="inline-block text-2xl font-bold hover:text-green-600 transition-all duration-300 transform hover:scale-110 text-center mb-4">Song Battle</h3>
            </a>
            <p className="text-xl">
              Song Battle is my unfinished app that allows a user to connect their Spotify account and choose one of their playlists, and the site will randomly choose 8 songs for the user to decide which is the best.
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
            <p className="text-xl mb-4">My portfolio website was made using:</p>
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
  );
});

export default Projects;
