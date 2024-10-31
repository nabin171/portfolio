"use client";
import React, { useRef, useState, useEffect } from "react";
import CustomNavbar from "./Components/NavBar/page";
import Footer from "./Components/Footer/page";
import ProjectsSection from "./ProjectSection/page";
import Interest from "./Interest/page";
import Education from "./Education/page";
import Skills from "./Skills/page";
import Contacts from "./Contacts/page";
import Resume from "./Resume/page";
import Profile from "./Profile/page";

const MainPage = () => {
  const skillsRef = useRef(null);
  const interestRef = useRef(null);
  const educationRef = useRef(null);
  const contactsRef = useRef(null);
  const resumeRef = useRef(null);

  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle Scroll to Top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200); // Show button after scrolling down 200px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/bg.jpg')`, // Path to the image in the public folder
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="pt-5">
        <CustomNavbar
          scrollToSkills={() => scrollToSection(skillsRef)}
          scrollToInterest={() => scrollToSection(interestRef)}
          scrollToEducation={() => scrollToSection(educationRef)}
          scrollToContacts={() => scrollToSection(contactsRef)}
          scrollToResume={() => scrollToSection(resumeRef)}
        />
      </div>
      <div className="flex flex-col items-center pt-10 p-8 bg-white bg-opacity-80">
        {/* Profile Section */}
        <Profile />

        {/* Skills Section */}
        <div ref={skillsRef}>
          <Skills />
        </div>

        {/* Projects Section */}
        <ProjectsSection />

        {/* Interests Section */}
        <div ref={interestRef}>
          <Interest />
        </div>

        {/* Education Section */}
        <div ref={educationRef}>
          <Education />
        </div>

        {/* Contact Section */}
        <div ref={contactsRef}>
          <Contacts />
        </div>

        {/* Resume Section */}
        <div ref={resumeRef}>
          <Resume />
        </div>
      </div>
      <div className="pt-10">
        <Footer />
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
        
          onClick={scrollToTop}
          className="fixed bottom-16 right-10 p-3  bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 transition"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default MainPage;
