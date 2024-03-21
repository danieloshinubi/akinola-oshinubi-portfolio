import React from "react";
import AlignBg from "../AlignBg";
import WelcomeAbout from "./Sections/WelcomeAbout";
import Skills from "./Sections/Skills";

function About() {
  return (
    <div>
      <AlignBg name={"About"} />
      <WelcomeAbout/>
      <Skills/>
    </div>
  );
}

export default About;
