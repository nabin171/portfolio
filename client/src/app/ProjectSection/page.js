"use client";
import React, { useState } from "react";

// Project data
const projects = [
  {
    title: "Hangman",
    description:
      "A game built using C programming that hangs a man after a certain number of unsuccessful attempts.",
    imageUrl: "/hangman.png",
  },
  {
    title: "Student Report Card Management System",
    description:
      "A report management system that allows users to look up exam results using their roll numbers and access information on students' attendance and performance.",
    imageUrl: "/report.jpeg",
  },
  {
    title: "Driver Drowsiness Detection System",
    description:
      "Machine learning is the foundation of this endeavor. For web applications, we used Python, and for mobile applications, Java. This technology uses the driver's facial expressions to check their status and provide alerts.",
    imageUrl: "/driver.png",
  },
  {
    title: "Responsive Google Forms",
    description:
      "A simple HTML form styled with CSS to collect user information. PHP is used for server-side processing, JavaScript for validation, and MySQL for data storage.",
    imageUrl: "/forms.png",
    link: "https://github.com/nabin171/Google-Forms.git",
  },
  {
    title: "Advanced Calculator Using React",
    description:
      "A simple calculator application built with React and styled using @nextui-org/react, performing basic arithmetic operations.",
    imageUrl: "/calculator.jpeg",
    link: "https://github.com/nabin171/Advanced-calculator.git",
  },
  {
    title: "FaceBook Reactions",
    description:
      "A React component that mimics Facebook reactions, allowing users to react to posts with different emojis.",
    imageUrl: "/reactions.jpg",
    link: "https://github.com/nabin171/Facebook-Reactions.git",
  },
  {
    title: "Lottery Game Using React",
    description:
      "A simple Lottery game component that displays a set of three randomly changing emojis from a predefined list.",
    imageUrl: "/lottery.avif",
    link: "https://github.com/nabin171/Lottery-Game.git",
  },
  {
    title: "Ride App",
    description:
      "Currently undergoing MERN stack training to develop a real-time web application for booking rides.",
    imageUrl: "/ride.avif",
  },
];

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(4); // Number of projects to display initially

  const handleShowMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 4, projects.length)); // Increase the number of visible projects
  };

  const handleShowLess = () => {
    setVisibleProjects((prev) => Math.max(prev - 4, 4)); // Decrease the number of visible projects
  };

  return (
    <section className="text-center mt-6 w-full max-w-3xl bg-gradient-to-r from-blue-50 to-blue-200 p-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 ease-out mx-auto" id="projects">
      <h2 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.slice(0, visibleProjects).map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
            <p className="mt-2 text-gray-600">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full"
              >
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        {visibleProjects < projects.length && (
          <button
            onClick={handleShowMore}
            className="mt-4 inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full hover:shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-90"
          >
            View More
          </button>
        )}
        {visibleProjects > 4 && (
          <button
            onClick={handleShowLess}
            className="mt-4 inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full hover:shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-90"
          >
            View Less
          </button>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
