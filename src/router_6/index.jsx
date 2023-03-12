import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Comp } from "./comp";
import { Home } from "./home";
import { Menu } from "./menu";
import { Navbar } from "./navbar";
import { Support } from "./support";

export const ReactDomSix = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/comp" element={<Comp />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Router>
    </div>
  );
};
