import React from 'react'

const Contacts = () => {
  return (
    <div>
      {" "}
      <section className="text-center mt-6 w-full max-w-3xl bg-gradient-to-r from-blue-50 to-blue-200 p-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 ease-out">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
          Contact
        </h2>
        <p className="mt-4 text-lg text-gray-800 leading-relaxed">
          Feel free to reach out via email at:{" "}
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
    </div>
  );
}

export default Contacts