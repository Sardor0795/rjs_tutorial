import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Blogs } from "./blogs";
import { Home } from "./home";
import { NavBar } from "./navbar";
import { NotFound } from "./notfound";
import { Plant } from "./plant";
import { Shop } from "./shop";

export const GreenShop = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/plant" element={<Plant />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
