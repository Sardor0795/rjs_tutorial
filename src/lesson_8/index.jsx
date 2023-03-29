import React, { Component } from "react";
import PageOne from "./pageOne";
import PageTwo from "./pageTwo";
import "./style.css";

export default class LessonEight extends Component {
  state = {
    list: ["home", "about", "socials", "back"],
    active: "home",
    page: true,
  };
  render() {
    const setPage = (v) => {
      this.setState({ page: v });
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
      </>
    );
  }
}
