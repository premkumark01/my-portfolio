import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_u08e3k8', 'template_gc33yn3', form.current, {
        publicKey: 'k9bwcdlbBm9lChnq0',
      })
      .then(
        () => {
          e.target.reset();
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="max-w-[1200px] mx-auto bg-black sm:py-20 p-5" id="contact">
      <div className="text-center">
        <h2 className="text-4xl font-bold leading-tight primary-color">
          Contact Me
        </h2>
      </div>

      <div className="max-w-[800px] mx-auto">
        <div className="mt-6 bg-[#161616] rounded-xl">
          <div className="p-10">
            <form onSubmit={sendEmail} ref={form}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="user_name"
                      id="user_name"
                      placeholder="Your Name"
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                            border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                    />
                  </div>
                </div>

                <div>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="user_email"
                      id="user_email"
                      placeholder="Your Email"
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                            border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Your Message"
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                            border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                    ></textarea>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
