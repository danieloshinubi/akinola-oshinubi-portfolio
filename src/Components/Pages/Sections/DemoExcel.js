import React from "react";
import comPro from "../../../Assets/Images/verified.png";
import "../../css/DemoExcel.css";
import pro_in_prog from "../../../Assets/Images/progression.png";
import satisCli from "../../../Assets/Images/rating.png";
import awardRe from "../../../Assets/Images/award.png";

const DemoExcel = () => {
  const DemoData = [
    { img: pro_in_prog, text: "Projects in Progress" },
    { img: comPro, text: "Completed Projects" },
    { img: satisCli, text: "Satisfied Clients" },
    { img: awardRe, text: "Awards Received" },
  ];
  return (
    <div
      className="full-DemoExcel"
      style={{ backgroundColor: " rgba(147, 107, 232, 0.1)" }}
    >
      <section className="DemoExcel">
        <h3>{"IMPRESSIVE TRACK RECORD"}</h3>
        <h1>{"Demonstrating Excellence"}</h1>
        <div className="Demo-boxes">
          {DemoData.map((item) => (
            <div>
              <img src={item.img} alt={item.text} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DemoExcel;
