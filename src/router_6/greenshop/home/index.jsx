import React from "react";
import { NavLink } from "react-router-dom";
import { categories } from "../mock/category";

import "./style.css";

export const Home = () => {
  return (
    <div className="home home">
      <div className="category">
        <h2>Categories</h2>
        {categories.map((v) => {
          return (
            <NavLink to={"/home/cat"}>
              <div>{v.title}</div>
            </NavLink>
          );
        })}
      </div>
      <div className="cards"></div>
    </div>
  );
};
