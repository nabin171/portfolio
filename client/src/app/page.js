"use client";

import React, { useRef } from "react";
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

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <CustomNavbar
        scrollToSkills={() => scrollToSection(skillsRef)}
        scrollToInterest={() => scrollToSection(interestRef)}
        scrollToEducation={() => scrollToSection(educationRef)}
        scrollToContacts={() => scrollToSection(contactsRef)}
        scrollToResume={() => scrollToSection(resumeRef)}
      />
      <div className="flex flex-col items-center pt-10 p-8">
        <Profile />

        <div ref={skillsRef}>
          <Skills />
        </div>

        <div ref={interestRef}>
          <Interest />
        </div>

        <div ref={educationRef}>
          <Education />
        </div>

        <div ref={contactsRef}>
          <Contacts />
        </div>

        <div ref={resumeRef}>
          <Resume />
        </div>

        <ProjectsSection />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
