import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import HomeworkFruit from "./lesson_2/homework/index.jsx";
import "./style.jsx";

// import { ReactDomSix } from "./router_6";
// import { GreenShop } from "./router_6/greenshop";
import { Div } from "./style.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Div>
    <Router>
      {/* <ReactDomSix /> */}
      {/* <GreenShop /> */}
      <HomeworkFruit/>
    </Router>
  </Div>
);
