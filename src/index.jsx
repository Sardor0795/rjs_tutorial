import React from "react";
import ReactDOM from "react-dom/client";
import { Axios } from "./lesson_19/index.jsx";
import "./style.jsx";

import { Div } from "./style.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Div>
    <Axios />
  </Div>
);
