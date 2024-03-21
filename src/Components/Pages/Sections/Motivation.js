import React from "react";

const Motivation = () => {
  const styles = {
    width: "100%",
    height: "400px",
    display: "flex",
    justifyContent: "Center",
    alignItems: "Center",
    secondDiv: {
      width: "80%",
      textAlign: "Center",
    },
  };
  return (
    <div style={styles}>
      <div style={styles.secondDiv}>
        <h3 style={{ color: "#8C89A2" }}>{"MOTIVATION"}</h3>
        <h1 style={{ color: "#3F3A64", fontWeight: "400" }}>
          {"Driven by the Pursuit of Success"}
        </h1>
        <p style={{ color: "#696969" }}>
          {
            "With a relentless drive for excellence, I am motivated to achieve success in every endeavor. I believe in delivering top-notch solutions that surpass expectations and drive meaningful outcomes."
          }
        </p>
      </div>
    </div>
  );
};

export default Motivation;
