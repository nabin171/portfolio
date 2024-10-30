"use client";

import React from "react";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { FaFile } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const CustomNavbar = ({
  scrollToSkills,
  scrollToInterest,
  scrollToEducation,
  scrollToContacts,
  scrollToResume,
}) => {
  return (
    <div className="navbar-container shadow-lg fixed w-full top-0 z-50 backdrop-blur-md bg-opacity-80">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 w-full h-16 transition-colors duration-500">
        <div className="flex items-center justify-between h-full px-8">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 hover:scale-110 transition-transform duration-300 cursor-pointer">
            Nabin Karki
          </h1>
          <div className="flex space-x-6">
            <button
              onClick={scrollToSkills}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <FaScrewdriverWrench size={20} className="text-gray-300" />
              <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-purple-500 transition-colors duration-300">
                Skills
              </p>
            </button>

            <button
              onClick={scrollToInterest}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <FaPinterest size={20} className="text-gray-300" />
              <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-purple-500 transition-colors duration-300">
                Interest
              </p>
            </button>

            <button
              onClick={scrollToEducation}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <FaGraduationCap size={20} className="text-gray-300" />
              <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-purple-500 transition-colors duration-300">
                Education
              </p>
            </button>

            <button
              onClick={scrollToContacts}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <RiContactsBook2Fill size={20} className="text-gray-300" />
              <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-purple-500 transition-colors duration-300">
                Contact
              </p>
            </button>

            <button
              onClick={scrollToResume}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <FaFile size={20} className="text-gray-300" />
              <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-purple-500 transition-colors duration-300">
                Resume
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomNavbar;
