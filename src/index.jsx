import React from "react";
import ReactDOM from "react-dom/client";
import { Root } from "./lesson_14/root/index.jsx";
import "./style.jsx";

import { Div } from "./style.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Div>
    <Root/>
  </Div>
);
