import React, { useState, useEffect, useMemo } from "react";
import skill_checkbox from "../../../Assets/Images/skill-image.png";
import "../../css/Skills.css";
import html from "../../../Assets/Images/html.png";
import css from "../../../Assets/Images/css-3.png";
import tailwind from "../../../Assets/Images/tailwind.512x323.png";
import javascript from "../../../Assets/Images/javascript.png";
import reactjs from "../../../Assets/Images/react.png";
import mySQL from "../../../Assets/Images/mysql.png";
import dbeaver from "../../../Assets/Images/dbeaver.png";
import AD from "../../../Assets/Images/adbig-removebg-preview.png";
import sophos from "../../../Assets/Images/sophos.512x512.png";
import odoo from "../../../Assets/Images/odoo-removebg-preview.png";
import endpoint from "../../../Assets/Images/endpoint_central-removebg-preview.png";
import intune from "../../../Assets/Images/microsoft-intune-removebg-preview.png";
import ME from "../../../Assets/Images/MEdownload-removebg-preview.png";
import vercel from "../../../Assets/Images/Vercel_favicon-removebg-preview.png";
import unifi from "../../../Assets/Images/unifi_icon-removebg-preview.png";
import github from "../../../Assets/Images/github.512x500.png";
import azure from "../../../Assets/Images/Screen-Shot-2021-08-06-at-1.48.52-PM-removebg-preview.png";

const Skills = () => {
  const [visibleIcons, setVisibleIcons] = useState(false);

  const devIcons = useMemo(()=>[
    { id: "1", img: html },
    { id: "2", img: css },
    { id: "3", img: javascript },
    { id: "4", img: reactjs },
    { id: "5", img: mySQL },
    { id: "6", img: dbeaver },
    { id: "7", img: AD },
    { id: "8", img: sophos },
    { id: "9", img: odoo },
    { id: "10", img: endpoint },
    { id: "11", img: intune },
    { id: "12", img: ME },
    { id: "13", img: vercel },
    { id: "14", img: unifi },
    { id: "15", img: github },
    { id: "16", img: azure },
    { id: "17", img: tailwind },
],[]) 

  useEffect(() => {
    let timer;
    if (!visibleIcons) {
      timer = setTimeout(() => {
        setVisibleIcons(true);
      }, 500);
    } else {
      timer = setTimeout(() => {
        setVisibleIcons(false);
      }, 300 * devIcons.length + 500);
    }
    return () => clearTimeout(timer);
  }, [visibleIcons, devIcons]);

  return (
    <div
      className="full-skills"
      style={{ backgroundColor: " rgba(147, 107, 232, 0.1)" }}
    >
      <section className="Skills">
        <div className="vast-know">
          <h3 style={{ color: "#8C89A2", textAlign: "center" }}>{"SKILLS"}</h3>
          <h1 style={{ color: "#3F3A64", fontWeight: "500" }}>
            {"I have vast knowledge in the following Technologies:"}
          </h1>

          <div className="arrange">
            {visibleIcons &&
              devIcons.map((icon, index) => (
                <div
                  className="skill-icons"
                  key={icon.id}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <img src={icon.img} alt="" />
                </div>
              ))}
          </div>
        </div>
        <img src={skill_checkbox} alt="" className="skill-checkbox" />
      </section>
    </div>
  );
};

export default Skills;
