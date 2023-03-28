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
      select: "name",
      active: {},
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
        `${v[this.state.select]}`
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );
      this.setState({ data: res });
    };
    const onSelect = (e) => {
      this.setState({ select: e.target.value });
    };
    const onEdit = (
      { id, name, age, address, status, nickname, univ, job },
      isActive
    ) => {
      if (isActive) {
        let res = this.state.data.map((v) => {
          return v.id === this.state.active.id ? this.state.active : v;
        });
        this.setState({ data: res, active: null });
      } else {
        this.setState({
          active: { id, name, age, address, status, nickname, univ, job },
        });
      }
    };
    const onActiveChange = (e) => {
      this.setState({
        active: { ...this.state.active, [e.target.name]: e.target.value },
      });
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
        <select onChange={onSelect}>
          <option value="name">name</option>
          <option value="nickname">nickname</option>
          <option value="status">status</option>
          <option value="id">id</option>
        </select>
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
                        <td>
                          {this.state.active?.id === id ? (
                            <input
                              name="name"
                              onChange={onActiveChange}
                              value={this.state.active.name}
                              type="text"
                            />
                          ) : (
                            name
                          )}
                        </td>
                        <td>
                          {this.state.active?.id === id ? (
                            <input
                              name="age"
                              onChange={onActiveChange}
                              value={this.state.active.age}
                              type="text"
                            />
                          ) : (
                            age
                          )}
                        </td>
                        <td>
                          {this.state.active?.id === id ? (
                            <input
                              name="address"
                              onChange={onActiveChange}
                              value={this.state.active.address}
                              type="text"
                            />
                          ) : (
                            address
                          )}
                        </td>
                        <td>
                          {this.state.active?.id === id ? (
                            <input
                              name="status"
                              onChange={onActiveChange}
                              value={this.state.active.status}
                              type="text"
                            />
                          ) : (
                            status
                          )}
                        </td>
                        <td>
                          {this.state.active?.id === id ? (
                            <input
                              name="nickname"
                              onChange={onActiveChange}
                              value={this.state.active.nickname}
                              type="text"
                            />
                          ) : (
                            nickname
                          )}
                        </td>
                        <td>
                          {this.state.active?.id === id ? (
                            <input
                              name="univ"
                              onChange={onActiveChange}
                              value={this.state.active.univ}
                              type="text"
                            />
                          ) : (
                            univ
                          )}
                        </td>
                        <td>
                          {this.state.active?.id === id ? (
                            <input
                              name="job"
                              onChange={onActiveChange}
                              value={this.state.active.job}
                              type="text"
                            />
                          ) : (
                            job
                          )}
                        </td>
                        <td>
                          <button
                            onClick={() =>
                              onEdit(
                                {
                                  id,
                                  name,
                                  age,
                                  address,
                                  status,
                                  nickname,
                                  univ,
                                  job,
                                },
                                this.state.active?.id === id
                              )
                            }
                            className="btn"
                          >
                            {this.state.active?.id === id ? "save" : "edit"}
                          </button>
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
                  <td>No Data</td>
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
