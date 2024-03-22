import React from "react";
import AlignBg from "../AlignBg";
import WelcomeAbout from "./Sections/WelcomeAbout";
import Skills from "./Sections/Skills";
import Motivation from "./Sections/Motivation";
import CertGallery from "./Sections/CertGallery";
import Empower from "./Sections/Empower";
import ProjectSection from "./Sections/ProjectSection";

function About() {
  return (
    <div className="About">
      <AlignBg name={"About"} />
      <WelcomeAbout />
      <Skills />
      <Motivation />
      <Empower />
      <ProjectSection />
      <CertGallery />
    </div>
  );
}

export default About;
