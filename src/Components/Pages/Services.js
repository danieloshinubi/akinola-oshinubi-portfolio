import React from "react";
import AlignBg from "../AlignBg";
import WebDev from "../../Assets/Images/pexels-pixabay-276452.jpg";
import CompHard from "../../Assets/Images/gettyimages-937063796-612x612.jpg";
import INS from "../../Assets/Images/sec.jpg";
import RAA from "../../Assets/Images/raaooo.png";
import MamMdm from "../../Assets/Images/close-up-man-s-hand-using-his-mobile-phone.jpg";
import ItSupport from "../../Assets/Images/helpdesk.jpg";
import erp from "../../Assets/Images/gradient-erp-illustration_23-2149370943.jpg";
import "../css/Services.css";
import { Link } from "react-router-dom";

function Services() {
  const ReadMore = "Read More";
  const ServiceDatainfo = [
    {
      id: "1",
      path: "/Services/Software-Development-and-Maintance",
      img: WebDev,
      title: "Software Development and Maintenance",
      parg: "I transform ideas into dynamic and interactive Softwares, ensuring a seamless user experience to help your business thrive online.",
      points: {
        pointOne: "Craft Modern Websites",
        pointTwo: "Maintain & Enhance",
        pointThree: "Evolve with Technology",
      },
    },
    {
      id: "2",
      path: "/Services/Computer-Hardware-Solutions",
      img: CompHard,
      title: "Computer Hardware Solutions",
      parg: "I help businesses and individuals with their computer hardware needs, from diagnosis and repair to upgrades and installations.",
      points: {
        pointOne: "Enhance Computer Performance",
        pointTwo: "Ensure Computer Reliability",
        pointThree: "Future-Proof Your Infrastructure",
      },
    },
    {
      id: "3",
      path: "/Services/Information-and-Network-Security",
      img: INS,
      title: "Information & Network Security",
      parg: "I safeguard your valuable data and systems with robust cybersecurity solutions, protecting your business from potential cyber threats and ensuring peace of mind.",
      points: {
        pointOne: "Comprehensive Threat Protection",
        pointTwo: "Data Encryption & Access Control",
        pointThree: "Incident Response & Recovery",
        pointFour: "Security Awareness Training",
      },
    },
    {
      id: "4",
      path: "/Services/Research-and-Analysis",
      img: RAA,
      title: "Research & Analysis",
      parg: "Uncovering valuable insights through meticulous research and analysis, I empower organizations to optimize strategies and enhance performance.",
      points: {
        pointOne: "Targeted Market Research",
        pointTwo: "Business Intelligence & Reporting",
        pointThree: "Cost-Benefit Analysis",
        pointFour: "Competitive Analysis",
      },
    },
    {
      id: "5",
      path: "/Services/Mobile-Device-and-Application-Management",
      img: MamMdm,
      title: "Mobile Device & Application Management",
      parg: "I provide Mobile Device & Application Management (MDM/MAM) solutions to streamline your organization's mobile environment.",
      points: {
        pointOne: "Enhance Security & Compliance",
        pointTwo: "Maintain Device Control",
        pointThree: "Optimize App Management",
      },
    },
    {
      id: "6",
      path: "/Services/Information-Technology-Support",
      img: ItSupport,
      title: "Information Technology Support",
      parg: "I provide reliable IT support, acting as your trusted partner to troubleshoot tech issues, maintain smooth operations, and maximize your organization's productivity.",
      points: {
        pointOne: "Minimize Downtime",
        pointTwo: "Maximize User Productivity",
        pointThree: "Optimize Technology Utilization",
        pointFour: "Enhance Security",
      },
    },
    {
      id: "7",
      path: "/Services/Enterprise-Resource-Planning",
      img: erp,
      title: "Enterprise Resource Planning (ERP)",
      parg: "I provide reliable IT support, acting as your trusted partner to troubleshoot tech issues, maintain smooth operations, and maximize your organization's productivity.",
      points: {
        pointOne: "Inventory management",
        pointTwo: "Customer Relationship Management (CRM)",
        pointThree: "Project Management",
        pointFour: "Accounting",
      },
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

  var checkBox = (
    <div style={{ width: "15px", height: "20px" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        enable-background="new 0 0 64 64"
      >
        <path d="M56 2 18.8 42.909 8 34.729 2 34.729 18.8 62 62 2z" />
      </svg>
    </div>
  );
  return (
    <div>
      <AlignBg name={"Services"} />
      <section className="Services">
        {ServiceDatainfo.map((service) => {
          if (service.id === "1") {
            return (
              <div className="Services-div-left" key={service.id}>
                <div className="Service-img-div-left">
                  <img alt="" src={service.img} />
                </div>
                <div className="Service-word-div-left">
                  <h1 style={{ color: "#3F3A64", fontWeight: "600" }}>
                    {service.title}
                  </h1>
                  <p style={{ color: "#8C89A2" }}>{service.parg}</p>
                  <ul>
                    {Object.keys(service.points).map((pointKey, index) => (
                      <li key={index} className="the-li">
                        <span>{checkBox}</span>
                        <span style={{ marginLeft: "20px", color: "#3F3A64" }}>
                          {service.points[pointKey]}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/Services/Web-Development-and-Maintance"
                    className="span-arrange"
                  >
                    {ReadMore}
                    {ArrowUp}
                  </Link>
                </div>
              </div>
            );
          } else if (service.id === "2") {
            return (
              <div className="Services-div-right" key={service.id}>
                <div className="Service-word-div-right">
                  <h1 style={{ color: "#3F3A64", fontWeight: "600" }}>
                    {service.title}
                  </h1>
                  <p style={{ color: "#8C89A2" }}>{service.parg}</p>
                  <ul>
                    {Object.keys(service.points).map((pointKey, index) => (
                      <li key={index} className="the-li">
                        <span>{checkBox}</span>
                        <span style={{ marginLeft: "20px", color: "#3F3A64" }}>
                          {service.points[pointKey]}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/Services/Web-Development-and-Maintance"
                    className="span-arrange"
                  >
                    {ReadMore}
                    {ArrowUp}
                  </Link>
                </div>
                <div className="Service-img-div-right">
                  <img alt="" src={service.img} />
                </div>
              </div>
            );
          } else if (service.id === "3") {
            return (
              <div className="Services-div-left" key={service.id}>
                <div className="Service-img-div-left">
                  <img alt="" src={service.img} />
                </div>
                <div className="Service-word-div-left">
                  <h1 style={{ color: "#3F3A64", fontWeight: "600" }}>
                    {service.title}
                  </h1>
                  <p style={{ color: "#8C89A2" }}>{service.parg}</p>
                  <ul>
                    {Object.keys(service.points).map((pointKey, index) => (
                      <li key={index} className="the-li">
                        <span>{checkBox}</span>
                        <span style={{ marginLeft: "20px", color: "#3F3A64" }}>
                          {service.points[pointKey]}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/Services/Web-Development-and-Maintance"
                    className="span-arrange"
                  >
                    {ReadMore}
                    {ArrowUp}
                  </Link>
                </div>
              </div>
            );
          } else if (service.id === "4") {
            return (
              <div className="Services-div-right" key={service.id}>
                <div className="Service-word-div-right">
                  <h1 style={{ color: "#3F3A64", fontWeight: "600" }}>
                    {" "}
                    {service.title}
                  </h1>
                  <p style={{ color: "#8C89A2" }}>{service.parg}</p>
                  <ul>
                    {Object.keys(service.points).map((pointKey, index) => (
                      <li key={index} className="the-li">
                        <span>{checkBox}</span>
                        <span style={{ marginLeft: "20px", color: "#3F3A64" }}>
                          {service.points[pointKey]}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/Services/Web-Development-and-Maintance"
                    className="span-arrange"
                  >
                    {ReadMore}
                    {ArrowUp}
                  </Link>
                </div>
                <div className="Service-img-div-right">
                  <img alt="" src={service.img} />
                </div>
              </div>
            );
          } else if (service.id === "5") {
            return (
              <div className="Services-div-left" key={service.id}>
                <div className="Service-img-div-left">
                  <img alt="" src={service.img} />
                </div>
                <div className="Service-word-div-left">
                  <h1 style={{ color: "#3F3A64", fontWeight: "600" }}>
                    {service.title}
                  </h1>
                  <p style={{ color: "#8C89A2" }}>{service.parg}</p>
                  <ul>
                    {Object.keys(service.points).map((pointKey, index) => (
                      <li key={index} className="the-li">
                        <span>{checkBox}</span>
                        <span style={{ marginLeft: "20px", color: "#3F3A64" }}>
                          {service.points[pointKey]}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/Services/Web-Development-and-Maintance"
                    className="span-arrange"
                  >
                    {ReadMore}
                    {ArrowUp}
                  </Link>
                </div>
              </div>
            );
          } else if (service.id === "6") {
            return (
              <div className="Services-div-right" key={service.id}>
                <div className="Service-word-div-right">
                  <h1 style={{ color: "#3F3A64", fontWeight: "600" }}>
                    {service.title}
                  </h1>
                  <p style={{ color: "#8C89A2" }}>{service.parg}</p>
                  <ul>
                    {Object.keys(service.points).map((pointKey, index) => (
                      <li key={index} className="the-li">
                        <span>{checkBox}</span>
                        <span style={{ marginLeft: "20px", color: "#3F3A64" }}>
                          {service.points[pointKey]}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/Services/Web-Development-and-Maintance"
                    className="span-arrange"
                  >
                    {ReadMore}
                    {ArrowUp}
                  </Link>
                </div>
                <div className="Service-img-div-right">
                  <img alt="" src={service.img} />
                </div>
              </div>
            );
          } else {
            return (
              <div className="Services-div-left" key={service.id}>
                <div className="Service-img-div-left">
                  <img alt="" src={service.img} />
                </div>
                <div className="Service-word-div-left">
                  <h1 style={{ color: "#3F3A64", fontWeight: "600" }}>
                    {service.title}
                  </h1>
                  <p style={{ color: "#8C89A2" }}>{service.parg}</p>
                  <ul>
                    {Object.keys(service.points).map((pointKey, index) => (
                      <li key={index} className="the-li">
                        <span>{checkBox}</span>
                        <span style={{ marginLeft: "20px", color: "#3F3A64" }}>
                          {service.points[pointKey]}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/Services/Web-Development-and-Maintance"
                    className="span-arrange"
                  >
                    {ReadMore}
                    {ArrowUp}
                  </Link>
                </div>
              </div>
            );
          }
          //   return null;
        })}
      </section>
    </div>
  );
}

export default Services;
