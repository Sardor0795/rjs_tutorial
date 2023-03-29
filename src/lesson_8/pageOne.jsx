import React, { Component } from "react";

export default class PageOne extends Component {
  render() {
    return (
      <>
        <div>PageOne</div>
        <button onClick={() => this.props.func(false)}>Page Two</button>
      </>
    );
  }
}
