import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { About } from "../about";
import { Home } from "../home";
import { NavBar } from "../navbar";
import { Phone } from "../phone";
import { Service } from "../service";

export const Root = () => {
  const location = useLocation();
  //   let query = new URLSearchParams(location.search);
  //   console.log(query.get("name"));
  return (
    <div>
      <Route exact path={"/"}>
        <Redirect to={"/home"} />
      </Route>
      <Switch>
        <Route exact path={"/"} component={NavBar} />
        <Route path={"/home"} component={NavBar} />
        <Route path={"/about"} component={NavBar} />
        <Route path={"/service"} component={NavBar} />
        <Route path={"/phone"} component={NavBar} />
      </Switch>
      <h1>We are here: {location.pathname}</h1>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/home"} component={Home} />
        <Route path={"/about"} component={About} />
        <Route path={"/service"} component={Service} />
        <Route path={"/phone"} component={Phone} />
        <Route path={"*"}>
          <h1>Not found</h1>
        </Route>
      </Switch>
    </div>
  );
};
