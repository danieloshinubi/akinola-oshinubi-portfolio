import React from "react";
import SocialIcons from "../Pages/Sections/SocialIcons";

const Footer = () => {
  return (
    <footer style={footerStyles}>
      <div className="icon-align" style={iconAlign}>
        <SocialIcons />
      </div>
      <p style={p}>
        &copy; {"2024 Akinola Oshinubi's Portfolio. All Rights Reserved."}
      </p>
    </footer>
  );
};

const footerStyles = {
  backgroundColor: "#8c89a2",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  width: "100%",
  height: "300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  fontFamily: "jost-italic",
};

const mediaQueryStyles = {
  footer: {
    width: "100%",
    height: "150px",
  },
  p: {
    fontSize: "15px",
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#ffffff",
  },
  iconAlign: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const { footer, p, iconAlign } = mediaQueryStyles;

if (window.matchMedia("(max-width: 480px)").matches) {
  Object.assign(footer, {
    width: "100%",
    height: "150px",
  });
  Object.assign(p, {
    fontSize: "15px",
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  });
  Object.assign(iconAlign, {
    width: "80%",
  });
}

export default Footer;
