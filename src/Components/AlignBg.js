import React, { Component } from "react";
// import great_than from "../Assets/Images/greater-than.png";

export class AlignBg extends Component {

  render() {
    const styles = {
      background: " rgba(147, 107, 232, 0.1)",
      //   fontSize: "18px",
      width: "100%",
      height: "350px",

      display: "flex",
      flexDirection:"column",
      justifyContent: "Center",
      alignItems: "Center",
      homeWordStyle: {
        color: "#E83E8C",
      },
      pageWordStyle: {
        color: "#696969",
      },
      headerStyle: {
        width: "200px",
        display: "flex",
        justifyContent: "space-between",
        fontWeight: "500",
      },
    };

    return (
      <div style={styles}>
        <h1 style={{ color: "#3F3A64",fontWeight:"600" }}>{this.props.title}</h1>
        <h2 style={styles.headerStyle}>
          <span style={styles.homeWordStyle}>Home</span>
          <span style={styles.pageWordStyle}>{">"}</span>
          <span style={styles.pageWordStyle}>{this.props.name}</span>
        </h2>
      </div>
    );
  }
}

export default AlignBg;
