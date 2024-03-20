import React from "react";
import comPro from "../../../Assets/Images/verified.png";
import "../../css/DemoExcel.css";
import pro_in_prog from "../../../Assets/Images/progression.png";
import satisCli from "../../../Assets/Images/rating.png";
import awardRe from "../../../Assets/Images/award.png";
import { Link } from "react-router-dom";

const DemoExcel = () => {
  return (
    <div
      className="full-DemoExcel"
      style={{ backgroundColor: " rgba(147, 107, 232, 0.1)" }}
    >
      <section className="DemoExcel">
        <h3>{"IMPRESSIVE TRACK RECORD"}</h3>
        <h1>{"Demonstrating Excellence"}</h1>
        <div className="Demo-boxes">
          {/* <Link to="/Projects" style={{ textDecoration: "none" }}> */}
            <div>
              <img src={comPro} alt="" />
              <p>{"Completed Projects"}</p>
            </div>
          {/* </Link> */}
          <div>
            <img src={pro_in_prog} alt="" />
            <p>{"Projects in Progress"}</p>
          </div>
          <div>
            <img src={satisCli} alt="" />
            <p>{"Satisfied Clients"}</p>
          </div>
          <div>
            <img src={awardRe} alt="" />
            <p>{"Awards Received"}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoExcel;
