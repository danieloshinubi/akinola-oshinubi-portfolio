import React from "react";
import AlignBg from "../AlignBg";
import WelcomeAbout from "./Sections/WelcomeAbout";
import Skills from "./Sections/Skills";
import Motivation from "./Sections/Motivation";
import CertGallery from "./Sections/CertGallery";

function About() {

  return (
    <div className="About" >
      <AlignBg name={"About"} />
      <WelcomeAbout/>
      <Skills/>
      <Motivation/>
      <CertGallery/>
    </div>
  );
}

export default About;
