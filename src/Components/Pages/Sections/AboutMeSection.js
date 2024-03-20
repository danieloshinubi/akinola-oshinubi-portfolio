import React from "react";
import "../../css/AboutMeSection.css";
import about_me_pic from "../../../Assets/Images/about me .jpg";
import newpic from "../../../Assets/Images/about_me_-removebg-preview.png";
import { Link } from "react-router-dom";

const AboutMeSection = () => {
  return (
    <section className="aboutMe">
      <div className="aboutMe-imgSide">
        <img src={about_me_pic} alt="" />
      </div>
      <div className="aboutMe-wordSide">
        <h3 className="aboutMe-wordSide-h3" style={{ color: "#8C89A2" }}>
          {"ABOUT ME"}
        </h3>
        <h1 className="aboutMe-wordSide-first-h1" style={{ color: "#3F3A64" }}>
          {"Akinola Oshinubi "}
          
        </h1>
        <p className="aboutMe-wordSide-second-h3" style={{ color: "#696969" }}>
          I am a skilled <b>Developer</b> with a strong focus on{" "}
          <b>User Satisfaction</b>. Proficient in HTML, CSS, JavaScript,
          Tailwind CSS, SQL, React, Helpesk Support, Network Security,
          Information Security, Comptia A+, and seamless user experiences across
          platforms. With expertise in Front-End & System Engineering, I deliver
          dynamic applications. I am a proactive problem solver, quick learner,
          and collaborative team player. Passionate about staying updated with
          the latest technologies and driving business success. Download my
          resume to learn more!.
        </p>
        <Link to="/Projects" style={{ textDecoration: "none" }}>
          <button
            className="resume-button"
            style={{
              color: "#ffffff",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cloud-arrow-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708z"
              />
              <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
            </svg>
            {"Download My Resume"}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AboutMeSection;
