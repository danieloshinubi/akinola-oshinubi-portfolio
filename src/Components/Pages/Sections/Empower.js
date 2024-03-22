import React from "react";
import resDes from "../../../Assets/Images/responsive-design.png";
import editor from "../../../Assets/Images/code-editor.png";
import CreativeDev from "../../../Assets/Images/creative-dev.png";
import "../../css/Empower.css";

const Empower = () => {
  const EmpowerData = [
    {
      img: resDes,
      title: "Responsive Design",
      parag: "Crafting engaging and adaptable designs.",
    },
    {
      img: editor,
      title: "Powerful Editor",
      parag: "Creating compelling content with a robust editor.",
    },
    {
      img: CreativeDev,
      title: "Creative Development",
      parag: "Innovative design techniques for stunning user interfaces.",
    },
  ];

  return (
    <div className="full-Empower">
      <section className="Empower-Section">
        <h3 className="Empower-Section-h3" style={{ color: "#8C89A2" }}>
          {"LET'S COLLABORATE!"}
        </h3>
        <h1
          className="Empower-Section-h1"
          style={{ color: "#3F3A64", fontWeight: "400" }}
        >
          {"Empower Your Business with Innovative Full Stack Development"}
        </h1>
        <p style={{ color: "#696969" }}>
          {
            "I am an experienced Full Stack Developer based in Jamnagar, Gujarat, India, dedicated to delivering exceptional software solutions. With a deep understanding and proficiency in multiple programming languages, I possess a versatile skill set that enables me to tackle complex challenges across various development domains."
          }
        </p>
        <div className="Empower-Section-Second-div">
          {EmpowerData.map((power) => {
            return (
              <div className="Empower-box">
                <img className="Empower-icon" src={power.img} alt="" />
                <h2 style={{ color: "#3F3A64",  }}>
                  {power.title}
                </h2>
                <p style={{ color: "#696969" }}>{power.parag}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Empower;
