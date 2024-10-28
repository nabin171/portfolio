"use client";
import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-black  text-white p-4 flex justify-between items-center">
      <div className="ml-4 text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
        <p>&copy; {new Date().getFullYear()} Nabin Karki</p> {/* Your name */}
      </div>
      <div className="mr-4 flex space-x-4">
        <a
          href="https://www.linkedin.com/in/nabin-karki-22a872203/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-white"
        >
          <FaLinkedin size={30} className="text-white" />
        </a>
        <a
          href="https://github.com/nabin171"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <FaGithubSquare size={30} className="text-white" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
