import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "../component/Home";
import Login from "../component/Login";
import RegisterForm from "../component/RegisterForm";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/user" component={RegisterForm} />
    </Switch>
  </BrowserRouter>
);

export default Router;
