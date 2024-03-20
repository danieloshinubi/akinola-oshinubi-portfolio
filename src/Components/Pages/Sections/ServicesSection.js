import React from "react";
import "../../css/ServicesSection.css";
import web_dev from "../../../Assets/Images/coding.png";
import MAM from "../../../Assets/Images/device.png"
import launch from "../../../Assets/Images/security.png";
import { Link } from "react-router-dom";
import IT_Support from "../../../Assets/Images/4230745.png";
import ram from "../../../Assets/Images/ram.png";
import research_analysis from "../../../Assets/Images/market-analysis.png";
import arrow from "../../../Assets/Images/arrow-right.png"

const ServicesSection = () => {

  return (
    <section className="ServicesSection">
      <div className="h3-and-h1">
        <h1 className="ServicesSection-h3" style={{ color: "#8C89A2" }}>
          {"SERVICES"}
        </h1>
        <h1 className="ServicesSection-h1" style={{ color: "#3F3A64" }}>
          {"Turning Concepts into Tangible Solutions"}
        </h1>
      </div>
      <div className="boxes">
        <div className="web-dev-box all-boxes">
          <div className="alignment-box">
            <div className="top-part">
              <img src={web_dev} />
              <h2>{"01"}</h2>
            </div>
            <h1>{" Web Development & Maintenance"}</h1>
            <p>
              {
                "I transform ideas into dynamic and interactive websites, ensuring a seamless user experience to help your business thrive online."
              }
            </p>
            <Link
              to="https://www.linkedin.com/in/akinolaoshinubi/"
              className="read-more-link"
              style={{ textDecoration: "none", color: "#3F3A64" }}
            >
              {"Read more"}
            </Link>
          </div>
        </div>
        <div className="second-box all-boxes">
          <div className="alignment-box">
            <div className="top-part">
              <img src={IT_Support} />
              <h2>{"02"}</h2>
            </div>
            <h1>{"Information Technology Support"}</h1>
            <p>
              {
                " I provide reliable IT support, acting as your trusted partner to troubleshoot tech issues, maintain smooth operations, and maximize your organization's productivity."
              }
            </p>
            <Link
              to="https://www.linkedin.com/in/akinolaoshinubi/"
              className="read-more-link"
              style={{ textDecoration: "none", color: "#3F3A64" }}
            >
              {"Read more" }
            </Link>
          </div>
        </div>
        <div className="third-box all-boxes">
          <div className="alignment-box">
            <div className="top-part">
              <img src={launch} alt="" />
              <h2>{"03"}</h2>
            </div>
            <h1>{"Information & Network Security"} </h1>
            <p>
              {
                "I safeguard your valuable data and systems with robust cybersecurity solutions, protecting your business from potential cyber threats and ensuring peace of mind."
              }
            </p>
            <Link
              to="https://www.linkedin.com/in/akinolaoshinubi/"
              className="read-more-link"
              style={{ textDecoration: "none", color: "#3F3A64" }}
            >
              {"Read More"}
            </Link>
          </div>
        </div>
        <div className="fourth-box all-boxes">
          <div className="alignment-box">
            <div className="top-part">
              <img src={ram} alt="" />
              <h2>{"04"}</h2>
            </div>
            <h1>{"Computer Hardware Solutions"} </h1>
            <p>
              {
                "I help businesses and individuals with their computer hardware needs, from diagnosis and repair to upgrades and installations."
              }
            </p>
            <Link
              to="https://www.linkedin.com/in/akinolaoshinubi/"
              className="read-more-link"
              style={{ textDecoration: "none", color: "#3F3A64" }}
            >
              {"Read More"}
            </Link>
          </div>
        </div>

        <div className="fifth-box all-boxes">
          <div className="alignment-box">
            <div className="top-part">
              <img src={research_analysis} alt="" />
              <h2>{"05"}</h2>
            </div>
            <h1>{"Research & Analysis"} </h1>
            <p>
              {
                "Uncovering valuable insights through meticulous research and analysis, I empower organizations to optimize strategies and enhance performance."
              }
            </p>
            <Link
              to="https://www.linkedin.com/in/akinolaoshinubi/"
              className="read-more-link"
              style={{ textDecoration: "none", color: "#3F3A64" }}
            >
              {"Read More"}
            </Link>
          </div>
        </div>

        <div className="sixth-box all-boxes">
          <div className="alignment-box">
            <div className="top-part">
              <img src={MAM} alt="" />
              <h2>{"06"}</h2>
            </div>
            <h1>{"Mobile Device & Application Management"} </h1>
            <p>
              {
                "I provide Mobile Device & Application Management (MDM/MAM) solutions to streamline your organization's mobile environment."
              }
            </p>
            <Link
              to="https://www.linkedin.com/in/akinolaoshinubi/"
              className="read-more-link"
              style={{ textDecoration: "none", color: "#3F3A64" }}
            >
              {"Read More"}
            </Link>
          </div>
        </div>
        {/* <div className="fourth-box all-boxes"></div>
        <div className="first-box all-boxes"></div>
        <div className="sixth-box all-boxes"></div> */}
      </div>
    </section>
  );
};

export default ServicesSection;
