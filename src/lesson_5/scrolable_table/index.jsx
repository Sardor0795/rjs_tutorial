import React, { Component } from "react";
import "./style.css";

class Table extends Component {
  render() {
    return (
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
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Age</td>
              <td>Address</td>
              <td>Status</td>
              <td>Nickname</td>
              <td>Univ</td>
              <td>Job</td>
              <td>Edit</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
