import React, { forwardRef } from 'react';
import reactIMG from './images/react.png';
import htmlIMG from './images/html.png';
import cssIMG from './images/css.png';
import gitIMG from './images/git.png';
import jsIMG from './images/js.png';
import tailwindIMG from './images/tailwind.png';
import typescriptIMG from './images/typescript.png';
import mysqlIMG from './images/mysql.png';

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
            I'm knowledgeable in React, TypeScript, Java, CSS, HTML, MySQL, Tailwind.
            <br className='mb-2'/>
            These days I find myself making projects in the front end the most :D
          </p>
        </div>

        {/* Logos on the right */}
        <div data-aos="fade-left" className='grid grid-cols-2 gap-4'>
        <a href="https://html.spec.whatwg.org/" target="_blank" rel="noopener noreferrer">
          <div data-aos="fade" data-aos-delay="100" className="flex flex-col items-center border-2 border-red-100 p-1 rounded-md hover:border-red-400 transition-all mx-20">
            <img src={htmlIMG} alt="HTML" className="h-16 w-16" />
            <span>HTML</span>
          </div>
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
          <div data-aos="fade" data-aos-delay="300" className="flex flex-col items-center border-2 border-red-100 p-1 rounded-md hover:border-red-400 transition-all mx-20">
            <img src={cssIMG} alt="CSS" className="h-16 w-16" />
            <span>CSS</span>
          </div>
        </a>
        <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
        <div data-aos="fade" data-aos-delay="500" className="flex flex-col items-center border-2 border-red-100 p-1 rounded-md hover:border-red-400 transition-all duration-1200 ease-in-out mx-20">
            <img src={jsIMG} alt="JavaScript" className="h-16 w-16" />
            <span>JavaScript</span>
          </div>
        </a>
        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
          <div data-aos="fade" data-aos-delay="700" className="flex flex-col items-center border-2 border-red-100 p-1 rounded-md hover:border-red-400 transition-all mx-20">
            <img src={reactIMG} alt="React" className="h-16 w-16" />
            <span>React</span>
          </div>
        </a>
        <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
          <div data-aos="fade" data-aos-delay="800" className="flex flex-col items-center border-2 border-red-100 p-1 rounded-md hover:border-red-400 transition-all mx-20">
            <img src={gitIMG} alt="Git" className="h-16 w-16" />
            <span>Git</span>
          </div>
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
          <div data-aos="fade" data-aos-delay="600" className="flex flex-col items-center border-2 border-red-100 p-1 rounded-md hover:border-red-400 transition-all mx-20">
            <img src={tailwindIMG} alt="Tailwind CSS" className="h-16 w-16" />
            <span>Tailwind</span>
          </div>
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
          <div data-aos="fade" data-aos-delay="400" className="flex flex-col items-center border-2 border-red-100 p-1 rounded-md hover:border-red-400 transition-all mx-20">
            <img src={typescriptIMG} alt="TypeScript" className="h-16 w-16" />
            <span>TypeScript</span>
          </div>
        </a>
        <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
          <div data-aos="fade" data-aos-delay="200" className="flex flex-col items-center border-2 border-red-100 p-1 rounded-md hover:border-red-400 transition-all mx-20 min-h-[100px]">
            <img src={mysqlIMG} alt="TypeScript" className="h-16 w-16" />
          </div>
        </a>  
      </div>
    </div>

      {/* Centered Button at the Bottom */}
      <div data-aos="fade-up" className='mt-8 flex justify-center w-full mb-4'>
        <a
          href="/resume.pdf"
          download="Resume_TEST.pdf"
          className='px-6 h-12 bg-red-500 text-white text-lg font-semibold rounded-lg hover:bg-red-600 transition duration-300 ease-in-out flex items-center justify-center'
        >
          Download My Resume
        </a>
      </div>
      <a data-aos="fade-up" className='text-gray-500'>Sensitive details have been removed.<br />Contact me below for my full resume!</a>
    </div>
  );
});

export default About;
