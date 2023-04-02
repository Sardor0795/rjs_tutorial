import React, { Suspense } from "react";
import { NavLink, Route } from "react-router-dom";
import { Comp1 } from "./comp1";

const Comp2 = React.lazy(() => import("./comp2"));

export const LazyLoad = () => {
  return (
    <div>
      <NavLink to={"/comp1"}>Comp1</NavLink>
      <NavLink to={"/comp2"}>Comp2</NavLink>

      <Route path={"/comp1"} component={Comp1} />
      <Route
        path={"/comp2"}
        component={<Suspense fallback={<h1>Loading...</h1>}>{Comp2}</Suspense>}
      />
    </div>
  );
};
