import React from "react";
import about_me_pic from "../../../Assets/Images/about me .jpg";
import "../../css/WelcomeAbout.css";
import { Link } from "react-router-dom";
import line from "../../../Assets/Images/pseudo.png";
import SocialIcons from "./SocialIcons";

const WelcomeAbout = () => {
  const infoData = [
    { id: "Name: ", answer: "Akinola Daniel Oshinubi" },
    { id: "Location: ", answer: "Lekki, Lagos State, Nigeria" },
    { id: "Age:  ", answer: "22 Years" },
    { id: "Email: ", answer: "danieloshinubi@gmail.com" },
    {
      id: "Graduate:  ",
      answer: "Babcock University, Bsc (Hons) Computer Science, Zircon 23'",
    },
  ];

  return (
    <section className="whole-about-intro">
      <div className="image-side">
        <img src={about_me_pic} alt="" />
      </div>

      <div className="word-side">
        <h3 className="word-side-h3" style={{ color: "#8C89A2" }}>
          {"WELCOME, I AM A TECH SAVVY PROBLEM SOLVER"}
        </h3>
        <h1 className="word-side-h1" style={{ color: "#3F3A64" }}>
          {"With Over 3 Years of Professional Experience"}
        </h1>
        <p className="word-side-p" style={{ color: "#696969" }}>
          {
            "I deliver high-quality solutions that meet my clients' needs. With a strong technical background and a passion for innovation, I create efficient web applications. My expertise ensures exceptional user experiences and seamless functionality."
          }
        </p>
        <hr />
        <div>
          {infoData.map((info) => {
            if (info.id === "Email") {
              return (
                <p>
                  <b>{info.id} </b>
                  <span style={{ color: "#E83E8C" }}>{info.answer}</span>
                </p>
              );
            } else {
              return (
                <p style={{ color: "#696969" }}>
                  <b>{info.id} </b>
                  <span>{info.answer}</span>
                </p>
              );
            }
          })}
        </div>
        <div className="down-button-with-icons">
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
          <span>
            <img src={line} alt="" />
          </span>
          <SocialIcons />
        </div>
      </div>
    </section>
  );
};

export default WelcomeAbout;
