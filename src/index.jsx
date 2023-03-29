import React from "react";
import ReactDOM from "react-dom/client";
import ClassComp from "./lesson_11/classComp.jsx";
import "./style.jsx";

import { Div } from "./style.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Div>
    <ClassComp/>
  </Div>
);
