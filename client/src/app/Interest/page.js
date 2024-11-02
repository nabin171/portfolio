import React from "react";

const Interest = () => {
  return (
    <div className="bg-gray-100 w-full flex justify-center">
      <section className="text-center max-w-3xl mt-6 w-full bg-gradient-to-r from-blue-50 to-blue-200 p-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 ease-out mx-4">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
          Interests
        </h2>
        <p className="mt-4 text-lg text-gray-800 leading-relaxed">
          I enjoy exploring new technologies, coding challenges, and
          contributing to open-source projects. I enjoy exploring new
          technologies, tackling complex coding challenges, and contributing to
          open-source projects that drive innovation and community growth. I am
          passionate about improving my skills in full-stack development,
          particularly within the MERN stack, and experimenting with new
          frameworks and libraries.
        </p>
      </section>
    </div>
  );
};

export default Interest;
