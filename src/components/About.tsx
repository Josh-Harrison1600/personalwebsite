import React, { forwardRef } from 'react';

interface AboutProps {
  aboutText: string;
}

const About = forwardRef<HTMLDivElement, AboutProps>(({ aboutText }, ref) => {
  return (
    <div ref={ref} className='min-h-screen flex items-center justify-center bg-gray-800 text-white pt-16'>
      <div data-aos="fade-up" className='max-w-4xl mx-auto grid grid-cols-2 grid-rows-[auto_auto] gap-8 p-8'>
        {/* Title */}
        <h2 className='text-4xl mb-4 text-center col-span-2'>{aboutText}</h2>

        {/* Description on the left */}
        <p className='text-xl'>
          Description goes here. Description goes here. Description goes here.
        </p>

        {/* Button on the right */}
        <div className='flex justify-end'>
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
