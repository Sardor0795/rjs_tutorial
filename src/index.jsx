import React from "react";
import ReactDOM from "react-dom/client";
import LessonTen from "./lesson_10/root.jsx";
import "./style.jsx";

import { Div } from "./style.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Div>
    <LessonTen/>
  </Div>
);
