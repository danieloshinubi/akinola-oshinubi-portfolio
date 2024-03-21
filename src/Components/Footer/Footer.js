import React from "react";
import "./Footer.css";
import SocialIcons from "../Pages/Sections/SocialIcons";

const Footer = () => {
  return (
    <footer>
      <div className="icon-align">
        <SocialIcons />
      </div>
      <p style={{ color: "#ffff" }}>
        &copy; {"2024 Akinola Oshinubi's Portfolio. All Rights Reserved."}
      </p>
    </footer>
  );
};

export default Footer;
