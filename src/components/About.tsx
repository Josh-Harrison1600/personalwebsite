import React, { forwardRef } from 'react';

interface AboutProps {
  aboutText: string;
}

const About = forwardRef<HTMLDivElement, AboutProps>(({ aboutText }, ref) => {
  return (
    <div ref={ref} className='min-h-screen flex items-center justify-center bg-gray-950 text-white pt-16'>
      <div data-aos="fade-up" className='max-w-4xl mx-auto grid grid-cols-2 grid-rows-[auto_auto] gap-8 p-8'>
        {/* Title */}
        <h2 className='text-4xl mb-4 text-center col-span-2'>{aboutText}</h2>

        {/* Description on the left */}
        <p className='text-xl text-center'>
          I'm a previous graduate of NBCC from both Network Administration and Cybersecurity.
          <br></br>
          I currently work in both Cybersecurity & IT Support whilst pursuing my Bachelors of Computer Science in my spare time.
          <br></br>
          I'm knowledgeable in React, TypeScript, Java, CSS, HTML, MySQL, Tailwind

        </p>

        {/* Button on the right */}
        <div className='flex justify-end'>
          <a
            href="/resume.pdf"
            download="Resume_TEST.pdf"
            className='px-6 h-12 bg-red-500 text-white text-lg font-semibold rounded-lg hover:bg-red-600 transition duration-300 ease-in-out flex items-center justify-center'
          >
            Download My Resume
          </a>
        </div>
      </div>
    </div>
  );
});

export default About;
