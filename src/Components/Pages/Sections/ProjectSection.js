import React from "react";
import { Link } from "react-router-dom";
import calApp from "../../../Assets/Images/Calculator App.png";
import Crypto from "../../../Assets/Images/CryptoJacking.png";
import Faq from "../../../Assets/Images/FAQs.png";
import "../../css/ProjectSection.css";

const ProjectSection = () => {
  const ReadMore = "View Project";
  const projectBoxData = [
    {
      id: "1",
      img: calApp,
      title: "WEB-BASED CALCULATOR APPLICATION",
      word: "This calculator application is a software tool used for performing mathematical calculations quickly and accurately.",
    },
    {
      id: "2",
      img: Crypto,
      title: "CRYPTO-JACKING DETECTION APP",
      word: "This Crypto-jacking Detection Application is used for detecting and preventing unauthorized cryptocurrency mining activities, known as crypto-jacking, on computer systems and networks. ",
    },
    {
      id: "3",
      img: Faq,
      title: "FAQs",
      word: "FAQs (Frequently Asked Questions) are used on a website to provide answers to common queries or concerns that users may have about a product, service, or topic. ",
    },
  ];

  // Declared the SVG here, in order to remove redundancy when calling it later in the code

  var ArrowUp = (
    <div style={{ width: "20px", height: "20px" }}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V9.414l-8.293 8.293a1 1 0 0 1-1.414-1.414L14.586 8H9a1 1 0 0 1-1-1z"
          fill="#0D0D0D"
        />
      </svg>
    </div>
  );
  return (
    <div className="section-alignment">
      <section className="ProjectSection">
        <h3 style={{ color: "#8C89A2" }}>{"PROJECTS"}</h3>
        <div className="project-section-boxes">
          {projectBoxData.map((project) => {
            switch (project.id) {
              case "1":
                return (
                  <div className="project-section-box" key={project.id}>
                    <Link to="https://calculator-app-frontend-eight.vercel.app/">
                      <img
                        src={project.img}
                        alt=""
                        className="project-section-img"
                      />
                    </Link>
                    <div className="project-section-arrange">
                      <h2 className="project-section-h2">{project.title}</h2>
                      <p className="project-section-p">{project.word}</p>
                    </div>
                    <Link
                      to="https://calculator-app-frontend-eight.vercel.app/"
                      className="project-section-Link"
                    >
                      {ReadMore}
                      {ArrowUp}
                    </Link>
                  </div>
                );
              case "2":
                return (
                  <div className="project-section-box" key={project.id}>
                    <Link to="https://danialosh.streamlit.app/">
                      <img
                        src={project.img}
                        alt=""
                        className="project-section-img"
                      />
                    </Link>
                    <div className="project-section-arrange">
                      <h2 className="project-section-h2">{project.title}</h2>
                      <p className="project-section-p">{project.word}</p>
                    </div>
                    <Link
                      to="https://danialosh.streamlit.app/"
                      className="project-section-Link"
                    >
                      {ReadMore}
                      {ArrowUp}
                    </Link>
                  </div>
                );
              default:
                return (
                  <div className="project-section-box" key={project.id}>
                    <Link to="https://faqs-dropdown.vercel.app/">
                      <img
                        src={project.img}
                        alt=""
                        className="project-section-img"
                      />
                    </Link>
                    <div className="project-section-arrange">
                      <h2 className="project-section-h2">{project.title}</h2>
                      <p className="project-section-p">{project.word}</p>
                    </div>
                    <Link
                      to="https://faqs-dropdown.vercel.app/"
                      className="project-section-Link"
                    >
                      {ReadMore}
                      {ArrowUp}
                    </Link>
                  </div>
                );
            }
          })}
        </div>
        <Link to="/Projects" style={{textDecoration:"none"}}>
        <button className="resume-button"  style={{ marginTop: "5%",  margin: "auto" }}>{"View more Projects"}</button></Link>
      </section>
    </div>
  );
};

export default ProjectSection;
