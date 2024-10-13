import React, { forwardRef } from 'react';

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div id="contact" ref={ref} className='min-h-screen bg-gray-950 text-white p-8 pt-16'>
      <div data-aos="fade-up">
        <h2 className="text-4xl text-center mb-8 mt-6">Contact Me</h2>
        <p className="text-xl text-center mb-8">Feel free to reach out by filling out the form below!</p>

        <div className='max-w-lg mx-auto'>
          <form className='space-y-6'>
            <div>
              <label htmlFor='name' className='block text-sm font-medium text-gray-300'>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                required
                placeholder="Enter Your Name"
                className='mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 bg-gray-800 text-white'
              />
            </div>

            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-300'>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter Your Email"
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 bg-gray-800 text-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Enter Your Message"
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 bg-gray-800 text-white"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
});

export default Contact;
