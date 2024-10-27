import React from "react";
import CustomNavbar from "./Components/page";
import {
  IoLogoJavascript,
  FaReact,
  FaNodeJs,
  FaCss3,
  FaHtml5,
  FaCpp,
} from "react-icons/fa"; // Import the relevant icons


const MainPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <CustomNavbar></CustomNavbar>
      <div className="flex flex-col items-center p-8">
        {/* Hero Section */}
        <section className="text-center mt-20">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
            Welcome to My Portfolio
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            I'm Nabin Karki, a passionate developer with skills in various
            technologies.
          </p>
        </section>
        {/* Skills Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
            Skills
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-4">
            <li className="flex items-center text-xl text-gray-700">
              <img
                src="javascript.svg"
                alt="JavaScript"
                className="w-6 h-6 mr-2"
              />{" "}
              JavaScript
            </li>
            <li className="flex items-center text-xl text-gray-700">
              <img src="react.svg" alt="React" className="w-6 h-6 mr-2" />{" "}
              React
            </li>
            <li className="flex items-center text-xl text-gray-700">
              <img
                src="nodejs.svg"
                alt="Node.js"
                className="w-6 h-6 mr-2"
              />{" "}
              Node.js
            </li>
            <li className="flex items-center text-xl text-gray-700">
              <img src="css.svg" alt="CSS" className="w-6 h-6 mr-2" />{" "}
              CSS
            </li>
            <li className="flex items-center text-xl text-gray-700">
              <img src="html.svg" alt="HTML" className="w-6 h-6 mr-2" />{" "}
              HTML
            </li>
            <li className="flex items-center text-xl text-gray-700">
              <img
                src="c++.svg"
                alt="C++"
                className="w-6 h-6 mr-2"
              />{" "}
              C++
            </li>
          </ul>
        </section>
        {/* Interests Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
            Interests
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            I enjoy exploring new technologies, coding challenges.
          </p>
        </section>
        {/* Education Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
            Education
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Studying Bachelor's Degree in Computer Engineering <br></br>from Kantipur
            Engineering College.
          </p>
        </section>
        r{/* Contact Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
            Contact
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Feel free to reach out via email at:{" "}
            <a href="mailto:nabin.karki@example.com" className="text-blue-500">
              karki0008@gmail.com
            </a>
          </p>
        </section>
        {/* Resume Section */}
        <section className="mt-12 mb-20">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
            Resume
          </h2>
          <a
            href="/path/to/your/resume.pdf"
            className="mt-4 inline-block px-6 py-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded"
          >
            Download Resume
          </a>
        </section>
      </div>
    </div>
  );
};

export default MainPage;
