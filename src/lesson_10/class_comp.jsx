import React, { Component } from "react";

export default class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 20,
    };
  }

  render() {
    // const plus = () => {
    //   this.setState(
    //     () => ({ count: this.state.count + 1 }),
    //     () => {
    //       console.log(this.state.count);
    //     }
    //   );
    //   // console.log(this.state.count);
    // };
    const plus = () => {
      this.setState(
        (state) => ({ count: state.count + 1 }),
        () => {
          console.log(this.state.count);
        }
      );
      // console.log(this.state.count);
    };
    return (
      <div style={{ flex: "1" }} onClick={this.funcLog}>
        Class comp
        <span>{this.state.count}</span>
        <button onClick={plus}>+</button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          -
        </button>
      </div>
    );
  }
}
