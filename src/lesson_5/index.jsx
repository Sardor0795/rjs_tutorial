import React, { Component } from "react";
import "./style.css";
import { students } from "../mock/students.jsx";

class LessonFive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: students,
    };
  }
  render() {
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
        <div className="tableWrapper">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Status</th>
                <th>Nickname</th>
                <th>Univ</th>
                <th>Job</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((v) => {
                return (
                  <tr>
                    <td>{v.id}</td>
                    <td>{v.name}</td>
                    <td>{v.age}</td>
                    <td>{v.address}</td>
                    <td>{v.status}</td>
                    <td>{v.nickname}</td>
                    <td>{v.univ}</td>
                    <td>{v.job}</td>
                    <td>
                      <button className="btn">Edit</button>
                      <button className="btn">Dell</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default LessonFive;
