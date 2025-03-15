import { env } from 'process';
import React, { forwardRef } from 'react';

interface ProjectsProps {
  projectsText: string;
}

const Projects = forwardRef<HTMLDivElement, ProjectsProps>(({ projectsText }, ref) => {
  return (
    <div ref={ref} className='min-h-screen bg-gray-950 text-white p-8 pt-16 overflow-hidden'>
      <div data-aos="fade-up">
        <h2 className="text-4xl text-center mb-8">{projectsText}</h2>

        {/* Tarkov Randomizer */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-[43%] mb-4 md:mb-0 text-center">
            <a href="https://tarkov-randomizer-new.vercel.app/" target="_blank">
              <h3 className="inline-block text-2xl font-bold hover:text-blue-500 transition-all duration-300 transform hover:scale-110 text-center mb-4">Tarkov Randomizer</h3>
            </a>
            <p className="text-xl">
              Tarkov Randomizer is a work in progress web app that scrapes all of the gear from the Tarkov Wiki using <a href="https://www.npmjs.com/package/cheerio" target="_blank" className='inline-block hover:text-blue-500 underline transition-all duration-300 transform hover:scale-105'>Cheerio </a>, stores it in an AWS MySQL database and then uses a REST API to send it to the frontend into a customizable randomizer so you can get a random loadout to play with in raid.
              The scraper it set to run automatically once a month using <a href="https://github.com/features/actions" target="_blank" className='inline-block hover:text-blue-500 underline transition-all duration-300 transform hover:scale-105'>GitHub Actions</a> to account for any content updates in the game!
            </p>
            <p className="text-xl mb-4 mt-4">Tarkov Randomizer is being made using:</p>
            <ul className='list-disc list-inside text-lg ml-4'>
              <li>
                <a href="https://react.dev/" target="_blank" className='inline-block hover:text-blue-500 transition-all duration-300 transform hover:scale-105 mb-2'>
                  React
                </a>
              </li>
              <li>
                <a href="https://nodejs.org/en" target="_blank" className='inline-block hover:text-blue-500 transition-all duration-300 transform hover:scale-105 mb-2'>
                  Node.js
                </a>
              </li>
              <li>
                <a href="https://aws.amazon.com/lambda/" target="_blank" className='inline-block hover:text-blue-500 transition-all duration-300 transform hover:scale-105 mb-2'>
                  AWS Lambda
                </a>
              </li>
              <li>
                <a href="https://aws.amazon.com/rds/" target="_blank" className='inline-block hover:text-blue-500 transition-all duration-300 transform hover:scale-105 mb-2'>
                  AWS RDS
                </a>
              </li>
              <li>
                <a href="https://www.mysql.com/" target="_blank" className='inline-block hover:text-blue-500 transition-all duration-300 transform hover:scale-105 mb-2'>
                  MySQL
                </a>
              </li>
              <li>
                <a href="https://www.typescriptlang.org/" target="_blank" className='inline-block hover:text-blue-500 transition-all duration-300 transform hover:scale-105 mb-2'>
                  TypeScript
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" target="_blank" className='inline-block hover:text-blue-500 transition-all duration-300 transform hover:scale-105 mb-2'>
                  Tailwind
                </a>
              </li>
            </ul>
            
            <a href="https://github.com/Josh-Harrison1600/TarkovRandomizer" target="_blank" className="block text-xl mt-4 ml-8 underline hover:text-blue-500 transition-all duration-300 transform hover:scale-105">Front-end Source Code</a>
            
            <a href="https://github.com/Josh-Harrison1600/TarkovScraper" target="_blank" className="block text-xl mt-4 ml-8 underline hover:text-blue-500 transition-all duration-300 transform hover:scale-105">Back-end Source Code</a>

          </div>
          <div data-aos="flip-down" className="md:w-[55%] hover:scale-105 duration-300">
            <a href="https://tarkov-randomizer-new.vercel.app/" target="_blank" className='block'>
              <video autoPlay loop muted
              className="w-full border-2 border-transparent hover:border-blue-500 hover:scale-105 transition-all duration-300"
              >
                <source src={process.env.REACT_APP_TARKOV_VIDEO} type="video/mp4"/>
                Your Browser does not support this video
              </video>
            </a>
          </div>
        </div>

        {/* Kana Typer */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between mb-16"> {/* Use flex-row-reverse here */}
          <div className="md:w-[43%] mb-4 md:mb-0 text-center">
            <a href="https://kana-typer-fawn.vercel.app/" target="_blank">
              <h3 className="inline-block text-2xl font-bold hover:text-red-500 transition-all duration-300 transform hover:scale-110 text-center mb-4">Kana Typer</h3>
            </a>
            <p className="text-xl">
            Kana Typer is a web app that helps users learn the main two Japanaese phonetic systems, Hiragana & Katakana. The user can select individual symbols, specific categories, or the entire system to study and review! 
              <p className="text-xl mb-4 mt-4">Kana Typer was made using:</p>
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
                <a href="https://tailwindcss.com/" target="_blank" className='inline-block hover:text-red-500 transition-all duration-300 transform hover:scale-105 mb-2'>
                  Tailwind
                </a>
              </li>
            </ul>
            <a href="https://github.com/Josh-Harrison1600/Kana-Typer" target="_blank" className="text-xl mt-4 ml-8 underline hover:text-red-500 transition-all duration-300 transform hover:scale-105">Source Code</a>
            </p>
          </div>
          <div data-aos="flip-down" className="md:w-[55%] hover:scale-105 duration-300">
            <a href="https://kana-typer-fawn.vercel.app/" target="_blank" className="block">
              <video autoPlay loop muted
                className="w-full border-2 border-transparent hover:border-red-500 hover:scale-105 transition-all duration-300"
              >
                <source src={process.env.REACT_APP_KANATYPER_VIDEO} type="video/mp4"/>
                Your Browser does not support this video
              </video>
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
              <li>
                <a href="https://aws.amazon.com/s3/" target="_blank" className='inline-block hover:text-blue-600 transition-all duration-300 transform hover:scale-105 mb-2'>
                  AWS S3
                </a>
              </li>
            </ul>
            <a href="https://github.com/Josh-Harrison1600/personalwebsite" target="_blank" className="text-xl mt-4 ml-8 underline hover:text-blue-600 transition-all duration-300 transform hover:scale-105">Source Code</a>
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
