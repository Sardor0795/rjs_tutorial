import React, { Component } from "react";
import Table from "./scrolable_table";

class LessonFour extends Component {
  render() {
    return (
      <div
        style={{
          height: "100vh",
          backgroundColor: "#866027",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px",
        }}
      >
        <Table />
      </div>
    );
  }
}

export default LessonFour;
