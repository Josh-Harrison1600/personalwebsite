import React, { forwardRef } from 'react';

interface AboutProps {
  aboutText: string;
}

const About = forwardRef<HTMLDivElement, AboutProps>(({ aboutText }, ref) => {
  return (
    <div ref={ref} className='min-h-screen flex items-center justify-center bg-gray-800 text-white pt-16'>
      <div data-aos="fade-up" className='max-w-4xl mx-auto text-center p-8'>
        <h2 className='text-4xl mb-4'>{aboutText}</h2>
        <p className='text-xl'>
          Description goes here. Description goes here. Description goes here.
        </p>
        {/* Resume Download */}
        <div className='mt-8'>
        <a
            href="/resume.pdf"
            download="Resume_TEST.pdf"
            className='px-6 py-3 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition duration-300'
        >
            Download My Resume
        </a>
        </div>
      </div>
    </div>
  );
});

export default About;
