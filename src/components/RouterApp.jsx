import React from "react";
import { Switch, Route } from "react-router-dom";
import Search from "../pages/Search";
import Insert from "../pages/Insert";
import Home from "../pages/Home";

export const RouterApp = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/insert" component={Insert} />
    </Switch>
  );
};
