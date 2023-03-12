import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./lesson_2";

// import { ReactDomSix } from "./router_6";
// import { GreenShop } from "./router_6/greenshop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      {/* <ReactDomSix /> */}
      {/* <GreenShop/> */}
      <App/>
    </Router>
  </React.StrictMode>
);
