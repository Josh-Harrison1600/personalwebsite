import React, { useState, useRef, forwardRef } from 'react';

interface ContactProps {}

const Contact = forwardRef<HTMLDivElement, ContactProps>((props, ref) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  //function for getting the env variables from the backend and sending the email
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const data = Object.fromEntries(formData.entries());

      try {
        const res = await fetch('https://personalwebsite-oooe.onrender.com', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        const json = await res.json();
        if (json.success) {
          setMessage('Message sent successfully!');
          setShowModal(true);
          setIsSending(false);
          formRef.current.reset();
        } else {
          setMessage('Failed to send message. Please try again.');
          setShowModal(true);
          setIsSending(false);
        }
      } catch (err) {
        console.error(err);
        setMessage('An error occurred. Please try again.');
        setShowModal(true);
        setIsSending(false);
      }
    }
  };


  // Trigger the fade-out animation, then hide the modal after the animation is done
  const closeModal = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setShowModal(false);
      setIsFadingOut(false);
    }, 500);
  };

  return (
    <div id="contact" ref={ref} className="bg-gray-950 text-white p-8 pt-14 pb-24">
      <div data-aos="fade-up">
        <h2 className="text-4xl text-center mb-8 mt-6">Contact Me</h2>
        <p className="text-xl text-center mb-8">
          Feel free to reach out by filling out the form below!
        </p>

        <div className="max-w-lg mx-auto">

          {/* Form */}
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
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
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
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
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300"
              >
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

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSending}
                className={`relative w-full flex justify-center py-2 px-4 rounded-md text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300 ease-in-out group ${
                  isSending ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {/* Text to stay above the expanding background */}
                <span className="relative z-10">
                  {isSending ? 'Sending...' : 'Send Message'}
                </span>

                {/* Expanding bottom line */}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500 group-hover:h-full transition-all duration-300 ease-in-out z-0"></span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            className={`bg-white text-black p-6 rounded-lg shadow-lg relative w-96 ${
              isFadingOut ? 'animate-fadeOut' : 'animate-fadeIn'
            }`}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              ✕
            </button>
            <h3 className="text-lg font-semibold mb-4 text-center">{message}</h3>
            <p className="text-md text-black text-center">
              I'll get back to you shortly!
            </p>
          </div>
        </div>
      )}
    </div>
  );
});

export default Contact;
