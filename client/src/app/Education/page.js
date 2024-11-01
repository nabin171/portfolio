import React from "react";

const Education = () => {
  return (
    <div className="bg-gray-100 w-full flex justify-center">
      <section className="w-full max-w-7xl text-center mt-6 bg-gradient-to-r from-blue-50 to-blue-200 p-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 ease-out mx-4">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
          Education
        </h2>

        <div className="mt-6 text-lg text-gray-800 leading-relaxed space-y-4">
          <p>
            <strong>
              Currently pursuing a Bachelor's Degree in Computer Engineering
            </strong>
            <br />
            at Kantipur Engineering College
          </p>

          <p>
            <strong>+2 in Science</strong>
            <br />
            Capital College and Research Center
          </p>

          <p>
            <strong>SEE</strong>
            <br />
            Marigold English Boarding School
            <br />
            Graduated in 2074 B.S.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Education;
