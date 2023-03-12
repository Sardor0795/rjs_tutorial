import React from "react";

class App extends React.Component {
  render() {
    const { id, name } = this.props.data;
    return (
      <React.Fragment>
        <h1>
          Id: {id} Name: {name}
        </h1>
      </React.Fragment>
    );
  }
}

// class App extends React.Component {
//   render() {
//     console.log(this.props.data?.title);
//     const { children, data } = this.props;
//     return (
//       <React.Fragment>
//         <h1>Hi React</h1>
//         {/* <p>{+this.props.title + 50}</p> */}
//         <p>{data?.title}</p>
//         <p>{data?.status || "Unknown"}</p>
//         {children}
//       </React.Fragment>
//     );
//   }
// }

// class Student extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <h1>Hi Student</h1>
//       </React.Fragment>
//     );
//   }
// }

// export { Student as St };
export default App;
