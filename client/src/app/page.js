import React from "react";
import CustomNavbar from "./Components/page";
import Footer from "./Components/Footer/page";
import ProjectsSection from "./Components/ProjectSection/page";

const MainPage = () => {



  return (
    <div className="bg-gray-100 min-h-screen">
      <CustomNavbar />
      <div className="flex flex-col items-center pt-10 p-8">
        {/* Hero Section */}
        <section className="text-center mt-6 w-full max-w-3xl bg-gradient-to-r from-blue-50 to-blue-200 p-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 ease-out">
          <div className="flex justify-center mb-6">
            <img
              src="profile.JPG"
              alt="Nabin Karki"
              className="w-56 h-56 rounded-full shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 animate-textGlow">
            Welcome to My Portfolio
          </h1>
          <p className="mt-4 text-lg text-gray-800 max-w-lg mx-auto leading-relaxed">
            I'm Nabin Karki, a passionate developer with skills in various
            technologies.
          </p>
          <a
            href="#projects"
            className="mt-6 inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold text-lg rounded-full hover:shadow-2xl transition-transform transform hover:scale-105 hover:bg-opacity-90"
          >
            View My Work
          </a>
        </section>

        {/* Skills Section */}
        <section className="text-center mt-6 w-full max-w-3xl bg-gradient-to-r from-blue-50 to-blue-200 p-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 ease-out">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 mb-4">
            Skills
          </h2>
          <ul className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {[
              "JavaScript",
              "React",
              "Node.js",
              "CSS",
              "HTML",
              "C++",
              "C",
              "GitHub",
              "Flutter",
            ].map((skill) => (
              <li
                key={skill}
                className="flex flex-col items-center text-xl text-gray-700 hover:text-blue-600"
              >
                <img
                  src={`${skill.toLowerCase()}.svg`}
                  alt={skill}
                  className="w-16 h-16 mb-2 transition-transform duration-200 ease-in-out hover:scale-110"
                />
                <span className="text-center">{skill}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Projects Section */}
       <ProjectsSection></ProjectsSection>

        {/* Interests Section */}
        <section className="text-center mt-6 w-full max-w-3xl bg-gradient-to-r from-blue-50 to-blue-200 p-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 ease-out">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
            Interests
          </h2>
          <p className="mt-4 text-lg text-gray-800 leading-relaxed">
            I enjoy exploring new technologies, coding challenges, and
            contributing to open-source projects.
          </p>
        </section>

        {/* Education Section */}
        <section className="text-center mt-6 w-full max-w-3xl bg-gradient-to-r from-blue-50 to-blue-200 p-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 ease-out">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
            Education
          </h2>
          <p className="mt-4 text-lg text-gray-800 leading-relaxed">
            Bachelor's Degree in Computer Engineering from Kantipur Engineering
            College.
          </p>
        </section>

        {/* Contact Section */}
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

        {/* Resume Section */}
        <section className="text-center mt-6 w-full max-w-3xl bg-gradient-to-r from-blue-50 to-blue-200 p-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 ease-out">
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
      <Footer />
    </div>
  );
};

export default MainPage;
