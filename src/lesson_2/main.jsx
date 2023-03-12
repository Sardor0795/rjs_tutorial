import React, { Component } from "react";
import App from "./";

const students = [
  { id: 1, name: "Jon" },
  { id: 2, name: "Bill" },
  { id: 3, name: "Ann" },
  { id: 4, name: "Lean" },
  { id: 5, name: "Jill" },
];

class Main extends Component {
  render() {
    return (
      <div>
        {students.map((v) => {
          return <App data={v} />;
        })}
      </div>
    );
  }
}

// class Main extends Component {
//   render() {
//     return (
//       <div>
//         <App data={{ status: "developer", title: "React" }} />
//         <App title="Vue">
//           <h1>Child</h1>
//         </App>
//       </div>
//     );
//   }
// }

export default Main;
