import React from "react";
import IntroSection from "./Sections/IntroSection";
import AboutMeSection from "./Sections/AboutMeSection";
import ProfPort from "./Sections/ProfPort";
import ServicesSection from "./Sections/ServicesSection";

function LandingPage() {
  return (
    <div className="LandingPage">
      <IntroSection />
      <AboutMeSection />
      <ProfPort />
      <ServicesSection/>
    </div>
  );
}

export default LandingPage;
