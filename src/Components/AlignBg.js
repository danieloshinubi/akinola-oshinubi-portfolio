import React, { Component } from "react";
// import great_than from "../Assets/Images/greater-than.png";

export class AlignBg extends Component {

  render() {
    const styles = {
      background: " rgba(147, 107, 232, 0.1)",
      //   fontSize: "18px",
      width: "100%",
      height: "200px",

      display: "flex",
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