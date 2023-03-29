import React, { Component } from "react";
import PageOne from "./pageOne";
import PageTwo from "./pageTwo";
import "./style.css";
import { students } from "../mock/students";

export default class LessonEight extends Component {
  state = {
    list: ["home", "about", "socials", "back"],
    active: "home",
    page: true,
    data: students,
  };
  render() {
    const setPage = (v) => {
      this.setState({ page: v });
    };
    const Delete = (id) => {
      this.setState({ data: this.state.data.filter((v) => v.id !== id) });
    };
    return (
      <>
        <h1>
          {this.state.list.map((v, i) => (
            <span
              key={i}
              onClick={() => this.setState({ active: v })}
              className={`link ${this.state.active === v ? "active" : null}`}
            >
              {v}
            </span>
          ))}
        </h1>
        <div>
          {this.state.page ? (
            <PageOne func={setPage} />
          ) : (
            <PageTwo func={setPage} />
          )}
        </div>
        <div>
          {this.state.data.map((v, i) => (
            <h1 key={v.id}>
              {v.id} {v.name}{" "}
              <button onClick={() => Delete(v.id)}>delete</button>
            </h1>
          ))}
        </div>
      </>
    );
  }
}
