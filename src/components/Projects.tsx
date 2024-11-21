import React, { forwardRef } from 'react';

interface ProjectsProps {
  projectsText: string;
}

const Projects = forwardRef<HTMLDivElement, ProjectsProps>(({ projectsText }, ref) => {
  return (
    <div ref={ref} className='min-h-screen bg-gray-950 text-white p-8 pt-16'>
      <div data-aos="fade-up">
        <h2 className="text-4xl text-center mb-8">{projectsText}</h2>

        {/* Shiru */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-[43%] mb-4 md:mb-0 text-center">
            <a href="https://github.com/Josh-Harrison1600/Shiru-Scraper" target="_blank">
              <h3 className="inline-block text-2xl font-bold hover:text-red-500 transition-all duration-300 transform hover:scale-110 text-center mb-4">Shiru</h3>
            </a>
            <p className="text-xl">
              Shiru an app that allows Japanese learners to browse through a collection of books by the Japanese-Language Proficiency Test rankings which go from N5 to N1.
              This helps the user narrow down a book that is more suited for their current reading level!
            </p>
            <p className="text-xl mb-4 mt-4">Shiru was made using:</p>
            <ul className='list-disc list-inside text-lg ml-4'>
              <li>
                <a href="https://react.dev/" target="_blank" className='inline-block hover:text-red-500 transition-all duration-300 transform hover:scale-105 mb-2'>
                  React
                </a>
              </li>
              <li>
                <a href="https://www.typescriptlang.org/" target="_blank" className='inline-block hover:text-red-500 transition-all duration-300 transform hover:scale-105 mb-2'>
                  TypeScript
                </a>
              </li>
              <li>
                <a href="https://www.java.com/en/" target="_blank" className='inline-block hover:text-red-500 transition-all duration-300 transform hover:scale-105 mb-2'>
                  Java
                </a>
              </li>
              <li>
                <a href="https://jsoup.org/" target="_blank" className='inline-block hover:text-red-500 transition-all duration-300 transform hover:scale-105 mb-2'>
                  JSoup
                </a>
              </li>
              <li>
                <a href="https://platform.openai.com/docs/overview" target="_blank" className='inline-block hover:text-red-500 transition-all duration-300 transform hover:scale-105 mb-2'>
                  OpenAI API
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" target="_blank" className='inline-block hover:text-red-500 transition-all duration-300 transform hover:scale-105 mb-2'>
                  Tailwind
                </a>
              </li>
            </ul>
          </div>
          <div data-aos="flip-down" className="md:w-[55%] hover:scale-105 duration-300">
            <a href="https://github.com/Josh-Harrison1600/Shiru-Scraper" target="_blank" className='block'>
              <img src={require('./images/shiruImg.png')} alt="Project One" className="w-full border-2 border-transparent hover:border-red-500 hover:scale-105 transition-all duration-300" />
            </a>
          </div>
        </div>

        {/* Song Battle */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between mb-16"> {/* Use flex-row-reverse here */}
          <div className="md:w-[43%] mb-4 md:mb-0 text-center">
            <a href="https://github.com/Josh-Harrison1600/Song-Battle" target="_blank">
              <h3 className="inline-block text-2xl font-bold hover:text-green-600 transition-all duration-300 transform hover:scale-110 text-center mb-4">Song Battle</h3>
            </a>
            <p className="text-xl">
              Song Battle is my app that allows a user to connect to their Spotify account and then choose one of their playlists. Eight random songs from the playlist will be chosen and the user will play to decide which song they like the most.
              <p className="text-xl mb-4 mt-4">Song battle was made using:</p>
            <ul className='list-disc list-inside text-lg ml-4'>
              <li>
                <a href="https://react.dev/" target="_blank" className='inline-block hover:text-green-600 transition-all duration-300 transform hover:scale-105 mb-2'>
                  React
                </a>
              </li>
              <li>
                <a href="https://www.typescriptlang.org/" target="_blank" className='inline-block hover:text-green-600 transition-all duration-300 transform hover:scale-105 mb-2'>
                  TypeScript
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" target="_blank" className='inline-block hover:text-green-600 transition-all duration-300 transform hover:scale-105 mb-2'>
                  Tailwind
                </a>
              </li>
            </ul>
            </p>
          </div>
          <div data-aos="flip-down" className="md:w-[55%] hover:scale-105 duration-300">
            <a href="https://github.com/Josh-Harrison1600/Song-Battle" target="_blank" className="block">
              <img
                src={require('./images/SongBattle.png')}
                alt="Project Two"
                className="w-full border-2 border-transparent hover:border-green-600 hover:scale-105 transition-all duration-300"
              />
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
            <a href="https://github.com/Josh-Harrison1600/personalwebsite" target="_blank" className='block'>
              <img src={require('./images/ProjectThree.png')} alt="New Project Image" className="w-full border-2 border-transparent hover:border-blue-600 hover:scale-105 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Projects;
