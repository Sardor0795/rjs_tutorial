import React, { Component } from "react";
import { students } from "../mock/students.jsx";
import Table from "./scrolable_table";

class LessonFive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Name",
      surname: "Surname",
      data: students,
    };
  }
  render() {
    const onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
      console.log(e.target.value);
      console.log(e.target.name);
    };
    const onFilter = (e) => {
      let fltrd = students.filter((v) =>
        v.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      this.setState({ data: fltrd });
    };
    return (
      <div
        style={{
          height: "100vh",
          backgroundColor: "#866027",
          display: "flex",
          flexDirection: "column",
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

export default LessonFive;
