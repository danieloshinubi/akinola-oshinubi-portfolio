import React from "react";
import comPro from "../../../Assets/Images/verified.png";

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

  const DemoStyles = {
    height: "auto",
    backgroundColor: "rgba(147, 107, 232, 0.1)",
    display: "flex",
    Demo_itself: {
      width: "80%",
      margin: "auto",
      textAlign: "center",
      //   alignItems: "center",
    },
    Demo_hOne: {
      fontSize: "40px",
      fontWeight: "400",
      color: "#3f3a64",
    },
    Demo_hThree: {
      fontSize: "18px",
      color: "#8c89a2",
    },
    Demo_Boxes: {
      display: "flex",
      flexWrap: "Wrap",
      JustifyContent: "space-between",
      alignItems: "Center",
    },
    Demo_Boxes_Div: {
      width: "300px",
      height: "200px",
      margin: "auto",
    },
    Demo_boxes_img: {
      width: "60px",
      height: "60px",
    },
    Demo_boxes_p: {
      fontSize: "20px",
      color: "#696969",
    },
  };

  return (
    <div className="full-DemoExcel" style={DemoStyles}>
      <section className="DemoExcel" style={DemoStyles.Demo_itself}>
        <h3 style={DemoStyles.Demo_hThree}>{"IMPRESSIVE TRACK RECORD"}</h3>
        <h1 style={DemoStyles.Demo_hOne}>{"Demonstrating Excellence"}</h1>
        <div className="Demo-boxes" style={DemoStyles.Demo_Boxes}>
          {DemoData.map((item) => (
            <div style={DemoStyles.Demo_Boxes_Div}>
              <img src={item.img} alt={item.text} style={DemoStyles.Demo_boxes_img}/>
              <p style={DemoStyles.Demo_boxes_p}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DemoExcel;
