"use client";
import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container shadow-lg fixed w-full bottom-0 z-50 backdrop-blur-md bg-opacity-80">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 w-full h-14 transition-colors duration-500 flex items-center justify-between px-8">
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
          <p>&copy; {new Date().getFullYear()} Nabin Karki</p>
        </div>
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/nabin-karki-22a872203/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-300 transition-transform transform hover:scale-105"
          >
            <FaLinkedin
              size={30}
              className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
            />
          </a>
          <a
            href="https://github.com/nabin171"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-300 transition-transform transform hover:scale-105"
          >
            <FaGithubSquare
              size={30}
              className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
            />
          </a>
        </div>
      </div>
      <style jsx>{`
        .footer-container {
          box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
