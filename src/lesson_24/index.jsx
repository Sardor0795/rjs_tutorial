import React from "react";
// import { NavLink, Route, Routes } from "react-router-dom";
// import { Comp1 } from "./comp1";
// import { Comp2 } from "./comp2";

// const Comp2 = React.lazy(() => import("./comp2"));

export const LazyLoad = () => {
  return (
    <div>
      {/* <NavLink to={"/comp1"}>Comp1</NavLink>
      <NavLink to={"/comp2"}>Comp2</NavLink>
      <Routes>
        <Route path={"/comp1"} element={<Comp1 />} />
        <Route
          path="/comp2"
          element={
            <React.Suspense fallback={<h1>Loading...</h1>}>
              <Comp2 />
            </React.Suspense>
          }
        />
      </Routes> */}
    </div>
  );
};
