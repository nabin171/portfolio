import React from 'react'

const Resume = () => {
  return (
    <div>
      {" "}
<section className="min-h-[70px] text-center mt-6 w-full max-w-3xl bg-gradient-to-r from-blue-50 to-blue-200 p-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 ease-out">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
          Resume
        </h2>
        <a
          href="Nabin-Karki-cv.pdf"
          target="_blank"
          className="mt-4 inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full hover:shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-90"
        >
          Download Resume
        </a>
      </section>
    </div>
  );
}

export default Resume