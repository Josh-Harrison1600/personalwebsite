import React, { forwardRef } from 'react';
import reactIMG from './images/react.png';
import htmlIMG from './images/html.png';
import cssIMG from './images/css.png';
import gitIMG from './images/git.png';
import tailwindIMG from './images/tailwind.png';
import typescriptIMG from './images/typescript.png';
import mysqlIMG from './images/mysql.png';
import nodeIMG from './images/nodejs.png';

interface AboutProps {
  aboutText: string;
}

const About = forwardRef<HTMLDivElement, AboutProps>(({ aboutText }, ref) => {
  return (
    <div ref={ref} className='min-h-[10vh] flex flex-col items-center justify-center bg-gray-950 text-white pt-16'>
      {/* Container for the text and tech stack images */}
      {/* Title */}
      <h2 className='text-4xl mb-4 text-center col-span-2'>{aboutText}</h2>
      <div data-aos="fade-up" className='max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-8'>
        {/* About Text on the left */}
        <div data-aos="fade-right" className='flex flex-col justify-center'>
          <p className='text-xl leading-relaxed tracking-wide'>
            I'm a previous graduate of NBCC from both Network Administration and Cybersecurity.
            <br className='mb-2'/>
            I currently work in both Cybersecurity & IT Support whilst pursuing my Bachelors of Computer Science in my spare time.
            <br className='mb-2'/>
            I'm knowledgeable in {' '}
              <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500 underline transition-all duration-300 transform hover:scale-105 inline-block'>  React</a>,{' '}
              <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer" className='hover:text-green-500 underline transition-all duration-300 transform hover:scale-105 inline-block'> Node.js</a>,{' '}
              <a href="https://spring.io/projects/spring-boot" target="_blank" rel="noopener noreferrer" className='hover:text-gray-500 underline transition-all duration-300 transform hover:scale-105 inline-block'> Spring Boot</a>,{' '}
              <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500 underline transition-all duration-300 transform hover:scale-105 inline-block'> TypeScript</a>,{' '}
              <a href="https://www.java.com/en/" target="_blank" rel="noopener noreferrer" className='hover:text-red-500 underline transition-all duration-300 transform hover:scale-105 inline-block'> Java</a>,{' '}
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500 underline transition-all duration-300 transform hover:scale-105 inline-block'> CSS</a>,{' '}
              <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" className='hover:text-orange-500 underline transition-all duration-300 transform hover:scale-105 inline-block'> Git</a>,{' '}
              <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer" className='hover:text-blue-600 underline transition-all duration-300 transform hover:scale-105 inline-block'> MySQL</a>,{' '}
              <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className='hover:text-blue-800 underline transition-all duration-300 transform hover:scale-105 inline-block'> Tailwind</a>,{' '}
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" className='hover:text-orange-500 underline transition-all duration-300 transform hover:scale-105 inline-block'> HTML</a>,{' '}
              and a bit of {' '}
              <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" className='hover:text-yellow-500 underline transition-all duration-300 transform hover:scale-105 inline-block'> Python</a>.{' '}
            <br className='mb-2'/>
              I'm also knowledgeable in Cloud operations. Specifically I'm familiar with and have experience using {' '}
              <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer" className='hover:text-orange-500 underline transition-all duration-300 transform hover:scale-105 inline-block'> AWS</a> And{' '}
              <a href="https://azure.microsoft.com/en-ca" target="_blank" rel="noopener noreferrer" className='hover:text-blue-400 underline transition-all duration-300 transform hover:scale-105 inline-block'> Azure</a>.
            <br className='mb-2'/>
            These days I find myself working on web apps which you can find below :D
          </p>
        </div>

        {/* Logos on the right */}
        <div data-aos="fade-left" className='grid grid-cols-2 gap-4'>
        <a href="https://html.spec.whatwg.org/" target="_blank" rel="noopener noreferrer">
          <div data-aos="fade" data-aos-delay="100" className="flex flex-col items-center border-2 border-red-100 p-1 rounded-md hover:border-gray-300 transition-all mx-20">
            <img src={htmlIMG} alt="HTML" className="h-16 w-16" />
            <span>HTML</span>
          </div>
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
          <div data-aos="fade" data-aos-delay="300" className="flex flex-col items-center border-2 border-red-100 p-1 rounded-md hover:border-gray-300 transition-all mx-20">
            <img src={cssIMG} alt="CSS" className="h-16 w-16" />
            <span>CSS</span>
          </div>
        </a>
        <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">
        <div data-aos="fade" data-aos-delay="100" className="flex flex-col items-center border-2 border-red-100 p-1 rounded-md hover:border-gray-300 transition-all duration-1200 ease-in-out mx-20">
            <img src={nodeIMG} alt="JavaScript" className="h-16 w-16" />
            <span>Node.js</span>
          </div>
        </a>
        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
          <div data-aos="fade" data-aos-delay="300" className="flex flex-col items-center border-2 border-red-100 p-1 rounded-md hover:border-gray-300 transition-all mx-20">
            <img src={reactIMG} alt="React" className="h-16 w-16" />
            <span>React</span>
          </div>
        </a>
        <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
          <div data-aos="fade" data-aos-delay="100" className="flex flex-col items-center border-2 border-red-100 p-1 rounded-md hover:border-gray-300 transition-all mx-20">
            <img src={gitIMG} alt="Git" className="h-16 w-16" />
            <span>Git</span>
          </div>
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
          <div data-aos="fade" data-aos-delay="300" className="flex flex-col items-center border-2 border-red-100 p-1 rounded-md hover:border-gray-300 transition-all mx-20">
            <img src={tailwindIMG} alt="Tailwind CSS" className="h-16 w-16" />
            <span>Tailwind</span>
          </div>
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
          <div data-aos="fade" data-aos-delay="100" className="flex flex-col items-center border-2 border-red-100 p-1 rounded-md hover:border-gray-300 transition-all mx-20">
            <img src={typescriptIMG} alt="TypeScript" className="h-16 w-16" />
            <span>TypeScript</span>
          </div>
        </a>
        <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
          <div data-aos="fade" data-aos-delay="300" className="flex flex-col items-center border-2 border-red-100 p-1 rounded-md hover:border-gray-300 transition-all mx-20 min-h-[100px]">
            <img src={mysqlIMG} alt="MySQL" className="h-16 w-16" />
            <span>MySQL</span>
          </div>
        </a>  
      </div>
    </div>

      {/* Centered Button at the Bottom */}
      <div data-aos="fade-up" className='mt-8 flex justify-center w-full mb-4'>
      <a
        href="/resume.pdf?cache-bust=1"
        download="Josh_Harrison_Resume.pdf"
        className='relative text-lg font-semibold px-6 py-2 rounded-lg text-white hover:text-white transition duration-300 ease-in-out group'
      >
        {/* Text layered above the expanding background */}
        <span className="relative z-10 hover:text-gray-200">Download My Resume</span>
      
        {/* Expanding background line */}
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500 group-hover:h-full transition-all duration-300 ease-in-out z-0"></span>
      </a>
     </div>

      <a data-aos="fade-up" className='text-gray-500'>Sensitive details have been removed.</a>
    </div>
  );
});

export default About;
