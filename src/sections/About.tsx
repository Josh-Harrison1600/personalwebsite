import React, { forwardRef } from 'react';
import TechIcon from '../components/TechIcons';
import { techStack } from '../data/techStack';
import { highlightedTech } from '../data/highlightedTech';
import TechLink from '../components/TechLink';

interface AboutProps {
  aboutText: string;
}


const About = forwardRef<HTMLDivElement, AboutProps>(({ aboutText }, ref) => {
  return (
    <div ref={ref} className='min-h-[10vh] flex flex-col items-center justify-center bg-gray-950 text-white pt-16'>

      {/* Title */}
      <h2 className='text-4xl mb-4 text-center col-span-2'>{aboutText}</h2>
      <div data-aos="fade-up" className='max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-8'>
        {/* About Text on the left */}
        <div data-aos="fade-right" className='flex flex-col justify-center'>
          <p className='text-xl leading-relaxed tracking-wide'>
              I'm a previous graduate of NBCC from both Network Administration and Cybersecurity. Now I'm working on my Bachelors degree in Computer Science with WGU!
            <br className='mb-2'/>
              I currently work as a Full-Stack developer with a React/Node.js focus whilst pursuing my Bachelors of Computer Science in my spare time.
            <br className='mb-2'/>
            I'm knowledgeable in {' '}
            {highlightedTech.slice(0, 10).map((tech, i) => (
              <span key={tech.name}>
                <TechLink {...tech} />
                {i < 9 && ', '}
              </span>
            ))}
            , and a bit of <TechLink {...highlightedTech[10]} />.
            <br className='mb-2' />
              I'm also knowledgeable in Cloud operations, specifically with{' '}
              <TechLink {...highlightedTech[11]} /> and <TechLink {...highlightedTech[12]} />.
              <br className='mb-2' />
              These days I find myself working on web apps which you can find below :D
            </p>
        </div>

        {/* Logos on the right */}
        <div data-aos="fade-left" className="grid grid-cols-2 gap-4">
          {techStack.map((tech) => (
            <TechIcon key={tech.label} {...tech} />
          ))}
        </div>
      </div>

      {/* Centered Button at the Bottom */}
      <div data-aos="fade-up" className='mt-8 flex justify-center w-full mb-4'>
      <a
        href="/Josh Harrison Resume New.pdf?cache-bust=1"
        target="_blank"
        rel="noopener noreferrer"
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
