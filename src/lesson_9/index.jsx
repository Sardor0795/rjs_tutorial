import React, { Component } from "react";

export default class LessonNine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    // this.setCount = this.setCount.bind(this); /// bind in constructor to use without .bind(this every time)
    console.log("constructor");
  }

  UNSAFE_componentWillMount() {
    // birinchi renderdan oldin
    console.log("componentWillMount");
  }

  componentDidMount() {
    // birinchi renderdan keyin
    console.log("componentDidMount");
  }

  UNSAFE_componentWillReceiveProps() {
    // parentdan childga props kelgan vaqtda
    console.log("componentWillReceiveProps");
  }

  shouldComponentUpdate() {
    // component update qilish yoki qilmaslik | return true/false
    console.log("shouldComponentUpdate");
    return true;
  }

  UNSAFE_componentWillUpdate() {
    // prop kelgandan keyin va renderdan oldin
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    // renderdan qayta ishga tuushgandan keyin | DOM created
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    // after DOM element removed
    console.log("componentWillUnmount");
  }

  setCount() {
    this.setState({ count: this.state.count + 1 }); /// in class - method (not let or const)
  }

  render() {
    // const setCount = () => {
    //   this.setState({ count: this.state.count + 1 });  /// playn way using func
    // };
    console.log("render");
    return (
      <>
        {this.state.count}
        {/* <button onClick={setCount}>count</button> /// playn way way without bind */}
        {/* <button onClick={this.setCount.bind(this)}>count</button> ///
        1st way of bind*/}
        {/* <button onClick={this.setCount}>count</button> /// 2nd way of bind */}
        {/* <button onClick={() => this.setCount()}>count</button> /// 3rd way no bind - arrow func */}
      </>
    );
  }
}
