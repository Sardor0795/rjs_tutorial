import React, { Component } from "react";
import "./style.css";
import { students } from "../mock/students.jsx";

class LessonFive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nickname: "",
      data: students,
    };
  }
  render() {
    const onDelete = (id) => {
      let res = this.state.data.filter((v) => v.id !== id);
      this.setState({ data: res });
    };
    const onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };
    const onAdd = () => {
      let user = {
        id: parseInt(performance.now()),
        name: this.state.name,
        nickname: this.state.nickname,
      };
      let res = [...this.state.data, user];
      this.setState({ name: "", nickname: "", data: res });
    };
    const onFilter = (e) => {
      let res = students.filter((v) =>
        v.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      this.setState({ data: res });
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
        <input
          value={this.state.name}
          onChange={onChange}
          name="name"
          type="text"
          placeholder="Name"
        />
        <input
          value={this.state.nickname}
          onChange={onChange}
          name="nickname"
          type="text"
          placeholder="Nickname"
        />
        <input type="text" placeholder="Filter" onChange={onFilter} />
        <button onClick={onAdd}>Add</button>
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
              {this.state.data.length ? (
                this.state.data.map(
                  ({ id, name, age, address, status, nickname, univ, job }) => {
                    return (
                      <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{age}</td>
                        <td>{address}</td>
                        <td>{status}</td>
                        <td>{nickname}</td>
                        <td>{univ}</td>
                        <td>{job}</td>
                        <td>
                          <button className="btn">Edit</button>
                          <button onClick={() => onDelete(id)} className="btn">
                            Dell
                          </button>
                        </td>
                      </tr>
                    );
                  }
                )
              ) : (
                <tr>
                  <h1>No Data</h1>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default LessonFive;
