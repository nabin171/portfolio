import React from "react";
import CustomNavbar from "./Components/NavBar/page";
import Footer from "./Components/Footer/page";
import ProjectsSection from "./Components/ProjectSection/page";
import Interest from "./Components/Interest/page";
import Education from "./Components/Education/page";
import Skills from "./Components/Skills/page";
import Contacts from "./Components/Contacts/page";
import Resume from "./Components/Resume/page";
import Profile from "./Components/Profile/page";
const MainPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <CustomNavbar />
      <div className="flex flex-col items-center pt-10 p-8">
        {/* Profile Section */}
<Profile></Profile>

        {/* Skills Section */}
     <Skills></Skills>

        {/* Projects Section */}
       <ProjectsSection></ProjectsSection>

        {/* Interests Section */}
        <Interest></Interest>

        {/* Education Section */}
     <Education></Education>

        {/* Contact Section */}
      <Contacts></Contacts>

        {/* Resume Section */}
      <Resume></Resume>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
