import React from "react";
import "../../css/ServicesSection.css";
import web_dev from "../../../Assets/Images/coding.png";
import MAM from "../../../Assets/Images/device.png";
import launch from "../../../Assets/Images/security.png";
import { Link } from "react-router-dom";
import IT_Support from "../../../Assets/Images/4230745.png";
import ram from "../../../Assets/Images/ram.png";
import research_analysis from "../../../Assets/Images/market-analysis.png";

const ServicesSection = () => {
  const servicesData = [
    {
      id: "01",
      title: "Web Development & Maintenance",
      description:
        "I transform ideas into dynamic and interactive websites, ensuring a seamless user experience to help your business thrive online.",
      image: web_dev,
    },
    {
      id: "02",
      title: "Information Technology Support",
      description:
        "I provide reliable IT support, acting as your trusted partner to troubleshoot tech issues, maintain smooth operations, and maximize your organization's productivity.",
      image: IT_Support,
    },
    {
      id: "03",
      title: "Information & Network Security",
      description:
        "I safeguard your valuable data and systems with robust cybersecurity solutions, protecting your business from potential cyber threats and ensuring peace of mind.",
      image: launch,
    },
    {
      id: "04",
      title: "Computer Hardware Solutions",
      description:
        "I help businesses and individuals with their computer hardware needs, from diagnosis and repair to upgrades and installations.",
      image: ram,
    },
    {
      id: "05",
      title: "Research & Analysis",
      description:
        "Uncovering valuable insights through meticulous research and analysis, I empower organizations to optimize strategies and enhance performance.",
      image: research_analysis,
    },
    {
      id: "06",
      title: "Mobile Device & Application Management",
      description:
        "I provide Mobile Device & Application Management (MDM/MAM) solutions to streamline your organization's mobile environment.",
      image: MAM,
    },
  ];

  return (
    <section className="ServicesSection">
      <div className="h3-and-h1">
        <h3 className="ServicesSection-h3" style={{ color: "#8C89A2" }}>
          {"SERVICES"}
        </h3>
        <h1 className="ServicesSection-h1" style={{ color: "#3F3A64",fontWeight:"400" }}>
          {"Turning Concepts into Tangible Solutions"}
        </h1>
      </div>
      <div className="boxes">
        {servicesData.map((service) => (
          <div key={service.id} className="all-boxes">
            <div className="alignment-box">
              <div className="top-part">   
                <img src={service.image} alt={service.title} />
                <h2>{service.id}</h2>
              </div>
              <h1>{service.title}</h1>
              <p>{service.description}</p>
              <Link
                to="/Services"
                className="read-more-link"
                style={{ textDecoration: "none", color: "#3F3A64" }}
              >
                {"Read More"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
