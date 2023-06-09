import React, { Component } from "react";
import { students } from "../mock/students.jsx";
// import Table from "./scrolable_table";

class LessonFour extends Component {
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
      let fltrd = students.filter((v) => v.name.toLowerCase().includes(e.target.value.toLowerCase()));
      this.setState({data: fltrd})
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
        {/* <Table /> */}
        <h1>Name: {this.state.name}</h1>
        <h1>Surname: {this.state.surname}</h1>
        <input
          name="name"
          onChange={(e) => onChange(e)}
          type="text"
          placeholder="name"
        />
        <input
          name="surname"
          onChange={(e) => onChange(e)}
          type="text"
          placeholder="Surname"
        />
        <hr style={{ widows: "100%" }} />
        <input onChange={onFilter} type="text" placeholder="Filter" />
        {this.state.data.map((v) => {
          return (
            <h1 key={v.id}>
              Id: {v.id} Name: {v.name} Surname: {v.surname}
            </h1>
          );
        })}
      </div>
    );
  }
}

export default LessonFour;
