import React, { Component } from "react";

export default class PageTwo extends Component {
  render() {
    return (
      <>
        <div>PageTwo</div>
        <button onClick={() => this.props.func(true)}>Page One</button>
      </>
    );
  }
}
