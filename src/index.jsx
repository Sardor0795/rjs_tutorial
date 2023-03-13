import React from "react";
import ReactDOM from "react-dom/client";
import State from "./lesson_3/index.jsx";
import "./style.jsx";

import { Div } from "./style.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Div>
    <State />
  </Div>
);
