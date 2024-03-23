import React, { useState } from "react";
import freeCodeCamp from "../../../Assets/Images/Certificates/freeCodeCamp-Responsive webdesign.png";
import GDSC_Weeks_bootcamp from "../../../Assets/Images/Certificates/GDSC-3 Weeks Bootcamp.jpg";
import NH from "../../../Assets/Images/Certificates/New Horizon Certificate.jpg";
import GL_Firewall from "../../../Assets/Images/Certificates/Great Learning - Firewall.png";
import GDSC_Days_challenge from "../../../Assets/Images/Certificates/GDSC-30 Days of Learning Challenge .jpg";
import GL_NS from "../../../Assets/Images/Certificates/Great Learning - Network Security .png";
import SL_js from "../../../Assets/Images/Certificates/SoloLearn-JavaScript.jpg";
import GL_Rjs from "../../../Assets/Images/Certificates/Great Learning React JS course.png";
import SL_WebDev from "../../../Assets/Images/Certificates/SoloLearn-Web Development.jpg";
import SL_SQL from "../../../Assets/Images/Certificates/SoloLearn-SQL.png";
import SkillUp from "../../../Assets/Images/Certificates/SkillUp(SimpliLearn)-React Js Course.png";
import scalar from "../../../Assets/Images/Certificates/Scaler - React JS.png";

const CertGallery = () => {
  const [showAll, setShowAll] = useState(false);
  const certData = [
    { id: "01", img: freeCodeCamp },
    { id: "02", img: GDSC_Weeks_bootcamp },
    { id: "03", img: NH },
    { id: "04", img: GL_Firewall },
    { id: "05", img: GDSC_Days_challenge },
    { id: "06", img: GL_NS },
    { id: "07", img: SL_js },
    { id: "08", img: GL_Rjs },
    { id: "09", img: SL_WebDev },
    { id: "10", img: SL_SQL },
    { id: "11", img: SkillUp },
    { id: "12", img: scalar },
  ];

  const CertStyles = {
    height: "auto",
    backgroundColor: "rgba(147, 107, 232, 0.1)",
    textAlign: "center",
    display: "grid",
    alignItems: "center",

    certBoxes: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    },

    cert_Boxes_Div: {
      width: "369.98px",
      height: "266px",
      margin: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    cert_boxes_img: {
      width: "95%",
    },

    cert_hThree: {
      color: "#8C89A2",
    },

    cert_hOne: {
      color: "#3F3A64",
      fontWeight: "400",
    },

    cert_section: {
      width: "80%",
      margin: "auto",
      marginBottom: "10%",
    },
  };

  return (
    <div style={CertStyles}>
      <section className="CertGallery" style={CertStyles.cert_section}>
        <h3 style={CertStyles.cert_hThree}>
          {"PROFESSIONAL CERTIFICATE GALLERY"}
        </h3>
        <h1 style={CertStyles.cert_hOne}>
          {
            "Explore some of the certificates I have earned during my professional journey."
          }
        </h1>
        <div className="cert-div-boxes" style={CertStyles.certBoxes}>
          {certData.slice(0, showAll ? certData.length : 3).map((cert) => (
            <div
              className="cert-div-img"
              style={CertStyles.cert_Boxes_Div}
              key={cert.id}
            >
              <img
                src={cert.img}
                alt="Certificate description"
                className="cert-img"
                style={CertStyles.cert_boxes_img}
              />
            </div>
          ))}
        </div>
        {showAll ? (
          <button
            className="resume-button"
            onClick={() => setShowAll(false)}
            style={{ marginTop: "20px",  margin: "auto" }}
          >
            Show Less
          </button>
        ) : (
          <button
            className="resume-button"
            onClick={() => setShowAll(true)}
            style={{ marginTop: "20px", margin: "auto" }}
          >
            Show More
          </button>
        )}
      </section>
    </div>
  );
};

export default CertGallery;
