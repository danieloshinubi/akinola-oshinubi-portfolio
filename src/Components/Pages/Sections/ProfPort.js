import React from "react";
import "../../css/ProfPort.css";
import { Link } from "react-router-dom";

const ProfPort = () => {
  return (
    <div
      className="full-ProfPort"
      style={{ backgroundColor: " rgba(147, 107, 232, 0.1)" }}
    >
      <section className="ProfPort">
        <h3 className="ProfPort-h3" style={{ color: "#8C89A2" }}>
          {"PROFESSIONAL PORTFOLIO"}
        </h3>
        <h1 className="ProfPort-h1" style={{ color: "#3F3A64" }}>
          {"Transforming Ideas into Reality"}
        </h1>
        <p className="ProfPort-p">
          {
            "As a highly skilled Developer and System Engineer, I have been passionately pursuing my career since 2021. With a strong focus on visual aesthetics and cutting-edge technologies, I have consistently delivered seamless user experiences. My portfolio showcases a diverse range of successful projects, demonstrating my expertise in both Engineering and Development. I invite you to explore my resume to gain a comprehensive understanding of my professional journey. Let's collaborate and bring your ideas to life!"
          }
        </p>
        <Link
          to="https://www.linkedin.com/in/akinolaoshinubi/"
          style={{ textDecoration: "none" }}
        >
          <button
            className="ProfPort-button"
            style={{
              color: "#ffffff",
            }}
          >
            {"Check Out "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </button>
        </Link>
      </section>
    </div>
  );
};

export default ProfPort;
