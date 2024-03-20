import React from "react";
import IntroSection from "./Sections/IntroSection";
import AboutMeSection from "./Sections/AboutMeSection";
import ProfPort from "./Sections/ProfPort";
import ServicesSection from "./Sections/ServicesSection";
import DemoExcel from "./Sections/DemoExcel";


function LandingPage() {
  return (
    <div className="LandingPage">
      <IntroSection />
      <AboutMeSection />
      <ProfPort />
      <ServicesSection/>
      <DemoExcel/>
    </div>
  );
}

export default LandingPage;
