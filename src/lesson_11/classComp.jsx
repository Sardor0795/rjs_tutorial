import React, { Component } from "react";
import { LessonEleven } from "./";

class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
    };
    this.setCount = this.setCount.bind(this);
  }

  setCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <span>{this.state.count}</span>
        <button onClick={this.setCount}>+</button>
        <LessonEleven s={this.state.count} />
      </div>
    );
  }
}

export default ClassComp;
