import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { LazyLoad } from "./lesson_24/index.jsx";
import "./style.jsx";

import { Div } from "./style.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Div>
      <LazyLoad />
    </Div>
  </Router>
);
