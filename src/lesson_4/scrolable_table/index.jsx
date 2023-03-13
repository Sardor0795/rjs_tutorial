import React, { Component } from "react";

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
        </table>
      </div>
    );
  }
}

export default Table;
