import React from "react";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { FaFile } from "react-icons/fa";




const CustomNavbar = () => {
  return (
    <div className="">
      <div className="Navbar bg-black w-full h-20">
        <div className="flex items-center justify-between h-full px-8">
          <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
            Nabin Karki
          </h1>
          <div className="flex space-x-8">
            <div className="flex items-center space-x-2">
              <FaScrewdriverWrench size={20} className="text-white" />{" "}
              {/* Set icon color to white */}
              <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                Skills
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <FaPinterest size={20} className="text-white" />{" "}
              {/* Set icon color to white */}
              <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                Interest
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <FaGraduationCap size={20} className="text-white" />{" "}
              {/* Set icon color to white */}
              <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                Education
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <RiContactsBook2Fill size={20} className="text-white" />{" "}
              {/* Set icon color to white */}
              <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                Contact
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <FaFile size={20} className="text-white" />{" "}
              {/* Set icon color to white */}
              <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                Resume
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomNavbar;
