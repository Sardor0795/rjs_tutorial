import React, { Component } from "react";
import ClassComp from "./class_comp";
import { FuncComp } from "./func_comp";

export default class LessonTen extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <FuncComp />
        <ClassComp />
      </div>
    );
  }
}
