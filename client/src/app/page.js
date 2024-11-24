"use client"
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
// import ParticlesBackground from "./Components/Tsparticles/page";

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

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <CustomNavbar
          scrollToSkills={() => scrollToSection(skillsRef)}
          scrollToInterest={() => scrollToSection(interestRef)}
          scrollToEducation={() => scrollToSection(educationRef)}
          scrollToContacts={() => scrollToSection(contactsRef)}
          scrollToResume={() => scrollToSection(resumeRef)}
        />
      </div>

      {/* Profile Section */}
      <div className="relative z-10">
        <div className="flex flex-col items-center pt-20 p-8 relative z-10">
          <Profile />
        </div>

        {/* Sections below Profile with Particles Background */}

        {/* <ParticlesBackground /> */}

        {/* Skills Section */}
        <div ref={skillsRef} className="pt-10 p-8">
          <Skills />
        </div>

        {/* Projects Section */}
        <ProjectsSection />

        {/* Interests Section */}
        <div ref={interestRef} className="pt-10 p-8">
          <Interest />
        </div>

        {/* Education Section */}
        <div ref={educationRef} className="pt-10 p-8">
          <Education />
        </div>

        {/* Contact Section */}
        <div ref={contactsRef} className="pt-10 p-8">
          <Contacts />
        </div>

        {/* Resume Section */}
        <div ref={resumeRef} className="pt-10 p-8">
          <Resume />
        </div>
      </div>

      {/* Footer */}
      <div className="pt-10">
        <Footer />
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 right-10 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 transition"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default MainPage;
