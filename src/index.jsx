import React from "react";
import ReactDOM from "react-dom/client";
import { ReactDomSix } from "./router_6";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ReactDomSix />
    </Router>
  </React.StrictMode>
);
