import React from "react";
import IntroSec_img from "../../../Assets/Images/IntroSect-img.png";
import "../../css/IntroSection.css";
import { Link } from "react-router-dom";

const IntroSection = () => {
  return (
    <div
      className="full-IntroSection"
      style={{ backgroundColor: " rgba(147, 107, 232, 0.1)" }}
    >
      <section className="IntroSection">
        <div className="left-IntroSection">
          <h3 style={{ color: "#8C89A2" }}>HI THERE!</h3>
          <p className="left-IntroSection-first-p" style={{ color: "#3f3a64" }}>
            {" I'm"}{" "}
            <b>
              {"  Akinola Oshinubi "}
              <br /> {"a "}
            </b>
            {"   Software Developer & System Engineer"}
          </p>
          <p
            className="left-IntroSection-second-p"
            style={{ color: "#8c89a2" }}
          >
            {"A highly"} <b> {"organized, innovative"}</b>, {"and "}
            <b>{"goal-driven"}</b> {" graduate with "}
            <b>{"exceptional communication, problem-solving,"}</b> {"and"}
            <b> {"leadership abilities,"}</b> {"coupled with a"}{" "}
            <b>{"passion"}</b> {"for exploring the vast realm of "}
            <span style={{ color: "#E83E8C" }}>
              {"Information Technology."}
            </span>
          </p>
          <Link to="/Projects" style={{ textDecoration: "none" }}>
            <button
              className="left-IntroSection-second-button"
              style={{
                color: "#ffffff",
              }}
            >
              {"See Projects"}
            </button>
          </Link>
        </div>
        <div className="right-IntroSection">
          <img src={IntroSec_img} alt="" />
        </div>
      </section>
    </div>
  );
};

export default IntroSection;
