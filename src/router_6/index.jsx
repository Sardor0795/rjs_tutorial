import React from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { Comp } from "./comp";
import { Home } from "./home";
import { Menu } from "./menu";
import { Navbar } from "./navbar";
import { SignIn } from "./signIn";
import { Support } from "./support";

export const ReactDomSix = () => {
  const navigate = useNavigate();
  const Back = () => {
    navigate(-1);
  };
  return (
    <div>
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route element={<Navbar />}>
            <Route path="/home" element={<Home />} />
            <Route path="/comp" element={<Comp />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/support" element={<Support />} />
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="*"
            element={
              <h1>
                Page not found
                <button onClick={Back}>back</button>
              </h1>
            }
          />
        </Routes>
    </div>
  );
};
