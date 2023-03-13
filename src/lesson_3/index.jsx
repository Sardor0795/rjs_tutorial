import React, { Component } from "react";

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      title: "Web Brain",
      name: "",
      select: "",
    };
  }
  render() {
    // let count = 0;
    const plus = () => {
      //   count += 1;
      //   this.setState({ count: (this.state.count += 1) }); err
      if (this.state.count < 10) {
        this.setState({ count: this.state.count + 1 });
      }
    };
    const minus = () => {
      //   count -= 1;
      //   this.setState({ count: (this.state.count -= 1) }); err
      //   this.state = { count: this.state.count - 1 }; dont do re-render
      //   console.log(this.state.count);
      if (this.state.count > 1) {
        this.setState({ count: this.state.count - 1 });
      }
    };
    const onChange = (e) => {
      //   console.log(e);
      this.setState({ name: e.target.value });
    };
    const onSelect = (e) => {
      this.setState({ select: e.target.value });
    };
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h1>Name: {this.state.name}</h1>
        <h1>State {this.state.count}</h1>
        <h1>Selected: {this.state.select}</h1>
        <input onChange={onChange} type="text" placeholder="name" />
        <select onChange={onSelect}>
          <option value="Name">Name</option>
          <option value="Surname">Surname</option>
        </select>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </div>
    );
  }
}

export default State;
