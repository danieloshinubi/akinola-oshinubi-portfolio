import React from "react";
import AlignBg from "../AlignBg";
import "../css/Projects.css";
import calApp from "../../Assets/Images/Calculator App.png";
import Crypto from "../../Assets/Images/CryptoJacking.png";
import Faq from "../../Assets/Images/FAQs.png";
import TechTrybe from "../../Assets/Images/TechTrybe.png";
import Google from "../../Assets/Images/Google Front Page.png";
import TekkTopia from "../../Assets/Images/TekkTopia.png";
import { Link } from "react-router-dom";

function Projects() {
  const ReadMore = "View Project";
  const projectBoxData = [
    {
      id: "1",
      img: calApp,
      title: "Web-Based Calculator Application",
      word: "This calculator application is a software tool used for performing mathematical calculations quickly and accurately.",
    },
    {
      id: "2",
      img: Crypto,
      title: "Crypto-Jacking Detection Application",
      word: "This Crypto-jacking Detection Application is used for detecting and preventing unauthorized cryptocurrency mining activities, known as crypto-jacking, on computer systems and networks. ",
    },
    {
      id: "3",
      img: Faq,
      title: "FAQs",
      word: "FAQs (Frequently Asked Questions) are used on a website to provide answers to common queries or concerns that users may have about a product, service, or topic. ",
    },
    {
      id: "4",
      img: TechTrybe,
      title: "TechTrybe Official Website",
      word: "  Specialized in crafting world-class technology solutions tailored to address your business needs and ensure seamless operational growth.",
    },
    {
      id: "5",
      img: Google,
      title: "Google Landing Page",
      word: "A custom Google front page that reflects my design preferences.  ",
    },
    {
      id: "6",
      img: TekkTopia,
      title: "Tekk Topia Official Website ",
      word: "Showing their brand, products and services to attract customers with informative content.",
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
    <div>
      <AlignBg name={"Projects"} title={"Projects"} />
      <section className="Projects">
        <div className="project-boxes">
          {projectBoxData.map((project, i) => {
            if (project.id === "1") {
              return (
                <div className="project-box" key={project.id}>
                  <Link to="https://calculator-app-frontend-eight.vercel.app/">
                    <img alt="" src={project.img} className="project-img" />{" "}
                  </Link>
                  <div className="project-arrange">
                    <h2 className="project-h2">{project.title}</h2>
                    <p className="project-p">{project.word}</p>
                  </div>
                  <Link
                    to="https://calculator-app-frontend-eight.vercel.app/"
                    className="project-Link"
                  >
                    {ReadMore}
                    {ArrowUp}
                  </Link>
                </div>
              );
            } else if (project.id === "2") {
              return (
                <div className="project-box" key={project.id}>
                  <Link to="https://danialosh.streamlit.app/">
                    <img alt="" src={project.img} className="project-img" />{" "}
                  </Link>
                  <div className="project-arrange">
                    <h2 className="project-h2">{project.title}</h2>
                    <p className="project-p">{project.word}</p>
                  </div>
                  <Link
                    to="https://danialosh.streamlit.app/"
                    className="project-Link"
                  >
                    {ReadMore}
                    {ArrowUp}
                  </Link>
                </div>
              );
            } else if (project.id === "3") {
              return (
                <div className="project-box" key={project.id}>
                  <Link to="https://faqs-dropdown.vercel.app/">
                    <img alt="" src={project.img} className="project-img" />{" "}
                  </Link>
                  <div className="project-arrange">
                    <h2 className="project-h2">{project.title}</h2>
                    <p className="project-p">{project.word}</p>
                  </div>
                  <Link
                    to="https://faqs-dropdown.vercel.app/"
                    className="project-Link"
                  >
                    {ReadMore}
                    {ArrowUp}
                  </Link>
                </div>
              );
            } else if (project.id === "4") {
              return (
                <div className="project-box" key={project.id}>
                  <Link to="https://www.thetechtrybe.com/home">
                    <img alt="" src={project.img} className="project-img" />{" "}
                  </Link>
                  <div className="project-arrange">
                    <h2 className="project-h2">{project.title}</h2>
                    <p className="project-p">{project.word}</p>
                  </div>
                  <Link
                    to="https://www.thetechtrybe.com/home"
                    className="project-Link"
                  >
                    {ReadMore}
                    {ArrowUp}
                  </Link>
                </div>
              );
            } else if (project.id === "5") {
              return (
                <div className="project-box" key={project.id}>
                  <Link to="https://danieloshinubi.github.io/frontpagehub/">
                    <img alt="" src={project.img} className="project-img" />{" "}
                  </Link>
                  <div className="project-arrange">
                    <h2 className="project-h2">{project.title}</h2>
                    <p className="project-p">{project.word}</p>
                  </div>
                  <Link
                    to="https://danieloshinubi.github.io/frontpagehub/"
                    className="project-Link"
                  >
                    {ReadMore}
                    {ArrowUp}
                  </Link>
                </div>
              );
            } else {
              return (
                <div className="project-box" key={project.id}>
                  <Link to="https://tekk-topia-official.vercel.app/">
                    <img alt="" src={project.img} className="project-img" />{" "}
                  </Link>
                  <div className="project-arrange">
                    <h2 className="project-h2">{project.title}</h2>
                    <p className="project-p">{project.word}</p>
                  </div>
                  <Link
                    to="https://tekk-topia-official.vercel.app/"
                    className="project-Link"
                  >
                    {ReadMore}
                    {ArrowUp}
                  </Link>
                </div>
              );
            }
          })}
        </div>
      </section>
    </div>
  );
}

export default Projects;
