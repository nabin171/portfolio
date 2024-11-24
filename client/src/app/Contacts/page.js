import React from "react";

const Contacts = () => {
  return (
    <div className="flex flex-col items-center w-full justify-center bg-gray-100">
      <section className="text-center max-w-3xl mt-6 w-full bg-gradient-to-r from-blue-50 to-blue-200 p-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 ease-out mx-4">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
          Contact
        </h2>
        <p className="mt-4 text-lg text-gray-800 leading-relaxed">
          Feel free to reach out through email at:{" "}
          <a
            href="mailto:karki0008@gmail.com"
            className="text-blue-500 underline hover:text-blue-700"
          >
            karki0008@gmail.com
          </a>
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/nabin-karki-22a872203/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform hover:scale-110"
          >
            <img src="linkedin.svg" alt="LinkedIn" className="w-10 h-10" />
          </a>
          <a
            href="https://github.com/nabin171"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform hover:scale-110"
          >
            <img src="github.svg" alt="GitHub" className="w-10 h-10" />
          </a>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="mt-8 max-w-3xl w-full bg-gradient-to-r from-blue-50 to-blue-200 p-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 ease-out mx-4">
        <h3 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
          Send Email
        </h3>

        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 h-32 resize-none"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-4 inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full hover:shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-90"
            >
              Send
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contacts;
