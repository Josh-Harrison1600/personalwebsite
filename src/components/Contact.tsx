import React, { useRef, useState, forwardRef } from 'react';
import emailjs from 'emailjs-com';

// Using forwardRef to pass the ref from parent (App.tsx)
const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    if (formRef.current) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID || '',    
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',  
          formRef.current,
          process.env.REACT_APP_EMAILJS_USER_ID || ''
        )
        .then(
          (result) => {
            console.log(result.text);
            setMessage('Message sent successfully!');
            setIsSending(false);
          },
          (error) => {
            console.log(error.text);
            setMessage('Failed to send message. Please try again.');
            setIsSending(false);
          }
        );
    }
  };

  return (
    <div id="contact" ref={ref} className="min-h-screen bg-gray-950 text-white p-8 pt-16">
      <div data-aos="fade-up">
        <h2 className="text-4xl text-center mb-8 mt-6">Contact Me</h2>
        <p className="text-xl text-center mb-8">Feel free to reach out by filling out the form below!</p>

        <div className="max-w-lg mx-auto">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                required
                                placeholder="Enter Your Name"
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 bg-gray-800 text-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                placeholder="Enter Your Email"
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 bg-gray-800 text-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Your Message
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
                disabled={isSending}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-22 focus:ring-offset-2 focus:ring-red-500 ${
                  isSending && 'opacity-50 cursor-not-allowed'
                }`}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
          {message && <p className="text-center mt-4 text-green-500">{message}</p>}
        </div>
      </div>
    </div>
  );
});

export default Contact;
