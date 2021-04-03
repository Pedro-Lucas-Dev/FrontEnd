import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "react-router-dom";
import { RouterApp } from "./components/RouterApp";
import { Menu } from "./components/Menu";
import { Container } from "reactstrap";

import { createBrowserHistory } from "history";
const history = createBrowserHistory({
  basename: "/",
});
window.redirect = history.push;

ReactDOM.render(
  <Router history={history}>
    <Menu />
    <Container>
      <RouterApp />
    </Container>
  </Router>,
  document.getElementById("root")
);
