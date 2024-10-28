"use client";
import React from "react";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { FaFile } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const CustomNavbar = () => {
  return (
    <div className="Navbar-container shadow-lg fixed w-full top-0 z-50">
      <div className="bg-black w-full h-20">
        <div className="flex items-center justify-between h-full px-8">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 hover:scale-105 transition-transform duration-300 cursor-pointer">
            Nabin Karki
          </h1>
          <div className="flex space-x-8">
            {[
              { icon: <FaScrewdriverWrench size={20} />, label: "Skills" },
              { icon: <FaPinterest size={20} />, label: "Interest" },
              { icon: <FaGraduationCap size={20} />, label: "Education" },
              { icon: <RiContactsBook2Fill size={20} />, label: "Contact" },
              {
                icon: <FaFile size={20} />,
                label: "Resume",
                link: "Nabin-Karki-cv.pdf",
                isExternal: true,
              },
            ].map(({ icon, label, link, isExternal }, index) => (
              <Link
                key={index}
                href={link || "#"}
                target={isExternal ? "_blank" : "_self"}
                className="flex items-center space-x-2 cursor-pointer group"
              >
                <span className="text-white group-hover:text-blue-500 transition-colors duration-300">
                  {icon}
                </span>
                <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500 group-hover:from-blue-500 group-hover:to-purple-500 transition-colors duration-300">
                  {label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .Navbar-container {
          backdrop-filter: blur(10px);
        }
      `}</style>
    </div>
  );
};

export default CustomNavbar;
